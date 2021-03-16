let value = 5; // more than 5K the processing gets larger than 500ms

Array.apply(null, Array(value)).forEach(alert); // gives you 5 alerts

let w = Array(value); 
let x = Array(value); // gives you an array with length 5 but with empty values
let y = Array.apply(null, Array(value)).map(function () {}); // gives you an array with length 5 and undefined as values 
let z = Array.apply(null, Array(value)).map(function (x, i) { return i; }); // gives you an array with length 5 and descending values

for (let i = value - 1; i >= 0; i--) {
	let r = Math.floor(Math.random() * value + 1);
	while (w.indexOf(r) > -1) r = Math.floor(Math.random() * value + 1);
	w[i] = r;
}

console.log(w); // gives you an array with length 5 and random values
console.log(x);
console.log(y);
console.log(z);