var bgColor = ["yellow", "red", "gray", "pink", "brown", "voilet", "blue", "green", "orange"];

function FundoTrocar() {
  document.getElementById("btn1").addEventListener("click", FundoTrocar());
}

function FundoTrocar() {
  document.getElementsByTagName("body")[0].style.backgroundColor = bgColor[Math.floor(Math.random() * 9)];
  console.log(Math.floor(Math.random() * 9))
}
