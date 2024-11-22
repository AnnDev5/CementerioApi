import { Module } from '@nestjs/common';
import { AnunciosInhumacionService } from './anuncios_inhumacion.service';
import { AnunciosInhumacionController } from './anuncios_inhumacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnunciosInhumacionEntity } from './entities/anuncios_inhumacion.entity';

@Module({
  controllers: [AnunciosInhumacionController],
  providers: [AnunciosInhumacionService],
  imports: [TypeOrmModule.forFeature([AnunciosInhumacionEntity])],
  exports: [TypeOrmModule, AnunciosInhumacionService],
})
export class AnunciosInhumacionModule {}
