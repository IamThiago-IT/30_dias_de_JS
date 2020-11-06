function pegarTexto() {
  var x;
  x = document.getElementById("Texto").value;
  if (!x) {
    alert("Favor colocar texto no campo");
  }
  else {
    document.getElementById("demo").innerHTML = x;
  }

}