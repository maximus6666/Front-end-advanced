const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// Допоміжні функції
function getAverage(...numbers) {
  const integerArr = numbers.filter((number) => Number.isInteger(number));
  const sum = integerArr.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return +(sum / integerArr.length).toFixed(2);
}

function countLetter(letterStr, wordStr) {
  let counter = 0;
  const userWord = wordStr.toLowerCase();
  const userLetter = letterStr.toLowerCase();

  for (let i = 0; i < userWord.length; i++) {
    if (userLetter === userWord[i]) {
      counter++;
    }
  }

  return counter;
}

//1. Функція, яка повертає список предметів для конкретного студента
function getSubjects(student) {
  const subjectsList = Object.keys(student.subjects);
  const result = subjectsList.map((subject) => {
    return (subject[0].toUpperCase() + subject.slice(1)).replaceAll('_', ' ');
  });

  return result;
}

//2. Функція, яка рахує середню оцінку по усім предметам для переданого студента
function getAverageMark(student) {
  if (student) {
    const studentMarks = Object.values(student.subjects);

    const studentMarksList = studentMarks.reduce((list, mark) => {
      return list.concat(...mark);
    }, []);

    return getAverage(...studentMarksList);
  }

  return console.log('Student not found');
}

//3. Функція, яка повертає інформацію загального виду по переданому студенту
function getStudentInfo(student) {
  if (student) {
    return {
      course: student.course,
      name: student.name,
      averageMark: getAverageMark(student)
    };
  }

  return console.log('Student not found');
}

//4. Функція, яка повертає імена студентів у алфавітному порядку
function getStudentsNames(students) {
  const names = [];

  students.forEach(student => {
    names.push(student.name);
  });

  return names.sort();
}

//5. Функція, яка повертає кращого студента зі списку по показнику середньої оцінки.
function getBestStudent(students) {
  let bestMark = 0;
  let studentName = '';

  students.forEach((student) => {
    const currentMark = getAverageMark(student);
    if (bestMark < currentMark) {
      bestMark = currentMark;
      studentName = student.name;
    }
  });

  return studentName;
}

//6. Функція, яка повертає обє'кт, в якому ключі це букви у слові,
// а значення – кількість їх повторень.
function calculateWordLetters(word) {
	const separatedWord = word.split('');
	const result = {};

	separatedWord.forEach((letter) => {
		result[letter] = countLetter(letter, word);
	});

	return result;
}

console.log(calculateWordLetters('тест'));
