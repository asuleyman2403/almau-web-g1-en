const name = 'Assyl';
const fullName = 'Akmurat Aldiyar';

// array of chars
console.log(name.length);
console.log(name.toLowerCase());
console.log(name.toUpperCase());

console.log(fullName.split(' '));

const longSentence = 'This is a long, long, long sentence';

console.log(longSentence.split(','));
console.log(longSentence.split('long'));

console.log('asdfasdf'.split(' '));

const array = ['Aldiyar', 'Aizhan', 'Diana', 'Gulnur', 'Alen', 'Zharkynai'];
const studentsStr = array.join(', ');
const studentsStr2 = array.join(', ').split(', ').join(' ');

console.log(studentsStr);
