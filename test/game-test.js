import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
import domUpdates from '../src/domUpdates';
import Game from '../src/game';
import Player from '../src/player';
import Turn from '../src/turn';

chai.use(spies);

let game1, surveys1, answers1, playerT1, playerT2, turn1, gameData;

describe('Game Class', function() {
  beforeEach(() => {
    chai.spy.on(domUpdates, ['displayNewScore', 'displayNewQuestion', 'displayAnswers', 'displayRespondents'], () => {})

    gameData = {
      response_code: {
        version: '1.5',
        termsofService: 'http://frontend.turing.io/projects/family-feud.html',
        features: {
          surveys: 1,
          answers: 1
        },
      },
      surveys: [
        { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' },
        { id: 2, question: 'Name Something You Do To An Item Before Giving It As A Gift' },
        { id: 3, question: 'Name A Good Gift For Someone Who Is Always Late.' }
      ],
      answers: [
        { answer: 'Alarm Clock', respondents: 34, surveyId: 3 },
        { answer: 'Beer', respondents: 67, surveyId: 1 },
        { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },

      ]
      };
    surveys1 = { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' };
    answers1 = { answer: 'Alarm Clock', respondents: 34, surveyId: 3 };
    playerT1 = new Player('Steve');
    playerT2 = new Player('Jeff');
    turn1 = new Turn(playerT1, answers1);
    // round1 = new Round(surveys1, playerT1, playerT2, 1);

    game1 = new Game(gameData);
    game1.getPlayers('Steve', 'Jeff');


  });

  afterEach(() => {
    chai.spy.restore();
  });

  it('should hold the data', function() {

    expect(game1.data).to.deep.equal({
      response_code: {
        version: '1.5',
        termsofService: 'http://frontend.turing.io/projects/family-feud.html',
        features: {
          surveys: 1,
          answers: 1
        },
      },
      surveys: [
        { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' },
        { id: 2, question: 'Name Something You Do To An Item Before Giving It As A Gift' },
        { id: 3, question: 'Name A Good Gift For Someone Who Is Always Late.' }
      ],
      answers: [
        { answer: 'Alarm Clock', respondents: 34, surveyId: 3 },
        { answer: 'Beer', respondents: 67, surveyId: 1 },
        { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
      ]
      });
  });

  it('should hold round and contain surveys array that is empty', function() {
    expect(game1.surveys).to.deep.equal([]);
  });

  it('should hold player1 object', function() {
    expect(game1.player1).to.deep.equal({name: 'Steve', score: 0 });
  });

  it('should hold instigate player1 and player2 ', function() {
    expect(game1.player1.name).to.equal('Steve');
    expect(game1.player2.name).to.equal('Jeff');
  });

  it('should hold round.player1 name', function() {
    expect(game1.player1.name).to.equal('Steve');
  });

  it('should hold round.player2 score', function() {
    game1.getPlayers('Jeff', 'Mike');
    game1.findSurveys();
    game1.startRound('Jeff', 'Mike', 1);
    expect(game1.player2.score).to.equal(0);
  });

  it('should hold and track number of rounds', function() {
    expect(game1.roundCount).to.equal(1);
    game1.incrementRoundCount();
    expect(game1.roundCount).to.equal(2);
    game1.incrementRoundCount();
    expect(game1.roundCount).to.equal(3);
  });

  it('should have a method to incrementRoundCount', function() {
    game1.incrementRoundCount();
    // console.log(game1.data.surveys.length)
    expect(game1.roundCount).to.equal(2);
  });

  it('should have a hold 3 surveys', function() {
    game1.findSurveys();
    expect(game1.surveys.length).to.equal(3);
  });

});
