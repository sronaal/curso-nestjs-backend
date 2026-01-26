export const pokemonIds  = [1,2,3,4,5,6]



pokemonIds.push(+"1")
console.log(pokemonIds)



interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const pokemon : Pokemon = {
    id: 1,
    name: "Pikachu"
}

export const pokemons : Pokemon[] = []

pokemons.push(pokemon)
console.log(pokemons)