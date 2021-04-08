const cola = 15.678;
const pepsi = 123.965;
const fanta = 90.2345;


//максимальне число
const maxDrinksPrice = () => Math.max (cola, pepsi, fanta);

//мінімальне число
const minDrinksPrice = Math.min(cola, pepsi, fanta);

//вартість всіх товарів
const drinksPriceSum = cola + pepsi + fanta;

//сума без копійок
const floorDrinksSum = Math.floor(cola) + Math.floor(pepsi) + Math.floor(fanta);

//сума товарів округлена до сотень
const roundToHundreds = Math.round((drinksPriceSum / 100)) * 100;

//є парним чи непарним числом?
let isEven = Math.floor(drinksPriceSum) % 2 === 0;

//сума решти при оплаті всіх товарів, клієнт платить 500
const clientPayment = 500;
const restOfMoney = clientPayment - drinksPriceSum;

//середнє значення цін, округлене до другого знаку після коми
const meanDrinksPrices = +(drinksPriceSum / 3).toFixed(2);

//Чистий прибуток 
const randomSales = Math.ceil((Math.random() * 100));
const priceWithSale = +(drinksPriceSum - drinksPriceSum * randomSales / 100).toFixed(2);
const profit = +(drinksPriceSum / 2 - drinksPriceSum * randomSales / 100).toFixed(2);

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

  export { maxDrinksPrice, cola, pepsi, fanta};
