import chai from 'chai';
const expect = chai.expect;
import Player from '../src/player';
let player1, player2;

describe('Player Class', function() {
  beforeEach(() => {
    player1 = new Player('Steve');
    player2 = new Player('Jeff');
  });

  it('Should have a name',function() {
    expect(player1.name).to.equal('Steve');
    expect(player2.name).to.equal('Jeff');
  });

  it('Should have an begining score of 0', function() {
    expect(player1.score).to.equal(0);
    expect(player2.score).to.equal(0);
  });

  it('Should be able to update its score', function() {
    player1.updateScore(65)
    expect(player1.score).to.equal(65);
  });

});
