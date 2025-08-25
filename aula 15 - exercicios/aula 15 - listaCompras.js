function adicionarItem(){
    console.log("\nDigite o nome do item: ")
    let nome = prompt()

    console.log("\nDigite a quantidade: ")
    let quant = parseInt(prompt())
    listaCompras.push(this.nome = nome, this.quant = quant)
}

function removeItem(){
    for (let i=0; i< listaCompras.length; i++){
        console.log(`${i+1}: ${listaCompras[i]}`)
    }

    console.log("\nEscolha o número da tarefa que deseja remover: ")
    
    item = parseInt(prompt())-1
    console.log(item)

    while (item > listaCompras.length){
        console.log("\nFavor entre com um número válido")
    }


   listaCompras.splice(item, 1);
}

function menu(){
    let escolha
    
    console.log ("\n--- MENU ---")
    console.log("1 - Adicionar item")
    console.log("2 - Ver item")
    console.log("3 - Remover item")
    console.log("4 - Sair")

    escolha = parseInt(prompt())
    return escolha
}

let listaCompras = []
let flagMenu = 1
let flag = -1
let escolha 

while (flag != 4){
    while (flagMenu){
        escolha = menu()
        if (escolha > 4){
            console.log("Favor entre com um número de 1 a 4")
        } else {
            flagMenu = 0
        }
    }

    switch (escola){
        case 1: 
            adicionarItem()
            console.log("\nItem adicionado com sucesso!")
            break

        case 2:
            if (listaCompras.length === 0){
                console.log("Não há itens na lista")
            } else{
                for (let i = 0; i > listaCompras.length; i++){
                    console.log(`${i+1} - ${listaCompras[i].nome}, ${listaCompras[i].quant}`)
                }
            }
            break

        case 3:
            removeItem()
            break

        case 4: 
            break

        default:
            console.log("Favor entre com um número válido")
    }
}