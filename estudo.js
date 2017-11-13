var y = Array.apply(null, Array(v+1)).map(function () {}); // gives you an array with length 5 and undefined as values 
var z = Array.apply(null, Array(v+1)).map(function (x, i) { return i; }); // gives you an array with length 5 and values 0,1,2,3,4
var w = Array.apply(null, Array(v+1)).forEach(alert); // gives you 5 alerts


var v = 5;
var x = Array(v); // gives you an array with lentgth 5 but no values
for (var i = v - 1; i >= 0; i--) {
	var r = Math.floor(Math.random() * v + 1);
	while ($.inArray(r,x) && $.inArray(r,x) > -1) {r = Math.floor(Math.random() * v + 1);}
	x[i] = r;
}

console.log(x);