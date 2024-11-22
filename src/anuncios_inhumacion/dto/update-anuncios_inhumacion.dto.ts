import { PartialType } from '@nestjs/mapped-types';
import { CreateAnunciosInhumacionDto } from './create-anuncios_inhumacion.dto';

export class UpdateAnunciosInhumacionDto extends PartialType(CreateAnunciosInhumacionDto) {}
