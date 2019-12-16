import $ from 'jquery';
// Variables
let playerName = $('.player-name')
let startBtn = $('.start-btn');


const hideInstructions = () => {
  $('.instructions-page').toggleClass('hide-class');
  displayGamePage()
}

const displayGamePage = () => {
  console.log(playerName)
  document.querySelector('.main-container').insertAdjacentHTML('afterbegin', `
  <section class="gameplay-page">
  <section class="page-two-top"> 
  <button class="info-button">i</button>
  </section>
  <section class="player-turn">
    <h1 class="current-turn">It's ${playerName[0].value || playerName[1].value}'s turn!</h1>
    <h2 class="question">Name Something You Do To An Item Before Giving It As A Gift</h2>
    <table class="answers">
      <tr>
        <td>Buy it</td><td>4</td>
      </tr>
      <tr>
        <td>Remove Price tag</td><td>27</td>
      </tr>
      <tr>
        <td>Wrap it</td><td>61</td>
      </tr>
    </table>
Answers 
     <section class="page-two-bottom"> 
      <h3 class="answer">Enter Answer:</h3>
      <input type="text" class="answer-input" placeholder="Type your answer" />
      <button class="submit-button">Submit</button>
    </section>
    </section>`
  )
}

// Event Listeners
$(startBtn).on('click', hideInstructions);


