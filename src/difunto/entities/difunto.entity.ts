import { AnunciosInhumacionEntity } from 'src/anuncios_inhumacion/entities/anuncios_inhumacion.entity';
import { FamiliarEntity } from 'src/familiares/entities/familiar.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DifuntoImageEntity } from './difuntoImage.entity';

@Entity({ name: 'difuntos' })
export class DifuntoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre_completo: string;

  @Column('text')
  carnet_identidad: string;

  @Column('text')
  fecha_nacimiento: string;

  @Column('text')
  fecha_defuncion: string;

  @Column('text')
  nro_certificado_defuncion: string;

  @OneToMany(() => FamiliarEntity, (familiarEntity) => familiarEntity.difunto, {
    cascade: true,
  })
  familiar?: FamiliarEntity;

  @OneToMany(
    () => AnunciosInhumacionEntity,
    (anunciosInhumacionEntity) => anunciosInhumacionEntity.difunto,
    {
      cascade: true,
    },
  )
  anuncionInhumacion?: AnunciosInhumacionEntity;

  @OneToMany(
    //Regresar un ProductImage
    () => DifuntoImageEntity,
    (difuntoImageEntity) => difuntoImageEntity.difunto,
    {
      cascade: true,
      //Eager permite cargar las relaciones automaticamente
      eager: true,
    },
  )
  difuntoImages?: DifuntoImageEntity[];
}
