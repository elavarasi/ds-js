/**

 Please Note:
 Another question which belongs to the category of questions which are intentionally stated vaguely.
 Expectation is that you will ask for correct clarification or you will state your assumptions before you start coding.

 Given an integer, convert it to a roman numeral, and return a string corresponding to its roman numeral version

 Input is guaranteed to be within the range from 1 to 3999.

 Example :

 Input : 5
 Return : "V"

 Input : 14
 Return : "XIV"
 Note : This question has a lot of scope of clarification from the interviewer.
 Please take a moment to think of all the needed clarifications and see the expected response using “See Expected Output”
 For the purpose of this question, https://projecteuler.net/about=roman_numerals has very detailed explanations.
 **/

module.exports = self = {
  //param A : integer
  //return a strings
  intToRoman : function(A){
    const romanMap = new Map();
    romanMap.set(1000, 'M');
    romanMap.set(900, 'CM');
    romanMap.set(500, 'D');
    romanMap.set(400, 'CD');
    romanMap.set(100, 'C');
    romanMap.set(90, 'XC');
    romanMap.set(50, 'L');
    romanMap.set(40, 'XL');
    romanMap.set(10, 'X');
    romanMap.set(9, 'IX');
    romanMap.set(5, 'V');
    romanMap.set(4, 'IV');
    romanMap.set(1, 'I');

    let result = '';

    while(A>0) {
      for (var eachkeyval of romanMap) {
        let key = eachkeyval[0];
        let value = eachkeyval[1];
        console.log(A);
        console.log(key + ' = ' + value);
        if (A >= key) {
          let nooftimes = Math.floor(A / key);
          for(let i=0; i< nooftimes; i++) {
            result = result.concat(value);
          }
          A = A % key;
          break;
        }
      }
    }

    return result;
  }
};

let A = 3889;
console.log(self.intToRoman(A));
