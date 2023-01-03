class Frame{
  constructor(ball1, ball2 = 0){
    this.ball1 = ball1;
    this.ball2 = ball2;
    this.total = ball1 + ball2;
  }

  getTotal(){
    return this.total;
  }

  isStrike(){
    if (this.ball1 === 10){
      return true;
    }
    else {
      return false;
    }
  }

  isSpare(){
    if (!this.isStrike() && this.getTotal() === 10){
      return true;
    }
    else {
      return false;
    }
  }

  


}

module.exports = Frame