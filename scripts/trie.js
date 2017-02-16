// let dictionary = fs.readFileSystem(text).toString('utf-8').trim().split('\n')

import Node from '../scripts/Node.js'

class CompleteMe {
  constructor() {
    this.root = new Node();
    this.length = 0;
    this.suggestions = [];
  }

  insert (data) {
    let wordArray = data.split('');

    let currentNode = this.root;

    wordArray.forEach((letter, index) => {
      if (currentNode.children[letter]) {

        return currentNode = currentNode.children[letter];
      }

        currentNode.children[letter] = new Node(letter);
        return currentNode = currentNode.children[letter]
    })

    currentNode.wordEnd = true;
    this.length++;
  };


  count () {
    return this.length
  };


  suggest (string) {
    let currentNode = this.root;
    let stringArray = string.split('');

    stringArray.forEach((letter, index) => {
      if (currentNode.children[letter]) {
        currentNode = currentNode.children[letter]
      } else {
        return null;
      }
    })
    this.words(currentNode, string);
  }

  words (node, string) {
    if (node.wordEnd) {
      this.suggestions.push(string)
    }
    let nodeKeys = Object.keys(node.children)
    nodeKeys.forEach((letter) => {
      let nextNode = node.children[letter]
      this.words(nextNode, (string + letter));
    })
  };

  // suggest (query) {
  //   return this.array.filter((el) =>
  //    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  //   )
  // }




  populate () {
    }

  countDictionary () {
  }

}

export default CompleteMe;
