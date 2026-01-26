import type { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter, type HttpAdapter } from '../api/pokeApi.adapter';
export class Pokemon{

    public readonly id : number;
    public name: string;


    get imageURL() : string{
        return `https://pokemon/${this.id}.jpg`;
    }

    constructor(
        id: number, 
        name: string,
        private readonly http: HttpAdapter
    ){
        this.id = id,
        this.name = name
    }


    async getMoves() : Promise<Move[]>{
        
        const { moves } = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')

        return moves
    }
    
}


const pokeApiAdaptar = new PokeApiAdapter()
const pokeApiFetchAdapter = new PokeApiFetchAdapter()
export const pikachu = new Pokemon(1, 'Pikachu', pokeApiFetchAdapter)
const moves = await pikachu.getMoves()
console.log(moves)


