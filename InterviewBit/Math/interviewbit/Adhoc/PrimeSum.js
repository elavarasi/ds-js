/**
 Given an even number ( greater than 2 ), return two prime numbers whose sum will be equal to given number.
 NOTE A solution will always exist. read Goldbach’s conjecture
**/

//The below solution is perfectly fine, but it exceeds the time limite. Need a better optimal algorithm as Sieve of Eratoshtene
module.exports = self ={
  //param A : integer
  //return a array of integers
  primesum : function(A) {
    const primenums = self.getPrimeNums(A);
    console.log(primenums);
    let primesum  = [];

    label1:
    for(let i=0; i<primenums.length; i++) {
      for(let j=i; j<primenums.length; j++) {

        if(primenums[i] + primenums[j] === A) {
          primesum.push(primenums[i]);
          primesum.push(primenums[j]);
          break label1;
        }
      }
    }
    return primesum;
  },
  getPrimeNums : function(A){
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

console.log(self.primesum(16777214));
//console.log(self.primesum(8));
