// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case
// --- Examples
// anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
    return str.toLowerCase().replace(/[\W_]/g, '').split('').sort().join('');   // remove non-alphanumeric characters, convert to lowercase, split to array, sort, join back to string
/* "hi there" (toLowerCase) -> "hithere" (replace) -> 
["h", "i", "t", "h", "e", "r", "e"] (split porque necesito array) -> ["e", "e", "h", "h", "i", "r", "t"] (sort, ordena alfabeticamente)->
"eehhirt"  (join para volver a string)
*/

}

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);   // compare cleaned strings
}

console.log(anagrams('Hi there', 'Bye there'));

/** 
 * function charMap(str) {
    const charmap = {};
    str = str.toLowerCase().replace(/[\W_]/g, ''); // remove non-alphanumeric characters
    for (let char of str) {
        charmap[char] = charmap[char] + 1 || 1; // if char exists increment else set to 1
    }
    return charmap;
}

function anagrams(stringA, stringB) {
    //Step 1: Create character map for both strings
    const charmapA = charMap(stringA);
    const charmapB = charMap(stringB);
    //Step 2: Compare each character in charmapA to charmapB
    if (Object.keys(charmapA).length !== Object.keys(charmapB).length) {    // if different number of unique characters
        return false;
    }
    for (let key in charmapA) {
        if (charmapA[key] !== charmapB[key]) {    // if different count for a character
            return false;
        }
    }

    return true;
} **/