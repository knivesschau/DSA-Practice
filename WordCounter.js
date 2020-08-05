/* 
Algorithm to count number of word occurrences
Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2` etc.
*/

function wordCounter(sentence) {
    const words = sentence.split(/\W/).filter(Boolean); // split via regex /\W/ and remove anything that doesn't match
    const hash = new Map(); // hash map/table instantiation 
                                
    words.forEach(word => {
        if (hash.has(word)) {
            hash.set(word, hash.get(word) + 1); // if word exists in hash map, increment counter by 1         
        }
        else {
            hash.set(word, 1); // otherwise, make a new key/value pair for the word.                          
        }
    });

    const counter = []; // array to hold hash map results.                                

    hash.forEach((value, key) => {  // loop through hash table to get the key/value data for the display array.                  
        counter.push(key + ' = ' + value); 
    });

    return counter.join(', ');  // display array showing word occurences and join all key/value pairs with commas                         
}

console.log(wordCounter(`"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`));

