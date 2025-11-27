// --- Directions
// Write a function that accepts a integer N
// and returns an NxN spiral matrix.
// --- Examples
// matrix(2)
//     [[1, 2],
//      [4, 3]]
// matrix(3)
//     [[1, 2, 3],
//      [8, 9, 4],
//      [7, 6, 5]]
function matrix(n) {
    const result = [];
    let counter = 1, startRow = 0, endRow = n - 1, startCol = 0, endCol = n - 1;
    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    while (startRow <= endRow && startCol <= endCol) {  //while there are layers to fill
        //Top
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        //Right
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        //Bottom
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;
        //Left
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return result;
}

console.log(matrix(6));