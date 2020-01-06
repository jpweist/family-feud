import $ from 'jquery';
// import apiData from '../src/index.js';
import Player from './player';
import Game from './game';
import Turn from './turn';
import Round from './round';
// import './index';
import data from './data.js';

const domUpdates = {
  newGameBtn() {
    $(".info-container").toggle(".hide-class");
    $(".start-new-game-question").toggle(".hide-class");

  },
  restartGame() {
    $('.instructions-page').toggle('.hide-class');
    $(".start-new-game-question").toggle("hide-class");
    $(".gameplay-page").toggle(".hide-class")
  },

  openInfo(player1) {
    $(".info-container").toggle(".hide-class")
  },

  closeInfo() {
    $(".info-container").toggle(".hide-class")
  },

  displayNewScore(score) {
    $(".p1-score").text(score);
  },

  loadDOM() {
  $('.instructions-page').toggle('.hide-class');
  this.displayGamePage();


  },

  displayGamePage() {
    $(".gameplay-page").toggle(".hide-class");
    $(".start-new-game-question").removeClass("hide-class");
    this.loadPlayerNames();
  },

  loadPlayerNames() {
    $(".p1-name").text($('.plyr-input:eq(0)').val());
    $(".p2-name").text($('.plyr-input:eq(1)').val());
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
      $(`.respondent${i + 1}`).text(respondents[i].respondents)
    }
  }
}

export default domUpdates;
