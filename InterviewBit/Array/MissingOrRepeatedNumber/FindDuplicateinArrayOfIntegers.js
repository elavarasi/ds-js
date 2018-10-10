/**
 Given a read only array of n + 1 integers between 1 and n, find one number that repeats in linear time using less than O(n) space and traversing the stream sequentially O(1) times.

 Sample Input:
 [3 4 1 4 1]
 Sample Output:
 1

 If there are multiple possible answers ( like in the sample case above ), output any one.
 If there is no duplicate, output -1
 */


module.exports = self = {
  //param A : array of integers
  //return an integer
  repeatedNumber : function(A){
    let foundArray = [];  // Array who's index will be set based on found values
    for(var i=0;i<A.length;i++){
      if(foundArray[A[i]]){
        return A[i];
      } else {
        foundArray[A[i]] = 1;
        console.log(foundArray);
      }
    }
    return -1;
  }
};


console.log(self.repeatedNumber([3,4,1,4,1,6]));