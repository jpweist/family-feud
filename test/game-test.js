import chai from 'chai';
const expect = chai.expect;
import Game from '../src/game';
import data from '../src/data.js';
let game1, surveys1, answers1;



describe('Game Class', function() {
  beforeEach(() => {
    surveys1 = { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' };

    answers1 = { answer: 'Alarm Clock', respondents: 34, surveyId: 3 };

    game1 = new Game(surveys1, answers1);
    
  });

  it('should hold the surveys data', function() {
    expect(game1.surveys).to.deep.equal({ id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' });
  });

  it('should hold the answers data', function() {
    expect(game1.answers).to.deep.equal({ answer: 'Alarm Clock', respondents: 34, surveyId: 3 })
  })
});
