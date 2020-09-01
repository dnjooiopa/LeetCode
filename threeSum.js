function threeSum(nums) {

    let ans = []
    let len = nums.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                const sum = nums[i] + nums[j] + nums[k]
                if (sum == 0) {
                    ans.push([nums[i], nums[j], nums[k]].sort())
                }
            }
        }
    }
    ans = ans.filter(( t={}, a=> !(t[a]=a in t) ));
    return ans
}


threeSum([-1, 0, 1, 2, -1, -4])