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
    return this.length;
  }


  suggest (string) {
    let currentNode = this.root;
    let stringArray = string.split('');

    for (var i = 0; i < stringArray.length; i++) {
      if (currentNode.children[stringArray[i]]) {
        currentNode = currentNode.children[stringArray[i]];

      } else {
        return [];
      }
    }
    this.words(currentNode, string);
  }

  // words(floNode, 'flo')

  // returning an array of the suggestions
  words (node, string) {
    // checks node to see if it is the last letter of a complete wordEnd
    // if node is a complete word, push into suggestions array
    if (node.wordEnd) {
      this.suggestions.push(string);
    }

    // find node's child letters

   // { w: Node, p: Node }
    let nodeKeys = Object.keys(node.children); // [ 'w', 'p' ]

    // loop through each child letter
    nodeKeys.forEach( letter => {
      // console.log(letter); // 'w'

      // child node, and move to child node (i.e. flowNode)
      let nextNode = node.children[letter];

      // recursion!!!
      // string === flo
      // letter === w

      this.words(nextNode, string + letter);
    });
  }


  populate (array) {
    array.forEach( word => {
      this.insert(word);
    });
  }

}

export default CompleteMe;
