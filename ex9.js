// Solicitar o nome completo ao usuário
var nomeCompleto = prompt("Digite o nome completo:");

// Dividir o nome em partes separadas pelo espaço em branco
var partesNome = nomeCompleto.split(" ");

// Obter o último elemento do array, que corresponde ao sobrenome
var sobrenome = partesNome[partesNome.length - 1];

// Exibir o sobrenome
console.log("Sobrenome:", sobrenome);
