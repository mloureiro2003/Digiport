// Arrow function: apenas escrever uma linha de código

const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map((x) => x * x)

// map espera uma outra função, por isso se escreve assim 

///1
function test(op, n1, n2){
    if (op == '+'){
        return n1+n2
    } else if (op == '-'){
        return n1-n2
    } else if (op == '*'){
        return n1*n2
    } else if (op == '/' ){
        return n1/n2
    } else{
        return "Operação inválida";
    }
}

console.log(test('+', 1, 2))

// 2
function caixaAlta(string){
    return string.toUpperCase()
}

console.log(caixaAlta("bibilô") )

// 3
function quantosAnos(nascimento, atual){
    return (atual-nascimento)
}

console.log(quantosAnos(2003, 2025))

// 4
function mediaArray(array){
    let soma = 0

    for (let i = 0; i < array.length; i++){
        soma += array[i]
    }

    return soma/array.length;
}

console.log(mediaArray([2, 2]))
