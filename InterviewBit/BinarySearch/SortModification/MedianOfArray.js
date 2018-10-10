//incomplete
/**
 There are two sorted arrays A and B of size m and n respectively.

 Find the median of the two sorted arrays ( The median of the array formed by merging both the arrays ).

 The overall run time complexity should be O(log (m+n)).

 Sample Input

 A : [1 4 5]
 B : [2 3]

 Sample Output

 3
 NOTE: IF the number of elements in the merged array is even, then the median is the average of n / 2 th and n/2 + 1th element.
 For example, if the array is [1 2 3 4], the median is (2 + 3) / 2.0 = 2.5

 https://www.mathsisfun.com/median.html
 **/


module.exports = self = {
  findMedianSortedArrays: function (A,B) {
    let len = A.length + B.length;
    if(len % 2 == 1) {
      return self.findKth(A,0,B,0,len/2+1);
    } else {
      return (self.findKth(A,0,B,0,len/2) + self.findKth(A,0,B,0,len/2+1)) / 2.0;
    }
  },
  findKth: function(A, A_start, B, B_start, k) {
    if(A_start >= A.length) {
      return B[B_start + k-1];
    }

    if(B_start >= B.length) {
      return A[A_start + k-1];
    }

    if(k ==1) return Math.min(A[A_start], B[B_start]);

    let A_key = A_start + k/2 -1 < A.length ? A[A_start + k/2 -1] : Number.MAX_SAFE_INTEGER;
    let B_key = B_start + k/2 -1 < B.length ? B[B_start + k/2 -1] : Number.MAX_SAFE_INTEGER;

    if(A_key < B_key) {
      return self.findKth(A, A_start + k/2, B, B_start, k-k/2);
    } else {
      return self.findKth(A, A_start, B, B_start + k/2, k-k/2);
    }

  }
};

let A = [1,4,5];
let B = [2,3];
console.log(self.findMedianSortedArrays(A,B));

