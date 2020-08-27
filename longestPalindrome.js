function isPalindrome(s) {
    let isPalindrome = true
    let subStringLength = s.length
    for (let i = 0; i < subStringLength / 2; i++) {
        if (s[i] != s[subStringLength - i - 1]) {
            isPalindrome = false
            break
        }
    }
    return isPalindrome
}

function longestPalindrome(s) {
    if(s == '')
        return ''
        
    let max = 1
    let longestPalindrome = s[0]
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            const len = j - i + 1
            const subString = s.substring(i, j + 1)
             if ((len > max) && isPalindrome(subString)){
                longestPalindrome = subString
                max = len
             }
                 
        }
    }
    return longestPalindrome
}


//console.log(isPalindrome('abccbdd', 1, 4));
console.log(longestPalindrome('babad'))