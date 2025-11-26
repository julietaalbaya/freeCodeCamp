//--- Directions
// Write a function that takes a string as an argument and returns the same string in title case.
// Title case means that the first letter of each word is capitalized, while the rest of the letters are in lowercase.
//--- Examples
// capitalize('a short sentence') === 'A Short Sentence'
// capitalize('a LONG sentence') === 'A Long Sentence'
// capitalize('a MiXeD cAsE sEnTeNcE') === 'A Mixed Case Sentence'

function capitalize(str) {
    const words = str.split(' ');   // Split the string into an array of words: ['a', 'short', 'sentence']
    
    return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');    // Capitalize the first letter and lowercase the rest, then add to result array
}

console.log(capitalize('a MiXeD cAsE sEnTeNcE'));


/*
function capitalize(str) {
    const words = str.split(' ');   // Split the string into an array of words: ['a', 'short', 'sentence']
    const result = [];
    for (let word of words) {
        result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());   // Capitalize the first letter and lowercase the rest, then add to result array
    }

    return result.join(' ');   // Join the array of words back into a single string with spaces in between
}
*/