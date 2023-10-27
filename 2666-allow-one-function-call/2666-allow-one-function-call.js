/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    
      let hasRun = false;
	return function(...args){
   if (!hasRun) {
      hasRun = true; // Set the flag to true to indicate that the function has been executed
      return fn(...args);
    } else {
      // If the function has already been executed, return undefined
      return undefined;
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
