function Stack() {
  this._top = null;
  this._size = 0;
}
Stack.prototype.push = function(data) {
  const stacknode = new StackNode(data);
  stacknode.nextNode = this._top;
  this._top = stacknode;
  this._size = this._size + 1;
};

Stack.prototype.pop = function() {
  if(this._top === null) {
    throw "Empty Stack";
  } else {
    this._top = this._top.nextNode;
    this._size = this._size - 1;
  }
};
Stack.prototype.peek = function() {
  if(this._top === null) {
    throw "Empty Stack";
  } else {
    return this._top._data;
  }
};


function StackNode(data) {
  this._data = data;
  this.nextNode = null;
}

//let path = "/a/./b/../../c/";
let path = "/../";

module.exports = self = {
  //param A : string
  //return a strings
  simplifyPath : function(A) {
    var stack1 = new Stack();
    var i = 0;
    while(i< A.length) {
      if(A.charAt(i).match(/[a-z]/i)) {
        stack1.push(A.charAt(i));
        i++
      } else {
        if (A.charAt(i) == '/') {
          if(A.charAt(i+1) == '.' && A.charAt(i+2)== '.') {
            if(stack1._size > 0) {
              while((stack1.peek().match(/[a-z]/i)))  {
                stack1.pop();
              }
            }
            if(stack1._size > 0) {
              stack1.pop();
            }
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

    if(stack1._size > 0 && stack1.peek() === '/') {
      stack1.pop();
    }

    if(stack1._size == 0) {
      stack1.push('/');
    }


    let result = '';
    while(stack1._size > 0) {
      result = stack1.peek() + result;
      stack1.pop();
    }
    return result;
  }
};

console.log(self.simplifyPath(path));