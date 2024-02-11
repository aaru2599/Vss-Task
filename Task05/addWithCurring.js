function outerCurring(a) {
    let add = 0;
    if (a) {
        add = add + a
    }
    function innerCurring(args) {
        if (args) {
            add = add + args
            return innerCurring;
        }else{
            return add
        }
    }
    return innerCurring
}

console.log(outerCurring(2)(2)(3)());