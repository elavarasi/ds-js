/**
 Find the intersection of two sorted arrays.
 OR in other words,
 Given 2 sorted arrays, find all the elements which occur in both the arrays.

 Example :

 Input :
 A : [1 2 3 3 4 5 6]
 B : [3 3 5]

 Output : [3 3 5]

 Input :
 A : [1 2 3 3 4 5 6]
 B : [3 5]

 Output : [3 5]
 **/


/*** Optimal solution hint.
 *
 * Let us name array1 as A and array2 as B, each with size ‘m’ and ‘n’.

 The obvious brute-force solution is to scan through each element in A, and for each element in A, scan if that element exist in B.
 The running time complexity is O(m*n).
 This is not good!
 Can we do better? A
 bsolutely!

 First of all, we know that both arrays are sorted.
 Can we somehow use this information to our advantage?

 We can apply binary search to find out if an element of A exist in B.
 So, the only modification from the brute-force approach is modifying linear search to binary search.
 This seems like a good improvement, we manage to reduce the complexity to O(m*lg(n)).

 Of course, you know you can trade space for running time by using a hash table. Is it really useful? We can definitely hash each element in B to an array index (takes O(n) time).

 Therefore, to find if an element of A exists in B, it would require just O(1) time. The complexity improves to O(m+n).

 But there is a problem.
 What if n is very big? (ie, n is one billion!).
 The hash table will either require a large amount of memory space, or there will be lots of collisions in the table, which makes access time no longer than O(1) time.
 Therefore, using a hash table is not a good general solution to this problem. Besides, using hash table DOES NOT require for the array to be sorted in the first place.

 Here is the most important observation in order to solve this

 We can have two indices, which both starts at zero.
 Compare the two first elements of A and B.

 If A[0] is greater than B[0], we increase index of B by one.
 If B[0] is greater than A[0], we increase index of A by one.
 If they are equal, we know an intersection has occurred, so add it to the list and increment index of A and B by one.
 Once either of the indices reaches the end of A or B, we have found all the intersections of A and B.

 The complexity of this approach is still O(m+n), but it does not requires any extra space that a hash table requires.
 The complexity is O(m+n) because in the worst case, there would be no intersection between the two arrays, and we need to increment the first index a total of m times and increment the second index a total of n times, which is a total of m+n times.
 */

// Ela solution - not optimal
module.exports = self = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  intersect : function(A, B) {
    if (A ===null || A.length ===0 || A === undefined || B === null || B.length ===0 || B ===undefined) {
      return [];
    }

    if(B[0] > A[A.length-1] || A[0] > B[B.length-1]) {
      return [];
    }

    let primaryArray, searchArray;

    if(A.length < B.length) {
      primaryArray = A;
      searchArray = B;
    } else {
      primaryArray = B;
      searchArray = A;
    }

    let i = 0;
    let beginningIndex = -1;
    while(i < primaryArray.length) {
      beginningIndex = self.binarySearch(searchArray, primaryArray[i]);
      if(beginningIndex != -1) {
        while(beginningIndex-1 >= 0 && searchArray[beginningIndex-1] == primaryArray[i]) {
        beginningIndex --;
        }
        searchArray = searchArray.slice(beginningIndex+1);
        i++;
      } else {
        primaryArray.splice(i,1);
      }

    }
    return primaryArray;
  },
  binarySearch: function(inputArray, searchElement) {
    let low = 0; let high = inputArray.length -1;
    while(low <=high) {
      let mid = Math.floor((low+high)/2);
      if(searchElement == inputArray[mid]) {
        return mid;
      } else if(searchElement < inputArray[mid]) {
        high = mid-1;
      } else {
        low = mid+1;
      }
    }
    return -1;
  }
};

let A = [1,2,3,3,3,4,5,6,20];
let B = [3,3,5,7,20,20];

//let A = [ 1, 3, 8, 10, 13, 13, 16, 16, 16, 18, 21, 23, 24, 31, 31, 31, 33, 35, 35, 37, 37, 38, 40, 41, 43, 47, 47, 48, 48, 52, 52, 53, 53, 55, 56, 60, 60, 61, 61, 63, 63, 64, 66, 67, 67, 68, 69, 71, 80, 80, 80, 80, 80, 80, 81, 85, 87, 87, 88, 89, 90, 94, 95, 97, 98, 98, 100, 101 ]
//let B = [ 5, 7, 14, 14, 25, 28, 28, 34, 35, 38, 38, 39, 46, 53, 65, 67, 69, 70, 78, 82, 94, 94, 98 ];
console.log(self.intersect(A,B));

