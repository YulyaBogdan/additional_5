module.exports = function check(str, bracketsConfig) {
  var arr = Array.from(str);
  var stack = [];
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < bracketsConfig.length; j++) {
          for (var k = 0; k < 2; k++) {
              if (arr[i] === bracketsConfig[j][k]) {
                  if (i > 0 && stack[stack.length-1] === arr[i] && (k === 1 || bracketsConfig[j][0] === bracketsConfig[j][1]))
                      stack.pop();
                  else stack.push(bracketsConfig[j][1-k]);
              }
          }
      }
  }
  if (stack.length === 0)
      return true;
  return false;

}
