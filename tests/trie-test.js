import { assert } from 'chai';
import CompleteMe from '../scripts/trie';
const fs = require('fs');


describe('Trie, a.k.a completeMe', () => {

  it('should be a constructor', () => {
    assert.isFunction(CompleteMe);
  });


  it('should allow me to insert some nodes', () => {
    const completion = new CompleteMe();

    completion.insert('pizza');

    assert.property(completion.root, 'children');
  });


  it('should check if property of children exists', () => {
    const completion = new CompleteMe();

    completion.insert('pizza');
    completion.insert('peter');

    assert.property(completion.root.children, 'p');
    assert.property(completion.root.children.p.children, 'i');
  });

  it('should know the end of word', () => {
    const completion = new CompleteMe();

    completion.insert('pizza');

    assert.equal(completion.root.children.p.children.i.children.z.children.z.children.a.wordEnd, true);
  });


  it('should count the number of nodes', () => {
    const completion = new CompleteMe();

    completion.insert('suh');
    completion.insert('pizza');

    assert.equal(completion.count(), 2);
  });


  it('should have a suggest function and return suggestions that match', () => {
    const completion = new CompleteMe();

    completion.insert('pizza');
    completion.insert('suh');

    completion.suggest('piz');

    assert.deepEqual(completion.suggestions, ['pizza']);
  });


  it('should not return a match if there is not one', () => {
    const completion = new CompleteMe();

    completion.insert('pizza');
    completion.insert('suh');

    completion.suggest('l');

    assert.deepEqual(completion.suggestions, []);
  });

  it('should take an array', () => {
    const completion = new CompleteMe();

    let array = ['hello', 'suh', 'pizzah', 'pizza'];

    completion.populate(array);

    assert.deepEqual(completion.count(), 4);
    assert.property(completion.root.children, 'p');
    assert.property(completion.root.children, 'h');
    assert.property(completion.root.children.h.children, 'e');

  });

  it('should populate a dictionary', () => {
    const completion = new CompleteMe();
    const text = '/usr/share/dict/words';

    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');

    completion.populate(dictionary);
    assert.equal(completion.count(), 235886);
  });


  it('should populate a dictionary and suggest words', () => {
    const completion = new CompleteMe();
    const text = '/usr/share/dict/words';

    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');

    completion.populate(dictionary);

    completion.suggest('piz');

    assert.deepEqual(completion.suggestions, ['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
  });


  it('should populate a dictionary and not suggest a word if no match', () => {
    const completion = new CompleteMe();
    const text = '/usr/share/dict/words';

    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');

    completion.populate(dictionary);

    completion.suggest('qp');

    assert.deepEqual(completion.suggestions, []);
  });


  it('should know children of children in dictionary', () => {
    const completion = new CompleteMe();
    const text = '/usr/share/dict/words';

    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');

    completion.populate(dictionary);

    assert.property(completion.root.children.q.children, 'a');
    assert.property(completion.root.children.q.children, 'u');
    assert.property(completion.root.children.q.children, 'i');
    assert.property(completion.root.children.q.children, 'o');
    assert.property(completion.root.children.q.children, 'u');
  });

  it('should have a find node function', () => {
    const completion = new CompleteMe();
    const text = '/usr/share/dict/words';

    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');

    completion.populate(dictionary);

    assert.isFunction(completion.find);

    assert.equal(completion.find('pizza'), completion.root.children.p.children.i.children.z.children.z.children.a);
  });


  it.skip('should have a select function that allows you to select suggestions', () => {
    const completion = new CompleteMe();
    const text = '/usr/share/dict/words';

    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');

    completion.populate(dictionary);

    completion.selected('pizza');

    assert.isFunction(completion.selected);
    assert.equal( completion.root.children.p.children.i.children.z.children.z.children.a.preference, 1);

  });



});
