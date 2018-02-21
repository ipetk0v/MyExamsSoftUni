// 1.	Aggregates
// Write a JS program that uses a reducer function to display information about an input array.
// Input
// You will receive an array of numeric values.
// Output
// The output should be the printed on the console. Display the sum of all elements in the array, the value of the smallest, the value of the biggest, the product of all elements and a string of all elements joined together.

function aggregates(arr) {
    console.log(`Sum = ${arr.reduce((a,b) => a + b)}`)
    console.log(`Min = ${arr.reduce((a,b) => Math.min(a, b))}`)
    console.log(`Max = ${arr.reduce((a,b) => Math.max(a, b))}`)
    console.log(`Product = ${arr.reduce((a,b) => a * b)}`)
    console.log(`Join = ${arr.join('')}`)
}

