/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, chunkSize) {
      if (arr.length === 0) return [];
  const size = Math.ceil(arr.length / chunkSize);
  
  const chunks = new Array(size).fill(0);
 
  return chunks.map((_, index) => {
    const start = index * chunkSize;
    const end = (index + 1) * chunkSize;
      
    return arr.slice(start, end);
  })
};
