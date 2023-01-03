const Game = require('./game')
const Scorecard = require('./scorecard');

describe('integration', () => {
  it ('sets up a game for 3 players', () =>{
    game = new Game();
    const players =[
    "Player1",
    "Player2",
    "Player3",
  ]
    game.Setup(players)
    expect(game.getPlayers()[0]).toBe("Player1")
    expect(game.getPlayers()[1]).toBe("Player2")
    expect(game.getPlayers()[2]).toBe("Player3")
    
    scorecard = new Scorecard(game.getPlayers());
    expect(scorecard.getTotal("Player1")).toBe(0)

  })
  it ('Plays a round for 3 players', () =>{
    game = new Game();
    const players =[
    "Player1",
    "Player2",
    "Player3",
  ]
    game.Setup(players)
    expect(game.getPlayers()[0]).toBe("Player1")
    expect(game.getPlayers()[1]).toBe("Player2")
    expect(game.getPlayers()[2]).toBe("Player3")
    
    scorecard = new Scorecard(game.getPlayers());
    expect(scorecard.getTotal("Player1")).toBe(0)
    game.playRound()
    // game.addToScorecard(scorecard, callback, "Player1", 2)
    // expect(scorecard.getTotal("Player1")).toBe(2)

  })
})