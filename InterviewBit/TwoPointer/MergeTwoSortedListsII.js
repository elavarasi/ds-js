/**
 Given two sorted integer arrays A and B, merge B into A as one sorted array.

 Note: You have to modify the array A to contain the merge of A and B. Do not output anything in your code.
 TIP: C users, please malloc the result into a new array and return the result.
 If the number of elements initialized in A and B are m and n respectively, the resulting size of array A after your code is executed should be m + n

 Example :

 Input :
 A : [1 5 8]
 B : [6 9]

 Modified A : [1 5 6 8 9]
 **/


module.exports = self = {
  mergeTwoSortedList: (A,B) => {

    if (A.length == 0 || A === null || A === undefined) {
      return B;
    }

    if (B.length == 0 || B === null || B === undefined) {
      return A;
    }

    let i = 0;
    let j = 0;
    while (i < A.length && j < B.length) {
      if(A[i] < B[j]) {
        i++;
      } else {
        A.splice(i,0,B[j]);
        j++;
        i++;
      }
    }

    if(j< B.length) {
      while (j< B.length) {
        A.splice(i,0,B[j]);
        j++
      }
    }
    return A;
  }
};


//let A = [2,5,8,10];
//let B = [1,3,6,9,10,11,12];

//let A = [1,2,4];
//let B = [1,3,4];

let A = [];
let B = [];
console.log(self.mergeTwoSortedList(A,B));