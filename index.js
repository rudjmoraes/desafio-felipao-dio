// Desafio Calculadora de Partidas Rankeadas

// function calcularRanqueadas(vitorias, derrotas){
//   let saldoVitorias = vitorias - derrotas
//   let nivel

// }

// if (vitorias <= 10){
//     nivel = "ferro "
// }else if (vitorias >= 11 && vitorias <= 20){
//     nivel = "Bronze"
// }else if (vitorias >= 21 && vitorias <= 50){
//     console.lognivel ("Prata")
// }else if (vitorias >= 51 && vitorias <= 80){
//     nivel = "Ouro"
// }else if (vitorias >= 81 && vitorias <= 90){
//     nivel = "Diamante"
// }else if (vitorias >= 91 && vitorias <= 100){
//     nivel = "Lendário"
// }else if (vitorias >= 101){
//     nivel = "Imortal"
// }

// return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;

// // Exemplo de uso da função
// let resultado = calcularRanqueadas (85, 20);
// console.log(resultado);



function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Exemplo de uso da função
let resultado = calcularRank(85, 20);
console.log(resultado);
