import { Module } from '@nestjs/common';
import { DifuntosModule } from './difunto/difuntos.module';
import { FamiliaresModule } from './familiares/familiares.module';
import { AnunciosInhumacionModule } from './anuncios_inhumacion/anuncios_inhumacion.module';
import { FunerariasModule } from './funerarias/funerarias.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DifuntosModule,
    FamiliaresModule,
    AnunciosInhumacionModule,
    FunerariasModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
