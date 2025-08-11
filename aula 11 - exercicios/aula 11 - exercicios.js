/*for (let i = 1; i <= 10; i++) {
    if (i%2 === 0){
        console.log (`${i} eh par`)
    }
    else {
        console.log (`${i} eh impar`)
    }
}

//////////
let prompt = require("prompt-sync")();
let num_macas = 0

for (let dia = 1; dia<= 7; dia++){
    console.log(`Quantas macas Joao colheu no dia ${dia}?`)
    num_macas = parseInt(prompt())
    console.log(`No dia ${dia}, Joao colheu ${num_macas} macas\n`)
}

let pos = 0
let neg = 0
let nulo = 0

let prompt = require("prompt-sync")();
for (let i = 0; i< 10; i++){
    console.log ("Insira um número: ")
    num = parseInt(prompt())

    if (num > 0){
        pos++
    }
    else if (num < 0){
        neg++
    }
    else{
        nulo++
    }
}

console.log(`Positivos: ${pos}`)
console.log(`Negativos: ${neg}`)
console.log(`Zeros: ${nulo}`)



let vermelho = 0
let verde = 0
let prompt = require("prompt-sync")();
let cor;
let flag = 1

for (i=0; i<10; i++){
    while (flag === 1){
        console.log("Escolha a cor da fruta: vermelha ou verde")
        cor = prompt()
        if (cor.toLowerCase() === "vermelha"){
            vermelho++
            flag = 0
        }
        else if (cor.toLocaleLowerCase() === "verde"){
            verde++
            flag = 0
        }
        else (
            console.log("Por favor insira cor válida")
        )

    }
    flag = 1
}

console.log(`Frutas vermelhas: ${vermelho}.`)
console.log(`Frutas verdes: ${verde}.`)

////////

let prompt = require("prompt-sync")();
let num = 0
let soma = 0

while (num >= 0){
    console.log (`Insira um número`)
    num = parseInt(prompt())

    if (num>= 0){
        soma += num
    }
}

console.log (`A soma dos números inseridos foi ${soma}`)

////////
const senha = '1234'
let prompt = require("prompt-sync")();
let tentativa = 0

while (tentativa != senha){
    console.log ("Insira a senha: ")
    tentativa = prompt()
}
console.log("Senha Correta! Acesso concedido")
*/
////////

escolha = 0
saldo = 1000
aux = 0
let prompt = require("prompt-sync")();

while (escolha != 4){
    console.log('Escolha uma opção:\n')
    console.log("1 - Verificar saldo\n")
    console.log("2 - Depositar\n")
    console.log("3 - Sacar\n")
    console.log("4 - Sair")
    escolha = parseInt(prompt())

    if (escolha === 1){
        console.log(`\nSaldo: ${saldo}\n`)
    }

    if (escolha === 2){
        console.log(`\nInsira valor a depositar:`)
        aux = parseInt(prompt())
        saldo += aux
    }

    if (escolha === 3){
        console.log(`\nInsira valor a sacar:`)
        aux = parseInt(prompt())
        saldo -= aux
    }

}