/**
 Evaluate the value of an arithmetic expression in Reverse Polish Notation.

 Valid operators are +, -, *, /. Each operand may be an integer or another expression.

 Examples:

 ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
 ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6

 **/
var Stack = require('./StackImplementation_withfunction.js').Stack;

module.exports = self = {
  //param A : array of strings
  //return an integer
  evalRPN : function(A){
    let stack = new Stack();
    for(let i =0; i< A.length; i++) {
      if(!isNaN(A[i])) {
        stack.push(A[i]);
      } else {
        let result;
        let op2 = stack.peek();
        stack.pop();
        let op1 = stack.peek();
        stack.pop();
        //console.log(A[i]);
        //console.log(op2);
        //console.log(op1);
        switch (A[i])
        {
          case '+':
            console.log("came inside +");
            result = eval(parseInt(op1) + parseInt(op2));
            break;
          case '-':
            result =  eval(parseInt(op1) - parseInt(op2));
            break;
          case '*':
            result =  eval(parseInt(op1) * parseInt(op2));
            break;
          case '/':
            if (op2 == 0)
              throw 'cannot dived error';
            else
              console.log("came here");
              result =  eval(parseInt(op1) / parseInt(op2));
            break;
        }
        stack.push(result);
      }
    }
    return Math.floor(stack.peek());
  }
};

// let input = ["2", "1", "+", "3", "*"];
let input = [ "5", "1", "2", "+", "4", "*", "+", "3", "-" ];
//let input = [ "-2", "-1", "2", "+", "-1", "-", "-", "2", "-2", "1", "-", "+", "-", "-2", "-2", "-", "-1", "2", "-2", "-", "-2", "-1", "+", "1", "1", "-", "-1", "+", "1", "*", "*", "2", "+", "*", "-", "-2", "1", "-2", "*", "+", "-2", "*", "1", "*", "-", "*", "*" ]
console.log(self.evalRPN(input));