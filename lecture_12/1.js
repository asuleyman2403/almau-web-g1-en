const student = {
    'name': 'Student name',
    'surname': 'Student surname',
    'gpa': 3.67,
    'subjects': ['Introduction to web dev', 'Python and algorithms', 'Linear algebra'],
}

const subject = {
    name: 'Introduction to web-development using HTML, CSS and JavaScript',
    code: 'SDT-1005',
    homeworks: {
        1: {
            grade: 25,
            task: 'Solve 18 js problems',
        }
    }
}

student.yearOfStudy = 1;
console.log(student);
delete student.yearOfStudy;
console.log(student);

console.log(student['name'], student['surname']);
let property = 'name';
console.log(student[property]);
property = 'surname';
console.log(student[property]);

const properties = ['name', 'surname', 'gpa'];

console.log('######');

for (let i = 0; i < properties.length; i++) {
    console.log(student[properties[i]]);
}

console.log('######');


for (let key of properties) {
    console.log(student[key]);
}

