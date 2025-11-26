// ---Directions
// Given an array and a size, divide the array into many subarrays
// where each subarray is of the specified size
// ---Examples
// chunk([1, 2, 3, 4, 5], 2) === [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 3) === [[1, 2, 3], [4, 5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 4) === [[1, 2, 3, 4], [5, 6, 7, 8]]
// chunk([1, 2, 3, 4, 5], 10) === [[1, 2, 3, 4, 5]]

function chunk(array, size) {

    const result = [];  // to hold the chunks
    let index = 0;  // to track our position in the array

    while (index < array.length) {
        result.push(array.slice(index, index + size)); // create a chunk and add to result
        index += size;  // move to the next chunk
    }
    return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2));