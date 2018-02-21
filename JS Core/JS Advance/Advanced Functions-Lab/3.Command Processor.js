// 3.	Command Processor
// Write a JS program that keeps a string inside it’s context and can execute different commands that modify or output the string on the console.
// append(str) – add str to the end of the internal string
// removeStart(n) – remove the first n characters from the string, n is an integer
// removeEnd(n) – remove the last n characters from the string, n is an integer
// print – output the stored string to the console
// Input
// You will receive an array of strings. Each element is a command that may be a single word or contain an argument, separated by space.
// Output
// Whenever you receive the command print, output should be the printed on the console. Any other operations are carried onto the internal storage of the function.

function solve(arr){
    let commandProcessor = (function () {
        let str = ''
            return {
                append: (s) => str += s,
                removeStart: (n) => str = str.substring(n),
                removeEnd: (n) => str = str.substring(0, str.length - n),
                print: () => console.log(str)
            }              
    })()
        for (let st of arr) {
            let [comm, value] = st.split(' ')
            commandProcessor[comm](value)
    }
}

solve(['append hello',
'append again',
'removeStart 3',
'removeEnd 4',
'print'])
