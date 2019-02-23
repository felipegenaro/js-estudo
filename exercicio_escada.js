let escada = Number(prompt("Diga o tamanho da escada: "));

while(isNaN(escada)) {
    escada = Number(prompt("Insira um valor valido para o tamanho da escada: "));
}

let material = prompt("Insira o material para a construcao da escada: ");

while(material.length != 1) {
    material = prompt("Especifique o material usando somente 1(um) caracter: ");
}

let degrau = material;

for(i=0; i<escada; i++) {
    console.log(material);
    material = material + degrau;
}