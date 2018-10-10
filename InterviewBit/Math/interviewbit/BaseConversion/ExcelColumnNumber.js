/**
 Given a column title as appears in an Excel sheet, return its corresponding column number.
 Example:
 A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28

 **/

module.exports = self = {
  //param A : string
  //return an integer
  titleToNumber : function(columntitle){
    let titlearray = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    console.log(titlearray);

    let title = columntitle.split('').reverse();
    let columnvalue = 0;
    for(let i=0; i<title.length; i++) {
      columnvalue += (titlearray.indexOf(title[i])+1) * Math.pow(26,i);
    }

    return columnvalue;
  }
};

console.log(self.titleToNumber('AAA'));
