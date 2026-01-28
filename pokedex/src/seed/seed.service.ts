import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PokeAPIInterface, Result } from './interfaces/poke-response.interface';
import { firstValueFrom } from 'rxjs';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { type HttpAdapter } from 'src/common/interfaces/http-adapter.interface';



@Injectable()
export class SeedService {


  constructor(
    private readonly httpService: HttpService,
    private readonly httpAdapter: HttpAdapter,
    //private readonly pokemonService: PokemonService,
    @InjectModel(Pokemon.name)
    private readonly modelPokemon: Model<Pokemon>
  ) { }

  async executeSeed(): Promise<Result[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<PokeAPIInterface>(
        'https://pokeapi.co/api/v2/pokemon?limit=20',
      ),
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/')
      const no: number = +segments[segments.length - 2]

      const createPokemon: CreatePokemonDto = { name, no }
      this.modelPokemon.create(createPokemon)
    })

    return data.results
  }

  async executeSeedv2() {

    //this.modelPokemon.deleteMany()
    const { data } = await firstValueFrom(
      this.httpService.get<PokeAPIInterface>(
        'https://pokeapi.co/api/v2/pokemon?limit=10',
      ),
    );

    const insertPromiseArray: Promise<Pokemon>[] = []


    data.results.forEach(({ name, url }) => {
      const segments = url.split('/')
      const no: number = +segments[segments.length - 2]

      insertPromiseArray.push(
        this.modelPokemon.create({ name, no })
      )
    })

    await Promise.all(insertPromiseArray)

    return data.results

  }

  async executeSeedv3() {

    const pokemonsToInsert : {name: string, no: number}[] = []
    const { data } = await firstValueFrom(this.httpService.get<PokeAPIInterface>('https://pokeapi.co/api/v2/pokemon?limit=650'))


    data.results.forEach(({name, url}) => {
      const segments = url.split('/')
      const no : number = +segments[segments.length -2]

      pokemonsToInsert.push({name, no})
      
    })
    await this.modelPokemon.insertMany(pokemonsToInsert)

    return data.results
  }

  async executeSeedV4(){

    const pokemonsToInsert : {name: string, no: number}[] = []
    const { results } = await  this.httpAdapter.get<PokeAPIInterface>('https://pokeapi.co/api/v2/pokemon?limit=20')
    console.log(results)
    results.forEach(({name, url}) => {
      const segments = url.split('/')
      const no : number = +segments[segments.length -2]

      pokemonsToInsert.push({name, no})
      
    })

    await this.modelPokemon.insertMany(pokemonsToInsert)

    return results
    
    
  }
}