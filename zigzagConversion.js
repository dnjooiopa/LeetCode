function convert(s, numRows) {
    if (numRows == 1)
        return s

    let zigzag = new Array(numRows).fill('')
    let row = 0
    let direction = 1
    for (let i = 0; i < s.length; i++) {
        zigzag[row] += s[i]
        if (row == 0 && direction == -1) {
            direction = 1
        } else if (row == (numRows - 1) && direction == 1) {
            direction = -1
        }
        row += direction
    }
    
    return zigzag.join('')
}

convert('PAYPALISHIRING', 3)