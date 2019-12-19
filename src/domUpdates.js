import $ from 'jquery';
import apiData from '../src/index.js';
import Player from './player';
import Game from './game';
import Turn from './turn';
import Round from './round';
import './index';
import data from './data.js';

const domUpdates = {
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
    this.loadPlayerNames();
  },

  loadPlayerNames() {
    $(".p1-name").text($('.plyr-input:eq(0)').val());
    $(".p2-name").text($('.plyr-input:eq(1)').val());
    this.displayNewQuestion();
  },

  displayNewQuestion(question) {
    // console.log(question)
    $('.question').text(question.survey)
  },

  displayAnswers(answers) {
    // console.log(answers);
    for (var i = 0; i < 3; i++) {
      $(`.answer${i + 1}`).text(answers[i].answer)
    }
  },

  displayRespondents(respondents) {
    console.log(respondents)
    for (var i = 0; i < 3; i++) {
      $(`.respondent${i + 1}`).text(respondents[i].respondents)
    }
  } 
}

export default domUpdates;

