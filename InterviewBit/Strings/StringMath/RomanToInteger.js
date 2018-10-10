/**
 Given a roman numeral, convert it to an integer.

 Input is guaranteed to be within the range from 1 to 3999.

 Read more details about roman numerals at Roman Numeric System

 Example :

 Input : "XIV"
 Return : 14
 Input : "XX"
 Output : 20
 **/

module.exports = self = {
  //param A : string
  //return an integer
  romanToInt : function(A){
    let roman = {
      'X': 10,
      'V': 5,
      'I': 1,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };

    let resultInteger = 0;

    for(let i=0; i< A.length; i++) {
      if(i!== A.length-1 && roman[A.charAt(i)] < roman[A.charAt(i+1)] ) {
        resultInteger = resultInteger - roman[A.charAt(i)];
      } else {
        resultInteger = resultInteger + roman[A.charAt(i)];
      }
    }
    return resultInteger;
  }
};

//let A = "XIV";
let A = "XCIX";
console.log(self.romanToInt(A));


