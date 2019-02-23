const aleatorio = aleatorio => Math.floor(Math.random() * 51);
let valor = aleatorio();
let inputValor = prompt('Foi gerado um valor aleatorio entre 0 e 50, tente adivinhar qual é (você possui 5 tentativas): ');
let pontuacao = 0;

const jogoReset = function (flag) {
    valor = aleatorio();

    if(flag === true) alert(`Parabens você conseguiu !! Sua pontuação atual é: ${pontuacao}. O jogo será reiniciado.`);
    else alert(`Infelismente esta foi sua ultima tentativa... Sua pontuação atual é: ${pontuacao}. O jogo será reiniciado.`);

    inputValor = prompt('Foi gerado um valor aleatorio entre 0 e 50, tente adivinhar qual é (você possui 5 tentativas): ');
    jogo(valor, inputValor);
}

const jogo = function(valor, inputValor) {
    for(i=4;i>=0;i--) {
        if(i<=3) {
            inputValor = prompt(`Insira outro valor. Você possui mais ${(i+1)} tentativas: `);
        }
        while(isNaN(inputValor) || inputValor.length == 0) {
            inputValor = prompt('Valor não identificado, tente novamente:');
        }
        if(inputValor == valor) {
            pontuacao += 1;
            jogoReset(true);
        }
        else if(inputValor < valor) alert('Que pena, valor incorreto. *Dica: o valor inserido é maior que o gerado.');
        else alert('Que pena, valor incorreto. *Dica: o valor inserido é menor que o gerado.');
    }
    jogoReset(false);
}

jogo(valor, inputValor);