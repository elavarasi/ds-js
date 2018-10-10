//Read about bit operations before going through this one

/**
 You are given a read only array of n integers from 1 to n.
 Each integer appears exactly once except A which appears twice and B which is missing.
 Return A and B.
 Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 Note that in your output A should precede B.
 Example:
 Input:[3 1 2 5 3]
 Output:[3, 4]
 A = 3, B = 4
 */
//"use strict";
module.exports = self = {
  //param A : array of integers
  //return a array of integers
  repeatedNumber : function(A){
    var xor = 0;
    for (var i = 0; i < A.length; i++) {
      xor ^= i + 1;
      xor ^= A[i]
    }

    var matchBit = 1;
    while (!(xor & matchBit)) matchBit <<= 1;

    var x = 0, y = 0;
    for (var i = 0; i < A.length; i++) {
      var n = i + 1;

      if (A[i] & matchBit) x ^= A[i];
      else y^= A[i];

      if (n & matchBit) x ^= n;
      else y ^= n
    }

    var dup = 0, missing = 0;
    for (var i = 0; i < A.length; i++) {
      if (A[i] == x) {
        dup = x;
        missing = y;
        break
      }
      else if (A[i] == y) {
        dup = y;
        missing = x;
        break
      }
    }

    return [dup, missing]
  }
};


console.log(self.repeatedNumber([1,2,3,5,1]));

