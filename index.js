function mapToNegativize(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * -1)
    }
    return newArray;
}

function mapToNoChange(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray;
}

function mapToDouble(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray;
}

function mapToSquare(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] ** 2)
    }
    return newArray;
}

function reduceToTotal(array, num = 0) {
    for (let i = 0; i < array.length; i++) {
        num += array[i];
    }
    return num;
}

function reduceToAllTrue(array) {
    let result;
    for (let i = 0; i < array.length; i++) {
        if (Boolean(array[i]) === true) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}

function reduceToAnyTrue(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (Boolean(array[i]) === true) {
            result.push(Boolean(array[i]));
        }
    }
    if (result.includes(true)) {
        return true;
    } else {
        return false;
    }
}