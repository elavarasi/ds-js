/**
 You’re given a read only array of n integers. Find out if any integer occurs more than n/3 times in the array in linear time and constant additional space.

 If so, return the integer. If not, return -1.

 If there are multiple solutions, return any one.

 Example :

 Input : [1 2 3 1 1]
 Output : 1
 1 occurs 3 times which is more than 5/3 times.
 **/
module.exports = self = {
  //param A : array of integers
  //return an integer
  repeatedNumber : function(A){
    let repetitionsAllowed = Math.round(A.length/3);
    let foundArray = [];  // Array who's index will be set based on found values
    for(var i=0;i<A.length;i++){
      if(foundArray[A[i]] === repetitionsAllowed-1){
        return A[i];
      } else {
        if(foundArray[A[i]]){
          foundArray[A[i]] += 1;
        } else {
          foundArray[A[i]] = 1;
        }
        console.log(foundArray);
      }
    }
    return -1;
  }
};


console.log(self.repeatedNumber([4,13,4,5,4,1,2,4,5,6,6,6]));