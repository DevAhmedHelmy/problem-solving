/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
   
  const result = [];
  function helper(arr, depth) {
    for (const val of arr) {
      if (Array.isArray(val) && depth < n) {
        helper(val, depth + 1); // You should pass `val` and increment depth here
      } else {
        result.push(val);
      }
    }
  }

  helper(arr, 0);
  return result;
    
};