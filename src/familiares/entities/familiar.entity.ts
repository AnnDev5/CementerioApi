import { DifuntoEntity } from 'src/difunto/entities/difunto.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'familiares' })
export class FamiliarEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @Column('text')
  parentesco: string;

  @Column('text')
  carnet_identidad: string;

  @Column('text')
  telefono: string;

  @Column('text')
  direccion_domicilio: string;

  @ManyToOne(() => DifuntoEntity, (difuntoEntity) => difuntoEntity.familiar)
  difunto: DifuntoEntity;
}
