import Player from './player';
import Round from './round';

class Game {
  constructor(data) {
    this.data = data;
    this.surveys = [];
    this.round = {};
    this.roundCount = 1;
    this.player1 = {};
    this.player2 = {};
  }
  getPlayers(player1, player2) {
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
  }
  findSurveys() {
    // let num = Math.ceil(Math.radom() * (this.data.surveys.length -2));
    for (let i = 0; i < 3; i++) {
      this.surveys.push(this.data.surveys[i].question);
    }
  }
  startRound() {
    this.round = new Round(
      this.survey,
      this.player1.name,
      this.player2.name,
      this.round.currentPlayer
    );
  }
}
export default Game;
