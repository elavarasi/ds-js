/***
 * Min Steps in Infinite Grid

 You are in an infinite 2D grid where you can move in any of the 8 directions :

 (x,y) to
 (x+1, y),
 (x - 1, y),
 (x, y+1),
 (x, y-1),
 (x-1, y-1),
 (x+1,y+1),
 (x-1,y+1),
 (x+1,y-1)
 You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point.

 Example :

 Input : [(0, 0), (1, 1), (1, 2)]
 Output : 2
 It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2).

 This question is intentionally left slightly vague. Clarify the question by trying out a few cases in the “See Expected Output” section.
 **/
/***
 *
 *
 * @type {{coverPoints: self.coverPoints}}
 */

module.exports = self = {
  coverPoints: (inputXPoints, inputYPoints) => {
    let totalminsteps=0;
    for (i=0; i< inputXPoints.length-1; i++) {
      let inputGrid_first_x = inputXPoints[i];
      let inputGrid_first_y = inputYPoints[i];
      let inputGrid_second_x = inputXPoints[i+1];
      let inputGrid_second_y = inputYPoints[i+1];
      totalminsteps = totalminsteps + Math.max(Math.abs(inputGrid_second_x-inputGrid_first_x),Math.abs(inputGrid_second_y-inputGrid_first_y));
    }
    return totalminsteps;
  }
};


//let inputXPoints = [0,1,1];
//let inputYPoints = [0,1,2];

//let inputXPoints = [-2];
//let inputYPoints = [7];

let inputXPoints = [ 4, 8, -7, -5, -13, 9, -7, 8 ];
let inputYPoints = [ 4, -15, -10, -3, -13, 12, 8, -8 ];

console.log(self.coverPoints(inputXPoints, inputYPoints));