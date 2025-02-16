const prompt = require('prompt-sync')();

//variaveis
let nome = prompt("Olá herói, qual é o seu nome: ");
let xp   = prompt("Me diga seu nivel de XP: ");
let nivel;

// Uso de if else
/*
if (xp <= 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante"
}
*/
// uso de Switch case
switch (true) {
    case (xp <= 1000):
        nivel = "Ferro";
        break;

    case (xp <= 2000):
        nivel = "Bronze";
        break;

    case (xp <= 5000):
        nivel = "Prata";
        break;

    case (xp <= 7000):
        nivel = "Ouro";
        break;
     
    case (xp <= 8000):
        nivel = "Platina";
        break;

    case (xp <= 9000):
        nivel = "Ascendente";
        break;
    
    case (xp <= 10000):
        nivel = "Imortal";
        break;

    default:
        nivel = "Radiante";
        break;
}

console.log(`Olá ${nome}, de acordo com seu nível de ${xp} XP, você é ${nivel}.`);