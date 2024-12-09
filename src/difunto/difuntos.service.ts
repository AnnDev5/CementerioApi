import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateDifuntoDto } from './dto/create-difunto.dto';
import { UpdateDifuntoDto } from './dto/update-difunto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DifuntoEntity, DifuntoImageEntity } from './entities';
import { DataSource, Repository } from 'typeorm';
import { PaginationDto } from 'src/common/pagination.dto';
import { isUUID } from 'class-validator';

@Injectable()
export class DifuntosService {
  private readonly logger = new Logger('ProductService');
  constructor(
    @InjectRepository(DifuntoEntity)
    private readonly difuntoRepository: Repository<DifuntoEntity>,
    @InjectRepository(DifuntoImageEntity)
    private readonly difuntoImageRepository: Repository<DifuntoImageEntity>,
    private readonly dataSource: DataSource,
  ) {}
  async create(createDifuntoDto: CreateDifuntoDto) {
    try {
      const { difuntoImages = [], ...difuntoDetails } = createDifuntoDto;
      const difunto = this.difuntoRepository.create({
        ...difuntoDetails,
        difuntoImages: difuntoImages.map((image) =>
          this.difuntoImageRepository.create({ url: image }),
        ),
      });
      await this.difuntoRepository.save(difunto);
      return { ...difunto, difuntoImages: difuntoImages };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const difuntos = await this.difuntoRepository.find({
      take: limit,
      skip: offset,
      relations: {
        difuntoImages: true,
      },
    });

    return difuntos.map((difunto) => ({
      ...difunto,
      difuntoImages: difunto.difuntoImages.map((img) => img.url),
    }));
  }

  async findOne(term: string) {
    let difunto: DifuntoEntity;
    if (isUUID(term)) {
      difunto = await this.difuntoRepository.findOneBy({ id: term });
    } else {
      const queryBuilder = this.difuntoRepository.createQueryBuilder('dif');
      difunto = await queryBuilder
        .where(
          'UPPER(nombre_completo) = :nombre_completo OR nro_certificado_defuncion = :nro_certificado_defuncion',
          {
            nombre_completo: term.toUpperCase(),
            nro_certificado_defuncion: term,
          },
        )
        .leftJoinAndSelect('dif.difuntoImages', 'difuntoImages')
        .getOne();
    }
    if (!difunto)
      throw new NotFoundException(`Difunto con id ${term} no encontrado`);
    return difunto;
  }

  async findOnePlain(term: string) {
    const { difuntoImages = [], ...rest } = await this.findOne(term);
    return {
      ...rest,
      images: difuntoImages.map((image) => image.url),
    };
  }

  async update(id: string, updateDifuntoDto: UpdateDifuntoDto) {
    const { difuntoImages, ...toUpdate } = updateDifuntoDto;
    const difunto = await this.difuntoRepository.preload({ id, ...toUpdate });
    if (!difunto)
      throw new NotFoundException(`Difunto con id: ${id} no encontrado`);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (difuntoImages) {
        await queryRunner.manager.delete(DifuntoImageEntity, {
          difunto: { id },
        });
        difunto.difuntoImages = difuntoImages.map((image) =>
          this.difuntoImageRepository.create({ url: image }),
        );
      }

      await queryRunner.manager.save(difunto);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return this.findOnePlain(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      this.handleDBExceptions(error);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} difunto`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '2305') throw new BadRequestException(error.detail);
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
