/**
 You are given an n x n 2D matrix representing an image.
 Rotate the image by 90 degrees (clockwise).
 You need to do this in place.
 Note that if you end up using an additional array, you will only receive partial score.
 Example:
 If the array is
 [
 [1, 2],
 [3, 4]
 ]
 Then the rotated array becomes:
 [
 [3, 1],
 [4, 2]
 ]
 *
 */

//https://stackoverflow.com/questions/42519/how-do-you-rotate-a-two-dimensional-array

let matrix =[
  [1, 2, 4, 6],
  [3, 4, 6, 2],
  [6, 5, 5, 9],
  [3, 2, 8, 9]
];

let size = matrix.length;
let layer_count = size/2;

for (let layer=0; layer<layer_count; layer++) {
  let first = layer;
  let last = size-first-1;

  for (let element=first; element<last; element ++) {
    let offset = element - first;

    let top = matrix[first][element];
    let right = matrix[element][last];
    let bottom = matrix[last][last - offset];
    let left = matrix[last - offset][first];

    matrix[first][element] = left;
    matrix[element][last] = top;
    matrix[last][last - offset] = right;
    matrix[last - offset][first] = bottom

  }
}
console.log(matrix);





/*
 // * Ela- Extra array solution
 let input =[
 [1, 2, 4],
 [3, 4, 6],
 [6, 5, 5],
 [3, 2, 8]

 ];

 let output = [];

 for (let m=0; m<input[0].length; m++){

 let eachOutputRow = [];
 for (let n=input.length-1; n>=0; n--) {
 eachOutputRow.push(input[n][m]);
 }
 output.push(eachOutputRow);
 }

 console.log(output);

**/