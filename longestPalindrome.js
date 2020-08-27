function expandAroundCenter(s, left, right) {
    let i = left,
        j = right
    while (i >= 0 && j < s.length && (s[i] == s[j])) {
        i--
        j++
    }
    return j - i - 1
}

function longestPalindrome(s) {
    if (!s || s.length == 0)
        return ''
    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i)
        let len2 = expandAroundCenter(s, i, i + 1)
        let len = Math.max(len1, len2)
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }

    }

    return s.substring(start, end + 1)
}


console.log(longestPalindrome('aaaa'))