/**
 Divide two integers without using multiplication, division and mod operator.

 Return the floor of the result of the division.

 Example:

 5 / 2 = 2
 **/

// 2 approaches here.
// option1: Keep subtracting divisor from dividend, until dividend becomes less than divisor. The dividend becomes the remainder and the number of times
// the subtraction is done becomes the quotient.
// Option2: More efficient:



module.exports = self = {
  //param A : integer
  //param B : integer
  //return an integer
  divide : function(A, B){
    var num = 0;
    if (B === 0) {
      return 2147483647;
    }
    if (A === 2147483647) {
      if (B === 1) {
        return 2147483647;
      } else if (B=== -1) {
        return -2147483648;
      }
    } else if ( A === -2147483648){
      if (B== -1) {
        return 2147483647;
      } else if (B ===1) {
        return -2147483648;
      }
    }
    var a = Math.abs(A);
    var b = Math.abs(B);
    var result = 0;
    var sign = A < 0 ^ B < 0 ? -1: 1;
    while (b <= a) {
      var shift = 0;
      while((b << shift) <= a && (b << shift) > 0) {
        shift++;
      }
      result = result | 1 << (shift -1);
      a = a - (b << shift -1);
    }

    return sign*result;



  }
};

let A=7; let B=2;
console.log(self.divide(A,B));

/**

module.exports = self = {
  //param A : integer
  //param B : integer
  //return an integer
  divide : function(dividend, divisor){
    //Calculate sign of divisor. It will be negative if one of the dividend or divisor is negative. Note if both are - or + then result is +ve
    let sign = (dividend<0) ^ (divisor<0) ? -1 : 1;

    //Remove sign of operands
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    //Initialize the quotient
    let quotient = 0; let temp = 0;


    //test down from the highest bit and accumulate the tentative value of valid bit
    for(let i=31; i>=0; --i) {
      if(temp + (divisor << i) <= dividend) {
        temp += divisor << i;
        quotient |= 1 << i;
      }
    }

    return sign * quotient;

  }
};



let A=5; let B=2;let count;
count << self.divide(A,B);
console.log(count);

 **/