// --створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль

let mn = [23, 45, 67, 89, 41];
console.log(mn)


let mr = ['abs', 'shift', '4543', 'send', '3424'];
console.log(mr)

let mnk = ['stri', '54643', false, 3424, true];
console.log(mnk)

// - Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let emptyAr = [];
emptyAr[0] = true;
emptyAr[2] = 'afdssa';
emptyAr[1] = '213';
emptyAr[3] = 543;
emptyAr[5] = true;
emptyAr[4] = 'dsqda';
let massive3 = [[true, "afdssa", '213', 543], [true, 'dsqda', 745]];
console.log(massive3[1][2]);
document.write(massive3[1][2]);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++ ){
    document.write(`<div>abcdefg</div>`)
};
// document.write(`<br>`);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++ ) {
    document.write(`<div>10 блоків с довільним текстом ${i}</div>`)
};


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// while (i < 20) {
//     document.write(`<h1> 20 блоків h1 </h1>`);
//     i++;
// };
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// while (i < 20) {
//     document.write(`<h1> 20 блоків h1 ${i}</h1>`);
//     i++;
// };

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let massiveNum = [24, 22, 1, 2.222221, 76, 999, 12, 9, 88, 66];
for ( u = 0 ; u < 10 ; u++){
    console.log(massiveNum[u])

};

// / - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let massiveStr = ["Serhii", "Oleh", 'qwerawe', '677u4g', "823hwue", "Serhii", "Oleh", "qwerawe", "677u4g", "823hwue"];
for ( u = 0; u < 10 ; u++) {
    console.log(massiveStr[u])
};

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let objects = ['Taras', 'Yurii', true, 4.2212, 23, 'another', 32, 'xzdcx', 'vfgds', 23432];

for ( u = 0; u < 10; u++) {
    console.log(objects[u])
};

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

    massive = [24, 22, 1, 2.222221,76, "677u4g", "823hwue", "Serhii", "Oleh", "qwerawe",true, true, false, true, false, false];
for (u = 0; u < massive.length; u++){
    if (typeof massive[u] === `boolean`){
        console.log(massive[u])
    }
};
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (u = 0; u < massive.length; u++){
    if (typeof massive[u] === `number`) {
        console.log(massive[u])
    }
};


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for ( u = 0; u < massive.length; u++){
    if (typeof massive[u] === `string`){
        console.log(massive[u])
    }
};


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

massive2  = ['knads', 456, true, false, 22.43234, true, 'female', 'canadian', 321, 'Statham'];
emptyArr = [];

emptyArr[0] = 'knads';
emptyArr[1] = 456;
emptyArr[2] = true;
emptyArr[3] = false;
emptyArr[4] = 22.43234;
emptyArr[5] = true;
emptyArr[6] = 'female';
emptyArr[7] = 'canadian';
emptyArr[8] = 321;
emptyArr[9] = 'Statham';

for (i = 0; i < emptyArr.length; i++) {
    console.log(emptyArr[i])
};


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let u = 0; u < 10; u++){
    console.log(`step :`, u );
    document.write(`step :`, u);
};

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let u = 0; u < 100; u++) {
    console.log(`step :`, u);
    document.write(`step : ${u} <br>`);
};

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
let step = 0;
for (let u = 0; u < 100; u++){
    console.log(`step :`, step);
    document.write(`step : ${step} <br>`);
    step+=2;
};

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let u = 0; u < 100; u++){
    if (u%2 === 0){
        console.log(`step :`, u);
        document.write(`step : ${u} <br>`);
    }
};

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let u = 0; u < 100; u++){
    if (u%2 === 1){
        console.log(`step :`, u);
        document.write(`step : ${u} <br>`);
    }
};


