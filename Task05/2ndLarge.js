const secondLarge = (input) => {

    const arr = input.flat();
    let max;
    for (let i = 0; i < 2; i++) {
        max = Math.max();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        let index = arr.indexOf(max)
        // console.log(index);
        arr.splice(index, 2)
        
    }
    return [max]
}
const nums = [[1, 2, 4, 5], 20, [14, 7, 8], [11, 13, 23, 25]]

console.log(secondLarge(nums));

