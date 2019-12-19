import $ from 'jquery';
import domUpdates from './domUpdates.js'
import Game from './game';
import './css/base.scss';

let game;
const playerName = $('.plyr-input');

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
// Event Listeners

$(".info-btn").click(domUpdates.openInfo)
$(".close-btn").click(domUpdates.closeInfo)
