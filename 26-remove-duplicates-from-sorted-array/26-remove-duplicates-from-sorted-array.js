/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
    let i=0;
    while(i<nums.length){
      let j=i+1;
           while(nums[i]==nums[j]){
             nums.splice(j,1);
           }
      i++;
      
      
      }
    return nums.length;
    

};
var nums = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(nums);