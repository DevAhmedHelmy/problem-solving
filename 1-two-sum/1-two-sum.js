/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     
    for(let i=0; i < nums.length - 1; i++){
        for(let j=i+1 ; j <nums.length ;j++ ){
            if(nums[i] + nums[j] == target){
           return [i ,j]
        }
        }
        
        
    }
};

var nums = [3,2,4], target =6;
twoSum(nums,target);