/**
 Reverse bits of an 32 bit unsigned integer
 Example 1:
 x = 0,
 00000000000000000000000000000000
 =>
 00000000000000000000000000000000
 return 0

 Example 2:
 x = 3,

 00000000000000000000000000000011
 =>
 11000000000000000000000000000000
 return 3221225472
 **/


module.exports = self = {
  //param A : integer
  //return an integer
  reverse : function(A){
    let rev = 0;
    while (A > 0){
      rev = rev << 1;
      if (A & 1 == 1) {   //Checking if 1st bit is 1
        rev = rev ^ 1;
      }
      A = A >> 1;
    }
    return rev;
  }
};

console.log(self.reverse(8));


