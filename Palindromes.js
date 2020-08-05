'use strict';

/*
Given a string, write an algorithm to count the number of words in the string that are palindromes. 
The output must include a list of the palindromes and the number of palindromes.

 - Input: `"Dad gave mom a Tesla as a racecar"`
 - Output: `Dad, mom, racecar, 3 Palindromes`
*/

function palindromeCheck(str) {
    if (str.length === 1) { // if the length of a word is only 1 character, 
        return false; // take it out because a palindrome cannot be created. 
    }

    str = str.toLowerCase(); // make lower case to make sure algo accounts for all characters in string

    let reverseStr = ''; // instantiate blank palindrome holder; 

    for (let i = str.length - 1; i >= 0; i--) { // loop through string backwards and see what comes out as a palindrome. 
        reverseStr += str[i]; // count the number of times a palindrome was able to be found and with what words in string. 
    }

    return reverseStr === str; // return all palindromes that are the same as the existing words in the string.
}

function palindromeCounter(str) {
    const words = str.split(' ').filter(word => palindromeCheck(word)); // words are split by space, filtered by the palindromeCheck

    return words.join(', ') + `, ${words.length} Palindromes`; // return all words that are palindromes and how many were found. 
}

console.log(palindromeCounter("Dad gave mom a Tesla as a racecar")); // test 1 => PASS
console.log(palindromeCounter("I bought a civic but the rotor went under my radar level")); // test 1 => PASS
