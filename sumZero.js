function sumZero (param) {
    for(let a = 0; a < param.length; a++) {
        for(let b = 0; b < param.length; b++){
            if(param[a] + param[b] === 0){
                return true
            }
        }
    }
    return false;
}

console.log(sumZero([1, -1]))
//time complexity 0(n^2)
//space complexity 0(n)