module.exports = {
  taxCalculator: function (income) {
    var tax = 0;
    if ( income <=10 ) {
      tax = income*0.1;
      return tax;
    }
    else if ( income <=20 ) {
      tax = (1+((income-10)*0.07));
      return tax;
    }
    else if ( income <=30 ) {
      tax = (1.7+ ((income-20)*0.05));
      return tax;
    }
    else {
     tax = (2.2+ ((income-30)*0.03));
     return tax;
   }
}
