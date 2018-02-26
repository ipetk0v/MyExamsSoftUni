// Using a closure, create an inner object to process list commands. The commands supported should be the following:
// •	add <string> - adds the following string in an inner collection.
// •	remove <string> - removes all occurrences of the supplied <string> from the inner collection.
// •	print - prints all elements of the inner collection joined by ", ".
// Input
// The input will come as an array of strings - each string represents a command to be executed from the command execution engine.
// Output
// For every print command - you should print on the console the inner collection joined by ", "

function listProcessor(arr) {
    let commandExecutor = (function (){
        let arr = []
        function add(str) {
            arr.push(str)
        }
        function remove(str){
            arr = arr.filter(w => w !== str)            
        }
        function print(){
            console.log(arr.join(','))
        }
        return {add,remove,print}
    }())
    for (let str of arr) {
        let [command,value] = str.split(' ')
        commandExecutor[command](value)
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])