class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  updateScore(points) {
    this.score += points;
  }

}
export default Player;
