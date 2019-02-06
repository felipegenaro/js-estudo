exports.nomeFuncao = function(parametros) {
	console.log('o parametro passado foi: ' + parametros)
};

exports.outraFuncao = function() {
	console.log('esta funcao nao faz nada')
};

// para utilizar este modulo
// basta requerir a biblioteca
// e chamar a funcao desejada

// var modTest = require(./meuModulosTest)

// modTest.nomeFuncao('String')
// modTest.outraFuncao()