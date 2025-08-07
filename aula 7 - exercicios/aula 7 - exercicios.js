const SalarioHora = 30
let HorasTrabalhadas = 160

let SalarioMensal = SalarioHora * HorasTrabalhadas

console.log (`Salario mensal final foi de R$${SalarioMensal}`)

/////////////////////////////////////////////////////////////////////////////

const Valor = 200
const Desconto = 10

console.log (`O valor final pago foi de R$${Valor * (100-Desconto)/100}`)

/////////////////////////////////////////////////////////////////////////////

const IdadeMinima = 18
let IdadeJulia = 17

if (IdadeJulia >= IdadeMinima) {
    console.log("Você pode criar uma conta!");
} else {
    console.log("Você ainda não tem idade suficiente!");
}

/////////////////////////////////////////////////////////////////////////////

let QuantItens = 22
if (QuantItens%2 === 0){
    console.log("O número é par")
}

else {
    console.log("O número é impar")
}

/////////////////////////////////////////////////////////////////////////////

let Chuva = true
let GuardaChuva = false

if (Chuva === true){
    if (GuardaChuva === t-rue){
        console.log ("Larissa pode sair!")
    }
    else {
        console.log ("Larissa não pode sair")
    }
}