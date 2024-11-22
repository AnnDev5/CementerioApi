import { Module } from '@nestjs/common';
import { FunerariasService } from './funerarias.service';
import { FunerariasController } from './funerarias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FunerariaEntity } from './entities/funeraria.entity';

@Module({
  controllers: [FunerariasController],
  providers: [FunerariasService],
  imports: [TypeOrmModule.forFeature([FunerariaEntity])],
  exports: [TypeOrmModule, FunerariasService],
})
export class FunerariasModule {}
