// Definir a sequência de substituições
var substituicoes = {
    1: 'a',
    3: 'c',
    4: 'd',
    12: 'm',
    14: 'o',
    15: 'p',
    17: 'r',
    19: 't',
    20: 'u'
  };
  
  // Converter a sequência de inteiros para String
  var codigo = [3, 14, 12, 15, 20, 19, 1, 4, 14, 17].join('-');
  
  // Substituir os valores referentes pela letra correspondente usando o método replace()
  var palavra = codigo.replace(/\d+/g, function(match) {
    return substituicoes[match] || '';
  });
  
  // Mostrar a palavra gerada
  console.log("Palavra gerada:", palavra);
  