function uniqueChar (param) {
    for(let i = 0; i < param.length; i++) {
        for(let j = 0; j < param.length; j++){
            if(i !== j && param[i] === param[j]) {
                return false;
            }
        }
    }
    return true
}

console.log(uniqueChar('monday'))
//time complexity 0(n^2)
//space complexity 0(n)