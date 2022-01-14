//returns a single value: the function's accumulated result

const initialArray = [-1,-9,1,2,3,4,5]
var reducedValue = initialArray[0]

const reducefunction = (arr,anyfunction) => {
    let result = callbackAction(arr)
    return result
}

const callbackAction = (array) =>{ 
    for(let i = 1;i< array.length;i++){
        reducedValue += array[i]
    }
    return reducedValue
}

const finalValue = reducefunction(initialArray,callbackAction);

console.log(finalValue)