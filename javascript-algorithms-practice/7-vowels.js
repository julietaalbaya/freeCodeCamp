// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.
// --- Examples
// vowels('Hi There!') --> 3
// vowels('Why do you ask?') --> 4
// vowels('Why?') --> 0

function vowels(str) {
    const vowelCheck = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowelCheck.includes(char)) { // includes checks if array contains the character
            count++;
        }
    }

    return count;
}

console.log(vowels('Why do you ask?'));

/** function vowels(str) {
    const matches = str.match(/[aeiou]/gi); // g = global, i = ignore case, match returns an array of all matches
    return matches ? matches.length : 0;    // if no matches, return 0, else return length of matches array
}
 */