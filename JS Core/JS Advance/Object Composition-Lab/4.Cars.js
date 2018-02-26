// Write a closure that can create and modify objects. All created objects should be kept and be accessible by name. You should support the following functionality:
// •	create <name> - creates an object with the supplied <name>
// •	create <name> inherits <parentName> - creates an object with the given <name>, that inherits from the parent object with the <parentName>
// •	set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.
// •	print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…" - the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.
// Input
// The input will come as an array of strings - each string represents a command to be executed from your closure.
// Output
// For every print command - you should print on the console all properties of the object in the above mentioned format.
// Constraints
// •	All commands will always be valid, there will be no nonexistent or incorrect input.

function cars(input){
    let commandExecuter = (function () {
        let store = {}
        function create(arr){
            if(arr.length > 2){
                 store[arr[0]] = Object.create(store[arr[2]])
            } else {
                store[arr[0]] = {}
            }
        }
        function set(arr){
            store[arr[0]][arr[1]] = arr[2]
        }
        function print(arr){
            let result = []
            let obj = store[arr[0]]
            for (let key in obj) {
                result.push(key + ":" + obj[key])
            }
            console.log(result.join(', '))
        }
        return {create,set,print}
    })()
    for (let str of input) {
        let args = str.split(' ')
        let command = args.shift()
        commandExecuter[command](args)
    }
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])