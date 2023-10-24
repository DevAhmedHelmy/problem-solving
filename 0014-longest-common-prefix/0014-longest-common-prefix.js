/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if (strs.length === 0) return ""; // Return an empty string for an empty array
  let commonPrefix = strs[0]; // Initialize commonPrefix with the first word

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (
      j < commonPrefix.length &&
      j < strs[i].length &&
      commonPrefix[j] === strs[i][j]
    ) {
      j++;
    }
    commonPrefix = commonPrefix.slice(0, j); // Update the commonPrefix
    if (commonPrefix === "") {
      return "";
    }
  }

  return commonPrefix;
};