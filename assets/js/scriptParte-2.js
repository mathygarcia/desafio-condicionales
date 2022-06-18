function mostrarCantidadStickers() {
    const maxStickers = 10;

    sobreDiez = "Llevas demasiados stickers";/*  este es relevante */
    bajoDiez = "Gracias por su compra";
    ceroCantidad = "No has seleccionado stickers";

    a = Number(document.getElementById("input-1").value);
    b = Number(document.getElementById("input-2").value);
    c = Number(document.getElementById("input-3").value);
    totalResultadoStickers = a + b + c;

    cantidadStickers = document.querySelector(".cantidad-stickers");
    mostrarParrafo = document.querySelector(".demasiados-stickers");

    alertSobreDiez = `Llevas ${totalResultadoStickers} Stickers, excede el MAXIMO de ${maxStickers} Stickers`;
    alertBajoDiezIgual = `Llevas ${totalResultadoStickers} Stickers`;

    if (totalResultadoStickers > 10) {
        cantidadStickers.innerHTML = alertSobreDiez;
        mostrarParrafo.innerHTML = sobreDiez;
    } else if (totalResultadoStickers <= 0) {
        cantidadStickers.innerHTML = alertBajoDiezIgual;
        mostrarParrafo.innerHTML = ceroCantidad;
    } else {
        cantidadStickers.innerHTML = alertBajoDiezIgual;
        mostrarParrafo.innerHTML = bajoDiez;
    }
}
