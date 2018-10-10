/**
 Given an input string, reverse the string word by word.

 Example:

 Given s = "the sky is blue",

 return "blue is sky the".

 A sequence of non-space characters constitutes a word.
 Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
 If there are multiple spaces between words, reduce them to a single space in the reversed string.
 **/


module.exports = self = {
  //param A : string
  //return nothing
  reverseWords : function(A) {
    let temp = '';
    for(let i=0; i< A.length; i++) {
      if(A.charAt(i) !== ' ') {
        let j = i;
        while(A.charAt(j)!==' ' && j< A.length) {
          j++
        }
        if (temp!==' ') {temp = ' ' + temp}
        temp = A.substring(i, j).concat(temp);
        i=j;
      }
    }
    return temp;
  }
};


//let A = "This is Ela progressing  ";
let A = "fwbpudnbrozzifml osdt ulc jsx kxorifrhubk    ouhsuhf sswz qfho dqmy sn myq igjgip iwfcqq   ";
console.log(self.reverseWords(A));
