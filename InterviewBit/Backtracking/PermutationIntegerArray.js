/** Good problem for back tracking and recursion -  https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
Permutations
Asked in:
Microsoft
Adobe
Google
Given a collection of numbers, return all possible permutations.

  Example:

    [1,2,3] will have the following permutations:

    [1,2,3]
    [1,3,2]
    [2,1,3]
    [2,3,1]
    [3,1,2]
    [3,2,1]
NOTE
No two entries in the permutation sequence should be the same.
  For the purpose of this problem, assume that all the numbers in the collection are unique.
  Warning : DO NOT USE LIBRARY FUNCTION FOR GENERATING PERMUTATIONS.
  Example : next_permutations in C++ / itertools.permutations in python.
  If you do, we will disqualify your submission retroactively and give you penalty points.

 **/

//Permutation - arrangement number or order. The number of permutation of set of n elements is given by n!
//e.g permutation of 1,2 are {1,2} and {2,1}


module.exports = self = {
  permute: function(s) {
    let permutations = [];
    this.permutation(s, 0, s.length-1, permutations);
    return permutations;
  },
  permutation: function(str, l, r, permutations) {
    if(l == r) {
      permutations.push(str.slice());  //or permutations.push(Array.from(str)); to deep copy from another array.
    } else {
      for(let i = l; i <= r; i++) {
        str = this.swap(str, l, i);
        this.permutation(str, l+1, r, permutations);
        str = this.swap(str, l, i);
      }
    }
  },
  swap: function(str, i, j) {
    let temp;
    temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    return str;
  }
};

console.log(self.permute([1,2,3]));

