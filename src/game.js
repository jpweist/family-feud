class Game {
  constructor(data) {
    this.data = data;
    this.surveys = data.surveys;
    this.round = {};
    this.roundCount = 1;
    this.player1 = {};
    this.player2 = {};
  }
}
export default Game;
