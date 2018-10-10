/** Done elas try
 Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 Example:
 "A man, a plan, a canal: Panama" is a palindrome.
 "race a car" is not a palindrome.
 Return 0 / 1 ( 0 for false, 1 for true ) for this problem
 **/

module.exports = self = {
  //param A : string
  //return an integer

  isPalindrome : function(A){
    A = A.toLowerCase();
    let isPalindrome = 0;

    if(A.length == 1) {
      isPalindrome = 1;
      return isPalindrome;
    }

    if(A.length == 0 || A ===undefined || A === null) {
      return isPalindrome;
    }

    let i=0;
    let j= A.length-1;
    while (i<=j) {

      if(i==j){
        isPalindrome = 1;
        break;
      }

      if(A.charAt((i)) == ' ' || (/[^a-zA-Z0-9]/.test(A.charAt(i)))) {
        i++;
        continue;
      }
      if(A.charAt((j)) == ' ' || (/[^a-zA-Z0-9]/.test(A.charAt(j)))) {
        j--;
        continue;
      }

      console.log(A.charAt((i)));
      console.log(A.charAt((j)));
      console.log(i);
      console.log(j);
      console.log("***");
      if(A.charAt(i)=== A.charAt(j)){
        i++;
        j--;
      } else {
        isPalindrome = 0;
        break;
      }

      if(i>=j){
        isPalindrome = 1;
      }
    }
    return isPalindrome;
  }
};

let A = "A man, a plan, a canal: Panama"; //expected 1
//let A = ".,"; //expected 1
console.log(self.isPalindrome(A));


