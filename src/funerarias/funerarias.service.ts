import { Injectable } from '@nestjs/common';
import { CreateFunerariaDto } from './dto/create-funeraria.dto';
import { UpdateFunerariaDto } from './dto/update-funeraria.dto';

@Injectable()
export class FunerariasService {
  create(createFunerariaDto: CreateFunerariaDto) {
    return 'This action adds a new funeraria';
  }

  findAll() {
    return `This action returns all funerarias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} funeraria`;
  }

  update(id: number, updateFunerariaDto: UpdateFunerariaDto) {
    return `This action updates a #${id} funeraria`;
  }

  remove(id: number) {
    return `This action removes a #${id} funeraria`;
  }
}
