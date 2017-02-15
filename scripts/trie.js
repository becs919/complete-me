// let dictionary = fs.readFileSystem(text).toString('utf-8').trim().split('\n')

import Node from '../scripts/Node.js'

class CompleteMe {
  constructor() {
    this.root = new Node();
    this.length = 0;
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
    // endWord(currentNode, srting)
  }



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













// populate function
// takes array
// loops through array with forEach.
// takes word.
// in loop, use inseet funtion to insert word
