

//console.log(suma(1,2));


function totalrj(){
    let rj1 = document.querySelector('#rj1');
    let a  = parseInt(rj1.value);

    let rj2 = document.querySelector('#rj2');
    let b = parseInt(rj2.value);

   const suma = (a,b) => a + b;

    total2.innerHTML = "LLevas" + suma(a,b) + "Alpacas";
}