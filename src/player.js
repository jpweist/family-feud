import domUpdates from './domUpdates.js'

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  updateScore(points) {
    this.score += points;
    domUpdates.displayNewScore(this.score);
  }

}
export default Player;
