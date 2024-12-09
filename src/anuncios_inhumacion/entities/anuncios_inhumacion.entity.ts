import { DifuntoEntity } from 'src/difunto/entities/difunto.entity';
import { FunerariaEntity } from 'src/funerarias/entities/funeraria.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'anuncionesinhumacion' })
export class AnunciosInhumacionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('date')
  fecha_inhumacion: string;

  @Column('date')
  hora_inhumacion: string;

  @Column('text')
  cuartel: string;

  @Column('text')
  fila: string;

  @Column('text')
  columna: string;

  @Column('text')
  detalle: string;

  @ManyToOne(
    () => DifuntoEntity,
    (difuntoEntity) => difuntoEntity.anuncionInhumacion,
  )
  difunto: DifuntoEntity;
  @ManyToOne(
    () => FunerariaEntity,
    (funerariaEntity) => funerariaEntity.anuncionInhumacion,
  )
  funeraria: FunerariaEntity;
}
