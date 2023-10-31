/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
     return arr.slice().sort(function(a, b) {
        // Call the fn function for both a and b, and compare the results
        const aValue = fn(a);
        const bValue = fn(b);
        if (aValue < bValue) {
            return -1;
        } else if (aValue > bValue) {
            return 1;
        } else {
            return 0;
        }
    });
};