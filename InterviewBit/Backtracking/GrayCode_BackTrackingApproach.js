/**
 Gray Code
 Asked in:
 Microsoft
 The gray code is a binary numeral system where two successive values differ in only one bit.

 Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

 For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

 00 - 0
 01 - 1
 11 - 3
 10 - 2
 There might be multiple gray code sequences possible for a given n.
 Return any such sequence.
 **/

module.exports = self = {
  //param A : integer
  //return a array of integers
  grayCode : function(A) {
    let result = [];
    let num = 0;
    this.grayCodeUtil(result, A, num);
    console.log(result);
    return result;
  },
  grayCodeUtil: function(result, A, num) {
    if(A ==0) {
      console.log("Print before pushing")
      console.log(num);
      result.push(num);
      return;
    }

    //ignore the bit
    this.grayCodeUtil(result, A-1, num);

    //invert the bit
    result.push(num);
    num = num ^ (1 << (A - 1));
    console.log("Print after invert")
    console.log(num);
    this.grayCodeUtil(result, A-1, num);


  }
};

self.grayCode(3);