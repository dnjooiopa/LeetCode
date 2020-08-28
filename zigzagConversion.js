function convert(s, numRows) {
    if (numRows == 1)
        return s

    let zigzag = new Array(numRows).fill('')
    let row = 0
    let direction = -1
    for (let i = 0; i < s.length; i++) {
        zigzag[row] += s[i]
        if (row == 0 || row == numRows - 1)
            direction = -direction
        row += direction
    }

    return zigzag.join('')
}

convert('PAYPALISHIRING', 3)