/**
 Given a number N >= 0, find its representation in binary.

 Example:

 if N = 6,

 binary form = 110
 **/
//Correct answer
module.exports = self  = {
  //param A : integer
  //return a strings
  findDigitsInBinary : function(A){
    if (A == 0) {
      return '0';
    } else if (A == 1) {
      return '1';
    } else {
      let Quotient = A;
      let binaryFormString = '';
      while ( (Quotient>0) ) {
        let Reminder = Quotient % 2;
        binaryFormString = Reminder.toString() + binaryFormString;
        Quotient = Math.floor(Quotient / 2);
      }
      return binaryFormString
    }
  }
};


console.log(self.findDigitsInBinary(2));
