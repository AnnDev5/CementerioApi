import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'funerarias' })
export class FunerariaEntity {
  @PrimaryColumn()
  funeraria_id: string;

  @Column()
  nombre_completa: string;

  @Column()
  telefono: string;

  @Column()
  email: string;
}
