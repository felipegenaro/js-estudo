// late 2018

// Static Linear Search

let collectionOfValues = [24,50,45,18,96,72,59,51,97,98,21,22,92,87,53,35,76,53,37,69];	// collection with 20 random values
let valueToFind = 22;		// value to be find the position

for(i = 0; i <= collectionOfValues.length; i++) {		// loop through the collection
	if(collectionOfValues[i] == valueToFind) console.log(`The value ${valueToFind} is in the position ${i} of the collection`);	// indicates de position of the value in the collection
} 


//---------------------------------------------------------------------------------------------------------------------------------


// Dinamic Linear Search

const main = () => {
	let inputLength = prompt('Input the length of the collection:');	// define o tamanho da colecao
	if(checkValue(inputLength)) return;
	let searchArray = new Array(inputLength);	// creates the collection 

	for(j=0;j<=inputLength;j++) {
		searchArray[j] = j;	// fill the collection with values from 0 to the length
	}

	let maxValue = (searchArray.length) - 1;
	searchArray.sort(function(a,b){ return (Math.round(Math.random())-0.5); });	// shuffle the collection

	let inputSearch = prompt(`What value do you want to search for ?? Enter a value between: 0 and ${maxValue} (Values are sorted randomly)`);	// input the value to find the position

	if(checkCollection(searchArray, inputSearch)) return;

	if(parseInt(inputSearch) <= parseInt(inputLength)) {
		for(i = 0; i <= searchArray.length; i++) {
			if(searchArray[i] == inputSearch) {		// check if the requested value is in the collection
				alert(`The value is in the position: ${(i+1)} of the collection. Check out the complete collection: [${searchArray}]`);		// show the position of the requested value
				break;
			} 
		}
	} else {
		alert('This value does not belong to this collection');		// in case of the number does not belong the collection
	}
}

const checkValue = (value) => {		// verify if is a number
	let numberRule = /^[0-9]+$/;

	if(!value.match(numberRule)) {
		alert('Value not allowed');
		return true;
	}
}

const checkCollection = (colection, value) => {		// check if the value belong the collection
	if(!colection.indexOf(parseInt(value))) {
		alert('Value not allowed');
		return true;
	}
}
