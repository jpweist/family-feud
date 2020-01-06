import $ from 'jquery';
import Player from './player';
import Turn from './turn';
import Round from './round';
import domUpdates from './domUpdates.js'
import Game from './game';
import './css/base.scss';
let game;

const playerName = $('.plyr-input');
let answerInput = $('.answer-input')



const getApiData = () => {
  fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data")
  .then(response => response.json())
  .then(apiData => startGame(apiData))
  .catch(error => console.log(error))
}
getApiData();

function startGame(data) {
  game = new Game(data.data);
  game.findSurveys();
}

$(".start-btn").click(() => {
  game.getPlayers($(".plyr-input:eq(0)").val(), $(".plyr-input:eq(1)").val());
  checkInput()
})

const checkInput = () => {
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
  domUpdates.loadDOM();
}
}

function flipCard() {
  // console.log('hi')
  $(this).toggleClass("flip");

}

function checkAnswer() {
  event.preventDefault();
  let currentAnswers = []
  let i = 1;
  game.surveys[0].answers.forEach(response => {
    currentAnswers.push(response.answer.toLowerCase())
    if (currentAnswers.includes(answerInput.val().toLowerCase())) {
      doThing(i, response);
      answerInput.val("")
    } else {
      console.log('wrong.')
    }
    i++;
  })
}

function doThing(i, response) {
  if(answerInput.val().toLowerCase() === $(`.answer${i}`).text().toLowerCase()) {
    game.player1.updateScore(response.respondents)
    console.log(game.player1.score)
    $(`.answer${i}`).closest('.answer-card').toggleClass("flip");
  }
}

// Event Listeners
$(".answer-card").click(flipCard);
$(".info-btn").click(domUpdates.openInfo)
$(".close-btn").click(domUpdates.closeInfo)
$(".new-game-btn").click(domUpdates.newGameBtn)
$(".new-game-btn-check").click(domUpdates.restartGame)
$(".new-game-btn-go-back").click(domUpdates.backToGame);
$('.quit-game-btn').click(domUpdates.quitGame)
$(".submit-btn").click(checkAnswer);
