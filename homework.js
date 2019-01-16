// -------------------------- Home work 1--------------------------
// -------------------------- Курочка Екатерина Николаевна --------------------------

// Строки   ---------

let value;
let string = 'some test string';

//  1  Получить первую и последнюю буквы строки
value = string[0] + string[string.length - 1];

//  2  Сделать первую и последнюю буквы в верхнем регистре
value = string[0].toUpperCase() + string.slice(1, string.length - 1) + string[string.length - 1].toUpperCase();

//  3  Найти положение слова ‘string’ в строке
value = string.indexOf('string');

//  4  Найти положение второго пробела (“вручную” ничего не считать)
value = string.indexOf(' string');

//  5  Получить строку с 5-го символа длиной 4 буквы
value = string.substr(5, [4]);

//  6  Получить строку с 5-го по 9-й символы
value = string.substring(5, [9]);

//  7  Получить новую строку из исходной путем удаления последних 6-и символов
value = string.slice(0, [string.length - 6]);

//  8  Из двух переменных a=20 и b=16 получить переменную string с текстом “2016”
let a = 20,
    b = 19;
value = '' + a + b;


//  Числа   ----------

//  1 Получить число pi из Math и округлить его до 2-х знаков после точки
value = (Math.PI).toFixed(2);

//  2 Используя Math, найти максимальное и минимальное числа из представленного ряда
value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

//  3 Работа с Math.random:
// a Получить случайное число и округлить его до двух цифр после запятой
value = (Math.random()).toFixed(2);
// b Получить случайное целое число от 0 до X. X - любое произвольное число
value = Math.ceil(Math.random() * 13);

//  4 Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
value = (0.6 + 0.7).toFixed(1);

//  5 Получить число из строки ‘100$’
value = parseFloat('100$');


//  Массивы   ----------

//  1 Создать объект с полем product, равным ‘iphone’
let phone = {
  product: 'iphone',
};

//  2 Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
phone.price = 1000,
phone.currency = 'dollar';

//  3 Добавить поле details, которое будет содержать объект с полями model и color
phone.details = {
  model: '5s',
  color: 'red'
}

console.log(phone)