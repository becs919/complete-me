class Node {
  constructor(data) {
    this.data = data;
    this.children = {};
    this.wordEnd = false;
    this.value = '';
    this.preference = false;
  }
}

export default Node;
