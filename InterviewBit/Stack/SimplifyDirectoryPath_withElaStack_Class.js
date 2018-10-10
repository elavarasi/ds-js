class Stack {
  constructor() {
    this._top = null;
    this._size = 0;
  }

  push(data){
    const stacknode = new StackNode(data);
    stacknode.nextNode = this._top;
    this._top = stacknode;
    this._size = this._size + 1;
  }

  pop(){
    if(this._top === null) {
      throw "Empty Stack";
    } else {
      this._top = this._top.nextNode;
      this._size = this._size - 1;
    }
  }

  peek(){
    if(this._top === null) {
      throw "Empty Stack";
    } else {
      console.log("stack top is" + this._top._data);
      return this._top._data;
    }
  }
  printStack() {
    while(this._top !== null) {
      console.log(this._top._data);
      this.pop();
    }
  }

}

class StackNode {
  constructor(data) {
    this._data = data;
    this.nextNode = null;
  }
}

let path = "/a/./b/../../c/";

module.exports = self = {
  //param A : string
  //return a strings
  simplifyPath : function(A) {
    //let stack = new Array();
    let stack1 = new Stack();
    console.log(stack1);
    let i = 0;
    while(i< A.length) {
      if(A.charAt(i).match(/[a-z]/i)) {
        stack1.push(A.charAt(i));
        i++
      } else {
        if (A.charAt(i) == '/') {
          if(A.charAt(i+1) == '.' && A.charAt(i+2)== '.') {
            //stack.pop();
            if(stack1._size > 0) {
              while((stack1.peek().match(/[a-z]/i)))  {
                stack1.pop();
              }
            }
            stack1.pop();
            i = i + 3;
          } else if(A.charAt(i+1) == '.' && A.charAt(i+2)== '/') {
            i = i + 2;
          } else if (i+1 == A.length ) {
            i++;
          } else if (A.charAt(i+1) == '.' && i+2 == A.length) {
            stack1.push('/');
            i = i+2;
          } else if (A.charAt(i+1) === '/') {
            i++;
          }
          else {
            stack1.push(A.charAt(i));
            i++;
          }
        }
      }
    }

    if(stack1._size == 0) {
      stack1.push('/');
    }

    if(stack1._size > 0 && stack1.peek() === '/') {
      stack1.pop();
    }
    //stack1.printStack();
    let result = '';

    console.log(stack1._size);
    while(stack1._size > 0) {
      result = stack1.peek() + result;
      stack1.pop();
      console.log(result);
    }




    //return stack1.join('');
  }
};

console.log(self.simplifyPath(path));