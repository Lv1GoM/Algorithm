function solution(s) {
    const numArr = s.split(" ");
    const result = String(Math.min(...numArr)) + " " + String(Math.max(...numArr));
    return result;
}