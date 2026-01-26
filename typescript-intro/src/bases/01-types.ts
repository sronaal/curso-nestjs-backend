// Declaracion de constantes
export const nombre = "Ronal"
export const age = 24

// Declaracion de Variables
export let ciudad : string | boolean = "Bogotá"
ciudad = false

export const templateString = `Esto es un string multilinea
puede tener "" ' inyectar valores ${nombre} \$${1+1}
` 

console.log(templateString)