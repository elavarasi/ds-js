/**

 The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.



 Given an integer n, return all distinct solutions to the n-queens puzzle.

 Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

 Example:

 Input: 4
 Output: [
 [".Q..",  // Solution 1
 "...Q",
 "Q...",
 "..Q."],

 ["..Q.",  // Solution 2
 "Q...",
 "...Q",
 ".Q.."]
 ]
 Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
 **/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let initialArray = getInitialArray(n);
  let finalResult = [];
  findNQueens(0, initialArray, finalResult, n);
  return finalResult;
};



function findNQueens(column, currentMatrix, finalResult, n) {
  if(column >= n) {
    const newResultArray = [];
    for (var i = 0; i < currentMatrix.length; i++)
      newResultArray[i] = currentMatrix[i].slice().join('');
    finalResult.push(newResultArray);
  } else {
    for(let row=0; row<n; row++){
      let isSafe = findIfSafe(currentMatrix, row, column, n);
      if(isSafe) {
        currentMatrix[row][column] = "Q";
        findNQueens(1+column, currentMatrix, finalResult, n);
        currentMatrix[row][column] = ".";
      }
    }
  }
}

function findIfSafe(currentMatrix, row, column, n) {
  let isSafe = true;
  //check if current row has any one to left 1
  for(let i=0; i<column; i++) {
    if (currentMatrix[row][i] === "Q") {
      isSafe = false;
      return isSafe;
    }
  }

  //check if current column has any one to left 1
  for(let i=0; i<row; i++) {
    if (currentMatrix[i][column] === "Q") {
      isSafe = false;
      return isSafe;
    }
  }


  let i = row;
  let j = column;

  //check if the the diagonal top left has a 1 entry
  while (i!=-1 && j!=-1) {
    if (currentMatrix[i][j] === "Q") {
      isSafe = false;
      return isSafe;
    }
    i--;
    j--;
  }



  let k = row;
  let l = column;

  //check if the the diagonal bottom left has a 1 entry
  while (k!=n &l!=-1) {
    if (currentMatrix[k][l] === "Q") {
      isSafe = false;
      return isSafe;
    }
    k++;
    l--;
  }

  return isSafe;
}

function getInitialArray(n) {
  let resultArray = [];
  for (let i=0; i<n; i++) {
    let eachRow = [];
    for(let j=0; j<n; j++) {
      eachRow.push(".")
    }
    resultArray.push(eachRow);
  }
  return resultArray;
}

function placeQueen(currentMatrix, row, column) {
  currentMatrix[row][column] = 1;
  let resultArray = [];
  for (let i=0; i<n; i++) {
    let eachRow = [];
    for(let j=0; j<n; j++) {
      eachRow.push(0)
    }
    resultArray.push(eachRow);
  }
  return resultArray;
}

console.log(solveNQueens(8));