class Node {
  constructor(data) {
    this.data = data;
    this.children = {};
    this.wordEnd = false;
    this.value = '';
  }
}

export default Node;
