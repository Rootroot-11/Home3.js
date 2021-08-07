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
};
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

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

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
//  let array = [];
//     for (let i = 0; i < value; i++) {
//          array.push(Match.round(Match.random()*num));
//      }
//      return array
//  }
//  funRandom(12, 100);

//  let funInvoke = arr => {
//
//  console.log(arr);
//    for (const Math.round(Math.random()*100)) {
//     console.log(arrElement);
//     }
//  };
//   funInvoke(array);
// console.log(arr);

//   - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let obj = {name: 'Sasha', age: 15, model: 'Yaguar', phone: 'Samsung', city: 'Kiev'};
console.log(Object.keys(obj));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

let persons = {name: 'Sasha', age: 15, model: 'Yaguar', phone: 'Samsung', city: 'Kiev'};
console.log(Object.values(persons));

