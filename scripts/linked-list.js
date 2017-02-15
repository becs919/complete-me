// import node from '../scripts/node'
//
// class LinkedList {
//   constructor (array = []) {
//     this.head = null;
//     this.length = 0;
//     this.addListoFWords(array)
//   }

//   addListoFWords (array) {
//       for (var i = 0; i < array.length;   i++) {
//       this.prepend(array[i])
//       }
// }
//   prepend (data) {
//     this.head = new Node(data, this.head);
//     this.length++;
//   }
//   shift () {
//     let node = this.head;
//     if (node) {
//       this.head = node.next;
//       this.length--;
//     }
//     return node;
//   }
//
//   findTail () {
//     let node = this.head;
//
//     if (node === null) {
//       return null
//     }
//
//     while (node.next !== null) {
//       node = node.next;
//     }
//     return node;
//   }
//
//   append (data) {
//     let currentTail = this.findTail();
//     let newNode = new Node(data);
//
//     if (currentTail) {
//       currentTail.next = newNode
//     } else {
//       this.head = newNode
//     }
//     this.length++;
//   }
//
//   pop () {
//     let lastNode = this.findTail();
//     let newNext = null;
//
//     currentNode = this.head
//
// // if nothing in list
//     if (this.length === 0) {
//       return null;
//     }
//
//     if (this.length === 1) {
//       this.head = null;
//       this.length--;
//       return lastNode;
//     }
//
//     // otherwise find next to last node and set next to null
//       while (currentNode.next.next !== lastNode) {
//         currentNode = currentNode.next;
//       }
//       currentNode.next = null;
//       this.length--;
//       return lastNode;
//     // }
//     // return false;
//     }
//
//   find (data) {
//     let node = this.head;
//
//     while (node.data !== data && node.next !== null) {
//       node = node.next;
//     }
//     if (!node.data !== data) {
//       node = 'not found';
//     }
//     return node;
//   }
//
//   getCount () {
//     return this.length;
//   }
//
//   toArray () {
//     let array = [];
//     return array;
//   }
//
//
// }
