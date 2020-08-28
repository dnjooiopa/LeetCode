function twoSum(nums, target) {

    let len = nums.length

    for (let i = 0; i < len; i++) {
        let complement = target - nums[i]
        if(nums.includes(complement)){
            const remainingIndex = nums.indexOf(complement)
            if(i != remainingIndex)
                return [i, remainingIndex]
        }
    }

}


console.log(twoSum(
    [3,2,4], 6));