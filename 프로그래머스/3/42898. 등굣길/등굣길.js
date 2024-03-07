function solution(m, n, puddles) {
    let shortcutCountArr = [];
    for (let i = 0; i < n+1; i++){
        const arr = []
        for (let j = 0; j < m+1; j ++){
            arr.push(0);
        }
        shortcutCountArr.push(arr)
    }

    shortcutCountArr[1][1] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (puddles.some(([x, y]) => x === j && y === i)) {
                continue;
            }
            if (i === 1 && j === 1) {
                continue;
            }
            shortcutCountArr[i][j] = (shortcutCountArr[i - 1][j] + shortcutCountArr[i][j - 1]) % 1000000007;
        }
    }
    return shortcutCountArr[n][m] % 1000000007;
}