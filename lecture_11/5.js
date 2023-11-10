
let sum = 0;
const array = [1, 2, 3, 4, 5];

function calculateSum() { // void function
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

}

console.log(sum);
const sum1 = calculateSum();
console.log(sum1);
console.log(sum);


