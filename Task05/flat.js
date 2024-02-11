const flat = (input) => {
    let secondLarge=Math.max();
    let large=Math.max();
    const arr = [];
    for (let i = 0; i < input.length; i++) {
        let elem = input[i];
        if (Array.isArray(elem)) {
            arr.push(...flat(elem))
        }
        else {
            arr.push(elem)
        }

    }
    
   
}
const nums = [[1, 2, 4, 20, 5],10, [14, 7, 8], [11, 15, 13, 23]]

console.log(flat(nums));