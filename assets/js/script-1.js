/* function cambioBorderImg(){
    if(cambioBorderImg == onclick){
        document.getElementById("imgBorder").style.border = "10px solid black";
    }else if(cambioBorderImg == false){
        document.getElementById("imgBorder").style.border = "0px solid black";
    }
} */
/* document.getElementById("imgBorder").style.border = "10px solid black"; */
/* let img = document.querySelector("#imgBorder");
contador = 0;
console.log(contador);
img.addEventListener("click", function () {
    if (contador == 0) {
        document.getElementById("imgBorder").style.border = "2px solid red";
        contador = 1;
        console.log(contador);
    } else {
        document.getElementById("imgBorder").style.border = "none";
        contador = 0;
        console.log(contador);
    }
}); */
/* let img = document.getElementById("imgBorder"); */
/* var conBorder = document.getElementById("imgBorder").style.border= "2px solid red";
document.getElementById("demo").innerHTML = html;
var conBorder = document.getElementById("imgBorder")
let html = document.getElementById("myP").innerHTML;
document.getElementById("demo").innerHTML = html; */

function cambioBorderImg(){
    var imgBorder = document.getElementById("imgBorder")
    console.log('imgBorder => ', imgBorder.attributes)
    if(imgBorder.classList.contains('conBorder')){
        imgBorder.classList.remove('conBorder');
    }else{
        imgBorder.classList.add('conBorder');
    }
}