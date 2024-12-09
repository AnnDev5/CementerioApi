import { Type } from 'class-transformer';
import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';

export class CreateDifuntoDto {
  @IsString()
  nombre_completo: string;

  @IsString()
  carnet_identidad: string;

  @Type(() => Date)
  @IsDate()
  fecha_nacimiento: string;

  @Type(() => Date)
  @IsDate()
  fecha_defuncion: string;

  @IsString()
  nro_certificado_defuncion: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  difuntoImages?: string[];
}
