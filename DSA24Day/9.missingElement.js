
const missingElement = (arr) => {
    const max=Math.max(...arr)
    const sum1 = (max * (max + 1)) / 2
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum2 += arr[i];
    }
    // console.log(sum2);
    return sum1 - sum2

}
console.log(missingElement([0, 2, 5, 6, 3, 4]));
