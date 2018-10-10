// Rearrange positive and negative numbers in O(n) time and O(1) extra space. If there are extra positive or negative numbers, they go to end
// input = [-7,-9,1,2,3,-5,1,-2,-3,0,-1,2,3];
// output = [ 1, -9, 2, -7, 3, -5, 1, -2, 0, -3, 2, -1, 3 ]

// input = [0,0,0,0,-9,1,2,3,-5,1,-2,-3,0,-1,2,3];
// output = [ 0, -9, 0, -5, 0, -2, 2, -3, 0, -1, 1, 3, 0, 1, 2, 3 ]


let input = [0,0,0,0,-9,1,2,3,-5,1,-2,-3,0,-1,2,3];
let i = -1, temp = 0;

// Rearrange all negative to one side followed to positive numbers on another side.
for (let j = 0; j < input.length; j++)
{
  if (input[j] < 0)
  {
    i++;
    temp = input[i];
    input[i] = input[j];
    input[j] = temp;
  }
}

console.log(i);
console.log(input);

// Now all positive numbers are at end and negative numbers at
// the beginning of array. Initialize indexes for starting point
// of positive and negative numbers to be swapped
let pos = i+1, neg = 0;

// Increment the negative index by 2 and positive index by 1, i.e.,
// swap every alternate negative number with next positive number
while (pos < input.length && neg < pos && input[neg] < 0)
{
  temp = input[neg];
  input[neg] = input[pos];
  input[pos] = temp;
  pos++;
  neg += 2;
}

console.log(input);


/**

//Ela first try O(n2)
let input = [0,0,0,0,-9,1,2,3,-5,1,-2,-3,0,-1,2,3];

console.log(input);

let i = 0;
exit:
for(let position=0; position<input.length-1; position++) {
  i = position + 1;

  if(position %2 === 0) {
    if(input[position]>=0){
      continue;
    } else {
      while(input[i]<0){
        i++;
        if(i > input.length-1) {
          break exit;
        }
      }
      let temp;
      temp = input[position];
      input[position] = input[i];
      input[i] = temp;
    }

  } else {
    if(input[position]<0){
      continue;
    } else {
      while(input[i]>=0){
        i++;
        if(i > input.length-1) {
          break exit;
        }
      }
      let temp;
      temp = input[position];
      input[position] = input[i];
      input[i] = temp;
    }
  }
}

console.log(input);


**/