
function calculateParabola(x) {
    return x ** 2;
}

function calculateHyperbola(x) {
    return x ** 3;
}

function calculateSin(x) {
    return Math.sin(x);
}



function getFunctionResults(array, getYPoints) {
    const results = [];

    for (let i = 0; i < array.length; i ++) {
        const y = getYPoints(array[i]);
        results.push(y);
    }

    return results;
}

const ys = getFunctionResults([1, 2, 3, 4, 5], calculateParabola);
const ys2 = getFunctionResults([1, 2, 3, 4, 5, 6], calculateHyperbola);
const ys3 = getFunctionResults([1, 2, 3, 4, 5, 6], calculateSin);

console.log(ys);
console.log(ys2);
console.log(ys3);





