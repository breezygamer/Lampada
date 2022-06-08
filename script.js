let img = document.querySelector('#img');

let ligar = document.querySelector('#ligar');
let desligar = document.querySelector('#desligar');

function ligarLampada(){
    let img = document.querySelector('#img').src="./img/ligada.jpg";
}

function desligarLampada(){
    let img = document.querySelector('#img').src="./img/desligada.jpg";
}

function lampadaQuebrada(){
    let img = document.querySelector('#img').src="./img/quebrada.jpg";

}



ligar.addEventListener('click', ligarLampada, false);
desligar.addEventListener('click', desligarLampada, false);
img.addEventListener('dblclick', lampadaQuebrada, false);