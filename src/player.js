import domUpdates from './domUpdates.js'

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  updateScore(points, turn) {
    this.score += points;
    domUpdates.displayNewScore(this.score, turn);
  }

}
export default Player;
