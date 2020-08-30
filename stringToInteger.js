function isNumber(c) {
    return (c >= '0' && c <= '9')
}

function myAtoi(s) {
    let number = 0;
    let flag = 1;
    let foundNum = false
    for (let i = 0; i < s.length; i++) {
        let c = s[i]

        if ((!(c == '-' || c == '+') && !isNumber(c) && (c != ' ' && !foundNum)) || ((c == '-') && (s[i + 1] == '+') || (c == '+') && (s[i + 1] == '-')))
            break

        if (c == '-' && isNumber(s[i + 1]))
            flag = -1

        if (isNumber(c)) {
            foundNum = true
            number *= 10
            number += Number(c)
        }
    }

    number *= flag
    if (number < -2147483648)
        number = -2147483648
    else if (number > 2147483647)
        number = 2147483647

    return number
}

myAtoi(' -')