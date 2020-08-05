'use strict';

/*
Given a list of integers find the mode and the frequency of the mode. 
The mode in a list of numbers is the value that occurs the most often.
If no number in the list is repeated, then there is no mode for the list.

Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
Output: `Mode = 3, Frequency of mode = 4`
*/

function findMode(arr) {
    const hash = {}; // empty hash table to hold array values

    arr.forEach(num => { // loop through array
        if (hash[num]) { // if the key/value pair exists more than once....
            hash[num] += 1; // add a counter for EVERY time it appears in the array. 
        }
 
        else { // otherwise...
            hash[num] = 1; //any numbers that don't repeat will be counted once. 
        }
    });

    let modeCounter = 1; 
    let modeValue; 

    for (const[key, value] of Object.entries(hash)) { // loop through the key/value pairs of hash map
        if (value > modeCounter) { // if value (aka number) appears more than once than the default counter.....
            modeCounter = value; // then the modeCounter equals how many times the number (value) appears. 
            modeValue = key; // and modeValue then becomes the key to the key/value pair for the number that is the mode. 
        }
    }

    if (modeCounter === 1) { // if the number values only appear once in the array, 
        return 'There is no mode for these given numbers.';
    }
    else { // otherwise, the maxValue is the mode number, appears x amount of times (dictated by the max),
        return `Mode = ${modeValue}, Frequency of mode = ${modeCounter}`;
    }
}

console.log(findMode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3])); // mode test => PASS
console.log(findMode([1, 2, 3, 6, 10, 5])); // no mode test => PASS 