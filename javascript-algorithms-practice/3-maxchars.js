// --- Directions
// Given a string, return the character that is most commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
{
(key)a: (value)1,
    b: 1,
    c: 7,
    d: 1
}
*/

function maxChar(str) {
    const charMap = {}; // Object to store character counts
    let max = 0;
    let maxChar = '';
    for (let char of str) { 
        if (charMap[char]) {    // If the character is already in the map, increment its count
            charMap[char]++;
        } else {
            charMap[char] = 1;  // Otherwise, initialize its count to 1
        }        
    }
    for(let key in charMap) {
        if(charMap[key] > max) {    // Find the character with the maximum count
            max = charMap[key];     // Update max count
            maxChar = key;      // Update maxChar to the current character
        }
    }
    return maxChar;
}

console.log(maxChar("apple 1231111"));
