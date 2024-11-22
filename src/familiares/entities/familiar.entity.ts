import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'familiares' })
export class FamiliarEntity {
  @PrimaryColumn()
  familiar_id: string;

  @Column()
  nombre: string;

  @Column()
  parentesco: string;

  @Column()
  carnet_identidad: string;
}
