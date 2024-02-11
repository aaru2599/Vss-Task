const secondLarge = (input) => {
    let secondLarge = -Infinity;
    let large = -Infinity;
    for (let i = 0; i < input.length; i++) {
        let elem = input[i];
        for (let j = 0; j < elem.length; j++) {
          if(elem[j]>large){
            secondLarge=large;
            large=elem[j]
          }
        }
    }
    return secondLarge;
}

const nums = [[1, 2, 4, 5], [14, 7, 8], [11, 13, 23, 25]];
console.log(secondLarge(nums));
