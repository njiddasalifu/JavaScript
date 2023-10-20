function fibonacci(n){
const fib = [0,1]
for(let i=2;i<n;i++) {
    fib[i]=fib[i-1] + fib[1-2];
    }
    return fib;
}
console.log(fibonacci(7))
console.log(fibonacci(3))