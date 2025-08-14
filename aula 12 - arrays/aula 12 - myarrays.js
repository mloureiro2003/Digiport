// Arrays are a way to store multiple values in a single variable.
// They can hold any type of data, including numbers, strings, and even other arrays.

let thingsILike = ["Pizza", "Movies", "Music"];

// There are many methods to manipulate arrays.
// Access w3schools for more information: https://www.w3schools.com/js/js_array_methods.asp

thingsILike[0] = "RPG"
thingsILike[1] = "cats"
thingsILike[2] = "sleeping"

console.log(thingsILike)

numeros = [1, 2, 3, 4, 5]
console.log(numeros)

let ac = 0

for (i=0; i<numeros.length; i++){
    ac += numeros[i]
}

media = ac/numeros.length

console.log(media)

let menor = numeros[0]
let maior = numeros[0]

for (i=0; i<numeros.length; i++){
    if (numeros[i] < menor){
        menor = numeros[i]
    }
}

for (i=0; i<numeros.length; i++){
    if (numeros[i] > maior){
        maior = numeros[i]
    }
}

console.log(menor)
console.log(maior)

let prompt = require("prompt-sync")();
let numero = 0

let array = []

for (i=0; i<5; i++){
    console.log("Insira um numero no array")
    numero = parseInt(prompt())
    array[i] = numero
}

console.log(array)