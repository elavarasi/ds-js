/**
 Please Note:
 Another question which belongs to the category of questions which are intentionally stated vaguely.
 Expectation is that you will ask for correct clarification or you will state your assumptions before you start coding.

 Implement strStr().

 strstr - locate a substring ( needle ) in a string ( haystack ).
 Try not to use standard library string functions for this question.

 Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 NOTE: Good clarification questions:
 What should be the return value if the needle is empty?
 What if both haystack and needle are empty?
 For the purpose of this problem, assume that the return value should be -1 in both cases.
 **/
module.exports = self = {
  //param A : string
  //param B : string
  //return an integer
  strStr : function(A, B){

    let resultIndex = -1;
    // Check for undefined or negative cases
    if(A === "undefined" || A === null || A==="") {
      return resultIndex;
    }
    if(B === "undefined" || B === null || B==="") {
      return resultIndex;
    }

    // If A is smaller then B then we can't find B in A
    if(A.length < B.length) {
      return resultIndex;
    }
    l1:
    for(let i=0; i< A.length; i++) {
      if (A.charAt(i) === B.charAt(0)) {
        //check if A has sufficient characters for remaining letters in B
        if(A.length-i < B.length) {
          break;
        }

        let j = i;
        let k = 0;
        while (j < A.length && k < B.length && A.charAt(j) === B.charAt(k)) {
          j++;
          k++;
          if(k == B.length) {
            resultIndex = i;
            break l1;
          }
        }
      }
    }
    return resultIndex;
  }
};

//let A = "lossWorldss";
//let B = "World";

let A = "b";
let B = "b";
console.log(self.strStr(A,B));