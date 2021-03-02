let startNumberN = 0;
let finishNumberM = 0;
let totalSum = 0;
//запускаємо питання
do {
  startNumberN = parseInt(prompt('Введіть число N'));
} while (isNaN(startNumberN));

do {
  finishNumberM = parseInt(prompt('Введіть число M'));
} while (isNaN(finishNumberM));

// запитуємось чи пропускати парні
const passEven = confirm('Пропускати парні?');

// цикл
if (startNumberN < finishNumberM) {
  for (let i = startNumberN; i <= finishNumberM; i++) {
    if (i % 2 === 0 && passEven) {
      continue;
    }
    totalSum += i;
  }
  console.log(`Сума чисел з ${startNumberN} по ${finishNumberM}: ${totalSum}`);
} else {
  console.log('введіть число N менше за число М!');
}
