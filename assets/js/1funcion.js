function botontotal() {

    let valor1 = document.getElementById('valor1');
    let a = parseInt(valor1.value);

    let valor2 = document.getElementById('valor2');
    let b = parseInt(valor2.value);

    let valor3 = document.getElementById('valor3');
    let c = parseInt(valor3.value);

    const suma = function(a,b,c){
        let suma = a + b +c;
        return suma;
    }
    total1.innerHTML = 'Llevas:' + suma(a,b,c) + "Alpacas";

}