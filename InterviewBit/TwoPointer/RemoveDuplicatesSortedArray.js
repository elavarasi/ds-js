/**
 * Remove duplicates from Sorted Array
 Given a sorted array, remove the duplicates in place such that each element appears only once and return the new length.

 Note that even though we want you to return the new length, make sure to change the original array as well in place

 Do not allocate extra space for another array, you must do this in place with constant memory.

 Example:
 Given input array A = [1,1,2],
 Your function should return length = 2, and A is now [1,2].
 */

// better solution
var removeDuplicates1 = function(A) {
  let n = A.length;
  if (n == 0 || n == 1)
    return n;

  // To store index of next unique element
  let j = 0;


  // Just maintaining another updated index i.e. j
  for (let i = 0; i < n-1; i++) {
    if (A[i] !== A[i+1]) {
      A[j++] = A[i];
      j++;
    }
  }
  A[j] = A[n-1];
  j++;
  return j;
};


// ela solution..not optimal
var removeDuplicates = function(A) {
  let i=0;
  while(i< A.length-1) {
    if(A[i]==A[i+1]) {
      A.splice(i,1)
    } else {
      i++;
    }
  }
  return A.length;
};


//let A = [2,1,-1,-1,0,1,1,3,4,5,5];
let A = [ 5000, 5000, 5000 ];
console.log(removeDuplicates1(A));