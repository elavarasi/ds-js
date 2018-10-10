/**
 Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

 More formally,

 G[i] for an element A[i] = an element A[j] such that
 j is maximum possible AND
 j < i AND
 A[j] < A[i]
 Elements for which no smaller element exist, consider next smaller element as -1.

 Example:

 Input : A : [4, 5, 2, 10, 8]
 Return : [-1, 4, -1, 2, 2]

 Example 2:

 Input : A : [3, 2, 1]
 Return : [-1, -1, -1]
 **/

var Stack = require('./StackImplementation_withfunction.js').Stack;

module.exports = self = {
  //param A : array of integers
  //return a array of integers
  prevSmaller : function(A){
    let result = [];
    let stack = new Stack();
    for(let i=0; i< A.length; i++) {
      while(!stack.isEmpty() && stack.peek() >= A[i]) {
        stack.pop();
      }
      if(stack.isEmpty()) {
        result.push(-1);
      } else {
        result.push(stack.peek());
      }
      stack.push(A[i]);
    }
    return result;
  }
};

//let input = [4,5,2,10,8];
let input = [ 39, 27, 11, 4, 24, 32, 32, 1 ];
console.log(self.prevSmaller(input));