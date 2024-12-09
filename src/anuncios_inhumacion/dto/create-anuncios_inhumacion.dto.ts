import { IsDate, IsString } from 'class-validator';

export class CreateAnunciosInhumacionDto {
  @IsDate()
  fecha_inhumacion: string;

  @IsString()
  hora_inhumacion: string;

  @IsString()
  cuartel: string;

  @IsString()
  fila: string;

  @IsString()
  columna: string;

  @IsString()
  detalle: string;
}
