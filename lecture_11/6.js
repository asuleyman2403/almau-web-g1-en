
// a: number;
// b: boolean;
function diffArgs(a, b) {
    if (b) {
        console.log(a);
    } else {
        console.log(a ** 2);
    }
}

diffArgs(5, true);
diffArgs(6, false);

function diffArgs2(array, isEmpty, a) {
    if (isEmpty) {
        console.log(a);
    } else {
        console.log(array);
    }
}

diffArgs2([1, 2, 3], false, 5);
diffArgs2([1, 2], true, 2);


