import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { DifuntosService } from './difuntos.service';
import { CreateDifuntoDto } from './dto/create-difunto.dto';
import { UpdateDifuntoDto } from './dto/update-difunto.dto';
import { PaginationDto } from 'src/common/pagination.dto';

@Controller('difuntos')
export class DifuntoController {
  constructor(private readonly difuntosService: DifuntosService) {}

  @Post()
  create(@Body() createDifuntoDto: CreateDifuntoDto) {
    return this.difuntosService.create(createDifuntoDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.difuntosService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.difuntosService.findOnePlain(term);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDifuntoDto: UpdateDifuntoDto,
  ) {
    return this.difuntosService.update(id, updateDifuntoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.difuntosService.remove(+id);
  }
}
