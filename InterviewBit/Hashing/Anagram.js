//completed
/**
 Given an array of strings, return all groups of strings that are anagrams. Represent a group by a list of integers representing the index in the original list. Look at the sample case for clarification.

 Anagram : a word, phrase, or name formed by rearranging the letters of another, such as 'spar', formed from 'rasp'
 Note: All inputs will be in lower-case.
 Example :

 Input : cat dog god tca
 Output : [[1, 4], [2, 3]]
 cat and tca are anagrams which correspond to index 1 and 4.
 dog and god are another set of anagrams which correspond to index 2 and 3.
 The indices are 1 based ( the first element has index 1 instead of index 0).

 Ordering of the result : You should not change the relative ordering of the words / phrases within the group. Within a group containing A[i] and A[j], A[i] comes before A[j] if i < j.
 **/

module.exports = self = {
  //param A : array of strings
  //return a array of array of integers

  //approach sort the string and add the sorted string as key to a hash map. The value will be the index of the hash
  anagrams : function(A){
    console.log(A);
    const hash = {};

    A.forEach(function(part, index, theArray) {
      let str = theArray[index];
      var sortedString = function(str) {
        return str.split('').sort().join('');
      };

      if(hash[sortedString(str)]) {
        hash[sortedString(str)].push(index+1);
      } else {
        hash[sortedString(str)] = [index+1];
      }
    });

    let result = [];
    for (let eachKey in hash) {
      result.push(hash[eachKey]);
    }

    return result;

  }
};


const input = ["cat", "dog", "god", "tca"];
console.log(self.anagrams(input));
