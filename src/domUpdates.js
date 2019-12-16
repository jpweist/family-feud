import $ from 'jquery';


let instructionsPage = document.querySelector('.instructions-page');
let startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', hideInstructions);

function hideInstructions() {
  instructionsPage.style.display = "none";
  displayGamePage()
}

function displayGamePage() {
  document.querySelector('.main-container').insertAdjacentHTML('afterbegin', `<section class="page-two-top"> 
  <button class="info-button">i</button>
  </section>
  <section class="player-turn">
    <h1 class="current-turn">It's Player 1's turn!</h1>
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
    </section>`
  )
}