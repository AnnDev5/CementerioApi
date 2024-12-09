import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateFamiliarDto } from './dto/create-familiar.dto';
import { UpdateFamiliarDto } from './dto/update-familiar.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DifuntoEntity } from 'src/difunto/entities';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class FamiliaresService {
  private readonly logger = new Logger('FamiliaresService');
  constructor(
    @InjectRepository(DifuntoEntity)
    private readonly difuntoRepository: Repository<DifuntoEntity>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createFamiliarDto: CreateFamiliarDto) {
    try {
      const familiar = this.difuntoRepository.create(createFamiliarDto);
      await this.difuntoRepository.save(familiar);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return `This action returns all familiares`;
  }

  findOne(id: number) {
    return `This action returns a #${id} familiare`;
  }

  update(id: number, updateFamiliareDto: UpdateFamiliarDto) {
    return `This action updates a #${id} familiare`;
  }

  remove(id: number) {
    return `This action removes a #${id} familiare`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '2305') throw new BadRequestException(error.detail);
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
