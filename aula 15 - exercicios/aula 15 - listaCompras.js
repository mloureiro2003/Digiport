let prompt = require("prompt-sync")()

class Item{
    constructor(nome, quant){
        this.nome = nome
        this.quant = quant
    }

    static listaCompras = []

    static adicionarItems(){
        console.log("\nDigite o nome do item: ")
        let nome = prompt()

        console.log(`\nDiite a quantidade de ${nome}`)
        let quant = parseInt(prompt())

        Item.listaCompras.push(new Item(nome, quant))
        console.log("\nItem adicionado com sucesso!")
    }

    static listaItens(){
        if (Item.listaCompras.length === 0){
            console.log("\nNão há itens na lista")
        } else{
            for (let i = 0; i < Item.listaCompras.length; i++){
                console.log(`${i + 1}: ${Item.listaCompras[i].nome}: ${Item.listaCompras[i].quant}`)
            }
        }
    }

    static removeItem(){
        if (Item.listaCompras.length === 0){
            console.log("\nNão há itens para remover.")
            return
        }

        Item.listaItens()
        console.log("\nEscolha o número do item que deseja remover: ")
        let item = parseInt(prompt()-1)

        while (item < 0 || item >= Item.listaCompras.length){
            console.log("\nFavor entrar com um número válido.")
            item = parseInt(prompt()-1)
        }

        Item.listaCompras.splice(item,1)
        console.log("Item removido com sucesso!")
    }
}

function menu(){
    let escolha
    
    
    while (escolha !== 4) {
        console.log("\n--- MENU ---");
        console.log("1 - Adicionar item");
        console.log("2 - Ver itens");
        console.log("3 - Remover item");
        console.log("4 - Sair");

        escolha = parseInt(prompt("Escolha uma opção: "));

        switch(escolha){
            case 1:
                Item.adicionarItems()
                break

            case 2:
                Item.listaItens()
                break
            case 3:
                Item.removeItem()
                break
            case 4:
                console.log("Saindo...")
                break
            default:
                console.log("Favor entrar com um número válido")
        }
    }
}

menu()