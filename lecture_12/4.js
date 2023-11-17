const students = [
  {
    name: '1',
    grade: 80,
  },
  {
    name: '5',
    grade: 85,
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

const grades = {
  '0-50': 0,
  '50-60': 0,
  '60-70': 0,
  '70-80': 0,
  '80-90': 0,
  '90-100': 0,
};

for (let i = 0; i < students.length; i++) {
  const student = students[i];

  if (student.grade >= 90) {
    grades['90-100']++;
  } else if (student.grade >= 80) {
    grades['80-90']++;
  } else if (student.grade >= 70) {
    grades['70-80']++;
  } else if (student.grade >= 60) {
    grades['60-70']++;
  } else if (student.grade >= 50) {
    grades['50-60']++;
  } else {
    grades['0-50']++;
  }
}

console.log(grades);
