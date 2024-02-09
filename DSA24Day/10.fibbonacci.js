// (0,1,1,2,3,5,8,13....)
const fibbonacci = (num) => {
    let a = 0;
    let b = 1;
    if (num == a) return [a]

    if (num == b) return [b]

    if (num === 2) return [a, b]
    const series = [a, b];
    console.log(series);
    for (let i = 2; i < num; i++) {
        let nextNum = series[i-1] + series[i - 2]
        // console.log(nextNum);
        series.push(nextNum)
    }
return `(${series.join(",")})`

}

console.log(fibbonacci(10));