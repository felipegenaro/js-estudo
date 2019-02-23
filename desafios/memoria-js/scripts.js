let colecaoImg = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

const selector = selector => document.querySelector(selector);
const selectorAll = selector => document.querySelectorAll(selector);

const pSegundos = selector('.segundos');
const divTimer = selector('.timer');

const blockImg = selectorAll('img');
const btnStart = selector('button');

let aguardandoPar;

let vitoria = 0;

const mostrarCostas = (elem) => {
    elem.src = `images/backCard.jpg`;
}

const embaralhar = () => {
    for(let i = 0; i <= 15; i++) {
        mostrarCostas(blockImg[i]);
    }
}

const processarJogada = (i) => {
    let jogada = blockImg[i];
    jogada.src = `images/${colecaoImg[i]}.jpg`;
    
    if (aguardandoPar) {
        if (jogada.src === aguardandoPar.src) {
            jogada.classList.toggle('certo');
            aguardandoPar.classList.toggle('certo');

            jogada.onclick = null;
            aguardandoPar.onclick = null;

            aguardandoPar = null;

            vitoria += 1;
            if(vitoria == 8) btnStart.onclick();
        } else {
            setTimeout( () => {
                mostrarCostas(jogada);
                mostrarCostas(aguardandoPar);
                aguardandoPar = null;
            }, 1000);
        }   
    } else {
        aguardandoPar = jogada;
    }
}

btnStart.onclick = () => {
    let segundo = 3;
    colecaoImg = colecaoImg.sort(() => { return (Math.round(Math.random())-0.5); });

    for(let i = 0; i <= 15; i++) {
        blockImg[i].src = `images/${colecaoImg[i]}.jpg`;
        blockImg[i].classList.remove('certo');
    }

    divTimer.classList.toggle('hidden-timer');  

    const atualizarParagrafo = (novoSegundo) => {
        pSegundos.innerHTML = novoSegundo;
        segundo --;
        setTimeout( () => {
            incluir(segundo)
        }, 933);
    }
    
    const incluir = (segundo) => {
        if(segundo >= 0) 
        {
            atualizarParagrafo(segundo);
        } else { 
            divTimer.classList.toggle('hidden-timer');  
            init();
        }
    }
    incluir(segundo);
}

const init = () =>  {
    embaralhar();
        
    for(let i = 0; i < blockImg.length; i++) {
        let img = blockImg[i];
        img.onclick = function () {
            processarJogada(i);
        }
    }
    for(i=0; i < blockImg.length; i++) if(blockImg[i].classList.contains('certo')) mostrarCostas(blockImg[i]);
}
