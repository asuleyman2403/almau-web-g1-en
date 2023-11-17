const students = [
  {
    name: '1',
    grade: 80,
  },
  {
    name: '2',
    grade: 90,
  },
  {
    name: '3',
    grade: 40,
  },
];
let sum = 0;
let avg = 0;
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    sum += student.grade;
}

avg = sum / students.length;
console.log(avg);




