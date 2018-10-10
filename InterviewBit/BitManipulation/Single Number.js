/**
 Given an array of integers, every element appears twice except for one. Find that single one.

 Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

 Example :

 Input : [1 2 2 3 1]
 Output : 3

 **/

//Here we can't use extra memory and we have to do O(n). So both hash table and brute force will not work.


module.exports = self = {
  //param A : array of integers
  //return an integer
  singleNumber : function(A) {
    let singleNumber;
    for (let i=0; i< A.length; i++) {
      singleNumber ^= A[i];
    }
    return singleNumber;
  }
};

let A = [2,4,5,6,2,4,5,6,7];
console.log(self.singleNumber(A));
