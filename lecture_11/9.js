const str = 'adsf asdf asdf';
const str2 = "asdf asdf asdf asdf";
const str3 = 'asdf asdf "name" asdfasdf';
const str4 = "asdf asdf 'single quote' asdfasdf";


console.log(str3);
console.log(str4);

const array = ['Aldiyar', 'Aizhan', 'Diana', 'Gulnur', 'Alen', 'Zharkynai'];
const students = array.join(', ');

// template literal
const name = 'Assyl';
const greetings = `Hello, ${name}`;
console.log(greetings);

console.log(students, students.includes('Dinara'));
console.log(students, students.includes('Aizhan'));
let studentName = 'Aizhan';

if (students.includes(studentName)) {
    console.log(`${studentName} is in this class`);
}

const abc = 'abc';
const def = 'def';
const abcdef = abc + def;


console.log(abcdef, abc.concat(def), abcdef.startsWith('Abc'), abcdef.endsWith('def'));







