const Scorecard = require('./scorecard')

describe('scorecard', () => {it ('works out a players total', () =>
  {
    scorecard = new Scorecard(["Player1", "Player2"]);
    const mockedFrame = {getTotal: () => 8}
    scorecard.addFrame(mockedFrame, 'Player1')
    expect(scorecard.getTotal('Player1')).toBe(8)
    scorecard.addFrame(mockedFrame, 'Player1')
    expect(scorecard.getTotal('Player1')).toBe(16)
    expect(scorecard.getTotal('Player2')).toBe(0)
  })
  it('sets up a hash of players', () =>{
    scorecard = new Scorecard(["Player1", "Player2"]);
    expect(scorecard.getTotal("Player1")).toBe(0)
    expect(scorecard.getTotal("Player2")).toBe(0)
  })
})