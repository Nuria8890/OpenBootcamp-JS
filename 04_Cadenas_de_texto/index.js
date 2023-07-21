let nombre = "Nuria"
let apellido = "Campo"

let estudiante = nombre + " " + apellido
console.log(estudiante)

let estudianteMayus = estudiante.toLocaleUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLocaleLowerCase()
console.log(estudianteMinus)

let numero_letras = estudiante.length
console.log(numero_letras)

let primera_letra_nombre = nombre.slice(0, 1)
console.log(primera_letra_nombre)

let ultima_letra_apellido = apellido.slice(4, 5)
console.log(ultima_letra_apellido)

let espacios = estudiante.replace(/ /g, "")
console.log(espacios)

let contiene = estudiante.includes(nombre)
console.log(contiene)