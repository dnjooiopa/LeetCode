function lengthOfLongestSubString(s) {
    let max = 0;
    let temp = 0;
    let startIndex = 0;
    let lastIndex = 0;
    for (let i = 0; i < s.length - 1; i++) {
        temp += 1
        if (s[i] == s[i + 1]) {
            max = (temp > max) ? temp : max
            startIndex = i - max + 1
            temp = 0
        }
    }
    return max;
}


console.log(lengthOfLongestSubString('abcabcbb'))