import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'difuntos' })
export class DifuntoEntity {
  @PrimaryColumn()
  difunto_id: string;

  @Column()
  nombre_completo: string;

  @Column()
  feha_nacimiento: string;

  @Column()
  fecha_defuncion: string;

  @Column()
  fotografia: string;
}
