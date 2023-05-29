// Solicitar ao usuário uma frase
var frase = prompt("Digite uma frase:");

// Inicializar a contagem de espaços em branco
var contadorEspacos = 0;

// Iterar sobre cada caractere da frase
for (var i = 0; i < frase.length; i++) {
  // Verificar se o caractere atual é um espaço em branco
  if (frase.charAt(i) === " ") {
    contadorEspacos++;
  }
}

// Exibir o número de espaços em branco
console.log("Número de espaços em branco:", contadorEspacos);
