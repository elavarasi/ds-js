/**
 * Given an absolute path for a file (Unix-style), simplify it.
 Examples:
 path = "/home/", => "/home"
 path = "/a/./b/../../c/", => "/c"
 Note that absolute path always begin with ‘/’ ( zroot directory )
 Path will not have whitespace characters.
 */


//let path = "/a/./b/../../c/";
//let path = "/a/./b/../../c/";
//let path = "/./.././ykt/xhp/nka/eyo/blr/emm/xxm/fuv/bjg/./qbd/./../pir/dhu/./../../wrm/grm/ach/jsy/dic/ggz/smq/mhl/./../yte/hou/ucd/vnn/fpf/cnb/ouf/hqq/upz/akr/./pzo/../llb/./tud/olc/zns/fiv/./eeu/fex/rhi/pnm/../../kke/./eng/bow/uvz/jmz/hwb/./././ids/dwj/aqu/erf/./koz/..";
let path = "/a/./b/../../c/";

module.exports = self = {
  //param A : string
  //return a strings
  simplifyPath : function(A) {
    let stack = new Array();
    let i = 0;
    while(i< A.length) {
      if(A.charAt(i).match(/[a-z]/i)) {
        stack.push(A.charAt(i));
        i++
      } else {
        if (A.charAt(i) == '/') {
          if(A.charAt(i+1) == '.' && A.charAt(i+2)== '.') {
            //stack.pop();
            if(stack.length > 0) {
              while((stack[stack.length-1]).match(/[a-z]/i))  {
                stack.pop();
              }
            }
            stack.pop();
            i = i + 3;
          } else if(A.charAt(i+1) == '.' && A.charAt(i+2)== '/') {
            i = i + 2;
          } else if (i+1 == A.length ) {
            i++;
          } else if (A.charAt(i+1) == '.' && i+2 == A.length) {
            stack.push('/');
            i = i+2;
          } else if (A.charAt(i+1) === '/') {
            i++;
          }
          else {
            stack.push(A.charAt(i));
            i++;
          }
        }
      }
    }

    if(stack.length == 0) {
      stack.push('/');
    }

    if(stack[stack.length-1] === '/') {
      stack.pop();
    }
    return stack.join('');
  }
};

console.log(self.simplifyPath(path));
