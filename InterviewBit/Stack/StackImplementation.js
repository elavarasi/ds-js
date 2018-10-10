export class Stack {
  constructor() {
    this._top = null;
  }

  push(data){
    const stacknode = new StackNode(data);
    stacknode.nextNode = this._top;
    this._top = stacknode;
  }

  pop(){
    if(this._top === null) {
      throw "Empty Stack";
    } else {
      this._top = this._top.nextNode;
    }
  }

  peek(){
    if(this._top === null) {
      throw "Empty Stack";
    } else {
      console.log(this._top);
    }
  }
  printStack() {
    while(this._top !== null) {
      console.log(this._top._data);
      this.pop();
    }
  }

}

export class StackNode {
  constructor(data) {
    this._data = data;
    this.nextNode = null;
  }
}

const s = new Stack();
s.push(5);
s.push(4);
s.push(3);
s.push(2);
s.push(1);
s.printStack();