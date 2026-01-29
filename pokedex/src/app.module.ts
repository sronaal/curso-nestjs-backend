import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './common/config/env.config';
import { JoiValidationSchema } from './common/config/joi.validation';


@Module({
  imports: [
    // Variables de entorno
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema
    }),

    // Archivos estaticos
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),

    // Conexion DB
    MongooseModule.forRoot(process.env.MONGODB!,{
      dbName: 'pokemonsdb'
    }),

    // Importación de Modulos
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor() {
    console.log(process.env.MONGODB)
    console.log(process.env.PORT)
  }
}
