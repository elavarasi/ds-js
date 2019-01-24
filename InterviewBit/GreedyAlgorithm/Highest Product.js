/**
 Highest Product
 Asked in:
 Coursera
 Amazon
 Given an array of integers, return the highest product possible by multiplying 3 numbers from the array

 Input:

 array of integers e.g {1, 2, 3}
 NOTE: Solution will fit in a 32-bit signed integer
 Example:

 [0, -1, 3, 100, 70, 50]

 => 70*50*100 = 350000

**/

module.exports = self = {
  //param A : array of integers
  //return an integer
  maxp3 : function(A){
    var result = 1;
    if(A.size<3) {
      for(var i=0; i< A.size;i++) {
        result = result * A[i];
      }
      return result;
    }
    A.sort(function(a,b) {return b-a});
    return A[0] * A[1] * A[2];
  }
};


console.log(self.maxp3([0,-1,3,100,-70,-50]));
