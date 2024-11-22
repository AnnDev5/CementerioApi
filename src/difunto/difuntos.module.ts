import { Module } from '@nestjs/common';
import { DifuntosService } from './difuntos.service';
import { DifuntoController } from './difuntos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DifuntoEntity } from './entities/difunto.entity';

@Module({
  controllers: [DifuntoController],
  providers: [DifuntosService],
  imports: [TypeOrmModule.forFeature([DifuntoEntity])],
  exports: [TypeOrmModule, DifuntosService],
})
export class DifuntosModule {}
