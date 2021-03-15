//1 Функція, яка повертає масив випадкових цілих чисел
function getRandomArray(length, min, max) {
  const result = Array(length).fill().map(() =>
    Math.floor(Math.random() * (max - min + 1) + min));

  return result;
}

//2 Функція, яка рахує середнє арифметичне
function getAverage(...numbers) {
  const integerArr = numbers.filter((number) => Number.isInteger(number));
  const sum = integerArr.reduce((sum, number) => sum + number, 0);

  return sum / integerArr.length;
}

//3 Функція, яка визначає медіану
function getMedian(...numbers) {
  const integerArr = numbers.filter((number) => Number.isInteger(number));
  integerArr.sort((a, b) => a - b);

  const isNotEvenLength = integerArr.length % 2;
  const middleOfArr = integerArr.length / 2;

  if (isNotEvenLength) {
    return integerArr[Math.floor(middleOfArr)];
  } else {
    return (integerArr[middleOfArr - 1] + integerArr[middleOfArr]) / 2;
  }
}

//4 Функція фільтрує парні числа які передані як аргументи
const filterEvenNumbers = (...numbers) => numbers.filter(num => num % 2);

//5 Функція, яка рахує кількість чисел більших 0
function countPositiveNumbers(...numbers) {
  const result = numbers.filter((number) => {
    return number > 0;
  });

  return result.length;
}

//6 Функція, яка відфільтрує усі елементи в масиві 
//та залишить тільки ті, які діляться на ціло на 5
function getDividedByFive(...numbers) {
  const result = numbers.filter((number) => {
    return number % 5 === 0;
  });

  return result;
}

//7 Функція заміняє погані слова на зірочки (*)
function replaceBadWords(string) {
  const badWordsBank = ['fuck', 'shit'];
  const arrOfWords = string.split(' ');

  const censoredArr = arrOfWords.map((word) => {
    const currentWord = word.toLowerCase();
    let censoredWord = '';

    badWordsBank.forEach((badWord) => {
      if (currentWord.includes(badWord)) {
        const star = '*'.repeat(badWord.length);
        censoredWord = currentWord.replaceAll(badWord, star);
      }
    });

    return censoredWord || word;
  });

  return censoredArr.join(' ');
}

//8. Функція яка розбиває кожне слово на умовні склади по 3 букви.
function divideByThree(word) {
  const arrOfWord = word.replaceAll(' ', '').toLowerCase().split('');
  const dividedArray = arrOfWord.reduce(((result, curentLetter) => {
    if (result.length === 0) {
      result.push(curentLetter);

    } else {
      const lastLetter = result.length - 1;

      if (result[lastLetter].length === 3) {
        result.push(curentLetter);
      } else {
        result[lastLetter] += curentLetter;
      }
    }

    return result;
  }), []);

  return dividedArray;
}

console.log('1.', getRandomArray(15, 0, 20));
console.log('2.', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('3.', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('4.', filterEvenNumbers(1, 2, 2, 5, 3, 4, 5, 6));
console.log('5.', countPositiveNumbers(1, -2, 3, -4, -5, 6, 0, -8));
console.log('6.', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('7.', replaceBadWords("Are you fucking kidding?"));
console.log('8', divideByThree('Commander'));
