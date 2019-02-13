let y = Array.apply(null, Array(v+1)).map(function () {}); // gives you an array with length 5 and undefined as values 
let z = Array.apply(null, Array(v+1)).map(function (x, i) { return i; }); // gives you an array with length 5 and values 0,1,2,3,4
let w = Array.apply(null, Array(v+1)).forEach(alert); // gives you 5 alerts

// V = valor

let v = 5000; // mais de 5K o pensamento fica maior de 500ms
let x = Array(v); // gives you an array with lentgth 5 but no values
for (let i = v - 1; i >= 0; i--) {
	let r = Math.floor(Math.random() * v + 1);
	while ($.inArray(r,x) > -1) r = Math.floor(Math.random() * v + 1);
	x[i] = r;
}

console.log(x);