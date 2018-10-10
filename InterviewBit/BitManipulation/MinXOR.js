/**
Given an array of N integers, find the pair of integers in the array which have minimum XOR value. Report the minimum XOR value.
 Examples :
Input
0 2 5 7
Output
2 (0 XOR 2)
Input
0 4 7 9
Output
3 (4 XOR 7)

Constraints:
 2 <= N <= 100 000
  0 <= A[i] <= 1 000 000 000
 **/

module.exports = self = {
  //param A : array of integers
  //return an integer
  findMinXor : function(A){
    A.sort((a,b) => {return b-a});  //remember to sort in descending order, else result will be incorrect
    console.log(A);

    let minXOR = Number.MAX_SAFE_INTEGER;

    for(let i=0; i< A.length-1; i++) {
      if((A[i] ^ A[i+1]) < minXOR) {
        minXOR = A[i] ^ A[i+1];
      }
    }
    return minXOR;
  }
};

//let A = [5,3,7,8,4,2,3,1];
let A = [ 15, 5, 1, 10, 2 ];
console.log(self.findMinXor(A));
