const selector = selector => document.querySelector(selector);

const line = selector('p');

let count = 0;
let someText = 'Baby shark, doo doo doo doo doo doo';

const typewriter = () => {
        if(count < someText.length){
		line.innerHTML = line.innerHTML + someText[count];
		count++;
	}
}

setInterval(typewriter, 75);