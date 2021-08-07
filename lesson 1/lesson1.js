// // 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// //    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
//
//
let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);
//
// // 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
// //     34,
// //     12,
// //     66,
// //     90,
// //     87
// //     Старайтесь використовувати різні оператори.
// //     Example: 88 = (16 / 2) * 11
//
let a1 = 30;
let a2 = 4;
let a3 = 48;
let a4 = 60;
let a5 = 2;
let a6 = 3;

let num1 = (a4 / a5) + a2;
console.log(num1)
//
let num2 = a3 / a5 / a5;
console.log(num2)

let num3 = a4 + a2 + a5;
console.log(num3)

let num4 = (a1 * a5) + a1;
console.log(num4)

let num5 = (num4 - a6);
console.log(num5)


// // 3.  Створіть змінні a7, a8, a9, a10, a11. Запишіть в них результати виразів:
// //     5 % 3,
// //     3 % 5,
// //     5 + '3',
// //     '5' - 3,
// //     75 + 'кг'

let a7 = 5 % 3;
console.log(a7);

let a8 = 3 % 5;
console.log(a8);

let a9 = 5 + '3';
console.log(a9);

let a10 = '5' - 3;
console.log(a10);

let a11 = 75 + 'кг';
console.log(a11);
//
// // 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// //    Значееня площі зберігати в змінній s.
//
let height = 23;
let width = 10;


let s = height * width;
console.log(s);
// //
// // // 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// // //     результат поместите в переменную v.
// //
let heightC = 10;
let dC = 4;

let v = dC * 2 * heightC;
console.log(v);
// //
// // // 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// // //    Найдите гипотенузу K по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// //
// //
let n = Math.pow(3, 2);
let m = Math.pow(4, 2);

function PifK(n, m) {
    let res = (n + m);
    return res;

}

console.log(PifK(n, m));
// //
// // // 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// //
let name = 'Георгій';
let surname = 'Макеєв';
let fathersname = 'Юрійович';
let age = 23;
let hobby = 'guitar play';

alert(name);
alert(surname);
alert(fathersname);
alert(age);
alert(hobby);
// //
// // // 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
// // //   Переменной str1 присвоить фразу ‘Кто‘, str2 – ‘ ты ‘, str3 – ‘такой?’
// // //   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
// // //   Вывести в документ содержимое переменной concatenation спомощью document.write
// //
let str1 = 'Кто'
let str2 = ' ты '
let str3 = 'такой?'

let concatenation = str1 + str2 + str3;
document.write(concatenation)
// //
// // // 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");

let strw = "20";
let a = 5;
document.write(strw + a + "<br/>");
document.write(strw - a + "<br/>");
document.write(strw * "2" + "<br/>");
document.write(strw / 2 + "<br/>");

// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write

let nameSchool = 'Owu';
let greeting = 'hello';
let index = 'com';
let country = 'ua';
let number = '1'

let senumber = '10';
let tnumber = '-999'

let fnumber = '123'
let pi = '3.14'

let finumber = '2.7'
let sinumber = '16'

let plus = 'true'
let minus = 'false'
//
//     // - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     // Вивести кожну змінну за допомогою: console.log , alert, document.write
//
console.log (nameSchool)
document.write(nameSchool);
alert (nameSchool);

nameSchool = 'Okten';
console.log (nameSchool)
document.write (nameSchool);

console.log (greeting)
document.write(greeting);
alert (greeting);

greeting = "hi";
console.log (greeting);
document.write (greeting);


console.log (index)
document.write(index);
alert (index);

index = "entering";
console.log (index);
document.write (index);


console.log (country)
document.write(country);
alert (country);

country = 'usa'
console.log (country);
document.write (country);

console.log (number)
document.write(number);
alert (number);

number = "234";
console.log (number);
document.write (number);

console.log (senumber)
document.write(senumber);
alert (senumber);


senumber = '4567';
console.log (senumber);
document.write (senumber);


console.log (fnumber);
document.write(fnumber);
alert (fnumber);
//
fnumber = '432';
console.log (fnumber);
document.write (fnumber);

const PI = 3.14;
document.write(pi);
alert(pi);

console.log (finumber);
document.write(finumber);
alert (finumber);

finumber = '555';
console.log (finumber);
document.write (finumber);

console.log (sinumber)
document.write(sinumber);
alert (sinumber);

sinumber = '666';
console.log (sinumber);
document.write (sinumber);

console.log (plus)
document.write(plus);
alert (plus);

plus = 'accept';
console.log (plus);
document.write (plus);

console.log (minus);
document.write (minus);
alert (minus);

minus = 'fulshed';
console.log (minus);
document.write (minus);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.
// -
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let firstName = 'Макеєв';
let middleName = 'Георгій'
let lastName = 'Юрійович';
let myage = 23;

let person = firstName + middleName + lastName;
console.log(person)
console.log(`Вітаю ${firstName} ${lastName}. Тобі ${myage} років.`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let aa = 100;
console.log(typeof aa);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// - Поставити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 !== 6);
console.log(10 || 10);
console.log(10 == 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(10 !== 10);
console.log(123 === '123');
console.log(123 == '123');