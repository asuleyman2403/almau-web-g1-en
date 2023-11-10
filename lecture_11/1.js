


function calculateSum(array) { // array x
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum; // y
}

// calculateSum

const array1 = [1, 2, 3, 4, 5];
const sum1 = calculateSum(array1);
console.log(sum1);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
const sum2 = calculateSum(array2);
console.log(sum2);


// y = x ^ 2 
// [0, 1, 2] => [0, 1, 4]


function getY(x) {
    return x ** 2;
}

// y = x ^ 2;

const y1 = getY(2);
const y2 = getY(3);

console.log(y1);

const a1 = 5;
const b1 = 4;

const a2 = 3;
const b2 = 4;

function getRectanglesPerimeter(a, b) {
    return a * b;
}

const p1 = getRectanglesPerimeter(a1, b1);
const p2 = getRectanglesPerimeter(a2, b2);

console.log(Math.sqrt(16));

function getSquare(x) {
    return x ** 2;
}

console.log(getSquare(6));


