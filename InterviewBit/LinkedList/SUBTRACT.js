/**
 SUBTRACT
 Given a singly linked list, modify the value of first half nodes such that :

 1st node’s new value = the last node’s value - first node’s current value
 2nd node’s new value = the second last node’s value - 2nd node’s current value,
 and so on …

 NOTE :
 If the length L of linked list is odd, then the first half implies at first floor(L/2) nodes. So, if L = 5, the first half refers to first 2 nodes.
 If the length L of linked list is even, then the first half implies at first L/2 nodes. So, if L = 4, the first half refers to first 2 nodes.
 Example :

 Given linked list 1 -> 2 -> 3 -> 4 -> 5,

 You should return 4 -> 2 -> 3 -> 4 -> 5
 as

 for first node, 5 - 1 = 4
 for second node, 4 - 2 = 2
 Try to solve the problem using constant extra space.
 **/

let LinkedList = require('./LinkedListFunctionImplementation.js').LinkedList;

module.exports = self = {
  //param A : head node of linked list
  //return the head node in the linked list
  subtract : function(A) {
    if(A.next == null || A==null) {
      return A;
    }
    let l1 = A;
    let middlenode = self.findMiddle(A);
    let l2 = self.reverseList(middlenode);

    //Subtract l1 from l2;
    let l1pointer = l1;
    let l2pointer = l2;
    while(l1pointer != null && l1pointer != null) {
      l1pointer.data = l2pointer.data - l1pointer.data;
      l1pointer = l1pointer.next;
      l2pointer = l2pointer.next;
    }

    //reverse the second linked list
    let l3 = self.reverseList(l2);

    //join list1 and list2
    let lastnode = self.getLastNode(l1);
    lastnode.next = l3;

    console.log(l1);
    return l1;
  },
  findMiddle: function(l1) {
    let p1previous = null;
    let p1 = l1;
    let p2 = l1;

    while(p2!=null && p2.next!=null) {
      p1previous = p1;
      p1 = p1.next;
      p2 = p2.next.next;
    }
    p1previous.next = null;
    return p1;
  },
  reverseList: function(l2) {
    let current = l2;
    let previous = null;
    let next = null;

    while(current!=null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return previous;
  },
  getLastNode: function(l1) {
    let p2previous = null;
    let p1 = l1;
    let p2 = l1;

    while(p2!=null && p2.next!=null) {
      p2previous = p2;
      p1 = p1.next;
      p2 = p2.next.next;
    }

    if(p2 == null) {
      return p2previous.next;
    } else {
      return p2;
    }

  }
};

let l1 = new LinkedList();
l1.push(5);
l1.push(6);
l1.push(3);
l1.push(6);
l1.push(2);
l1.pop();
l1.push(9);
l1.printList(l1.head);

self.subtract(l1.head);