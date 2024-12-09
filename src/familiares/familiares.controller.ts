import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FamiliaresService } from './familiares.service';
import { CreateFamiliarDto } from './dto/create-familiar.dto';
import { UpdateFamiliarDto } from './dto/update-familiar.dto';

@Controller('familiares')
export class FamiliaresController {
  constructor(private readonly familiaresService: FamiliaresService) {}

  @Post()
  create(@Body() createFamiliareDto: CreateFamiliarDto) {
    return this.familiaresService.create(createFamiliareDto);
  }

  @Get()
  findAll() {
    return this.familiaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.familiaresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFamiliareDto: UpdateFamiliarDto,
  ) {
    return this.familiaresService.update(+id, updateFamiliareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.familiaresService.remove(+id);
  }
}
