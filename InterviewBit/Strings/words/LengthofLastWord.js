/**
 Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
 If the last word does not exist, return 0.
 Note: A word is defined as a character sequence consists of non-space characters only.

 Example:
 Given s = "Hello World",
 return 5 as length("World") = 5.
 Please make sure you try to solve this problem without using library functions. Make sure you only traverse the string once.
 **/

module.exports = self = {
  //param A : string
  //return an integer
  lengthOfLastWord : function(A){
    let lastwordlength = 0;
    l1:
    for(let i=A.length-1; i>=0; i--) {
      if(A.charAt(i)!== ' ') {
        let j = i;
       while(A.charAt(j)!==' ' && j>=0) {
          j--
       }
        lastwordlength = i - j;
        break l1;
      }
    }
    return lastwordlength
  }
};


let A = "Hello World  ";
console.log(self.lengthOfLastWord(A));


