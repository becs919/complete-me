import { assert } from 'chai';
import CompleteMe from '../scripts/trie'

const fs = require('fs');
const text = "/usr/share/dict/words"



describe('Trie, aka completeMe', () => {

  it('should be a constructor', () => {
    assert.isFunction(CompleteMe)
  })

  it('should have an insert function that takes in a word', () => {
    const completion = new CompleteMe

    assert.isFunction(completion.insert)
    completion.insert('pizza')
    assert.deepEqual(completion.array, ['pizza'])
  })

  it('should have a count function that counts the words', () => {
    const completion = new CompleteMe

    assert.isFunction(completion.count)
    completion.insert('pizza')
    assert.equal(completion.count(), 1)

    completion.insert('suh')
    assert.equal(completion.count(), 2)

  })

  it('should have a suggest function and return suggestions that match', () => {
    const completion = new CompleteMe

    completion.insert('pizza')
    completion.insert('suh')

    assert.isFunction(completion.suggest)
    assert.deepEqual(completion.suggest('piz'), ['pizza'])
    assert.deepEqual(completion.suggest('s'), ['suh'])
  })

  it('should not return a match if there is not one', () => {
    const completion = new CompleteMe

    completion.insert('pizza')
    completion.insert('suh')

    assert.isFunction(completion.suggest)
    assert.deepEqual(completion.suggest('l'), [])
  })

  it('should have a dictionary', () => {
    const completion = new CompleteMe
    let dictionary = fs.readFileSystem(text).toString('utf-8').trim().split('\n')
    completion.populate(dictionary)
    assert.equal(completion.countDictionary(), 235886)
    console.log();
  })

})




// let dictionary = fs.readFileSystem(text).toString('utf-8').trim().split('\n')
//
// completion.populate(dictionary)
//
// completion.count
// => 235886
//
// completion.suggest("piz")
// => ["pize", "pizza", "pizzeria", "pizzicato", "pizzle"]
