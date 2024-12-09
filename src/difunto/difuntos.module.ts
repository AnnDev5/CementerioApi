import { Module } from '@nestjs/common';
import { DifuntosService } from './difuntos.service';
import { DifuntoController } from './difuntos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamiliarEntity } from 'src/familiares/entities/familiar.entity';
import { AnunciosInhumacionEntity } from 'src/anuncios_inhumacion/entities/anuncios_inhumacion.entity';
import { DifuntoImageEntity, DifuntoEntity } from './entities';

@Module({
  controllers: [DifuntoController],
  providers: [DifuntosService],
  imports: [
    TypeOrmModule.forFeature([
      DifuntoEntity,
      DifuntoImageEntity,
      FamiliarEntity,
      AnunciosInhumacionEntity,
    ]),
  ],
  exports: [TypeOrmModule, DifuntosService],
})
export class DifuntosModule {}
