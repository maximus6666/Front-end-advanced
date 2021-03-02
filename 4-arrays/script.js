const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних"
];
const marks = [4, 5, 5, 3, 4, 5];

//1 Ділимо студентів на пари
function getPairs(arr) {
  const pair1 = [arr[0], arr[2]];
  const pair2 = [arr[1], arr[3]];
  const pair3 = [arr[4], arr[5]];
  const result = [pair1, pair2, pair3];
  return result;
}
const pairs = getPairs(students);
console.log(pairs);

// 2 Додаєм до пар теми
function addProjectTheme(pairs, themes) {
  const result = [];

  for (let i = 0; i < pairs.length; i++) {
    const pairsAndThemes = [`${pairs[i][0]} і ${pairs[i][1]}`, themes[i]];
    result.push(pairsAndThemes);
  }

  return result;
}
const studentsAndthemes = addProjectTheme(pairs, themes);
console.log(studentsAndthemes);

//3 Додаєм до студентів оцінки
function addMarkToStudent(students, marks) {
  const result = [];

  for (let i = 0; i < students.length; i++) {
    const student = [students[i]];
    student.push(marks[i]);
    result.push(student);
  }

  return result;
}
const studentsAndMarks = addMarkToStudent(students, marks);
console.log(studentsAndMarks);

//4 Додаєм випадкову оцінку 
function addRandomMark(students) {
  const result = [];

  for (let i = 0; i < students.length; i++) {
    const randomMark = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    const studentsWithRandomMarks = [...students[i], randomMark];
    result.push(studentsWithRandomMarks);
  }

  return result;
}
const studentsWithRandomMarks = addRandomMark(studentsAndthemes);
console.log(studentsWithRandomMarks);
