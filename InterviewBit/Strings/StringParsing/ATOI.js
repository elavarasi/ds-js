
/**
There are certain questions where the interviewer would intentionally frame the question vague.
  The expectation is that you will ask the correct set of clarifications or state your assumptions before you jump into coding.
  Implement ATOI to convert a string to an integer.
  Example :

Input : "9 2704"
Output : 9
Note: There might be multiple corner cases here. Clarify all your doubts using “See Expected Output”.

Questions:
 Q1. Does string contain whitespace characters before the number? Yes
 Q2. Can the string have garbage characters after the number? Yes. Ignore it.
 Q3. If no numeric character is found before encountering garbage characters, what should I do? Return 0.
 Q4. What if the integer overflows? Return INT_MAX if the number is positive, INT_MIN otherwise.


 The following cases should be considered for this problem:
 1. null or empty string
 2. white spaces
 3. +/- sign
 4. calculate real value
 5. handle min & max

 Warning : DO NOT USE LIBRARY FUNCTION FOR ATOI.
 If you do, we will disqualify your submission retroactively and give you penalty points.
  **/


module.exports = self = {
  //param A : string
  //return an integer
  atoi : function(A){
    // Handle if input string is undefined or null or empty
    if(A === undefined || A === null || A === "") {
      return 0;
    }

    let resultNumber = 0; let noOfDigitsCounter = 0; let numbersStarted = false;
    let sign = 1;
    for (let i=0; i< A.length; i++) {
      // Handle white spaces before the number start / beginning of string white spaces.
      if(A.charAt(i) === " " && !numbersStarted ) {
        continue;
      }

      // Handle strings with negative numbers
      else if(A.charAt(i) === '-' && !numbersStarted) {
        sign = sign * -1;
        numbersStarted = true;
        continue;
      }

      // Handle strings with negative numbers
      else if(A.charAt(i) === '+' && !numbersStarted) {
        sign = sign * +1;
        numbersStarted = true;
        continue;
      }

      // Handle all numbers
      else if(A.charAt(i) >= '0' && A.charAt(i) <= '9') {
        //resultNumber = (resultNumber * Math.pow(10, noOfDigitsCounter)) + A.charAt(i) * 1;
        resultNumber = (resultNumber * 10) + A.charAt(i) * 1;
        noOfDigitsCounter ++;
        numbersStarted = true;
      }
      else break;
    }

    resultNumber = resultNumber * sign;

    //Handle max safe integer
    if( resultNumber > 2147483647) {
      resultNumber =  2147483647;
    }

    //Handle min safe integer
    if( resultNumber < -2147483648) {
      resultNumber=  -2147483648;
    }

    return resultNumber;
  }
};


//let A = "   -1235#22";
//let A = "9 2704 01885D 9M 65291S844404U7463";
// let A =  "- 5 88C340185Q 71 8079 834617385 2898422X5297Z6900";  //This should return 0 as after - there is a space
// let A = "5121478262 8070067M75 X199R 547 8C0A11 93I630 4P4071 029W433619 M3 5 14703818 776366059B9O43393"; //Handle max int should return 2147483647
//let A = "+40Q285596141 08188 548 H 370810773580";
let A = "-88297 248252140B12 37239U4622733246I218 9 1303 44 A83793H3G2 1674443R591 4368 7 97";

console.log(self.atoi(A));