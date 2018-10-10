/**
 Given a sorted array of integers, find the number of occurrences of a given target value. Your algorithm's runtime complexity must be in the
 order of O(log n)
 If target is not found in the array, return 0
 **/

module.exports = self = {
  //param A : array of integers
  //return an integer
  findCount : function(A, X){
    let low = 0;
    let high = A.length-1;
    let mid = Math.floor((low+(high-low))/2);
    let count = 0;

    if(A[mid] == X) {

      //find occurrence in the right of mid
      let rightindex = mid;
      while(A[rightindex]==X && rightindex<=high) {
        count ++;
        rightindex++
      }

      //find occurrence in the left of mid
      let leftindex = mid-1;
      while(A[leftindex]==X && leftindex>=low) {
        count ++;
        leftindex--;
      }
      return count;

    } else if (A[mid] < X) {
      let newarr = A.slice(mid+1);
      count = self.findCount(newarr,X);

    } else if (A[mid] > X) {
      let newarr = A.slice(low, mid);
      count = self.findCount(newarr,X);
    }

    return count;
  }
};

console.log(self.findCount([1,3,3,3,4,5,6,7,8,8,9,10], 88));