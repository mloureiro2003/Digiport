// Exercicios W3school, online
    // syntax, comments, variables, let, const

/* 
comentar bloco de texto assim
*/

// variaveis comecam com letra, $ ou _

// declarar array com const PERMITE mudar valores dentro dele

// manipulacao de strings:
let umaString = "um texto"
umaString[3]                            // retorna char no indice 3
umaString.charAt(3)                     // mesma coisa que acima
umaString.charAt(4)                     // retorna char no indice 4
umaString.concat(" um", "texto", "")    // concatena varias string -> "Um texto um texto"
umaString.replace("um", "outra")        // Substitui "Um" por "Outra"
umaString.length                        // retorna comprimento da string
umaString.slice(0, 2)                   // corta do índíce 0 ao 2 (exclusivo) -> "Um"
umaString.slice(2, 4)                   // corta do indice 2 ao 4 (exclusivo) -> " t" (espaço + "t")
umaString.split(" ")                    // separa por char especifico
umaString.split(" ")[0]                 // separa por char especifico e seleciona primeira parte disso