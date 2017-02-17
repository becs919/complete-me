class Node {
  constructor(data) {
    this.data = data;
    this.children = {};
    this.wordEnd = false;
    this.preference = 0;
  }
}

export default Node;
