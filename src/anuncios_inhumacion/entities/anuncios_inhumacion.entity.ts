import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'anuncionesinhumacion' })
export class AnunciosInhumacionEntity {
  @PrimaryColumn()
  anuncio_id: string;

  @Column()
  fecha_inhumacion: string;

  @Column()
  hora_inhumacion: string;

  @Column()
  cuartel: string;

  @Column()
  fila: string;

  @Column()
  columna: string;

  @Column()
  detalle: string;
}
