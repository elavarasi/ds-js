/**
 Determine whether an integer is a palindrome. Do this without extra space.

 A palindrome integer is an integer x for which reverse(x) = x where reverse(x) is x with its digit reversed.
 Negative numbers are not palindromic.

 Example :

 Input : 12121
 Output : True

 Input : 123
 Output : False
 **/


module.exports = self = {
  //param A : integer
  //return an integer
  isPalindrome : function(inputnumber){
    let number = inputnumber.toString();
    let i = 0;
    let j = number.length-1;
    let isPalindrome = 1;
    while(i!=j && j>i) {
      if(number[i]!=number[j]) {
        isPalindrome = 0;
        break;
      }
      i++;
      j--;
    }
    return isPalindrome;
  }
};


console.log(self.isPalindrome(2147447412));