//https://leetcode.com/problems/combination-sum-ii/description/
//Problem 40.
/**
 Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

 Each number in candidates may only be used once in the combination.

 Note:

 All numbers (including target) will be positive integers.
 The solution set must not contain duplicate combinations.
 Example 1:

 Input: candidates = [10,1,2,7,6,1,5], target = 8,
 A solution set is:
 [
 [1, 7],
 [1, 2, 5],
 [2, 6],
 [1, 1, 6]
 ]
 Example 2:

 Input: candidates = [2,5,2,1,2], target = 5,
 A solution set is:
 [
 [1,2,2],
 [5]
 ]
**/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a,b) => {return a-b});
  let finalResult = [];
  console.log(candidates);
  findSubsetThatSums(candidates, target, finalResult, []);
  return finalResult;
};

function findSubsetThatSums(candidates, target, finalResult, currentSet) {
  let currentSetSum = currentSet.length > 0 ? currentSet.reduce((total, num)=> {return total + num}) : 0;
  if(currentSetSum == target ) {
    finalResult.push(currentSet.slice(0));
  } else if (currentSetSum > target) {
    return;
  } else {
    for(let i=0;i<candidates.length; i++) {
      if(i>0 && candidates[i]==candidates[i-1]){
        //i++;
        continue;
      }
      currentSet.push(candidates[i]);
      let newCandidates = candidates.slice(i+1);
      findSubsetThatSums(newCandidates, target, finalResult, currentSet);
      currentSet.pop(candidates[i]);
    }
  }
}

//console.log(combinationSum([2,5,2,1,2],5));
//console.log(combinationSum([10,1,2,7,6,1,5],8));
console.log(combinationSum([2,2,2],2));