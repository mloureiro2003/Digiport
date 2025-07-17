// Maria e Pamela

const nome = "Luiz Otavio Miranda";
let peso = 84;
let altura = 1.8;
let IMC = peso / (altura * altura);
const anoNasc = 1980;
const anoAtual = 2010;
let idade = anoAtual - anoNasc;
let nomeMenor = nome.replace(" Otavio", "").toLowerCase();

console.log (`${nome} tem ${idade} anos, pesa ${peso} kg`);
console.log (`tem ${altura} e seu IMC é de ${IMC}`);
console.log (`${nomeMenor} nasceu em ${anoNasc}`)