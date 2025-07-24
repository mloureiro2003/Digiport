// PECULIARIDADES JAVA
'5' + 5 == 5 // concatena o número para string e concatena
x = 6
y = 5
typeof(x) // vê qual o tipo de uma variavel
x.toString() // converte número x para string
parseInt("x") // converte string "x" para número x
x != y // != (diferente) 
// && -> and 
// || -> or
// ! -> not

// COMPARAÇÃO "LIVRE"
5 == '5' // true, javascript converte a string 5 para o numero 5
null == undefined // true
true == 1 // true
false == 0 // true
false == "0" // true
//[] == "" // true, array vazio vira string
[1] == "1" // true, [1] vira "1"


// COMPARAÇÃO ESTRITA, se não for literalmente igual, não é igual
    // mais seguro e previsível
5 === '5' // false
null === undefined // false
true === 1 // false

// TESTES
console.log (5 > 3) 
    // 5 é maior que 3, logo true
console.log (10 == 5) 
    // 10 não é igual a 5, logo false
console.log (! (5 < 10)) 
    // 10 é maior que 5, true, contrário de true é false, logo false
console.log ((6 % 2 == 0) && (6 > 3)) 
    // 6 dividido por 2 dá resto 0, logo true, 6 é maior que 3, logo true, true && true, logo true