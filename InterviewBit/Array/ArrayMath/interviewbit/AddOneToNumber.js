/**
 * Given a non-negative number represented as an array of digits,

 add 1 to the number ( increment the number represented by the digits ).

 The digits are stored such that the most significant digit is at the head of the list.

 Example:

 If the vector has [1, 2, 3]

 the returned vector should be [1, 2, 4]

 as 123 + 1 = 124.
 **/


module.exports = self = {
  //param A : array of integers
  //return a array of integers
  plusOne : function(A){
    if(A.length==1 && A[0]==0) {
      return '1';
    }

    //remove leading 0's
    let index =0;
    let arraylength = A.length;
    while(index< A.length && A[index]===0) {
      index++;
    }
    A.splice(0, index);

    //reverse the array
    A.reverse();

    //Add one and keep carrying, the carry on until no more carry on.
    let carryon = 0;
    let sum = 0;
    for (let i=0; i<A.length; i++) {
      if(carryon > 0) {
        sum = A[i] + carryon;
      } else {
        sum = A[i] + 1;
      }

      if( sum <= 9 ) {
        A[i] = sum;
        break;
      } else {
        carryon = Math.floor(sum/10);
        let reminder = sum % 10;
        A[i] = reminder;
        //If we are already at the last array iteration and there is a carryon, then set the next element to it
        if(i=== A.length-1) {
          A[i+1] = carryon;
          break;
        }
      }
    }
    //reverse and return as a string
    return A.reverse().toString().replace(/\W+/g,'');

  }
};

//var input = [1,3,4,5,5,6,7,7,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,9,9,9];
//var input = [0,0,9,9,9];
var input = [ 6, 4, 7, 7, 8, 9 ];
//var input = [0];
console.log(self.plusOne(input));



/**

//Ela Approach one: This will not work, as for a larger number the precision is list
module.exports = self = {
  //param A : array of integers
  //return a array of integers
  plusOne : function(A){
    var output = A.join().replace(/\W+/g,'');
    return Number(output)+1;
  }
};

var input = [1,3,4,5,5,6,7,7,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];
console.log(self.plusOne(input));


 **/