var code = require('../main');
var expect = require('chai').expect;

describe('leapYear', function(){
  it('first ten', function(){
    expect(code.calcTax(1)).to.equal(0.1);
    expect(code.calcTax(10)).to.equal(1);
  })
})
describe('leapYear', function(){
  it('second ten', function(){
    expect(code.calcTax(15)).to.equal(1.35);
    expect(code.calcTax(20)).to.equal(1.7);
  })
})
describe('leapYear', function(){
  it('third ten', function(){
    expect(code.calcTax(25)).to.equal(1.95);
    expect(code.calcTax(30)).to.equal(2.2);
  })
})
describe('leapYear', function(){
  it('the rest', function(){
    expect(code.calcTax(40)).to.equal(2.5)
  })
})
