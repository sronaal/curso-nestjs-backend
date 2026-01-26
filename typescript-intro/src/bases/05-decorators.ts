class NewPokemon{

    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`NO QUIERO!!!`)
    }

    speak(){
        console.log(`NO QUIERO HABLAR!!!`)
    }
}



const MyDecorator = () => {
    return (target: Function) => {
        
        return NewPokemon
    }
}



@MyDecorator()
export class Pokemon {


    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() {
        console.log(`${this.name.toLocaleUpperCase()}`)
    }

    speak() {
        console.log(`${this.name}, ${this.name}`)
    }
}


export const chamander = new Pokemon(4, 'Charmander')
chamander.scream()
chamander.speak()