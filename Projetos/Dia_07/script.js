var Frases = ["JavaScript é sensacional ", "O php é espetacular.",
  "O amor é uma força mais linda e terrível que a morte.",
  "A verdade é uma coisa terrível e linda, e, portanto, deve ser tratada com muito cuidado.",
  "Mares calmos não fazem um bom marinheiro.",
  "Arqueiro Verde: Você falhou com esta cidade!",
  "The real ornament of woman is her character, her purity.",
  "A minha misericórdia prevalece sobre a minha ira.",
  "O pessimista olha para baixo e bate a cabeça. O otimista olha para cima, e tropeça. O realista olha para frente, e reajusta seu caminho.",
  "Sempre achamos que vamos ter mais tempo. E aí, o tempo acaba.",
  "Feliz Dia das Bruxas! Que nesta data o feitiço vire contra os feiticeiros e que seu dia seja excelente!"];

var index = 0;
document.getElementById("frases").innerHTML = Frases[index];

function ProximoSlide() {
  index++;
  index %= 11;
  document.getElementById("frases").innerHTML = Frases[index];
}

function AnteriorSlide() {
  index--;
  if (index < 0) {
    index += 11;
  }
  document.getElementById("frases").innerHTML = Frases[index];
}