//Faça um programa em JavaScript que mostre a seguinte saída (use o método charAt)

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question('DIgite uma saida: ', (palavra) => {
    for(let i = 0; i<= palavra.length; i++){
    let output = '';
    for(let j= 0; j< i; j++){
        output += palavra.charAt(j);
    }
    console.log(output);

    }

    for (let i = palavra.length - 1; i > 0; i--){
        let output = '';
        for(let j = 0; j < i; j++){
            output += palavra.charAt(j);
        }

        console.log(output);
        
    }
    rl.close();
});