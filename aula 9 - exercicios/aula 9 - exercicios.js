let saldo = 18000

if (saldo >= 15000){
    console.log("Partiu Disney!")
} else if (saldo >= 5000){
    console.log("Bora pra Minas Gerais!")
} else {
    console.log ("Sem férias esse ano.")
}

///////////////////////

let nota = 8

if (nota >= 7){
    console.log("Aprovado!")
} else{
    console.log("Reprovado!")
}

///////////////////////

let saldo2 = 3500

if (saldo2 >= 10000){
    console.log("Carlos vai comprar um novo computador!")
} else if (saldo2 >= 3000){
    console.log ("Carlos vai comprar um smartphone.")
} else {
    console.log ("Carlos vai economizar")
}

///////////////////////

let tempo = 1

if (tempo <= 1){
    console.log("Ana recebe a medalha de ouro")
} else if (tempo <= 2){
    console.log ("Ana recebe a medalha de prata")
} else {
    console.log ("Ana recebe a medalha de bronze")
}

///////////////////////

let dia = 5

switch(dia){
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça-feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6:
        console.log("Sexta-feira")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Número inválido!")
}

///////////////////////

let nota2 = 'B'

switch (nota2){
    case 'A':
        console.log("Excelente")
        break
    case 'B':
        console.log("Bom")
        break
    case 'C':
        console.log("Regular")
        break
    case 'D':
        console.log("Ruim")
        break
    case 'F':
        console.log("Insuficiente")
        break
    default:
        console.log("Nota inválida")
}

///////////////////////

let estacao = 2

switch (estacao){
    case 1:
        console.log("Primavera")
        break
    case 2:
        console.log("Verão")
        break
    case 3:
        console.log("Outono")
        break
    case 4:
        console.log("Inverno")
        break
    default:
        console.log("Número inválido")
}

///////////////////////

let tipoCliente = "Ouro"

switch (tipoCliente){
    case "Bronze":
        console.log("Desconto de 5%")
        break
    case "Prata":
        console.log("Desconto de 10%")
        break
    case "Ouro":
        console.log("Desconto de 15%")
        break
    case "Platina":
        console.log("Desconto de 20%")
        break
    default:
        console.log("Tipo de cliente inválido")
}