import $ from 'jquery';
import domUpdates from './domUpdates.js'
import Game from './game';
import './css/base.scss';
let game;
let turn = 1;

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
  domUpdates.loadPlayerNames(game);
  showFirstRound();
})

function showFirstRound() {
  $(".ninja-pic").addClass("slide-in")
  console.log("asf")
  setTimeout(function() {
    $(".round-announce").toggleClass("hide-class")
  }, 3000)
}

function showNextRound() {
  $(".round-num").text(game.roundCount + 1)
  $(".round-announce").toggleClass("hide-class")
  setTimeout(function() {
    $(".round-announce").toggleClass("hide-class")
  }, 3000)
}

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
  $(this).toggleClass("flip");
}

function checkAnswer() {
  changeName()
  event.preventDefault();
  let currentAnswers = []
  let i = 1;
  game.surveys[game.currentSurvey - 1].answers.forEach(response => {
    currentAnswers.push(response.answer.toLowerCase())
    if (currentAnswers.includes(answerInput.val().toLowerCase())) {
      takeTurn(i, response, turn);
      $('.incorrect').removeClass('in').addClass('out')
    } else {
      $('.incorrect').removeClass('out').addClass('in')
      setTimeout(function () {
        $('.incorrect').removeClass('in').addClass('out')
      }, 1500)
    }
    i++;
  })
  answerInput.val("");
  turn === 1 ? turn = 2 : turn = 1;
  switchIcons();
}

let switchIcons = () => {
  $(".ninja-pic").toggleClass("slide-in")
  $(".zombie-pic").toggleClass("slide-in")
}

function changeName() {
  $('.p2-name' ).toggleClass( "hide-class" )
  $('.p1-name' ).toggleClass( "hide-class" )
}

function takeTurn(i, response, turn) {
  if (answerInput.val().toLowerCase() === $(`.answer${i}`).text().toLowerCase()) {
    turn === 1 ?
      game.player1.updateScore(response.respondents, turn) :
      game.player2.updateScore(response.respondents, turn);
    $(`.answer${i}`).closest('.answer-card').toggleClass("flip");
    game.solvedCounter ++;
    nextRound()
  }
}

function nextRound() {
  if (game.solvedCounter % 3 === 0 && game.solvedCounter !== 9) {
    showNextRound();
    setTimeout(function () {
      game.incrementRoundCount()
      game.loadCurrentRound()
      game.startRound()
      $('.answer-card').toggleClass('flip')
    }, 3000)
  }
  checkForWinner()
}

function checkForWinner() {
  if (game.solvedCounter === 9) {
    setTimeout(function() {
      domUpdates.displayWinnerPage(game)
      getWinnerStats()
    }, 3000)
  }
}

function getWinnerStats() {
  let winner;
  game.player1.score > game.player2.score ? winner = game.player1 : winner = game.player2;
  let highScore = {
    appId: "1909CSKMJW",
    playerName: winner.name,
    playerScore: winner.score
  }
  sendHighScore(highScore);
}

const sendHighScore = async (score) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(score)
  };
  const response = await fetch(
    'http://fe-apps.herokuapp.com/api/v1/gametime/leaderboard',
    options
  );
  if (!response.ok) {
    throw new Error(
      `Could not post your sick score.  Play again.`
    );
  }
  const data = await response.json();
  return data;
};

const getHighScores = () => {
  fetch("http://fe-apps.herokuapp.com/api/v1/gametime/leaderboard")
    .then(response => response.json())
    // .then(scores => postLeaderboard(scores))
    .then(scores => postLeaderboard(scores.highScores))
    .catch(error => console.log(error))
}

getHighScores();

const postLeaderboard = (scores) => {
  let leaderScores = scores.filter(score => {
    // console.log(score)
    return score.appId === "1909CSKMJW";
  })
  console.log(leaderScores)
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
