const Frame = require("./frame");
const prompt = require("prompt-sync")({ sigint: true });
const Scorecard = require("./scorecard");

class Game{
  constructor(){
    let current_round = 0;
    let num_of_players = 0
    let players = []
  }

  getPlayers(){
    return this.players;
  }

  Setup(players){
    this.players = players;
    this.num_of_players = players.length;

  }

  playRound(scorecard){
    for(let i = 0;i<this.num_of_players;i++){
      let current_player = this.getPlayers()[i]
      let ball1 = prompt(`${current_player}, enter your frame one score: `)   
      ball1 = parseInt(ball1) 
      let ball2 = 0
      if (ball1 != 10)
      {
        ball2 = prompt(`${current_player}, enter your frame two score: `)    
        ball2 = parseInt(ball2) 
      }
      const frame = new Frame(ball1, ball2)

      scorecard.addFrame(frame, current_player)

    }
  }

  Play(scorecard)
  {
    const num_of_rounds = 10
    for (let round = 1; round < num_of_rounds+1; round++) {
      console.log(`Current Round: ${round}`)

      game.playRound(scorecard)
      
    }
  }

  
}


module.exports = Game

game = new Game
const players = ["Player1","Player2","Player3"]
scorecard = new Scorecard(players)
game.Setup(players)
game.Play(scorecard)
