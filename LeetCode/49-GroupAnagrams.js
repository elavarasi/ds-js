/**
 Given an array of strings, group anagrams together.

 Example:

 Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 Output:
 [
 ["ate","eat","tea"],
 ["nat","tan"],
 ["bat"]
 ]
 **/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  console.log(strs);
  const hash = {};

  strs.forEach(function(part, index, theArray) {
    let str = theArray[index];
    var sortedString = function(str) {
      return str.split('').sort().join('');
    };

    if(hash[sortedString(str)]) {
      hash[sortedString(str)].push(strs[index]);
    } else {
      hash[sortedString(str)] = [strs[index]];
    }
  });

  console.log(hash);
  let result = [];
  for (let eachKey in hash) {
    result.push(hash[eachKey]);
  }

  return result;

};

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));