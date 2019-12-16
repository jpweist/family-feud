import chai from 'chai';
const expect = chai.expect;

import Player from '../src/player';
import Turn from '../src/turn';

let turn1, answers1, playerT1, playerT2;

describe('Turn Class', function() {
  beforeEach(() => {
    answers1 = { answer: 'Alarm Clock', respondents: 34, surveyId: 3 };
    playerT1 = new Player('Steve');
    playerT2 = new Player('Jeff');
    turn1 = new Turn(playerT1, answers1);
  });

  it('should hold the current player', function() {
    expect(turn1.player.name).to.equal('Steve');
  });

  it('should hold the answers', function() {
    expect(turn1.answers).to.deep.equal({ answer: 'Alarm Clock', respondents: 34, surveyId: 3 });
  })

});
