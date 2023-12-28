// Desafio Classificador de nível de Herói

let nomeHeroi = "Chapolin" //nome do heroi
let experiencia = 100000 // Nível de experiancia do heroi
let nivel = ""

if(experiencia < 1000){
   nivel = "Ferro"

}else if (experiencia >= 1001 && experiencia <= 2000){
    nivel = "Bronze"

}else if (experiencia >= 2001 && experiencia <= 5000){
    nivel = "Prata"

}else if (experiencia >= 5001 && experiencia <= 7000){
    nivel = "Ouro"

}else if (experiencia >= 7001 && experiencia <= 8000){
    nivel = "Platina"

}else if (experiencia >= 8001 && experiencia <= 9000){
    nivel = "Ascendente"

}else if (experiencia >= 9001 && experiencia <= 10000){
    nivel = "Imortal"

}else if (experiencia >= 10001){
    nivel = "Radiante"

}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)

//####################//

// Fiz esta segunda versão mais otimizada, não sei se esta correto, mas a explicação esta em uma das suas aulas onde cita a otimização do código, visto que no exercicio o limite inferior já foi verificado na condição anterior (1000 e depois 1001) por isso criei as duas versões para não ficar com dúvidas

let nomeHeroi2 = "Chapolin" //nome do heroi
let experiencia2 = 100000 // Nível de experiancia do heroi
let nivel2 = ""

if (experiencia2 < 1000) {
    nivel2 = "Ferro";
} else if (experiencia2 <= 2000) {
    nivel2 = "Bronze";
} else if (experiencia2 <= 5000) {
    nivel2 = "Prata";
} else if (experiencia2 <= 7000) {
    nivel2 = "Ouro";
} else if (experiencia2 <= 8000) {
    nivel2 = "Platina";
} else if (experiencia2 <= 9000) {
    nivel2 = "Ascendente";
} else if (experiencia2 <= 10000) {
    nivel2 = "Imortal";
} else {
    nivel2 = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi2 + " está no nível de " + nivel2)