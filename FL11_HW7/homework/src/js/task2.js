const initialMaxSecretNum = 8;
const initialPrize = 100;

const prizeDivider = 2;
const maxPrizeMultiplier = 2;
const maxAttempts = 3;
const secretNumStep = 4;

let userBalance = 0;
let gameNum = 0;
let maxSecretNum = initialMaxSecretNum;
let maxPrize = initialPrize;

let agreedToPlay = confirm('Do you want to play a game?');
if (!agreedToPlay) {
    alert('You did not become a billionaire, but can.');
}

while (agreedToPlay === true) {
    agreedToPlay = false;
    let possiblePrize = maxPrize;
    let secretNum = Math.floor(Math.random() * maxSecretNum);

    for (let attemptsNum = maxAttempts; attemptsNum > 0; attemptsNum--) {
        const guessResponse = prompt(
            `Choose a roulette pocket number from 0 to ${maxSecretNum}\n` +
            `Attempts left: ${attemptsNum}\n` +
            `Total prize: ${userBalance}$\n` +
            `Possible prize on current attempt: ${possiblePrize }$`,
            ''
        );
        const guess = parseInt(guessResponse);
        if (secretNum === guess) {
            userBalance += possiblePrize;
            agreedToPlay = confirm(
                `Congratulation, you won! Your prize is: ${userBalance}$. Do you want to continue?`
            );
            break;
        }
        if (attemptsNum === 1) {
            userBalance = 0;
            gameNum = 0;
            maxSecretNum = initialMaxSecretNum;
            maxPrize = initialPrize;
        }
        possiblePrize /= prizeDivider;
    }
    if (agreedToPlay) {
        gameNum++;
        maxSecretNum += secretNumStep;
        maxPrize *= maxPrizeMultiplier;
    } else {
        alert(`Thank you for your participation. Your prize is: ${userBalance}$`);
        agreedToPlay = confirm('Do you want to play again? Right?');
    }
}