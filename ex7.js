// Solicitar um número ao usuário
var numero = prompt("Digite um número:");

// Definir um objeto com as correspondências entre os dígitos e seus valores por extenso
var digitosPorExtenso = {
  0: "zero",
  1: "um",
  2: "dois",
  3: "três",
  4: "quatro",
  5: "cinco",
  6: "seis",
  7: "sete",
  8: "oito",
  9: "nove"
};

// Converter o número para uma string
var numeroString = String(numero);

// Iterar sobre cada dígito do número e imprimir por extenso
for (var i = 0; i < numeroString.length; i++) {
  var digito = numeroString.charAt(i);
  var digitoPorExtenso = digitosPorExtenso[digito];
  console.log(digitoPorExtenso);
}
