import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import axios, { type AxiosInstance } from 'axios'


@Controller('seed')
export class SeedController {
  constructor(
    private readonly seedService: SeedService,
  ) { }


  @Get()
  async runExecute() {
    //const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=650')
    
    return this.seedService.executeSeedV4()
  }
}
