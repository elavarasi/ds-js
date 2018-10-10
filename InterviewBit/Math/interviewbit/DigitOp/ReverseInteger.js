/**
 Reverse digits of an integer.
 Example1:
 x = 123,

 return 321
 Example2:

 x = -123,
 return -321
 Return 0 if the result overflows and does not fit in a 32 bit signed integer
 **/
/**
Hints
 Try to think how you can extract digits of a number using %(modulo) and /(floor division).
 You will have to be careful while handling corner cases.

 Here are some good questions to ask before coding.
 If the integer’s last digit is 0, what should the output be? ie, cases such as 10, 100.
 Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

 Tips:
 1) num % 10 gives you the last digit of a number.
 2) num / 10 gives you the number after removing the last digit.
 3) num * 10 + digit appends the digit at the end of the number.


 ela notes
 //The number 2,147,483,647 (or hexadecimal 7FFF,FFFF16) is the maximum positive value for a 32-bit signed binary integer in computing. It is therefore the maximum value for variables declared as integers (e.g., as int ) in many programming languages, and the maximum possible score, money, etc. for many video games.

 **/

module.exports = self = {
  //param A : integer
  //return an integer
  reverse : function(input) {

    //Negativen number check
    let negativeNum = false;
    if (input < 0) {
      negativeNum = true;
      input = Math.abs(input);
    }

    //Check for overflow, here we check if above 32 bit
    if (parseInt(input, 10) > 2147483647){
      return 0;
    }

    let newnumber = 0;
    let length = input.toString().length;
    for (let i = 0; i < length; i++) {
      let lastnumber = input % 10;
      let remainingnumber = Math.floor(input / 10);
      //number = lastnumber * Math.pow(10,length-(i+1)) + remainingnumber;
      newnumber = newnumber + lastnumber * Math.pow(10, length - (i + 1));

      //Important: Also check if the newly getting formed number will have a overflow
      if (parseInt(newnumber, 10) > 2147483647){
        return 0;
      }
      input = remainingnumber;
    }

    if(negativeNum) {
      return -Math.abs(newnumber);
    } else {
      return newnumber;
    }
  }

};

console.log(self.reverse(-1146467285));
