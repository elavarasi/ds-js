/**done
 Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
 Find all unique triplets in the array which gives the sum of zero.

 Note:

 Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
 The solution set must not contain duplicate triplets. For example, given array S = {-1 0 1 2 -1 -4}, A solution set is:
 (-1, 0, 1)
 (-1, -1, 2)
 **/


/** solution approach
 * 1. Sort all element of array
 2. Run loop from i=0 to n-2.
 Initialize two index variables l=i+1 and r=n-1
 4. while (l < r)
 Check sum of arr[i], arr[l], arr[r] is
 zero or not if sum is zero then print the
 triplet and do l++ and r--.
 5. If sum is less than zero then l++
 6. If sum is greater than zero then r--
 7. If not exist in array then print not found.
 *https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/
 *
 */

module.exports = self = {
  //param A : array of integers
  //return a array of array of integers
  threeSum : function(A) {
    let threeSumResult = [];
    A.sort((a,b)=> {return a-b});

    for(let i=0; i< A.length-2; i++) {
      let l=i+1;
      let r = A.length-1;
      while(l<r){
        if (A[i]+A[l]+A[r] === 0) {
          let tripplet = [A[i],A[l],A[r]];
          threeSumResult.push(tripplet);
         //skip duplicates of l and go to next new number
          while(l<r && A[l]==A[l+1]) {
            l++;
          }
          //skip duplicates of r and go to next new number
          while(r>l && A[r]==A[r-1]) {
            r--;
          }

          l++;
          r--;
        } else if (A[i]+A[l]+A[r] < 0) {
          l++;
        } else {
          r--;
        }
      }

      //skip duplicates of i and go to next new number
      while(i< A.length && A[i]==A[i+1]) {
        i++;
      }

    }
    return threeSumResult;
  }
};

//let A = [0, -1, 2, -3,2 ,7,8,9,-6, 100];
let A = [ 1, -4, 0, 0, 5, -5, 1, 0, -2, 4, -4, 1, -1, -4, 3, 4, -1, -1, -3 ];
console.log(self.threeSum(A));