const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476
};
const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921
};
const litva = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114
};

//Допоміжні функції
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1.Функція, яка рахує скільки податків ви заплатите 
function getMyTaxes(salary) {
  return +(salary * this.tax).toFixed(2);
}

//2.Функція, яка рахує скільки у середньому податків платять у кожній країні 
function getMiddleTaxes() {
  return +(this.tax * this.middleSalary).toFixed(2);
}

//3.Функція, яка рахує, скільки всього податків платять у кожній країні
function getTotalTaxes() {
  return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}

//4.Функція яка буде писати в консоль об'єкт виду: 
//{ salary: number, taxes: number, profit: number } кожні 10 секунд. 
//Значення salary – генеруйте випадковим чином у діапазоні 1500-2000.
function getMySalary(country) {
  setInterval(() => {
    const randomSalary = getRndInteger(1500, 2000);
    const tax = getMyTaxes.call(country, randomSalary);
    const result = {
      salary: randomSalary,
      taxes: tax,
      profit: +(randomSalary - tax).toFixed(2),
    };

    console.log(result);
  }, 10000);
}

export {getMySalary, ukraine};
