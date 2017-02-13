import { assert } from 'chai';
import CompleteMe from '../scripts/trie'


describe('Trie, aka completeMe', () => {

  it('should be a constructor', () => {
    assert.isFunction(CompleteMe)
  })

  it('should have an insert function that takes in a word', () => {
    const completion = new CompleteMe

    completion.insert('pizza')
    assert.isFunction(completion.insert)
    assert.deepEqual(completion.array, ['pizza'])
  })

  it('should have a count function that counts the words', () => {
    const completion = new CompleteMe

    completion.insert('pizza')
    assert.isFunction(completion.count)
    assert.equal(completion.count(), 1)
    completion.insert('suh')
    assert.equal(completion.count(), 2)

  })

  it('should have a suggest function', () => {
    const completion = new CompleteMe

    completion.insert('pizza')
    completion.insert('suh')

    assert.isFunction(completion.suggest)
    assert.deepEqual(completion.suggest('piz'), ['pizza'])
    assert.deepEqual(completion.suggest('s'), ['suh'])
  })

})
