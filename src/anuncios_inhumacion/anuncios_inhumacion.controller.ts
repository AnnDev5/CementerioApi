import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnunciosInhumacionService } from './anuncios_inhumacion.service';
import { CreateAnunciosInhumacionDto } from './dto/create-anuncios_inhumacion.dto';
import { UpdateAnunciosInhumacionDto } from './dto/update-anuncios_inhumacion.dto';

@Controller('anuncios-inhumacion')
export class AnunciosInhumacionController {
  constructor(private readonly anunciosInhumacionService: AnunciosInhumacionService) {}

  @Post()
  create(@Body() createAnunciosInhumacionDto: CreateAnunciosInhumacionDto) {
    return this.anunciosInhumacionService.create(createAnunciosInhumacionDto);
  }

  @Get()
  findAll() {
    return this.anunciosInhumacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anunciosInhumacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnunciosInhumacionDto: UpdateAnunciosInhumacionDto) {
    return this.anunciosInhumacionService.update(+id, updateAnunciosInhumacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anunciosInhumacionService.remove(+id);
  }
}
