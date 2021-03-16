let imgCollection = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

const selector = selector => document.querySelector(selector);
const selectorAll = selector => document.querySelectorAll(selector);

const pSeconds = selector('.seconds');
const divTimer = selector('.timer');

const blockImg = selectorAll('img');
const btnStart = selector('button');

let awaitPair;

let winPoint = 0;

const showBack = (elem) => {
    elem.src = `images/backCard.jpg`;
}

const shuffleCards = () => {
    for(let i = 0; i <= 15; i++) {
        showBack(blockImg[i]);
    }
}

const processPlay = (i) => {
    let playRound = blockImg[i];
    playRound.src = `images/${imgCollection[i]}.jpg`;
    
    if (awaitPair) {
        if (playRound.src === awaitPair.src) {
            playRound.classList.toggle('findSuccess');
            awaitPair.classList.toggle('findSuccess');

            playRound.onclick = null;
            awaitPair.onclick = null;

            awaitPair = null;

            winPoint += 1;
            if(winPoint == 8) btnStart.onclick();
        } else {
            setTimeout( () => {
                showBack(playRound);
                showBack(awaitPair);
                awaitPair = null;
            }, 1000);
        }   
    } else {
        awaitPair = playRound;
    }
}

btnStart.onclick = () => {
    let second = 3;
    imgCollection = imgCollection.sort(() => { return (Math.round(Math.random())-0.5); });

    for(let i = 0; i <= 15; i++) {
        blockImg[i].src = `images/${imgCollection[i]}.jpg`;
        blockImg[i].classList.remove('findSuccess');
    }

    divTimer.classList.toggle('hidden-timer');  

    const updateParagraph = (newSecond) => {
        pSeconds.innerHTML = newSecond;
        second --;
        setTimeout( () => {
            addClassOnParagraph(second)
        }, 933);
    }
    
    const addClassOnParagraph = (second) => {
        if(second >= 0) 
        {
            updateParagraph(second);
        } else { 
            divTimer.classList.toggle('hidden-timer');  
            init();
        }
    }
    addClassOnParagraph(second);
}

const init = () =>  {
    shuffleCards();
        
    for(let i = 0; i < blockImg.length; i++) {
        let img = blockImg[i];
        img.onclick = function () {
            processPlay(i);
        }
    }
    for(i=0; i < blockImg.length; i++) if(blockImg[i].classList.contains('findSuccess')) showBack(blockImg[i]);
}
