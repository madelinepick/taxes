var code = require('../main.js')
var expect = require('chai').expect

describe('leapYear', function(){
  it('first ten', function(){
    expect(code.taxCalculator(1)).to.equal(0.1);
    expect(code.taxCalculator(10)).to.equal(1);
  })
  it('second ten', function(){
    expect(code.taxCalculator(15)).to.equal(1.35);
    expect(code.taxCalculator(20)).to.equal(1.7);
  })
  it('third ten', function(){
    expect(code.taxCalculator(25)).to.equal(1.95);
    expect(code.taxCalculator(30)).to.equal(2.2);
  })
  it('the rest', function(){
    expect(code.taxCalculator(40)).to.equal(2.5)
  })
})
