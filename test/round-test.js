import chai from 'chai';
const expect = chai.expect;
import Round from '../src/round';
import Player from '../src/player';
import data from '../src/data';

let surveys1, answers1, playerT1, playerT2, round1;

describe('Round Class', function() {
  beforeEach(() => {
    surveys1 = { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' };
    answers1 = { answer: 'Alarm Clock', respondents: 34, surveyId: 3 };
    playerT1 = new Player('Steve');
    playerT2 = new Player('Jeff');
    round1 = new Round(surveys1, answers1, playerT1, playerT2);


  });

  it('should hold the one survey data', function() {
    expect(round1.survey).to.deep.equal({ id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' });
  });

  it('should hold player1 name', function() {
    expect(round1.player1.name).to.equal('Steve');
  });

  it('should hold player1 score', function() {
    expect(round1.player1.score).to.equal(0);
  });

  it('should hold the roundCount', function() {
    expect(round1.roundCount).to.equal(1);
  });

});
