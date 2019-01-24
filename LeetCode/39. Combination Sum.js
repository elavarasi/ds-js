//39. Combination Sum

/**https://leetcode.com/problems/combination-sum/description/

 Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

 The same repeated number may be chosen from candidates unlimited number of times.

 Note:

 All numbers (including target) will be positive integers.
 The solution set must not contain duplicate combinations.
 Example 1:

 Input: candidates = [2,3,6,7], target = 7,
 A solution set is:
 [
 [7],
 [2,2,3]
 ]
 Example 2:

 Input: candidates = [2,3,5], target = 8,
 A solution set is:
 [
 [2,2,2,2],
 [2,3,3],
 [3,5]
 ]

 **/

var combinationSum = function(candidates, target) {
  candidates.sort(function(a,b) {return a-b});
  let finalResult = [];
  let currentSubset = [];
  findCombinationSum(candidates, currentSubset, finalResult, target);
  return finalResult;
};

function findCombinationSum(inputlist, currentsubset, finalResult, targetSum) {
  const currentSum = currentsubset.length > 0  ? currentsubset.reduce(function(total, current) {return total + current}) : 0;
  if(currentSum === targetSum) {
    finalResult.push(currentsubset.slice(0));
  } else if (currentSum > targetSum) {
    return;
  } else {
    for(let i=0; i<inputlist.length; i++ ) {
      //To avoid duplicates when there are repetitions in input
      if(i>0 && inputlist[i]==inputlist[i-1]){
        continue;
      }

      //To iterate only on the right elements
      let newinputlist = inputlist.slice(i);

      currentsubset.push(inputlist[i]);
      findCombinationSum(newinputlist, currentsubset, finalResult,targetSum );

      const currentsubsetSum = currentsubset.length > 0  ? currentsubset.reduce(function(total, current) {return total + current}) : 0;
      currentsubset.pop(inputlist[i]);

      //Optimization to discontinue loop once current set sum is > expected as it will be >
      if(currentsubsetSum >= targetSum ) {
        break;
      }
    }
  }
}

console.log(combinationSum([2,3,6,7], 7));