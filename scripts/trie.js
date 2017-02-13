class CompleteMe {
  constructor() {
    this.array = [];
  }

  insert (word) {
    return this.array.push(word)
  }

  count () {
    return this.array.length
  }

  suggest (query) {
    return this.array.filter((el) =>
     el.toLowerCase().indexOf(query.toLowerCase()) > -1
    )
  }
}

export default CompleteMe
