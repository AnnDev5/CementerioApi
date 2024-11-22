import { Module } from '@nestjs/common';
import { FamiliaresService } from './familiares.service';
import { FamiliaresController } from './familiares.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamiliarEntity } from './entities/familiar.entity';

@Module({
  controllers: [FamiliaresController],
  providers: [FamiliaresService],
  imports: [TypeOrmModule.forFeature([FamiliarEntity])],
  exports: [TypeOrmModule, FamiliaresService],
})
export class FamiliaresModule {}
