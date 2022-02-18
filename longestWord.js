function longestWord (param) {
    let zero = 0
    param.forEach((word) => {
        if(word.length > zero) {
            zero = word.length;
        }
    })
    return zero
}

console.log(longestWord(['hi', 'Hello']))
//time complexity 0(n)
// space complexity 0(n)