import $ from 'jquery';

$( document ).ready(function() {
  console.log("ready jQuery");
}
);

$(".info-btn").click(openInfo);

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
