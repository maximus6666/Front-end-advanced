//1 функція, яка форматує ім'я, роблячи першу букву великою
function formatName(nameStr) {
  return nameStr[0].toUpperCase() + nameStr.slice(1).toLowerCase();
}

//2 функція, яка конвертує долари в гривні та навпаки
function convertCurrency(currStr) {
  const exchangeRate = 28;
  const currency = currStr.toLowerCase();
  const parsedCurrency = parseFloat(currency);

  if (currency.endsWith('$')) {
    return (parsedCurrency * exchangeRate).toFixed(2) + " UAH";
  } else if (currency.endsWith('uah')) {
    return (parsedCurrency / exchangeRate).toFixed(2) + " $";
  } else {
    console.log('Конвертуються тільки "$" та "Uah"');
  }
}

//3 отримати випадкове число в діапазоні
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//4 функція генерації випадкового паролю 
function getRandomPassword(passLength = 8) {
  let password = '';

  for (let i = 0; i < passLength; i++) {
    let numOfPass = Math.floor(Math.random() * 10);
    password += numOfPass;
  }

  return +password;
}

//5 функція, яка рахує скільки разів певна буква повторюється в слові.
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

//6 функця, яка видаляє всі букви з речення. 
function deleteLetters(delLetterStr, sentence) {
  const newSentence = sentence.replaceAll(delLetterStr, '');
  return newSentence;
}

//7 функця, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі 
function getMaxDigit(number) {
  const userNumber = String(number);
  let maxNumber = userNumber[0];

  for (let i = 0; i < userNumber.length; i++) {
    if (maxNumber < userNumber[i]) {
      maxNumber = userNumber[i];
    }
  }

  return +maxNumber;
}

//8 функція, яка вираховує суму, що залишається після 
//оплати податку від зарабітньої плати.
function getSalariesWithoutTax(salariesNum) {
  const tax = 19.5;
  return (salariesNum - salariesNum / 100 * tax).toFixed(2);
}

export {getRandomPassword};
