// Solicitar uma frase ao usuário
var frase = prompt("Digite uma frase:");

// Pedir ao usuário para escolher uma palavra da frase
var palavraEscolhida = prompt("Escolha uma palavra da frase:");

// Pedir ao usuário para digitar a palavra de substituição
var palavraSubstituta = prompt("Digite a palavra de substituição:");

// Substituir a palavra escolhida pela palavra substituta usando o método replace()
var novaFrase = frase.replace(palavraEscolhida, palavraSubstituta);

// Mostrar a nova frase com a substituição
console.log("Nova frase:", novaFrase);
