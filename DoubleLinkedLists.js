'use strict';

/*
Given 2 linked lists, where each node in each linked list represents a character in a string, 
write a function compare() that compares the 2 strings, i.e., it returns 0 if both strings are the same, 
1 if the 1st linked list is lexicographically greater, and -1 if the 2nd string is lexicographically greater.

- Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o` 
- Output: `1`

- Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
- Output: `0`

- Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b` 
- Output: `-1`
*/

const LinkedList = require('./LinkedListConstructor');

function compareLists(list1, list2) {
    if (!list1.head || !list2.head) {
        return null;
    }

    let listNode1 = list1.head;
    let listNode2 = list2.head; 

    while (listNode1 && listNode2) {
        if (listNode1.value.toLowerCase() < listNode2.value.toLowerCase()) {
            return -1;
        }
        if (listNode1.value.toLowerCase() > listNode2.value.toLowerCase()) {
            return 1;
        }

        listNode1 = listNode1.next;
        listNode2 = listNode2.next;
    }

    if (!listNode1.next && !listNode2.next) {
        return 0;
    }

    if (!listNode1.next && listNode2.next) {
        return -1;
    }

    if (listNode2.next && !listNode2.next) {
        return 1;
    }
}

const list1 = new LinkedList();

list1.insertFirst('B');
list1.insertLast('i');
list1.insertLast('l');
list1.insertLast('b');
list1.insertLast('o');
list1.insertLast('a');

const list2 = new LinkedList();

list2.insertFirst('B');
list2.insertLast('i');
list2.insertLast('l');
list2.insertLast('b');
list2.insertLast('o');
list2.insertLast('b');

console.log(compareLists(list1, list2));
