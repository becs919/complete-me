// let dictionary = fs.readFileSystem(text).toString('utf-8').trim().split('\n')

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

  populate (word) {
    return this.populate.push(word)
  }

  countDictionary () {
    return this.populate.length
  }
}

export default CompleteMe
