function reverseInteger(num) {

    let ans = 0
    let n = num
    let flag = 1
    if (n < 0) {
        flag = -1
        n = -n
    }

    while (n) {
        ans *= 10
        ans += n % 10
        n = Math.floor(n / 10)
    }

    if(ans <= 2147483647 && ans >= -2147483648)
        return ans * flag
    else 
        return 0
}


console.log(reverseInteger(-120));
