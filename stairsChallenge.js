let stair = Number(prompt("Say the size of the ladder: "));

while(isNaN(stair)) {
    stair = Number(prompt("Enter a valid value for the ladder size: "));
}

let material = prompt("Insert the material for the construction of the staircase: ");

while(material.length != 1) {
    material = prompt("ESpecify the material using only 1 (one) character: ");
}

let step = material;

for(i=0; i<stair; i++) {
    console.log(material);
    material = material + step;
}