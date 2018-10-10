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

Stack.prototype.isEmpty = function() {
  return this._size==0;
};


function StackNode(data) {
  this._data = data;
  this.nextNode = null;
}

module.exports = {
  Stack: Stack,
  StackNode:  StackNode
};
