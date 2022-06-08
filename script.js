let img = document.querySelector('#img');

let ligar = document.querySelector('#ligar');
let desligar = document.querySelector('#desligar');

function isLampBroken(){
    return img.src.indexOf('quebrada') >-1
}

function ligarLampada(){
    if(!isLampBroken()){    
     let img = document.querySelector('#img').src="./img/ligada.jpg";
    }
}

function desligarLampada(){
    if(!isLampBroken()){  
    let img = document.querySelector('#img').src="./img/desligada.jpg";
    }
}

function lampadaQuebrada(){
    if(!isLampBroken()){  
    let img = document.querySelector('#img').src="./img/quebrada.jpg";
    }

}



ligar.addEventListener('click', ligarLampada, false);
desligar.addEventListener('click', desligarLampada, false);
img.addEventListener('dblclick', lampadaQuebrada, false);  
img.addEventListener('mouseover', ligarLampada);
img.addEventListener('mouseleave', desligarLampada);
