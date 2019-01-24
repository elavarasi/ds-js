/** Very good problem. Ela solved by herself

 Asked in:
 Facebook
 Amazon
 Adobe
 Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

 The same repeated number may be chosen from C unlimited number of times.

 Note:
 All numbers (including target) will be positive integers.
 Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
 The combinations themselves must be sorted in ascending order.
 CombinationA > CombinationB iff (a1 > b1) OR (a1 = b1 AND a2 > b2) OR … (a1 = b1 AND a2 = b2 AND … ai = bi AND ai+1 > bi+1)
 The solution set must not contain duplicate combinations.
 Example,
 Given candidate set 2,3,6,7 and target 7,
 A solution set is:

 [2, 2, 3]
 [7]
 **/


module.exports = self = {
  //param A : array of integers
  //param B : integer
  //return a array of array of integers
  combinationSum : function(A, B){
    A.sort(function(a,b) {return a-b});
    let finalResult = [];
    let currentSubset = [];
    this.findCombinationSum(A, currentSubset, finalResult, B);
    return finalResult;
  },
  findCombinationSum: function(inputlist, currentsubset, finalResult, targetSum) {
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
          this.findCombinationSum(newinputlist, currentsubset, finalResult,targetSum );

          const currentsubsetSum = currentsubset.length > 0  ? currentsubset.reduce(function(total, current) {return total + current}) : 0;
          currentsubset.pop(inputlist[i]);

          //Optimization to discontinue loop once current set sum is > expected as it will be >
          if(currentsubsetSum >= targetSum ) {
            break;
          }
        }
      }
  }
};


//console.log(self.combinationSum([2, 3, 6, 7], 7));
//console.log(self.combinationSum([ 8, 10, 6, 11, 1, 16, 8 ], 28));
console.log(self.combinationSum([ 8, 10, 6, 11, 1, 16, 8 ], 20));

/**
 * [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 ]
 * [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 ]
 * [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 ]
 * [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 10 ]
 * [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 11 ]
 * [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 ]
 * [1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 8 ]
 * [1 1 1 1 1 1 1 1 1 1 1 1 6 10 ]
 * [1 1 1 1 1 1 1 1 1 1 1 1 8 8 ]
 * [1 1 1 1 1 1 1 1 1 1 1 1 16 ]
 * [1 1 1 1 1 1 1 1 1 1 1 6 11 ]
 * [1 1 1 1 1 1 1 1 1 1 6 6 6 ]
 * [1 1 1 1 1 1 1 1 1 1 8 10 ]
 * [1 1 1 1 1 1 1 1 1 8 11 ]
 * [1 1 1 1 1 1 1 1 6 6 8 ]
 * [1 1 1 1 1 1 1 1 10 10 ]
 * [1 1 1 1 1 1 1 10 11 ]
 * [1 1 1 1 1 1 6 6 10 ]
 * [1 1 1 1 1 1 6 8 8 ]
 * [1 1 1 1 1 1 6 16 ]
 * [1 1 1 1 1 1 11 11 ]
 * [1 1 1 1 1 6 6 11 ]
 * [1 1 1 1 6 6 6 6 ]
 * [1 1 1 1 6 8 10 ]
 * [1 1 1 1 8 8 8 ]
 * [1 1 1 1 8 16 ]
 * [1 1 1 6 8 11 ]
 * [1 1 6 6 6 8 ]
 * [1 1 6 10 10 ]
 * [1 1 8 8 10 ]
 * [1 1 10 16 ]
 * [1 6 10 11 ]
 * [1 8 8 11 ]
 * [1 11 16 ]
 * [6 6 6 10 ]
 * [6 6 8 8 ]
 * [6 6 16 ]
 * [6 11 11 ]
 * [8 10 10 ]
 */
