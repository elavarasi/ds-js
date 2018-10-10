/**
 Write a function to find the longest common prefix string amongst an array of strings.
 Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.
 As an example, longest common prefix of "abcdefgh" and "abcefgh" is "abc".
 Given the array of strings, you need to find the longest S which is the prefix of ALL the strings in the array.

 Example:
 Given the array as:
 [
 "abcdefgh",
 "aefghijk",
 "abcefgh"
 ]
 The answer would be “a”.
 **/


module.exports = self = {
  //param A : array of strings
  //return a strings
  longestCommonPrefix : function(A){
    if(A.length == 0 || A === 'undefined' || A === null) {
      return '';
    }
    let currentPrefix = A[0];

    for(let i=1; i<A.length; i++) {
      let parseLength = 0;
      if (A[i] === null || A[i] === undefined ) {
        return '';
      }

      if (A[i].length < currentPrefix.length) {
        parseLength = A[i].length;
        currentPrefix = currentPrefix.substring(0,parseLength);
      } else {
        parseLength = currentPrefix.length;
      }

      for(let j=0; j<parseLength; j++) {
        if(A[i].charAt(j)!== currentPrefix.charAt(j)) {
          console.log(currentPrefix);
          currentPrefix = currentPrefix.substring(0,j);
          break;
        }
      }
    }
    return currentPrefix;
  }
};

//let A =  [ "abcdefgh", "aefghijk", "abcefgh"];

let A = [ "aaaaaaaaaaaaaaaaaaaaaaa", "aaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" ]


console.log(self.longestCommonPrefix(A));
