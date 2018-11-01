/*
Generate all Parentheses II
Asked in:
Facebook
Microsoft
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses of length 2*n.

  For example, given n = 3, a solution set is:

  "((()))", "(()())", "(())()", "()(())", "()()()"
Make sure the returned list of strings are sorted.
**/

module.exports = self = {
  generateParenthesis: function(n) {
    let result = [];
    let str = '';
    if(n>0) {
      this._generateParenthesis(str, 0, 0, n, result);
    }
    return;
  },
  _generateParenthesis: function(str, open, close, n, result) {
    if(open ==n && close == n) {
      result.push(str);
      console.log(result);
      return;
    } else {
      if(open < n) {
        this._generateParenthesis(str + '(', open+1, close, n, result);
      }
      if(close < open) {
        this._generateParenthesis(str + ')', open, close+1, n, result);
      }
    }
  }
};


self.generateParenthesis(3);