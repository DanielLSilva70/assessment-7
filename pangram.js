function isPangram (param) {
    let alphabet = new Set('abcdefghijklmnopqrstuvwxyz')
    for(let i of param.toLowerCase()) {
        alphabet.delete(i)
        if(alphabet.size === 0){
            return true;
        }
    }
    return false
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// time complexity 0(1)
// space complexity 0(n)