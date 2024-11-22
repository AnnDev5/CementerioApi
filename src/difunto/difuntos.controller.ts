import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DifuntosService } from './difuntos.service';
import { CreateDifuntoDto } from './dto/create-difunto.dto';
import { UpdateDifuntoDto } from './dto/update-difunto.dto';

@Controller('difuntos')
export class DifuntoController {
  constructor(private readonly difuntosService: DifuntosService) {}

  @Post()
  create(@Body() createDifuntoDto: CreateDifuntoDto) {
    return this.difuntosService.create(createDifuntoDto);
  }

  @Get()
  findAll() {
    return this.difuntosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.difuntosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDifuntoDto: UpdateDifuntoDto) {
    return this.difuntosService.update(+id, updateDifuntoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.difuntosService.remove(+id);
  }
}
