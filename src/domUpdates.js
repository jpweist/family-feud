import $ from 'jquery';

// Variables
let playerName = $('.plyr-input');
let startBtn = $('.start-btn');

$( document ).ready(function() {
  console.log("ready jQuery");
}
);

function openInfo() {
  $(".gameplay-page").append(`
    <section class="info-container">
      <button class="close-btn">X</button>
      <header class="plyr-info">
        <div class="plyr-section">
        <p>Player 1</p>
        <p>Score: 0</p>
        </div>
        <div class="plyr-section">
        <p>Player 2</p>
        <p>Score: 19</p>
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
}

function closeInfo() {
  $(".info-container").remove()
}

const startGame = () => {
  $('.instructions-page').toggleClass('hide-class');
  displayGamePage()
}

const displayGamePage = () => {
  document.querySelector('.main-container').insertAdjacentHTML('afterbegin', `
  <section class="gameplay-page">
    <section class="gameplay-top">
      <button class="info-btn">i</button>
      <h1 class="current-turn">It's ${playerName[0].value || playerName[1].value}'s turn!</h1>
    </section>
      <h2 class="question">Name Something You Do To An Item Before Giving It As A Gift</h2>
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
}


const displayError = () => {
  $('.start-btn').prop('disabled', true);
  if (playerName[0].value) {
    $('.error1').removeClass('in').addClass('out');
  }
  if (!playerName[0].value) {
    $('.error1').removeClass('out').addClass('in');
    $('.start-btn').prop('disabled', true);
  }
  if (playerName[1].value) {
    $('.error2').removeClass('in').addClass('out');
    $('.start-btn').prop('disabled', false);
  }
  if (!playerName[1].value) {
    $('.error2').removeClass('out').addClass('in');
    $('.start-btn').prop('disabled', true);
  } else if (playerName.value) {
    $('.start-btn').prop('disabled', false);
  }
}

// Event Listeners
$(startBtn).on('click', startGame);
$(playerName).on('keyup', displayError)
