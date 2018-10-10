/**
 Given a list of non negative integers, arrange them such that they form the largest number.
 For example:
 Given [3, 30, 34, 5, 9], the largest formed number is 9534330.
 Note: The result may be very large, so you need to return a string instead of an integer.
 NOTE: You only need to implement the given function. Do not read input, instead use the arguments to the function. Do not print the output, instead return values as specified. Still have a doubt? Checkout Sample Codes for more details.


 Sorting all numbers in descending order is the simplest solution that occurs to us. But this doesn’t work.
 For example, 548 is greater than 60, but in the output, 60 comes before 548. As a second example, 98 is greater than 9, but 9 comes before 98 in the output.
 The solution is to use any comparison based sorting algorithm. Thus, instead of using the default comparison, write a comparison function myCompare() and use it to sort numbers.
 Given two numbers X and Y, how should myCompare() decide which number to put first – we compare two numbers XY (Y appended at the end of X) and YX (X appended at the end of Y).
 If XY is larger, then, in the output, X should come before Y, else Y should come before X.
 For example, let X and Y be 542 and 60. To compare X and Y, we compare 54260 and 60542. Since 60542 is greater than 54260, we put Y first.
 **/


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

module.exports = self = {
  //param A : array of integers
  //return a strings
  largestNumber : function(A){
    let onlyZeroArray = true;
    input.forEach((currentValue,index,array) => {
      if(currentValue > 0) {
        onlyZeroArray = false;
      }
      input[index] = currentValue.toString();
    });

    //handle [0,0,0,0,0] to return 0 instead of 00000
    if(onlyZeroArray) {
      return 0;
    }

    //Sort and then join the array result to a single string
    let sortedResult = input.sort(self.srtFn).join();
    console.log(sortedResult);

    var find = ',';
    var re = new RegExp(find, 'g');
    sortedResult = sortedResult.replace(re, '');
    console.log(sortedResult);
    return sortedResult;
  },
  srtFn: function(a,b) {
    let ab = parseInt(a + b);
    let ba = parseInt(b + a);
    console.log(ab);
    console.log(ba);
    if(ab<ba) {
      return 1;
    }
    if(ba<ab) {
      return -1;
    }
    return 0;
  }
};

//let input = [31,44,11,51,5,6,6,7,7];
//let input = [0,0,0,0,0];
let input = [ 472, 663, 964, 722, 485, 852, 635, 4, 368, 676, 319, 412 ];
let result = self.largestNumber(input);
console.log("Result is:");
console.log(result);