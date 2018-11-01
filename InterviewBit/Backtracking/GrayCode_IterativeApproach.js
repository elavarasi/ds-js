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
    if (A <= 0) {
      return;
    }
    let result = [];
    result.push(0);
    result.push(1);
    let i=A;
    let j;
    for(i=2; i<=A; i++) {
      for(let j=i-1; j>=0; j--) {
        result.push(result[j]);
      }
      for(j=0; j<i; j++) {
        result[j] = '0' + result[j];
      }
      for(j=i; j<2*i; j++) {
        result[j] = '1' + result[j];
      }
    }
    console.log(result);
  }
};

self.grayCode(2);