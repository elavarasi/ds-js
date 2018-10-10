/** Done by Ela
 //Interview Bit
 Implement pow(x, n) % d.
 In other words, given x, n and d,
 find (xn % d)

 Note that remainders on division cannot be negative.
 In other words, make sure the answer you return is non negative.
 Input : x = 2, n = 3, d = 3
 Output : 2

 2^3 % 3 = 8 % 3 = 2.


 // Leet Code question also gives negative value for x and n:
 Implement pow(x, n), which calculates x raised to the power n (xn).

 Example 1:

 Input: 2.00000, 10
 Output: 1024.00000
 Example 2:

 Input: 2.10000, 3
 Output: 9.26100
 Example 3:

 Input: 2.00000, -2
 Output: 0.25000
 Explanation: 2-2 = 1/22 = 1/4 = 0.25
 Note:

 -100.0 < x < 100.0
 n is a 32-bit signed integer, within the range [−231, 231 − 1]

 **/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let result;
  if(n<0) {
    x = 1/x;
    n = Math.abs(n);
  }

  if (n==0) {
    return 1;
  }

  if (n==1) {
    return x;
  }

  if(n==2) {
    return x * x;
  }

  if(n%2 ==0) {
    n = n/2;
    x = x * x;
    result = myPow(x,n);
  } else {
    n = Math.floor(n/2);
    let y = x; //store the x so the it is not overridden by new number
    x = x * x;
    result = myPow(x,n) * y;
  }
  return result;
};

//let x = 2;
//let n = -2;

let x = 0.445;
let n = 0;

console.log(myPow(x,n));

