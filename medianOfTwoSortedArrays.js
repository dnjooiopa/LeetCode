function findMedianSortedArrays(nums1, nums2) {
    const mergedNums = [...nums1, ...nums2].sort((a, b) => a - b)

    const iMedian = Math.floor((nums1.length + nums2.length - 1) / 2)
    const isEven = (nums1.length + nums2.length) % 2 == 0
    let median = isEven ? (mergedNums[iMedian] + mergedNums[iMedian + 1]) / 2 : mergedNums[iMedian]

    return median
}


console.log(findMedianSortedArrays([1, 2], [1, 3]))