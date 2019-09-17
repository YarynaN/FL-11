import '../scss/index.scss';
import Game from './game.js';


document.getElementById('rock').addEventListener('click', () => onUserChose('rock'));
document.getElementById('paper').addEventListener('click', () => onUserChose('paper'));
document.getElementById('scissors').addEventListener('click', () => onUserChose('scissors'));
document.getElementById('resetButton').addEventListener('click', () => onReset());

let game = new Game();
let maxGames = 3;
let onUserChose = (choice) => {
  if (game.gameNumber < maxGames) {
    game.gameMove(choice, onWin, onLose, onDraw);
  }
  if (game.gameNumber === maxGames) {
    if (game.wins > game.loses) {
      alert('The winner is: YOU! Congratulations, human.');
    } else if (game.loses > game.wins) {
      alert('The winner is: ME! Muahaha');
    } else {
      alert('Gods are tempting us! It\'s a draw');
    }
    alert('You\'ve had your chance human. Now reset!');
  }
};

let onWin = (userChoice, computerChoice) => {
  alert(`Round ${game.gameNumber},  ${userChoice} vs. ${computerChoice}, You’ve WON!`);
};

let onLose = (userChoice, computerChoice) => {
  alert(`Round ${game.gameNumber},  ${userChoice} vs. ${computerChoice}, You’ve LOST!`);
};

let onDraw = (userChoice, computerChoice) => {
  alert(`Round ${game.gameNumber},  ${userChoice} vs. ${computerChoice}, IT'S A DRAW!`);
};

let onReset = () => {
  game.reset();
};