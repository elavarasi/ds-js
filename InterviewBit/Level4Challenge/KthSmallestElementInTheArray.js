/**
 Find the kth smallest element in an unsorted array of non-negative integers.

 Definition of kth smallest element

 kth smallest element is the minimum possible n such that there are at least k elements in the array <= n.
 In other words, if the array A was sorted, then A[k - 1] ( k is 1 based, while the arrays are 0 based )
 NOTE
 You are not allowed to modify the array ( The array is read only ).
 Try to do it using constant extra space.

 Example:

 A : [2 1 4 3 2]
 k : 3

 answer : 2
 **/

module.exports = self = {
  //param A : array of integers
  //param B : integer
  //return an integer
  kthsmallest : function(A, B) {
    let i=0;
    let minpossiblevalue = Number.MAX_SAFE_INTEGER;
    let j = 0;
    let count = 0;

    while(i< A.length) {
      if(A[j] <= A[i]) {
        count ++;
      }
      j++;

      if(count >= B) {
        if(A[i] < minpossiblevalue) {
          minpossiblevalue = A[i];
        }
        i++;
        j=0;
        count = 0;
      }


      if(j == A.length) {
        //if(count >= B) {
        //  if(A[i] < minpossiblevalue) {
        //    minpossiblevalue = A[i];
        //  }
        //}
        i++;
        j=0;
        count=0;
      }
    }
    return minpossiblevalue;
  }
};


// let A = [2,1,4,3,2];
let A = [ 8, 16, 80, 55, 32, 8, 38, 40, 65, 18, 15, 45, 50, 38, 54, 52, 23, 74, 81, 42, 28, 16, 66, 35, 91, 36, 44, 9, 85, 58, 59, 49, 75, 20, 87, 60, 17, 11, 39, 62, 20, 17, 46, 26, 81, 92 ];
const B = 9;
console.log(self.kthsmallest(A,B));