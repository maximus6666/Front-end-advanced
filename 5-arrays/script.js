//1 Функція, яка повертає масив випадкових цілих чисел
function getRandomArray(length, min, max) {
  let result = [];

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    result.push(randomNum);
  }

  return result;
}

//2 Функція, яка рахує середнє арифметичне
function getAverage(...numbers) {
  const integerArr = [];

  numbers.forEach((number) => {
    if (Number.isInteger(number)) {
      integerArr.push(number);
    }
  });

  const sum = integerArr.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return sum / integerArr.length;

}

//3 Функція, яка визначає медіану
function getMedian(...numbers) {
  const integerArr = [];

  numbers.forEach((number) => {
    if (Number.isInteger(number)) {
      integerArr.push(number);
    }
  });

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
function filterEvenNumbers(...numbers) {
  const result = numbers.filter((number) => {
    return number % 2;
  });

  return result;
}

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
    return !Boolean(number % 5);
  });

  return result;
}



//console.log('1.', getRandomArray(15, 0, 20));
//console.log('2.', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//console.log('3.', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3));
//console.log('4.', filterEvenNumbers(1, 2, 2, 5, 3, 4, 5, 6));
//console.log('5.', countPositiveNumbers(1, -2, 3, -4, -5, 6, 0, -8));
//console.log('6.', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
