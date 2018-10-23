/**
 Given a set of distinct integers, S, return all possible subsets.

 Note:
 Elements in a subset must be in non-descending order.
 The solution set must not contain duplicate subsets.
 Also, the subsets should be sorted in ascending ( lexicographic ) order.
 The list is not necessarily sorted.
 Example :

 If S = [1,2,3], a solution is:

 [
 [],
 [1],
 [1, 2],
 [1, 2, 3],
 [1, 3],
 [2],
 [2, 3],
 [3],
 ]
 **/

module.exports = self = {
  //param A : array of integers
  //return a array of array of integers
  subsets : function(A){
    A.sort((a,b) => {return a-b});
    let result = [[]];
    var fn = function(A, result) {
      if(A.length == 0) {
        return result;
      } else {
        let temp = [];
        for(let i=0; i< A.length; i++) {
          temp.push(A[i]);
          //result.push(Array.from(temp));  //note to get new array use Array.from (else reference updated.
          result.push(temp.slice())
        }
        A.splice(0,1);
        return fn(A, result);
      }
    };

    return fn(A, result);
  },
  subsets1 : function(A){
    var result = [];
    A.sort(function(a,b) {return a-b;});

    var recurse = function(currentIndex, soFar) {
      console.log("Inside function");
      console.log(soFar);
      result.push(soFar.slice());

      for (var i = currentIndex; i < A.length; i++) {
        console.log("Inside for loop");
        soFar.push(A[i]);
        recurse(i+1, soFar);
        console.log("After recursion line");
        soFar.pop();
      }
    };
    recurse(0, []);
    return result;
  }
};

//console.log(self.subsets([1,2,3]));
// console.log(self.subsets1([ 15, 20, 12, 19, 4 ]));
let finalResult = self.subsets1([ 15, 20, 12, 19, 4 ]);
console.log("*****", '\n', finalResult);

//4, 12, 15, 19, 20