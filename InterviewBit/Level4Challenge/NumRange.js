/**
 Given an array of non negative integers A, and a range (B, C),
 find the number of continuous subsequences in the array which have sum S in the range [B, C] or B <= S <= C

 Continuous subsequence is defined as all the numbers A[i], A[i + 1], .... A[j]
 where 0 <= i <= j < size(A)

 Example :
 A : [10, 5, 1, 0, 2]
 (B, C) : (6, 8)
 ans = 3
 as [5, 1], [5, 1, 0], [5, 1, 0, 2] are the only 3 continuous subsequence with their sum in the range [6, 8]
 */

module.exports = self = {
  //param A : array of integers
  //param B : integer
  //param C : integer
  //return an integer
  numRange: function(A,B,C) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let count = 0;

    while(i < A.length){
      sum = sum + A[j];
      if((sum >= B) && (sum <= C)){
        count++;
        j++;
      }
      else if(sum < B){
        j++;
      }
      else if(sum > C){
        i++;
        j = i;
        sum = 0;
      }
      if(j == A.length){
        sum = 0;
        i++;
        j = i;
      }
    }

    return count;
  }
};


let A = [ 80, 97, 78, 45, 23, 38, 38, 93, 83, 16, 91, 69, 18, 82, 60, 50, 61, 70, 15, 6, 52, 90 ];
let B = 99;
let C = 269;

console.log(self.numRange(A,B,C));