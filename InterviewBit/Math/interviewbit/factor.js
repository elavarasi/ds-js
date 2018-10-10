/**
Given a number N, find all factors of N.
 Example:

N = 6
factors = {1, 2, 3, 6}
Make sure the returned array is sorted.
 **/


/*Factors of number always exists in pairs called as co-factors
example if 36 is divisible by 4, it also means 9 can also divide 36
 https://www.youtube.com/watch?v=dolcMgiJ7I0&feature=player_embedded

*/


// Even this is Not optimal solution //Time limit exceeded
module.exports = self = {
  getFactors: function(A) {
    let factors = [];
    let sqtA = Math.sqrt(A);
    for (let i=1; i<=sqtA; i++) {
      if(A%i === 0) {
        factors.push(i);
        if(i != sqtA) {
          factors.push(A/i);
        }
      }
    }

    factors.sort(function(a,b){return a-b});

    //At this point the results are not in sorted order. So if sorting is needed then handle it
    return factors;
  }
};

console.log(self.getFactors(32));



/**

// Works but Not optimal solution //Time limit exceeded
module.exports = self = {
  getFactors: function(A) {
    let factors = [];
    for (let i=1; i<=A; i++) {
      if(A %i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
};

console.log(self.getFactors(6));


**/

