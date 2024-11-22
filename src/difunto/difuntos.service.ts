import { Injectable } from '@nestjs/common';
import { CreateDifuntoDto } from './dto/create-difunto.dto';
import { UpdateDifuntoDto } from './dto/update-difunto.dto';

@Injectable()
export class DifuntosService {
  create(createDifuntoDto: CreateDifuntoDto) {
    return 'This action adds a new difunto';
  }

  findAll() {
    return `This action returns all difunto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} difunto`;
  }

  update(id: number, updateDifuntoDto: UpdateDifuntoDto) {
    return `This action updates a #${id} difunto`;
  }

  remove(id: number) {
    return `This action removes a #${id} difunto`;
  }
}
