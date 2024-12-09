import { IsArray, IsString } from 'class-validator';

export class CreateFamiliarDto {
  @IsString()
  nombre_completo: string;

  @IsString()
  parentesco: string;

  @IsString()
  carnet_identidad: string;

  @IsString()
  telefono: string;

  @IsString()
  direccion_domicilio: string;

  @IsArray()
  @IsString({ each: true })
  difunto: string[];
}
