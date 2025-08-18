let Atena = {
    name: Atena,
    color: tabby,
    age: 7
}

console.log(Atena) // já printa tipo name: Atena, color: tabby, age: 7

// accesando
console.log(`My cat is called ${cat.name}, her coat is ${cat.color} and she has ${cat.ano} years`)

// METODOS
// this: acessa propriedade
let person = {
    name: "Maria",
    age: 22,
    greet: function (){
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`

        )
    }
}

// OBJETOS ANINHADOS
let Mefisto = {
    age: 6, 
    body: { fur: "short", color: "black", body: "slim"}
}