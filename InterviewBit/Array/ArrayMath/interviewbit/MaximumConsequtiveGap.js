/**
 * Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

 Try to solve it in linear time/space.

 Example :

 Input : [1, 10, 5]
 Output : 5
 Return 0 if the array contains less than 2 elements.

 You may assume that all the elements in the array are non-negative integers and fit in the 32-bit signed integer range.
 You may also assume that the difference will not overflow.
 */


module.exports = self ={
  //param A : array of integers
  //return an integer
  maximumGap : function(A){
    A.sort(function(a,b) {{return a-b;}});

    let maxDistance = 0;
    for(let i=0; i<A.length-1; i++ ){
      let consecutiveGap = A[i+1]-A[i];
      if(consecutiveGap > maxDistance) {
        maxDistance = consecutiveGap;
      }
    }
    return maxDistance;
  }
};

let inputArray = [2,9,5,3,1,0];
console.log(self.maximumGap(inputArray));



