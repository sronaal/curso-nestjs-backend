import axios from 'axios'
import type { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
export class Pokemon{

    public readonly id : number;
    public name: string;


    get imageURL() : string{
        return `https://pokemon/${this.id}.jpg`;
    }

    scream(){
        console.log(`${this.name.toLocaleUpperCase()}!!!!`)
    }

    speak(){
        console.log(`${this.name.toLocaleLowerCase()}`)
        console.log(`${this.name.toLocaleLowerCase()}`)
    }

    constructor(id: number, name: string,){
        this.id = id,
        this.name = name
    }


    async getMovies() : Promise<Move[]>{
        // <> datos genericos 
        const  { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')
        return data.moves 
    }
    
}

export const pikachu = new Pokemon(1, 'Pikachu')

console.log(pikachu)
pikachu.scream()
pikachu.speak()


