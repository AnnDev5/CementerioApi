import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DifuntoEntity } from './difunto.entity';

@Entity()
export class DifuntoImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;

  @ManyToOne(
    () => DifuntoEntity,
    (difuntoEntity) => difuntoEntity.difuntoImages,
    {
      //Eliminar en cascada
      onDelete: 'CASCADE',
    },
  )
  difunto: DifuntoEntity;
}
