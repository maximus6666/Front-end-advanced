import { divideByThree } from "./helpers/arrays.js";
import { start } from "./helpers/cycles.js";
import { getRandomColor } from "./helpers/dom.js";
import { getRandomPassword } from "./helpers/functions.js";
import { students, getAverage, getAverageMark } from "./helpers/objects.js";
import { getSign } from "./helpers/promises.js";
import { maxDrinksPrice, cola, pepsi, fanta} from "./helpers/variables.js";
import { idGenerator } from "./helpers/generators.js";
import {Student, ostap} from "./helpers/classes.js";
import {getMySalary, ukraine} from "./helpers/this.js";

import "./style.css";

console.log(divideByThree('Commander'));
console.log(start);
console.log("Випадковий колір", getRandomColor()); 
console.log("Пароль", getRandomPassword());
console.log("Середня оцінка першого студента", getAverageMark(students[1]));
console.log("Знак", getSign());
console.log("Максимальна ціна всіх товарів", maxDrinksPrice());
console.log("Генератор", idGenerator.next().value);
console.log(ostap.getInfo());
console.log(getMySalary(ukraine));
