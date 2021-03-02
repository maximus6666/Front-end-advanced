const cola = 15.678;
const pepsi = 123.965;
const fanta = 90.2345;

//максимальне число
const maxDrinksPrice = Math.max(cola, pepsi, fanta);
console.log('максимальне число ', maxDrinksPrice);

//мінімальне число
const minDrinksPrice = Math.min(cola, pepsi, fanta);
console.log('мінімальне число ', minDrinksPrice);

//вартість всіх товарів
const drinksPriceSum = cola + pepsi + fanta;
console.log('вартість всіх товарів ', drinksPriceSum);

//сума без копійок
const floorDrinksSum = Math.floor(cola) + Math.floor(pepsi) + Math.floor(fanta);
console.log('сума без копійок ', floorDrinksSum);

//сума товарів округлена до сотень
const roundToHundreds = Math.round((drinksPriceSum / 100)) * 100;
console.log('сума товарів округлена до сотень ', roundToHundreds);

//є парним чи непарним числом?
let isEven = Math.floor(drinksPriceSum) % 2 === 0;
console.log('число є парне:', isEven);

//сума решти при оплаті всіх товарів, клієнт платить 500
const clientPayment = 500;
const restOfMoney = clientPayment - drinksPriceSum;
console.log('сума решти при оплаті всіх товарів, клієнт платить 500: ', restOfMoney);

//середнє значення цін, округлене до другого знаку після коми
const meanDrinksPrices = +(drinksPriceSum / 3).toFixed(2);
console.log('середнє значення цін ', meanDrinksPrices);

//Чистий прибуток 
const randomSales = Math.ceil((Math.random() * 100));
const priceWithSale = +(drinksPriceSum - drinksPriceSum * randomSales / 100).toFixed(2);
console.log('ціна зі знижкою ', priceWithSale);
const profit = +(drinksPriceSum / 2 - drinksPriceSum * randomSales / 100).toFixed(2);
console.log(`
  прибуток при сумі ${drinksPriceSum.toFixed(2)} 
  зі знижкою ${randomSales}% складає ${profit}`);

//шаблонний рядок
const totalString = `
  Максимальна ціна: ${maxDrinksPrice}
  Мінімальна ціна: ${minDrinksPrice}
  Вартість всіх товарів: ${drinksPriceSum}
  Cума без копійок: ${floorDrinksSum}
  Cума товарів округлена до сотень ${roundToHundreds}
  Чи є сума всіх товарів парним числом: ${isEven}
  Cума решти при оплаті всіх товарів, клієнт платить 500: ${restOfMoney}
  Cереднє значення цін ${meanDrinksPrices}`;

console.log(totalString);
