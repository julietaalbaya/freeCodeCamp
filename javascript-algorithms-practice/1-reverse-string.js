//---Directions 
// Given a string, return a new string with the reversed order of characters
//---Examples
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('');
}

console.log(reverse('apple'));


/*function reverse(str) {
    const strToArray = str.split('');
    strToArray.reverse();
    return strToArray.join('');
}*/

/*function reverse(str) {
    let reversed = '';
    for (let char of str) { // for(let i=0; i<str.length; i++) 
        reversed = char + reversed;
    }
    return reversed;
}*/