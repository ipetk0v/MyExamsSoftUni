function sortArray(inputArray, sortMethod) {

    let ascendingComperator = function(a , b){
        return a - b
    }

    let descendingComperator = function(a , b){
        return b - a
    }

    let sortingStrategies = {
        'asc': ascendingComperator,
        'desc': descendingComperator
    }

    return inputArray.sort(sortingStrategies[sortMethod])
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))