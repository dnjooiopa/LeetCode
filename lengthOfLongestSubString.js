function lengthOfLongestSubString(s) {
    let max = 0;
    let leftWindow = 0;
    let index = new Array(128).fill(0)

    for (let rightWindow = 0; rightWindow < s.length; rightWindow++) {
        leftWindow = Math.max(index[s.charCodeAt(rightWindow)], leftWindow)
        max = Math.max(max, rightWindow - leftWindow + 1)
        index[s.charCodeAt(rightWindow)] = rightWindow + 1
    }

    return max;
}


console.log(lengthOfLongestSubString('abcabcbb'))