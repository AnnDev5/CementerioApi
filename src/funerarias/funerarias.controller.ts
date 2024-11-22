import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FunerariasService } from './funerarias.service';
import { CreateFunerariaDto } from './dto/create-funeraria.dto';
import { UpdateFunerariaDto } from './dto/update-funeraria.dto';

@Controller('funerarias')
export class FunerariasController {
  constructor(private readonly funerariasService: FunerariasService) {}

  @Post()
  create(@Body() createFunerariaDto: CreateFunerariaDto) {
    return this.funerariasService.create(createFunerariaDto);
  }

  @Get()
  findAll() {
    return this.funerariasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.funerariasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFunerariaDto: UpdateFunerariaDto) {
    return this.funerariasService.update(+id, updateFunerariaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.funerariasService.remove(+id);
  }
}
