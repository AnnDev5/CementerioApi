import { PartialType } from '@nestjs/mapped-types';
import { CreateFunerariaDto } from './create-funeraria.dto';

export class UpdateFunerariaDto extends PartialType(CreateFunerariaDto) {}
