
class Scorecard{
  constructor(players){
    this.score = new Object();
    for (let i = 0; i < players.length; i++) {
      this.score[players[i]] = 0
    }
  }
  
  addFrame(frame, playerName){
    this.score[playerName] += frame.getTotal()

    console.log(`${playerName} total score: ${this.score[playerName]}`)
  }

  getTotal(playerName){
    return this.score[playerName]
  }
}

module.exports = Scorecard