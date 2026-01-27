import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { HttpModule } from '@nestjs/axios';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [HttpModule, PokemonModule, MongooseModule],
  controllers: [SeedController],
  providers: [SeedService],

  
})
export class SeedModule {}
