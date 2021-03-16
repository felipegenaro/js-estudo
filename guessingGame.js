const randomPick = randomPick => Math.floor(Math.random() * 51);
let value = randomPick();
let inputValue = prompt('A random value was generated between 0 and 50, try to guess what it is (you have 5 attempts): ');
let score = 0;

const resetGame = function (flag) {
    value = randomPick();

    if(flag === true) alert(`Congratulations you got it !! Your current score is: ${score}. The game will be restarted.`);
    else alert(`Unfortunately this was your last attempt ... Your current score is: ${score}. The game will be restarted.`);

    inputValue = prompt('A random value was generated between 0 and 50, try to guess what it is (you have 5 attempts): ');
    game(value, inputValue);
}

const game = function(value, inputValue) {
    for(i=4;i>=0;i--) {
        if(i<=3) {
            inputValue = prompt(`Enter another value. You have ${(i+1)} more attempts: `);
        }
        while(isNaN(inputValue) || inputValue.length == 0) {
            inputValue = prompt('Unidentified value, please try again:');
        }
        if(inputValue == value) {
            score += 1;
            resetGame(true);
        }
        else if(inputValue < value) alert('Too bad, incorrect value. * Tip: the value entered is greater than the generated value.');
        else alert('Too bad, incorrect value. * Tip: the value entered is less than the generated value.');
    }
    resetGame(false);
}

game(value, inputValue);