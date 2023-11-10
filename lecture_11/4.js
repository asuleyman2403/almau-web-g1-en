
let sum = 0;
const array = [1, 2, 3, 4, 5];

function calculateSum() {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
}

console.log(sum, array);
calculateSum();
console.log(sum, array);



// for (let i = 0; i < 5; i++) {
//     console.log('for 1');
// }

// for (let i = 0; i < 5; i++) {
//     console.log('for 2');
// }

// variable scope
if (true) {
    let i = 5;
} else {
    let i = 3;
}

