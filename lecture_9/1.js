console.log('I am a next script!!!');
var varOne = 5;
let varTwo = 10;
const varThree = 50;
// varThree = 20; ERROR

// DATA Types
const str = 'I am string';
const isCool = true;
const nullable = null;
const undefinedVariable = undefined;
const grades = {
    'A': 95,
    'B+': 85
}

// Conditional operator
// 95 < 85 -> false
// 100 >= 100 -> true
// 'I am string'.length >= 5 -> true
// '' -> false
// 0 -> false
// NaN -> false
// 1 -> true
const str2 = 'abc';
const num2 = Number(str2);

// if num2 or num2 is 0:
//     print('ok')
// else:
//     print('not ok')

// OR
// true || false -> true
// false || true -> true
// true || true -> true
// false || false -> false
if (num2 || num2 === 0) {
    console.log('Successfully converted to number');
} else {
    console.log('Not successfully conversion');
}

// Ternary operator: condition check ? true : false;
grades['A'] >= 95 ? console.log('A') : console.log('Not A');

const studentGrade = 95;
const studentYear = 2;
// AND
// true && false -> false
// false && true -> false
// true && true -> true
// false && false -> false
if (studentGrade >= 95 && studentYear === 1) {
    console.log('Good freshman');
} else {
    console.log('Ok freshman');
}

if (studentYear !== 1) {
    console.log('Not a freshman');
}

// !(studentYear === 1) -> !false -> true -> code will run
if (!(studentYear === 1)) {
    console.log('Same as above');
}

// !studentYear === 1 -> false === 1 -> false


if (!!(studentYear === 1)) {
    console.log('Checking is student is freshmen');
}


