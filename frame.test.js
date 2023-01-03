const Frame = require('./frame')

describe('frame', () => {
  it ('calculates the score of an induvidual frame', () =>
    {
      frame = new Frame(2,2)
      expect(frame.getTotal()).toBe(4)
      strike = new Frame(10)
      expect(strike.getTotal()).toBe(10)
    })
    it ('works out if the frame is a strike', () => {
      spare = new Frame(9,1)
      expect(spare.getTotal()).toBe(10)
      expect(spare.isStrike()).toBe(false)
      strike = new Frame(10)
      expect(strike.getTotal()).toBe(10)
      expect(strike.isStrike()).toBe(true)
    })
    it ('works out if the frame is a spare', () => {
      spare = new Frame(9,1)
      expect(spare.getTotal()).toBe(10)
      expect(spare.isSpare()).toBe(true)
      spare = new Frame(3,7)
      expect(spare.getTotal()).toBe(10)
      expect(spare.isSpare()).toBe(true)
      strike = new Frame(10)
      expect(strike.getTotal()).toBe(10)
      expect(strike.isSpare()).toBe(false)
    })
})