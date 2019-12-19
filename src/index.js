// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import domUpdates from './domUpdates.js'
import Game from './game';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

let game;

const getApiData = () => {
  fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data")
  .then(response => response.json())
  .then(apiData =>
    startGame(apiData.data))
  .catch(error => console.log(error))
}
getApiData();

const startGame = (data) => {
  game = new Game(data);
  // game.findSurveys();
}

$(".start-btn").click(() => {
  game.getPlayers($(".plyr-input:eq(0)").val(), $(".plyr-input:eq(1)").val());
  domUpdates.checkInput()
})

const doThing = e => {
  if($(e.target).hasClass("info-btn")) {
  $(".player1-score").text(game.player1.score)
  }
}

$(".info-btn").click(domUpdates.openInfo);
$(".close-btn").click(domUpdates.closeInfo)
