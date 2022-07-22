function pintar(){
    let pin = document.getElementById('color')
    pin.style.color = 'yellow'

}
let pin = document.getElementById('color')
pin.addEventListener("click", pintar);

function verde(color) {
    colores = document.querySelector("#colores");
    colores.style.backgroundColor = color;
}