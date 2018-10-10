/**
Given 2 non negative integers m and n, find gcd(m, n)

GCD of 2 integers m and n is defined as the greatest integer g such that g is a divisor of both m and n.
  Both m and n fit in a 32 bit signed integer.

  Example

m : 6
n : 9

GCD(m, n) : 3
NOTE : DO NOT USE LIBRARY FUNCTIONS
 **/

module.exports = self = {
  //param A : integer
  //param B : integer
  //return an integer
  gcd : function(A, B) {
    let gcd = 1;
    if (A == 1 || B == 1) {
      return gcd;
    }

    if (A == 0 || B == 0) {
      return Math.max(A,B);
    }


    let min = A;
    if(A > B){
        min = B;
    }

    for(let i=min; i>=0; i--) {
      console.log(i);
      if(A%i==0 && B%i==0 & i>gcd) {
        gcd = i
        break;
      }
    }

    return gcd;
  }
};

console.log(self.gcd(5,15));
