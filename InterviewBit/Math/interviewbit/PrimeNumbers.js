/**
 Given a number N, find all prime numbers upto N ( N included ).

 Example:
 if N = 7,
 all primes till 7 = {2, 3, 5, 7}
 Make sure the returned array is sorted.
 **/
module.exports = self = {
  //param A : integer
  //return a array of integers
  sieve : function(A){
    let primes = [];
    for(let i=2; i<=A; i++) {
     if(self.isPrime(i)) {
       primes.push(i);
     }
    }
    return primes;
  },
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

console.log(self.sieve(1));


