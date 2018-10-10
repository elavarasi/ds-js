/**
 A hotel manager has to process N advance bookings of rooms for the next season. His hotel has K rooms. Bookings contain an arrival date and a departure date. He wants to find out whether there are enough rooms in the hotel to satisfy the demand. Write a program that solves this problem in time O(N log N) .
 Input:
 First list for arrival time of booking.
 Second list for departure time of booking.
 Third is K which denotes count of rooms.

 Output:

 A boolean which tells whether its possible to make a booking.
 Return 0/1 for C programs.
 O -> No there are not enough rooms for N booking.
 1 -> Yes there are enough rooms for N booking.
 Example :

 Input :
 Arrivals :   [1 3 5]
 Departures : [2 6 8]
 K : 1

 Return : False / 0
 At day = 5, there are 2 guests in the hotel. But I have only one room.
 **/

module.exports = self = {
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
  hotel: function (A, B, C) {
    A.sort(function(a,b){return a-b});
    B.sort(function(a,b){return a-b});
    console.log(A);
    console.log(B);
    let i= 0, j=0, roomsRequired=0;
    while(i < A.length && j< B.length && roomsRequired <= C) {
      if(A[i] < B[j]) {
       i++;
       roomsRequired++;
     } else {
       j++;
       roomsRequired--;
     }
    }

    if(roomsRequired <= C) {
      return 1;
    } else {
      return 0;
    }

  }
};


//let Arrivals=   [1,3,5];
//let Departures= [2,6,8];
//let Rooms = 1;

//let Arrivals=   [ 9, 47, 17, 39, 35, 35, 20, 18, 15, 34, 11, 2, 45, 46, 15, 33, 47, 47, 10, 11, 27 ];
//let Departures= [ 32, 82, 39, 86, 81, 58, 64, 53, 40, 76, 40, 46, 63, 88, 56, 52, 50, 72, 22, 19, 38 ];
//let Rooms = 16;

let Arrivals=   [ 17, 0, 45, 11, 16, 43, 15, 42, 2, 41, 0, 27, 37, 25, 17, 42, 24, 23, 11, 4, 29, 39, 6, 10, 42, 16, 17, 39, 1 ];
let Departures= [ 25, 24, 52, 51, 26, 46, 25, 45, 9, 51, 49, 48, 51, 66, 65, 57, 69, 43, 50, 9, 32, 55, 10, 58, 62, 46, 19, 87, 12 ];
let Rooms = 16;
console.log(self.hotel(Arrivals, Departures, Rooms));






/** Ela First Try - not working. not correct
module.exports = self = {
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
  hotel : function(A, B, C){
    let overlap = 0;
    A.forEach((currentArrivalDate, index, A) => {
      if(A[index+1] - B[index] < 0 && A[index]-B[index+1] < 0) {
        overlap++;
      }
    });
    console.log(overlap);
    if(overlap >= C) {
      return 0;
    } else {
      return 1;
    }
  }
};

//let Arrivals=   [1,3,5];
//let Departures= [2,6,8];
//let Rooms = 1;

//let Arrivals=   [ 9, 47, 17, 39, 35, 35, 20, 18, 15, 34, 11, 2, 45, 46, 15, 33, 47, 47, 10, 11, 27 ];
//let Departures= [ 32, 82, 39, 86, 81, 58, 64, 53, 40, 76, 40, 46, 63, 88, 56, 52, 50, 72, 22, 19, 38 ];
//let Rooms = 16;

let Arrivals=   [ 17, 0, 45, 11, 16, 43, 15, 42, 2, 41, 0, 27, 37, 25, 17, 42, 24, 23, 11, 4, 29, 39, 6, 10, 42, 16, 17, 39, 1 ];
let Departures= [ 25, 24, 52, 51, 26, 46, 25, 45, 9, 51, 49, 48, 51, 66, 65, 57, 69, 43, 50, 9, 32, 55, 10, 58, 62, 46, 19, 87, 12 ];
let Rooms = 16;

console.log(self.hotel(Arrivals, Departures, Rooms));

 **/