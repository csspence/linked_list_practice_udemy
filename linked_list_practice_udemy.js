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

  get = (index) => {
    let counter = 0;
    let value = this.head;
    if(index < 0 || index > this.length) {
      return null;
    }
    while(counter < index) {
      value = value.next;
      counter++;
    }

    return value;
  }

  set = (index, value) => {
    let old = this.get(index);
    if(old === null) {
      return false;
    }
    old.val = value;
    return true;
  }

  insert = (index, value) => {
    if(index < 0 || index > this.length) {
      return false;
    }
    if(index === this.length) {
      this.push(value);
    } else if(index === 0) {
      this.unshift(value);
    } else {
      let node = this.get(index - 1);
      let temp = node.next;
      node.next = new Node(value);
      node.next.next = temp;
    }
    this.length++;
    return true;
  }

  remove = (index) => {
    if(index < 0 || index > this.length) {
      return undefined;
    } else if(index === this.length - 1) {
      this.pop();
    } else if (index === 0) {
      this.shift();
    } else {
      let prior = this.get(index - 1);
      let temp = prior.next;
      prior.next = temp.next;
      this.length--;
      return temp.val;
    }
  }

  reverse = () => {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}