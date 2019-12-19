// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import loadDOM from './domUpdates.js'
import Player from './player';
import Turn from './turn';
import Round from './round';
import Game from './game';


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';



let player1, player2, game;
let apiDataAnswers;
let apiDataSurveys;

function getApiData() {
  fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data")
  .then(response => response.json())
  .then(apiData => startGame(apiData))
  .catch(error => console.log(error))
}
getApiData();

// console.log(apiData);
function startGame(data) {
  // console.log(data);
  game = new Game(data.data);
  game.findSurveys();
  // console.log(game);
  loadDOM(game);
}


export default game;
