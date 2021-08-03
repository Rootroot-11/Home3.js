// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.


let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11

let a1 = 30;
let a2 = 4;
let a3 = 48;
let a4 = 60;
let a5 = 2;
let a6 = 3;

let num1 = (a4 / a5) + a2;
console.log(num1)

let num2 = a3 / a5 / a5;
console.log(num2)

let num3 = a4 + a2 + a5;
console.log(num3)

let num4 = (a1 * a5) + a1;
console.log(num4)

let num5 = (num4 - a6);
console.log(num5)


// 3.  Створіть змінні a7, a8, a9, a10, a11. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

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

// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.

let height = 23;
let width = 10;


let s = height * width;
console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

let heightC = 10;
let dC = 4;

let v = dC * 2 * heightC;
console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу K по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).



let n = Math.pow(3, 2);
let m = Math.pow(4, 2);

function PifK (n, m) {
    let res = (n + m);
    return res;

}

console.log(PifK (n, m));

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

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

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто‘, str2 – ‘ ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

let str1 = 'Кто'
let str2 = ' ты '
let str3 = 'такой?'

let concatenation = str1 + str2 + str3;
document.write(concatenation)

// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
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

// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let mn = [23, 45, 67, 89, 41];
console.log(mn)


let mr = ['abs', 'shift', '4543', 'send', '3424'];
console.log(mr)

let mnk = ['stri', '54643', false, 3424, true];
console.log(mnk)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptystr = [];
emptystr[0] = 56;
emptystr[1] = 12;
emptystr[2] = 45;
emptystr[3] = 56;
emptystr[4] = 'Taras';
emptystr[5] = true;
emptystr[7] = 'state';

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let users = ['Vasya', 'Andrii', 'Maria', 'Alina', 'Olha', 'Jan', 'Sasha', 'Max', 'Jarik', 'Oksana'];

for (const user of users) {
    document.write(`<div>${user}</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let cars = ['Audi', 'Bmw', 'VW', 'Ford', 'Porshe', 'Lada', 'Fiat', 'Peagout', 'Renault', 'Mazda']

for (const car of cars) {
    document.write(`<div>${car}</div>`)

}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 let blocks = ['j', 'k', 'sa']
let i=0;
 while (i<blocks.length) {
     console.log(`<h1>${i}</h1>`)
     i < 20; i++
 }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let text2 = [];
text2[0] = 7
text2[1] = 12
text2[2] = 35
text2[3] = true
text2[4] = '56'
text2[5] = 'BARBARA'
text2[6] = false
text2[7] = 321
text2[8] = '32'
text2[9] = 'ragnar'
text2[10] = 76
console.log(text2)




// let numbers = [12, 56, 67]
// let strings = ['mother', 'father', 'brother']
// let boolean = [true, false]
//
//
// for(let i = 0; i < text2.length; i++){
//     console.log(text2[i])
//     document.write(text2[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i+=2) {
    console.log(i);
    document.write(i)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if(i%2 === 0){
//         console.log(i)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if(i%2 !== 0){
//         console.log(i)
//     }
// }


// - створити функцію яка приймає масив та виводить його
let array = [1,2,3,4];
let activ = arr => {
console.log(arr);

for (const arrElement of array) {
console.log(arrElement);
     }
};
 activ(array);

//створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let sewElement = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
        return(num1);
    } else if (num2 < num3 && num2 < num1) {
        console.log(num2);
        return(num2);
    } else {
        console.log(num3);
        return num3;
    }
}

sewElement(23, 15, 7)


// - створити функцію яка приймає три числа та виводить та повертає найбільше  (Без Math.max!)


    let secElement = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
        return num1;

    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
        return num2
    }  else
    {
        console.log(num3)
        return num3;
    }
}

secElement(23, 102, 16)

// створити функцію яка повертає найбільше число з масиву
const funMax = (array) => {
    let max = array [0];
    for (const funMaxElement of array) {
        if (funMaxElement > max) max = funMaxElement;
    }
    return max;
}

const funMaxReturn = funMax([12, 2, 3, 67, 8, 2, 89, 23, 2, 3]);
console.log(funMaxReturn);

//- створити функцію яка повертає найменше число з масиву
const funMin = (array) => {
    let min = array [0];
    for (const funMinElement of array) {
        if (funMinElement < min) min = funMinElement;
    }

    return min;
}

const funMinReturn = funMin ([34, 6, 78, 98, 3, 21, 35, 38]);
console.log(funMinReturn);


// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const funPlus = (array) => {
 let i = 0;
  for (const arrayElement of array) {
      i += arrayElement;
 }
  return i;
 };

    const sume = funPlus([1,2,3,4]);
console.log(sume);

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const funPlus1 = (array) => {
    let i = 0;
    for (const arrayElement of array) {
        i += arrayElement;
    }

    return i/array.length;
};

const sume2 = funPlus1([1, 2, 4, 5, 8]);
console.log(sume2);

//- створити функцію яка заповнює масив рандомними числами, Для виведення використати попередню функцію.

// let funRandom = (value, num) => {
//     let array = [];
//     for (let i = 0; i < value; i++) {
//         array.push(Match.round(Match.random()*num));
//     }
//     return array
// }
// funRandom(12, 100);


//  let funInvoke = arr => {
//
//  console.log(arr);
//    for (const Math.round(Math.random()*100)) {
//     console.log(arrElement);
//     }
//  };
//   funInvoke(array);
// console.log(arr)


 //   - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let obj = {name: 'Sasha', age: 15, model: 'Yaguar', phone: 'Samsung', city: 'Kiev'};
console.log(Object.keys(obj));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

let persons = {name: 'Sasha', age: 15, model: 'Yaguar', phone: 'Samsung', city: 'Kiev'};
console.log(Object.values(persons));



// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]  [2,3,4,5]
// результат [3,5,7,9]

const sumArray = (array1, array2) => {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i] + array2[i]);
    }
    return newArray;
}
const returnArrayConst = sumArray([1,2,3,4],[2,3,4,5]);
console.log(returnArrayConst);

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let end = ['a', 'b', 'c'];
end.push(1, 2, 3);
console.log(end);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let end1 = [1, 2, 3];
end1.push(4, 5, 6);
console.log(end1);

//- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let open = [1, 2, 3];
open.unshift(4, 5, 6);
console.log(open);

//- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(3));

//- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

let numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.slice(0, 2));

//- Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

let numbers3 = [1, 2, 3, 4, 5];
numbers3.splice(3,0, 'a', 'b', 'c');
console.log(numbers3.slice(0, 6));

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

numbers = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i]%2 === 0){
        console.log(numbers[i]);
    }
};


//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

numbers = [2,17,13,6,22,31,45,66,100,-18];
let numbers1 = [];
for (let u = 0; u < numbers.length; u++){
    numbers1.push(numbers[u])

};
console.log(numbers1);



// - Дано список імен.
//     let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger'

//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, ' +
//'максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// info () - яка виводить всю інформацію про автомобіль
// increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// changeYear (newValue) - змінює рік випуску на значення newValue
// addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function constructor (model, manufacturer, year, maxSpeed, volumeEngine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;
    this.shasher = shasher;
}

this.driver = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
}

this.info = function () {
    console.log(`model : ${this.model}
			manufacturer : ${this.manufacturer}
		    year : ${this.year}
		    maxSpeed : ${this.maxSpeed}
			volumeEngine : ${this.volumeEngine}
			shasher : ${this.shasher} `)

};

this.increaseMaxSpeed = function (newSpeed){
		this.maxSpeed += newSpeed;
	};
this.changeYear = function (newValue){
		this.year = newValue;
	};
this.addDriver = function (driver){
		this.shasher = driver;
	};


let car = {
    model: "A4",
    manufacturer: "Audi",
    year: 2020,
    maxSpeed: 180,
    volumeEngine: "2000 sm",
    drive: function (){
		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
	},
	info: function () {
		console.log(`
			model : ${this.model}
			manufacturer : ${this.manufacturer}
			year : ${this.year}
			maxSpeed : ${this.maxSpeed}
			volumeEngine : ${this.volumeEngine}
			shasher : ${this.shasher},
		`);
	},
};

console.log(car);