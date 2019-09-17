class Game {
  constructor() {
    this.gameNumber = 0;
    this.wins = 0;
    this.loses = 0;
    this.draw = 0;
  }

  gameMove(userChoice, onWin, onLose, onDraw) {
    this.gameNumber++;
    let computerChoice = Math.random();
    const rockProbability = 0.33;
    const paperProbability = 0.66;
    if (computerChoice < rockProbability) {
      computerChoice = 'rock';
    } else if (computerChoice <= paperProbability) {
      computerChoice = 'paper';
    } else {
      computerChoice = 'scissors';
    }

    let wonUser = false;

    let rules = [
      {winner: 'paper', loser: 'rock'},
      {winner: 'rock', loser: 'scissors'},
      {winner: 'scissors', loser: 'paper'}
    ];

    rules.forEach(rule => {
      console.log(rule);
      if (userChoice === rule.winner && computerChoice === rule.loser) {
        wonUser = true;
      }
    });
    if (wonUser === true) {
      this.wins++;
      onWin(userChoice, computerChoice);
    } else if (userChoice === computerChoice) {
      this.draw++;
      onDraw(userChoice, computerChoice);
    } else {
      this.loses++;
      onLose(userChoice, computerChoice);
    }
  }

  reset() {
    this.gameNumber = 0;
    this.wins = 0;
    this.loses = 0;
    this.draw = 0;
  }
}


export default Game;
