import Node from '../scripts/Node.js';

class CompleteMe {
  constructor() {
    this.root = new Node();
    this.length = 0;
    this.suggestions = [];
  }

  insert (data) {
    let wordArray = data.split('');
    let currentNode = this.root;

    wordArray.forEach( letter => {

      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }

      currentNode = currentNode.children[letter];
    });

    currentNode.wordEnd = true;
    this.length++;
  }


  count () {
    // let currentNode = this.root;
    //
    // while (currentNode.children) {
    //   currentNode = currentNode.children;
    //   if (currentNode.endWord === true) {
    //     console.log(currentNode);
    //
    //     this.length++;
    //   }
    // }
    return this.length;
  }


  suggest (string) {
    let currentNode = this.root;
    let lettersArray = string.split('');

    for (var i = 0; i < lettersArray.length; i++) {
      if (currentNode.children[lettersArray[i]]) {
        currentNode = currentNode.children[lettersArray[i]];
      } else {
        return [];
      }
    }

    this.words(currentNode, string);
  }


  words (node, string) {
    if (node.wordEnd) {
      this.suggestions.push(string);

    }
    let nodeKeys = Object.keys(node.children);
    nodeKeys.forEach( letter => {

      let nextNode = node.children[letter];

      this.words(nextNode, string + letter);
    });
  }


  populate (array) {
    array.forEach( word => {
      this.insert(word);
    });
  }


  find (data) {
    let currentNode = this.root;
    let letterArray = data.split('');

    while (letterArray !== []) {
      let arrayLetter = letterArray.shift();

      if (currentNode.children[arrayLetter]) {
        currentNode = currentNode.children[arrayLetter];
      }

      if (letterArray.length === 0) {
        return currentNode;
      }
    }
  }

  selected (string) {
    let prefString = this.find(string);
    prefString.preference++;
  }



}

export default CompleteMe;
