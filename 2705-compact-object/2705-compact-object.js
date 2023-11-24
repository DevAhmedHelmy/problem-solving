/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
      if (Array.isArray(obj)) {
    // If the object is an array, filter out elements with falsy values
    return obj.filter(Boolean).map(compactObject);
  } else if (typeof obj === 'object' && obj !== null) {
    // If the object is a non-null object, recursively compact its properties
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([key, value]) => Boolean(value))
        .map(([key, value]) => [key, compactObject(value)])
    );
  } else {
    // For non-object and non-array values, return the value as is
    return obj;
  }
};