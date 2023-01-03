const Game = require('./game')

describe('game', () => {
  it ('sets up a game for 3 players', () =>{
    game = new Game();
    game.Setup(["Player1","Player2","Player3"])
    expect(game.num_of_players).toBe(3)
    expect(game.getPlayers()).toEqual(["Player1","Player2","Player3"])
  })
  it ("Plays a round of bowling" , () => {
    game = new Game();
    game.Setup(["Player1","Player2","Player3"])
    game.playRound()
  })
})