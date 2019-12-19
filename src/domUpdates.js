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
    $(".plyr1-score").text(player1.score)
  },

  closeInfo() {
    $(".info-container").toggle(".hide-class")
  },

  loadDOM() {
  $('.instructions-page').toggleClass('hide-class');
  this.displayGamePage();
  },

  randomizeSurvey() {
  let randomSurvey = data.surveys.find(survey => {
    if (randomNum === survey.id) {
      let round1 = new Round(survey.question)
      document.querySelector('.question').insertAdjacentHTML('afterbegin', `
      ${round1.survey}`
    )}
  })
  },

  displayGamePage() {
    $(".gameplay-page").toggle(".hide-class");
    $(".p1-name").text($('.plyr-input:eq(0)').val());
    $(".p2-name").text($('.plyr-input:eq(1)').val());
  },

  checkInput() {
  let noError = false;
  if (playerName[0].value) {
    $('.error1').removeClass('in').addClass('out');
  }
  if (!playerName[0].value) {
    $('.error1').removeClass('out').addClass('in');
  }
  if (playerName[1].value) {
    $('.error2').removeClass('in').addClass('out');
  }
  if (!playerName[1].value) {
    $('.error2').removeClass('out').addClass('in');
  } if (playerName[0].value && playerName[1].value) {
    noError = true;
  } if (noError) {
    this.loadDOM()
  }
  },
}

const playerName = $('.plyr-input');

export default domUpdates;
