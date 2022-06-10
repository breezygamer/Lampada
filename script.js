let img = document.querySelector('#img');

let ligardesligar = document.querySelector('#ligardesligar');

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

function lampOnOff(){
    if(ligardesligar.textContent == 'Ligar'){
        ligarLampada();
        ligardesligar.textContent = 'Desligar'
    }else{
        desligarLampada();
        ligardesligar.textContent = 'Ligar'
    }
}


ligardesligar.addEventListener('click', lampOnOff, false);
ligar.addEventListener('click', ligarLampada, false);
img.addEventListener('dblclick', lampadaQuebrada, false);  
img.addEventListener('mouseover', ligarLampada);
img.addEventListener('mouseleave', desligarLampada);
