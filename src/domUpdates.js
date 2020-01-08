import $ from 'jquery';

const domUpdates = {
  newGameBtn() {
    $(".info-container").toggle(".hide-class");
    $(".start-new-game-question").toggle(".hide-class");
  },

  restartGame() {
    location.reload();
  },

  quitGame() {
    location.reload();
  },

  backToGame() {
    $(".start-new-game-question").toggle(".hide-class");
  },

  openInfo() {
    $(".info-container").toggle(".hide-class")
  },

  closeInfo() {
    $(".info-container").toggle(".hide-class")
  },

  displayNewScore(score, turn) {
    $(`.p${turn}-score`).text(score);
  },

  displayCurrentRound(round) {
    $('.round-number').text(round)
  },

  loadDOM() {
    $('.instructions-page').toggle('.hide-class');
    this.displayGamePage();
  },

  displayWinnerPage(game) {
    let winner;
    if (game.player1.score > game.player2.score) {
      winner = game.player1
      $('.winners-page').addClass('ninja')
    } else {
      winner = game.player2
      $('.winners-page').addClass('zombie')
    }
    $('.winners-page').toggle('.hide-class');
    $('.winner-name').text(winner.name)
    $('.winner-score').text(winner.score);
  },

  displayGamePage() {
    $(".gameplay-page").toggle(".hide-class");
    $(".start-new-game-question").removeClass("hide-class");
  },

  loadPlayerNames(game) {
    $(".p1-name").text(game.player1.name);
    $(".p2-name").text(game.player2.name);
  },

  displayNewQuestion(question) {
    $('.question').text(question.survey)
  },

  displayAnswers(answers) {
    for (var i = 0; i < 3; i++) {
      $(`.answer${i + 1}`).text(answers[i].answer)
    }
  },

  displayRespondents(respondents) {
    for (var i = 0; i < 3; i++) {
      $(`.respondent${i + 1}`).text(` - ${respondents[i].respondents}`)
    }
  }
}

export default domUpdates;
