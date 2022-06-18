function selectEnter() {
  value1 = Number(document.getElementById("digito1").value);
  value2 = Number(document.getElementById("digito2").value);
  value3 = Number(document.getElementById("digito3").value);
  show = document.getElementById("toShow");
}

function passwordChecker() {
  if (value1 == 9 && value2 == 1 && value3 == 1) {
    show.innerHTML = "password 1 correcto";
  } else if (value1 == 7 && value2 == 1 && value3 == 4) {
    show.innerHTML = "password 2 correcto";
  } else {
    show.innerHTML = "password incorrecto";
  }
}
