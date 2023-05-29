//Faça um programa que peça ao usuário para digitar um texto,e informe quantos 
//caracteres possui o texto informado pelo usuário.

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('Digite um texto: ', (texto) => {
    const  quatidadeCaractere = texto.length;
    console.log('O texto tem ', quatidadeCaractere, ' caracteres');

    rl.close();

});