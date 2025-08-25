let prompt = require("prompt-sync")();


///// 1
let listaDeTarefas = []

function adicionarTerefa(item){
    listaDeTarefas.push(item)
}

/* console.log("Digita uma tarefa")
tarefa = prompt()
adicionarTerefa(tarefa)

console.log(listaDeTarefas)

console.log("\nDigita uma tarefa")
tarefa = prompt()
adicionarTerefa(tarefa)

console.log(listaDeTarefas)

console.log("\nDigita uma tarefa")
tarefa = prompt()
adicionarTerefa(tarefa)
*/

///////2
function removeTarefa(){
    for (let i=0; i< listaDeTarefas.length; i++){
        console.log(`${i+1}: ${listaDeTarefas[i]}`)
    }

    console.log("Escolha o número da tarefa que deseja remover: ")
    
    tarefa = parseInt(prompt())-1
    console.log(tarefa)

    while (tarefa > listaDeTarefas.length){
        console.log("Favor entre com um número válido")
    }


   listaDeTarefas.splice(tarefa, 1);
}

/*
removeTarefa()
console.log(listaDeTarefas)
*/