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

  pop = () => {
    if(this.length === 0) {
      return undefined;
    }
    let current = this.head;
    let temp = current.next;
    while(temp.next !== null) {
      current = current.next;
      temp = current.next;
    }
    current.next = null;
    this.tail = current;
    this.length--;
    return temp;
  }

  shift = () => {
    this.head = this.head.next;
    this.length--;
  }

  unshift = (val) => {
    let node = new Node(val);
    if(this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
    return this;
  }
}