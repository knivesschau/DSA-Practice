'use strict';

/* 
Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.
Number List: 1, 1, 1, 3, 4, 4, 5, 6, 6, 7 => Output: 1, 3, 4, 5, 6, 7
*/

const LinkedList = require('./LinkedListConstructor');
const { display } = require('./ListUtility');

const LL = new LinkedList();

LL.insertFirst(1);
LL.insertLast(1);
LL.insertLast(1);
LL.insertLast(3);
LL.insertLast(4);
LL.insertLast(4);
LL.insertLast(5);
LL.insertLast(6);
LL.insertLast(6);
LL.insertLast(7);

console.log(display(LL));

function removeDuplicates(list) {
    let currNode = list.head; 

    while (currNode !== null) {
        let newNode = currNode;

        while(newNode.next !== null) {
            if (newNode.next.value === currNode.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        currNode = currNode.next;
    }
    return currNode;
}

// function removeDuplicates(head) {
//     var current = head;
    
//     while(current) {
//         if(current.next !== null && current.value == current.next.value) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }
    
//     return head;
// };

