function LinkedList(headnode) {
  let head = headnode || null;
}

LinkedList.prototype.push = function(data){
  let n = new Node(data);
  if(this.head == null) {
    this.head = n;
  } else {
    let temp = this.head;
    this.head = n;
    n.next = temp;
  }
  console.log(this.head);
};

LinkedList.prototype.pop = function(){
  if(this.head === null) {
    return;
  } else {
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
  }
};

LinkedList.prototype.printList = function(head) {
  let temp = this.head || head;
  while(temp != null) {
    console.log(temp.data);
    temp = temp.next;
  }
};


function Node(value) {
  this.data = value;
  this.next = null;
}


module.exports = {
  LinkedList: LinkedList
};

let l1 = new LinkedList();
l1.push(5);
l1.push(6);
l1.push(3);
l1.push(6);
l1.pop();
l1.push(9);
l1.printList();
