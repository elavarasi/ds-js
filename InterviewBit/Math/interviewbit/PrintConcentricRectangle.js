/**
 4 4 4 4 4 4 4
 4 3 3 3 3 3 4
 4 3 2 2 2 3 4
 4 3 2 1 2 3 4
 4 3 2 2 2 3 4
 4 3 3 3 3 3 4
 4 4 4 4 4 4 4
 Example 2:

 Input: A = 3.
 Output:

 3 3 3 3 3
 3 2 2 2 3
 3 2 1 2 3
 3 2 2 2 3
 3 3 3 3 3
 The outermost rectangle is formed by A, then the next outermost is formed by A-1 and so on.

 You will be given A as an argument to the function you need to implement, and you need to return a 2D array.

 **/


module.exports = self = {
  //param A : integer
  //return a array of array of integers
  prettyPrint : function(A){
    let matrixSize = A*2 -1;
    let result = [];

    for(let i=0; i<matrixSize; i++) {
      let row = [];
      for(let j=0; j<matrixSize; j++) {

        if(j<=i) {
          row.push(A-j);
        } else {
          row.push(A-i);
        }
      }
      result[i]=row;
    }

    for(let i=0;i<A;i++){
      for(let j=matrixSize-1;j>=A;j--){
        console.log(i + ' ' + j);
        result[i][j] = result[i][matrixSize-1-j];
      }
    }

    for(let i=matrixSize-1;i>=A;i--){
      for(let j=0;j<matrixSize;j++){
        console.log(i + ' ' + j);
        result[i][j]=result[matrixSize-1-i][j];
      }
    }

    return result;
  }
};



console.log(self.prettyPrint(3));