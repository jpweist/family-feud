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
    while (this.surveys.length < 3) {
      let num = Math.ceil(Math.random() * this.data.surveys.length);
      // if (this.surveys.indexOf(num) === -1) this.surveys.push(this.data.surveys[num]);
      // if (this.answers.indexOf(num) === -1) this.answers.push(this.data.answers[num]);
      if (this.surveys.indexOf(num) === -1) this.surveys.push(num);
      // console.log(this.surveys)
    }
    this.surveys = this.surveys.map(id => {
      let survey = this.data.surveys.find(survey => survey.id === id);
      let answers = this.data.answers.filter(
        answer => answer.surveyId === id
      );
      return { survey: survey.question, answers: answers };
    });
    this.surveys.forEach(survey =>
      survey.answers.sort((a, b) => a.respondents - b.respondents)
    );
    // console.log('Game this.surveys', this.surveys)
    this.startRound();
  }

  startRound() {
    this.round = new Round(
      this.surveys,
      this.player1.name,
      this.player2.name,
      this.round.currentPlayer
    );
    console.log(this.surveys)

  }
}
export default Game;
