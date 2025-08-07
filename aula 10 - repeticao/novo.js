let opcao
const prompt = require("prompt-sync")();

while (opcao != 4){
    console.log("\n1 - Ver cardário")
    console.log("2 - Fazer pedido")
    console.log("3 - Falar com atendente")
    console.log ("4 - Sair")
    opcao = parseInt(prompt("Escolha uma opcao:\n"))
    
    switch (opcao){
        case 1:
            console.log("Mostrar cardápio")
            break
        case 2:
            console.log("Faça seu pedido:")
            break
        case 3:
            console.log("Um atendente esta indo falar com você!")
            break
        case 4:
            console.log("Volte sempre!")
            break
        default:
            console.log("Opção não disponível, por favor entre com um número de 1 a 4!")
    }
}