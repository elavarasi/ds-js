//ela done all - accepted
/**
 Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.
 You should pack your words in a greedy approach; that is, pack as many words as you can in each line.

 Pad extra spaces ‘ ‘ when necessary so that each line has exactly L characters.
 Extra spaces between words should be distributed as evenly as possible.
 If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
 For the last line of text, it should be left justified and no extra space is inserted between words.

 Your program should return a list of strings, where each string represents a single line.

 Example:

 words: ["This", "is", "an", "example", "of", "text", "justification."]

 L: 16.

 Return the formatted lines as:

 [
 "This    is    an",
 "example  of text",
 "justification.  "
 ]
 **/


module.exports = self = {
  //param A : array of strings
  //param B : integer
  //return a array of strings
  fullJustify : function(A, B) {
    let justifiedArray = [];
    let eachLine = '';
    let noOfWordsInLine = 0;
    let isLastLine = false;

    for(let i=0; i< A.length; i++) {
      if(eachLine === '') {
        if(A[i].length <= B) {
          eachLine = A[i];
          noOfWordsInLine ++;
        }
      } else {
        if(eachLine.length + 1 + A[i].length > B) {
          console.log(eachLine);
          //justify // assign even spaces
          eachLine = self.justifyLine(eachLine, B, noOfWordsInLine, isLastLine);

          justifiedArray.push(eachLine);
          eachLine = '';
          noOfWordsInLine = 0;
          i--;
        } else {
          eachLine = eachLine.concat(' ');
          eachLine = eachLine.concat(A[i]);
          noOfWordsInLine ++;
        }
      }
    }
    //push the last entry
    if(eachLine) {
      isLastLine = true;
      //justify last line - justify left and add spaces to the right
      eachLine = self.justifyLine(eachLine, B, noOfWordsInLine, isLastLine);
      justifiedArray.push(eachLine);

    }
    return justifiedArray;
  },
  justifyLine: function(Line, AllowedSpace, noOfWordsInLine, isLastLine) {
    let toFillGap = 0;
    let resulLine = '';
    // Last line just justify to left. If no of words in any line is 1 then left justify as well
    if(isLastLine || noOfWordsInLine == 1) {
      resulLine = Line;
      toFillGap = AllowedSpace - Line.length;
      if(toFillGap > 0){
        let counter = 0;
        while (counter < toFillGap) {
          resulLine = resulLine.concat(' ');
          counter ++;
        }
      }
    } else { // Not last line evenly distribute the extra spaces. If extra spaces are odd then add more extra space to the left.
      toFillGap = AllowedSpace - Line.length;
      let totalWordGaps =  noOfWordsInLine -1;
      //let gapArray = Array(totalWordGaps).fill(1); or below

      let gapArray = [];
      for (let i=0; i<totalWordGaps; i++) {
        gapArray[i] = 1;
      }

      //Distribute the toFillGaps from left
      let index = 0;
      while(toFillGap > 0) {
        if (index < gapArray.length) {
          gapArray[index] = gapArray[index] + 1;
          toFillGap = toFillGap - 1;
          index ++;
        } else {
          index = 0;
        }
      }

      //Now add the gaps in the line string between words as per the gapArray which has the space distribution numbers
      let gapindex = 0;
      for(let i=0; i<Line.length; i++) {
        if(Line.charAt(i) == ' ') {
          if(gapindex < gapArray.length){
            let counter = 0;
            while (counter < gapArray[gapindex]) {
              resulLine = resulLine.concat(' ');
              counter ++;
            }
          }
          gapindex ++;
        } else {
          resulLine = resulLine.concat(Line.charAt(i));
        }
      }
    }
    return resulLine;
  }
};

// const A = ["This", "is", "an", "example", "of", "text", "justification."];
// const A = [ "What", "must", "be", "shall", "be." ];
// const A = [ "glu", "muskzjyen", "ahxkp", "t", "djmgzzyh", "jzudvh", "raji", "vmipiz", "sg", "rv", "mekoexzfmq", "fsrihvdnt", "yvnppem", "gidia", "fxjlzekp", "uvdaj", "ua", "pzagn", "bjffryz", "nkdd", "osrownxj", "fvluvpdj", "kkrpr", "khp", "eef", "aogrl", "gqfwfnaen", "qhujt", "vabjsmj", "ji", "f", "opihimudj", "awi", "jyjlyfavbg", "tqxupaaknt", "dvqxay", "ny", "ezxsvmqk", "ncsckq", "nzlce", "cxzdirg", "dnmaxql", "bhrgyuyc", "qtqt", "yka", "wkjriv", "xyfoxfcqzb", "fttsfs", "m" ]
// const B = 144;
const A = [ "am", "fasgoprn", "lvqsrjylg", "rzuslwan", "xlaui", "tnzegzuzn", "kuiwdc", "fofjkkkm", "ssqjig", "tcmejefj", "uixgzm", "lyuxeaxsg", "iqiyip", "msv", "uurcazjc", "earsrvrq", "qlq", "lxrtzkjpg", "jkxymjus", "mvornwza", "zty", "q", "nsecqphjy" ];
const B = 14;

console.log(self.fullJustify(A,B));


