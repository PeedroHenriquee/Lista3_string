// Solicitar ao usuário um texto
var texto = prompt("Digite um texto:");

// Contar o número total de caracteres
var numeroCaracteres = texto.length;

// Contar o número de palavras
var palavras = texto.split(" ");
var numeroPalavras = palavras.length;

// Exibir os resultados
console.log("Número total de caracteres:", numeroCaracteres);
console.log("Número de palavras:", numeroPalavras);
