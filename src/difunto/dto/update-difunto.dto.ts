import { PartialType } from '@nestjs/mapped-types';
import { CreateDifuntoDto } from './create-difunto.dto';

export class UpdateDifuntoDto extends PartialType(CreateDifuntoDto) {}
