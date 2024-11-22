import { Injectable } from '@nestjs/common';
import { CreateAnunciosInhumacionDto } from './dto/create-anuncios_inhumacion.dto';
import { UpdateAnunciosInhumacionDto } from './dto/update-anuncios_inhumacion.dto';

@Injectable()
export class AnunciosInhumacionService {
  create(createAnunciosInhumacionDto: CreateAnunciosInhumacionDto) {
    return 'This action adds a new anunciosInhumacion';
  }

  findAll() {
    return `This action returns all anunciosInhumacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anunciosInhumacion`;
  }

  update(id: number, updateAnunciosInhumacionDto: UpdateAnunciosInhumacionDto) {
    return `This action updates a #${id} anunciosInhumacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} anunciosInhumacion`;
  }
}
