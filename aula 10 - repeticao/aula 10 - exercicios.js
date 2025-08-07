let bateria = 100

while (bateria > 20){
    console.log (`Robô andando... bateria em ${bateria}`)
    bateria = bateria - 15
}

console.log ("Bateria acabou. Ana desligou o robô\n")

/////////////////////////

const preferencias = {
    Ana: ["chocolate"],
    Bia: ["baunilha"],
    Carol: ["morango"],
    Diana: ["flocos"],
    Emilia: ["pistache"],
};

for (const aluna in preferencias) {
   const sorvetes = preferencias[aluna];
   console.log(`${aluna} | Sabor favorito: ${sorvetes.join(', ')}`);
}

console.log("\n")

// .join(', ') -> une lista em string
/*
sem ficaria:
    console.log(sabores);
    ['Chocolate', 'Menta', 'Baunilha']

com, fica
    console.log(sabores.join(', '));
    Chocolate, Menta, Baunilha
*/

/////////////////////////

const num = 10
let i = 0

for (let i = 0; i < 10; i++) {
    if (i%3 === 0){
        console.log (`Recheio do donut número ${i} é chocolate`)
    }
    else {
        console.log (`Recheio do donut número ${i} é baunilha`)
    }
}

console.log("\n")


/////////////////////////

let opcao

while (opcao != 4){
    console.log("1 - Ver cardário")
    console.log("2 - Fazer pedido")
    console.log("3 - Falar com atendente")
    console.log ("4 - Sair")
    opcao = parteInt(prompt("Escolha uma opcao:"))
    
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