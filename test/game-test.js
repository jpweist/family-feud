import chai from 'chai';
const expect = chai.expect;
import Game from '../src/game';
import Player from '../src/player';
import Turn from '../src/turn';
import Round from '../src/round';

import data from '../src/data.js';

let game1, surveys1, answers1, playerT1, playerT2, turn1, round1;



describe('Game Class', function() {
  beforeEach(() => {
    surveys1 = { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' };
    answers1 = { answer: 'Alarm Clock', respondents: 34, surveyId: 3 };
    playerT1 = new Player('Steve');
    playerT2 = new Player('Jeff');
    turn1 = new Turn(playerT1, answers1);
    round1 = new Round(surveys1, playerT1, playerT2, 1);

    game1 = new Game(round1, turn1);
  });

  it('should hold round and contain surveys', function() {
    expect(game1.round.surveys).to.deep.equal({ id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' });
  });

  it('should hold round player1 name', function() {
    expect(game1.round.player1.name).to.equal('Steve');
  });

  it('should hold round.player1 score', function() {
    expect(game1.round.player1.score).to.equal(0);
  });

  it('should hold round.player2 name', function() {
    expect(game1.round.player2.name).to.equal('Jeff');
  });

  it('should hold round.player2 score', function() {
    expect(game1.round.player2.score).to.equal(0);
  });

  it('should hold turn current player', function() {
    expect(game1.turn.player.name).to.equal('Steve')
  });

  it('should hold the turn answers', function() {
    expect(game1.turn.answers).to.deep.equal({ answer: 'Alarm Clock', respondents: 34, surveyId: 3 })
  });

});
