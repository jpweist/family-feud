import $ from 'jquery';
import apiData from '../src/index.js';
import Player from './player';
import Game from './game';
import Turn from './turn';
import Round from './round';
import './index';
import data from './data.js';

const domUpdates = {
  openInfo() {
    $(".gameplay-page").append(`
      <section class="info-container">
        <button class="close-btn">X</button>
        <header class="plyr-info">
          <div class="plyr-section">
          <p>${player1.name}</p>
          <p>Score: ${player1.score}</p>
          </div>
          <div class="plyr-section">
            <p>${player2.name}</p>
            <p>Score: ${player2.score}</p>
          </div>
        </header>
        <div class="round-info">
        <p>ROUND</p>
        <p>1</p>
        </div>
        <button class="leaderboard-btn">Leaderboard</button>
        <div class="new-quit-container">
          <button class="new-game-btn">New Game</button>
          <button class="quit-game-btn">Quit Game</button>
        </div>
      </section>`)
  $(".close-btn").click(closeInfo);
  },

  closeInfo() {
    $(".info-container").remove();
  },

  loadDOM() {
  $('.instructions-page').toggleClass('hide-class');
  // game.findSurveys();
  instantiatePlayers();
  displayGamePage();
  randomizeSurvey();
  console.log('load dom')
  },

  instantiatePlayers() {
  player1 = new Player(playerName[0].value);
  player2 = new Player(playerName[1].value);
  },

  randomizeSurvey() {
  console.log(Game.data)
  let randomSurvey = data.surveys.find(survey => {
    if (randomNum === survey.id) {
      loadAnswers();
      let round1 = new Round(survey.question)
      document.querySelector('.question').insertAdjacentHTML('afterbegin', `
      ${round1.survey}`
    )}
  })
  },


  loadAnswers() {
  answers = data.answers.filter(answer => {
    return randomNum === answer.surveyId
  })
  return answers;
  },

  displayGamePage() {
  console.log('hi', )
  document.querySelector('.main-container').insertAdjacentHTML('afterbegin', `
  <section class="gameplay-page">
    <section class="gameplay-top">
      <button class="info-btn">i</button>
      <h1 class="current-turn">It's ${player1.name}'s turn!</h1>
    </section>
      <h2 class="question"></h2>
      <div class="answers-container">
        <table class="answers">
          <tr>
            <td>Buy it</td><td>4</td>
          </tr>
          <tr>
            <td>Remove Price tag</td>
            <td>27</td>
          </tr>
          <tr>
            <td>Wrap it</td><td>61</td>
          </tr>
        </table>
      </div>
      <form label="Answer input" class="answer-form">
        <h3 class="answer-label">Enter Answer</h3>
        <input type="text" class="answer-input" placeholder="Type your answer" />
        <button class="submit-btn">Submit</button>
      </form>

  </section>`
  )
  $(".info-btn").click(openInfo);
  },

  displayError() {
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
    loadDOM()
  }
  },
}
// Event Listeners
$(startBtn).on('click', displayError);

const playerName = $('.plyr-input');
const startBtn = $('.start-btn');
let randomNum = Math.floor(Math.random() * 15 + 1);
let player1, player2;
let answers;

export default domUpdates;
