// Write a JS function that when called, returns the next Fibonacci number, starting at 0, 1. Use a closure to keep the current number.
// Input
// There will be no input.
// Output
// The output must be a Fibonacci number.

function fibonacci() {
    let first = 0
    let second = 1
    return function(){
        let next = first + second
        first = second
        second = next
        console.log(first)
    }
}

let fib = fibonacci()
fib()
fib()
fib()
fib()
fib()
fib()