import { assert } from 'chai';
import CompleteMe from '../scripts/trie'
//
// const fs = require('fs');
// const text = "/usr/share/dict/words"

describe('Trie, aka completeMe', () => {

  it('should be a constructor', () => {
    assert.isFunction(CompleteMe)
  });


  it('should allow me to insert some nodes', () => {
    const completion = new CompleteMe()

    completion.insert('pizza')

    assert.property(completion.root, 'children')
  });


  it('should check if property of children exists', () => {
    const completion = new CompleteMe()

    completion.insert('pizza')
    completion.insert('peter')

    assert.property(completion.root.children, 'p')
    assert.property(completion.root.children.p.children, 'i')
  });

  it('should know the end of word', () => {
    const completion = new CompleteMe()

    completion.insert('pizza')

    assert.equal(completion.root.children.p.children.i.children.z.children.z.children.a.wordEnd, true)
  });


  it('should count the number of nodes', () => {
    const completion = new CompleteMe()

    completion.insert('suh')
    completion.insert('pizza')

    assert.equal(completion.count(), 2)
  });


  it('should have a suggest function and return suggestions that match', () => {
    const completion = new CompleteMe

    completion.insert('pizza')
    completion.insert('suh')

    assert.isFunction(completion.suggest)
    assert.deepEqual(completion.suggest('piz'), ['pizza'])
    // assert.deepEqual(completion.suggest('s'), ['suh'])
  });

  it.skip('should not return a match if there is not one', () => {
    const completion = new CompleteMe

    completion.insert('pizza')
    completion.insert('suh')
    console.log(completion);

    assert.isFunction(completion.suggest)
    assert.deepEqual(completion.suggest('l'), [])
  })

  it.skip('should have a dictionary', () => {
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



//
// linkedlist tests from class
//
// import {assert} from 'chai';
// import linkedlist from '../scripts/linked-list.js'
//
// describe('list should have a head', () => {
//   var list
//
//   beforeEach(() => {
//     list = new LinkedList();
//   })
//
//   it('list should have a null head', () => {
//     expect(list.head).to.be(null);
//   })
//
//   it('should allow me to add some nodes to the front ', () => {
//     list.prepend(29)
//     expect(list.head.data).to.equal(29)
//   })
//
//   it('remove first node from the list, shift', () => {
//     list.prepend(29)
//     list.prepend(30)
//     expect(list.head.data).to.equal(30)
//     let node = list.shift();
//     expect(list.head.data).to.equal(29)
//
//   })
//
//   it('should find the tail', () => {
//     list.prepend(29)
//     list.prepend(30)
//
//     let node = list.findTail()
//
//     expect(node.data).to.equal(29)
//   })
//
//   it('should append the nodes', () => {
//     list.prepend(29)
//     list.prepend(30)
//     list.append(17)
//
//     let node = list.findTail()
//
//     expect(node.data).to.equal(17)
//
//   })
//
//   it('pop should remove one from the end', () => {
//     list.prepend(29)
//     list.prepend(30)
//     list.prepend(17)
//
//     let node = list.findTail()
//
//     expect(node.data).to.equal(29)
//
//     let poppedNode = list.pop()
//     expect(poppedNode.data).to.equal(30)
//   })
//
//   it('should find a node', () => {
//     list.prepend(29)
//     list.prepend(30)
//     list.prepend(17)
//
//     let node = list.find(25)
//
//     expect(node.data).to.equal(25)
//   })
//
//   it('If no node is found, return a string', () => {
//     list.prepend(29)
//     list.prepend(30)
//     list.prepend(17)
//
//     let node = list.find(258)
//
//     expect(node.data).to.equal('not found')
//   })
//
//   it('should keep count of length', () => {
//     expect(list.length).to.equal(0)
//
//     list.prepend(29)
//     list.append(30)
//
//     expect(list.length).to.equal(2)
//
//   })
//
//   it('should keep count of length with shift', () => {
//     expect(list.length).to.equal(0)
//
//     list.prepend(29)
//     list.append(30)
//     list.shift();
//
//     expect(list.length).to.equal(1)
//
//   })
//
//   it('should keep count of length with pop', () => {
//     expect(list.length).to.equal(0)
//
//     list.prepend(29)
//     list.append(30)
//     list.pop();
//
//     expect(list.length).to.equal(1)
//
//   })
//
//   it('should push into array', () => {
//
//     list.prepend(29)
//     list.append(30)
//     list.prepend(298)
//     list.append(360)
//
//     let array = list.toArray();
//
//     expect(array).to.deep.equal()
//
//   })

  //
  // it('should take an array', () => {
  //   let autoPop = new LinkedList([223, 445, 6, 57, 567])
  //
  //   expect(autoPop,length).to.deep.equal(5)
  // })
// })
