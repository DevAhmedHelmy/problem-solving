/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};
    let callCount = 0;

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.hasOwnProperty(key)) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        callCount++;

        return result;
    };

    // Additional function to get the call count
    function getCallCount() {
        return callCount;
    }

    // Return the getCallCount function as a property of the memoized function
    memoize.getCallCount = getCallCount;
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */