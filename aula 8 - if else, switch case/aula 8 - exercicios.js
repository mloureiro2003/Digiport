let num1 = 98
let num2 = 13
let num3 = 56

// maior
if (num1 >= num2 && num1 >= num3){
    maior = num1;
} else if (num2>= num1 && num2 >= num3){
    maior = num2;
} else{
    maior = num3
}

// menor
if (num1 <= num2 && num1 <= num3){
    menor = num1;
} else if (num2 <= num1 && num2 <= num3){
    menor = num2;
} else{
    menor = num3
}

console.log("Maior número:", maior);
console.log("Menor número:", menor);

/////////////////////

let num = 9

if (num >= 0){
    console.log("Número é positivo.")
}
else if (num <= 0){
    console.log("Número é negativo")
}
else {
    console.log("Número é zero")
}

/////////////////////

let turno = N

switch (turno){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Bom noite!")
        break
    default:
        console.log("Valor inválido!")
}