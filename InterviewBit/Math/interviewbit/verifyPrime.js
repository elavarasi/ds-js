/**
Given a number N, verify if N is prime or not. Return 1 if N is prime, else return 0.
 **/

module.exports = self = {
  //param A : integer
  //return an integer
  isPrime : function(A){
    if(A==1) {
      return 0;
    }
    let sqrtA = Math.floor(Math.sqrt(A));
    for(let i=2; i<=sqrtA; i++) {
      if(A%i == 0) {
        return 0;
      }
    }
    return 1;
  }
};


console.log(self.isPrime(6));