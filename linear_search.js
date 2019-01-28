// Busca Linear Estatica

let colecaoDeValores = [24,50,45,18,96,72,59,51,97,98,21,22,92,87,53,35,76,53,37,69]	// colecao com 20 valores aleatorios
let encontrarValor = 22		// valor selecionado para reconhecer posicao

for(i = 0; i <= colecaoDeValores.length; i++) {		// percorre a colecao buscando encontrar o valor selecionado
	if(colecaoDeValores[i] == encontrarValor) console.log('O Valor ' + encontrarValor + ' esta na posicao ' + i + ' da colecao')	// indica a posicao do valor no console
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Busca Linear Dinamica, com interacao com o usuario

function main() {
	let inputLength = prompt('Insira o tamanho da colecao:')	// define o tamanho da colecao
	if(checkValue(inputLength)) return
	let arrayConsulta = new Array(inputLength)	// cria colecao com o tamanho inserido

	for(j=0;j<=inputLength;j++) {
		arrayConsulta[j] = j	// preenche a lista com valores de 0 ate o valor do tamanho indicado anteriormente
	}

	arrayConsulta.sort(function(a,b){ return (Math.round(Math.random())-0.5); });	// desordena a colecao

	let inputSearch = prompt('Qual valor deseja buscar ?? Insira um valor entre: ' + arrayConsulta + ' (Valores gerados randomicamente)')	// inserir o valor que se deseja saber a posicao
	if(checkColecao(arrayConsulta, inputSearch)) return

	if(parseInt(inputSearch) <= parseInt(inputLength)) {
		for(i = 0; i <= arrayConsulta.length; i++) {
			if(arrayConsulta[i] == inputSearch) {		// verifica se o valor requisitado esta na posicao
				alert('O valor esta na posicao: ' + i + ' da colecao')		// aponta a posicao do numero requisitado
				break
			} 
		}
	} else {
		alert('Este valor nao pertence a esta colecao')		// caso o numeral informado nao faca parte da colecao
	}
}

function checkValue(value) {		// verifica se o caracter inserido e um numeral
	let numberRule = /^[0-9]+$/

	if(!value.match(numberRule)) {
		alert('Valor nao permetido') 
		return true
	}
}

function checkColecao(colection, value) {		// checka se o valor inserido pertence a colecao
	if(!colection.indexOf(parseInt(value))) {
		alert('Valor nao permetido') 
		return true
	}
}