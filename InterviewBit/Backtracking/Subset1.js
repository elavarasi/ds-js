/**
 Subset
 Asked in:
 Amazon
 Microsoft
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
  subsets: function(s) {
    let finalResultSet = [[]];
    let intermediateResultSet = [[]];
    const r = s.length;
    this.getSubset(s, 0, r, intermediateResultSet, finalResultSet);
    return finalResultSet;
  },
  getSubset: function(s, l, r, intermediateResultSet, finalResultSet) {
    if(l === r) {
      return;
    } else {
      for(let i=l; i<r; i++) {
        intermediateResultSet = this.pushToSet(intermediateResultSet, s[i], finalResultSet);
        this.getSubset(s, i+1, r, intermediateResultSet, finalResultSet);
        intermediateResultSet = this.popFromSet(intermediateResultSet);
      }
    }
  },
  pushToSet: function(intermediateResultSet, a, finalResultSet) {
    for(let i=0; i<intermediateResultSet.length; i++) {
      intermediateResultSet[i].push(a);
    }
    console.log(finalResultSet);
    finalResultSet.push(intermediateResultSet[0].slice());
    return intermediateResultSet;
  },
  popFromSet: function(intermediateResultSet) {
    for(let i=0; i<intermediateResultSet.length; i++) {
      intermediateResultSet[i].pop();
    }
    return intermediateResultSet;
  }
};

console.log(self.subsets([1,2,3]));