/**
 Find the largest continuous sequence in a array which sums to zero.

 Example:


 Input:  {1 ,2 ,-2 ,4 ,-4}
 Output: {2 ,-2 ,4 ,-4}

**/

module.exports = self = {
  //param A : array of integers
  //return a array of integers
  lszero : function(A){
    let sum = 0;
    let hashSum = {};
    let final_zero_subarray_length = 0;
    let start_index = -1;
    let end_index = -1;
    for(let i=0; i< A.length;i++) {
      sum = sum + A[i];

      if(sum === 0) {
        if(i+1 > final_zero_subarray_length) {
          final_zero_subarray_length = i + 1;
          start_index = 0;
          end_index = i;
        }
      }

      if(hashSum[sum] === undefined) {
        hashSum[sum] = i; //store the position where this sum was seen
      } else {
          // If the current sum was seen before, then the new subset has added up to zero.
          // Calculate the new subset length that adds to zero
          let new_zero_subarray_length = i - (hashSum[sum]);
          if(new_zero_subarray_length > final_zero_subarray_length) {
            final_zero_subarray_length = new_zero_subarray_length;
            start_index = hashSum[sum] + 1;
            end_index = i;
          }
      }
    }
    console.log(start_index);
    console.log(end_index);
    return A.slice(start_index, end_index + 1);
  }
};


console.log(self.lszero([15, -2, 2, -8, 1, 7, 10, 23]));
//console.log(self.lszero([ 1, 2, -2, 4, -4 ]));
//console.log(self.lszero([ 1, 2, -3, 3 ]));
//console.log(self.lszero([ -19, 8, 2, -8, 19, 5, -2, -23 ]));
//console.log(self.lszero([ 0, -10, 20, 3, 23, 10, -20, 2, 19, -29, 0 ]));
//console.log(self.lszero([ 10, 13, -1, 8, 29, 1, 24, 8, 21, 20, 21, -23, -21, 0 ]));