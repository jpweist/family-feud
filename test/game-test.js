import chai from 'chai';
const expect = chai.expect;
import data from '../src/data';
import Game from '../src/game';
import Player from '../src/player';
import Turn from '../src/turn';
import Round from '../src/round';


let game1, surveys1, answers1, playerT1, playerT2, turn1, round1, gameData;



describe('Game Class', function() {
  beforeEach(() => {
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
        { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' }
      ],
      answers: [
          { answer: 'Alarm Clock', respondents: 34, surveyId: 3 }
      ]
      };
    surveys1 = { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' };
    answers1 = { answer: 'Alarm Clock', respondents: 34, surveyId: 3 };
    playerT1 = new Player('Steve');
    playerT2 = new Player('Jeff');
    turn1 = new Turn(playerT1, answers1);
    round1 = new Round(surveys1, playerT1, playerT2, 1);

    game1 = new Game(gameData);
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
        { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' }
      ],
      answers: [
          { answer: 'Alarm Clock', respondents: 34, surveyId: 3 }
      ]
      });
  });

  it('should hold round and contain surveys array that is empty', function() {
    expect(game1.surveys).to.deep.equal([]);
  });

  it('should hold player1 object', function() {
    expect(game1.player1).to.deep.equal({});
  });

  it.skip('should hold round.player1 score', function() {
    expect(game1.round.player1.score).to.equal(0);
  });

  it.skip('should hold round.player2 name', function() {
    expect(game1.round.player2.name).to.equal('Jeff');
  });

  it.skip('should hold round.player2 score', function() {
    expect(game1.round.player2.score).to.equal(0);
  });

  it.skip('should hold turn current player', function() {
    expect(game1.turn.player.name).to.equal('Steve')
  });

  it.skip('should hold the turn answers', function() {
    expect(game1.turn.answers).to.deep.equal({ answer: 'Alarm Clock', respondents: 34, surveyId: 3 })
  });

  it.skip('should have a method to to get surveys', function() {
    expect(true).to.equal(false);
  });

  it.skip('should have a method to start round', function() {
    expect(true).to.equal(false);
  });

  it.skip('should have a method to start fast round', function() {
    expect(true).to.equal(false);
  });

  it.skip('should have a method to make players', function() {
    expect(true).to.equal(false);
  });


});
