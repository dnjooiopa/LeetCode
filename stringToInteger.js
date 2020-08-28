function isNumber(c) {
    return (c >= '0' && c <= '9')
}

function myAtoi(s) {
    let number = 0;
    let flag = 1;
    for (let i = 0; i < s.length; i++) {
        let c = s[i]

        if (!(c == '-' || c == '+') && !isNumber(c) && c != ' ')
            break


        if (c == '-' && isNumber(s[i + 1]))
            flag = -1

        if (isNumber(c)) {
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