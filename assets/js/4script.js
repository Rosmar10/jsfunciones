
const ejea = document.querySelector('#ejea');
const ejes = document.querySelector('#ejes');
const ejed = document.querySelector('#ejed');
const ejem = document.querySelector('#ejem');

document.addEventListener('keydown', (e) => {
    if (e.key == 'a'){
        console.log('Presionaste la tecla a');
        ejea.style.backgroundColor = 'yellow';
    }else if (e.key == 's'){
        console.log('Presionastes la tecla s');
        ejes.style.backgroundColor = 'blue';
    }else if (e.key == 'd'){
        console.log('Presionastes la tecla d');
        ejed.style.backgroundColor = 'red';
    }else if (e.key == 'm'){
        console.log('Presionaste la tecla m');
        ejem.style.backgroundColor = 'black';
    }
})

const pintar = () => {
ejea.addEventListener('click', () => {
    ejea.style.backgroundColor = 'yellow';
})
ejes.addEventListener('click',() => {
    ejes.style.backgroundColor = 'blue';
})
ejed.addEventListener('click', () => {
    ejed.style.backgroundColor = 'red';
})
ejem.addEventListener('click', () => {
    ejem.style.backgroundColor = 'black';
    pintar('amarillo');
})
}

pintar('amarillo');
pintar('azul');
pintar('rojo');
pintar('negro');
