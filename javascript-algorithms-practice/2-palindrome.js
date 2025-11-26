//--- Directions
// Given a string, return true if the string is a palindrome or false if it is not.
// Palindromes are strings that read the same forward and backward.
//--- Examples
// palindrome('abba') === true
// palindrome('abcdefg') === false

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(palindrome('abba'));