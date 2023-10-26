/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
     // Initialize an empty array to store the results.
    let newArray = [];
    
    // Loop through the input array.
    for (let i = 0; i < arr.length; i++) {
        // Apply the provided function 'fn' to the current element 'arr[i]'.
        let elem = fn(arr[i],i);
        // Add the result to the new array.
        newArray.push(elem);
    }
    
    // Return the new array with the mapped values.
    return newArray;
};