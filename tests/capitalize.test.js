import { capitalize } from "../src/capitalize.js";
import { strict as assert } from "node:assert";

assert(capitalize("hello") == "Hello"); /* {
  throw new Error("Функция работает некорректно!");
} */
assert(capitalize("") == "", "Функция работает некорректно!"); /* {
  throw new Error("Функция работает неверно!");
} */
console.log("Все тесты пройдены!");
