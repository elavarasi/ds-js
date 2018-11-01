/**
 * Combination Sum II
 Asked in:
 Microsoft
 Amazon
 Infosys
 Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

 Each number in C may only be used once in the combination.

 Note:
 All numbers (including target) will be positive integers.
 Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
 The solution set must not contain duplicate combinations.
 Example :

 Given candidate set 10,1,2,7,6,1,5 and target 8,

 A solution set is:

 [1, 7]
 [1, 2, 5]
 [2, 6]
 [1, 1, 6]

 */
module.exports = self = {
  //param A : array of integers
  //param B : integer
  //return a array of array of integers
  combinationSum : function(candidates, target){
    candidates.sort(function(a,b) {return a-b});
    var finalResult = [];
    this.findSubsetThatSums(candidates, target, finalResult, []);
    return finalResult;
  },
  findSubsetThatSums: function(candidates, target, finalResult, currentSet) {
    var currentSetSum = currentSet.length > 0 ? currentSet.reduce(function(total, num) {return total + num}) : 0;
    if(currentSetSum == target ) {
      finalResult.push(currentSet.slice(0));
    } else if (currentSetSum > target) {
      return;
    } else {
      for(let i=0;i<candidates.length; i++) {
        currentSet.push(candidates[i]);
        var newCandidates = candidates.slice(i+1);
        this.findSubsetThatSums(newCandidates, target, finalResult, currentSet);
        currentSet.pop(candidates[i]);
      }
    }
  }
};


let input = [10,1,2,7,6,1,5];
let expected = 8;
let result = self.combinationSum(input, expected);
console.log(result);