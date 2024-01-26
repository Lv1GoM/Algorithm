// function solution(A, B) {
//     let score = 0;
    
//     for (let i = 0; i < A.length; i++) {
//         const bigNumArr = B.filter(n => A[i] < n);

//         if (bigNumArr.length > 0) {
//             const minNum = Math.min(...bigNumArr);
//             const minNumIndex = B.indexOf(minNum);
//             B.splice(minNumIndex, 1);
//             score++;
//         }
//     }
    
//     return score;
// }

function solution(A, B) {
    let score = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    let bIndex = 0;

    for (let i = 0; i < A.length; i++) {
        const currentNum = A[i];

        while (bIndex < B.length && B[bIndex] <= currentNum) {
            bIndex++;
        }

        if (bIndex < B.length) {
            bIndex++;
            score++;
        }
    }

    return score;
}