var x = 0;

function conta() {
  x++;
  document.getElementById("demo").innerHTML = x;
}

function reduzirConta() {
  x--;
  document.getElementById("demo").innerHTML = x;
}

function reiniciarConta() {
  x = 0;
  document.getElementById("demo").innerHTML = x;
}