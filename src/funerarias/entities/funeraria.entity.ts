import { AnunciosInhumacionEntity } from 'src/anuncios_inhumacion/entities/anuncios_inhumacion.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'funerarias' })
export class FunerariaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre_completa: string;

  @Column('text')
  telefono: string;

  @Column('text')
  email: string;

  @OneToMany(
    () => AnunciosInhumacionEntity,
    (anunciosInhumacionEntity) => anunciosInhumacionEntity.funeraria,
    {
      cascade: true,
    },
  )
  anuncionInhumacion: AnunciosInhumacionEntity;
}
