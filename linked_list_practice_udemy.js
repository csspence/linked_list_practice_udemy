/*
JavaScript Algorithms and Data Structures Masterclass - Udemy
Linked List practice
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push = (val) => {
    let node = new Node(val);
    if(this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }
}