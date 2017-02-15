class Node {
  constructor(data) {
    this.data = data
    this.children = {};
    this.wordEnd = false;
    this.value = '';
  }
}

export default Node;


    // console.log(JSON.stringify(completion.root, null, 4))
