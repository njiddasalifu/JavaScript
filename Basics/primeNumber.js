function isPrime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<=Math.sqrt(ns);i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

// Big-O = O(n)