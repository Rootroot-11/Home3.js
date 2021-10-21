// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//



// let car = {
// 	model: "Cybertruck",
// 	manufacturer:"Tesla",
// 	year:2020,
// 	maxSpeed: 177,
// 	volumeEngine:"just electrick",
// 	shasher:"auto-pilot",
// 	drive: function (){
// 		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
// 	},
// 	info: function () {
// 		console.log(`
// 			model : ${this.model}
// 			manufacturer : ${this.manufacturer}
// 			year : ${this.year}
// 			maxSpeed : ${this.maxSpeed}
// 			volumeEngine : ${this.volumeEngine}
// 			shasher : ${this.shasher},
// 		`);
// 	},
// 	increaseMaxSpeed: function (newSpeed){
// 		this.maxSpeed += newSpeed;
// 	},
// 	changeYear: function (newValue){
// 		this.year = newValue;
// 	},
// 	addDriver: function (driver){
// 		this.shasher = driver;
// 	}
//
// };
//
// let driver = {
// 	name:"Ivan Petrovich",
// 	age : 45
// };
//
// car.info();
// car.changeYear(2021);
// car.addDriver("elon");
// car.increaseMaxSpeed(100);
// car.info();



//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, ' +
//'максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// info () - яка виводить всю інформацію про автомобіль
// increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// changeYear (newValue) - змінює рік випуску на значення newValue
// addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function construct (model,
// 				   manufacturer,
// 				   year,
// 				   maxSpeed,
// 				   volumeEngine,
// 				   shasher) {
// 	this.model = model;
// 	this.manufacturer = manufacturer;
// 	this.year = year;
// 	this.maxSpeed = maxSpeed;
// 	this.volumeEngine = volumeEngine;
// 	// this.shasher = shasher;
// 	this.driver = function (){
// 		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
// 	};
// 	this.info = function ()
// 	{
// 		console.log(`
// 			model : ${this.model}
// 			manufacturer : ${this.manufacturer}
// 			year : ${this.year}
// 			maxSpeed : ${this.maxSpeed}
// 			volumeEngine : ${this.volumeEngine}
// 			shasher : ${this.shasher},
// 		`);
// 	};
// 	this.increaseMaxSpeed = function (newSpeed){
// 		this.maxSpeed += newSpeed;
// 	};
// 	this.changeYear = function (newValue){
// 		this.year = newValue;
// 	};
// 	this.addDriver = function (driver){
// 		this.shasher = driver;
// 	};
// };
// let car = {
// 	model: "Cybertruck",
// 	manufacturer:"Tesla",
// 	year:2020,
// 	maxSpeed: 177,
// 	volumeEngine:"just electrick",
// 	shasher:"auto-pilot",
// 	drive: function (speed){
// 		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
// 	},
// 	info: function () {
// 		console.log(`
// 			model : ${this.model}
// 			manufacturer : ${this.manufacturer}
// 			year : ${this.year}
// 			maxSpeed : ${this.maxSpeed}
// 			volumeEngine : ${this.volumeEngine}
// 			shasher : ${this.shasher},
// 		`);
// 	},
// 	increaseMaxSpeed: function (newSpeed){
// 		this.maxSpeed += newSpeed;
// 	},
// 	changeYear: function (newValue){
// 		this.year = newValue;
// 	},
// 	addDriver: function (driver){
// 		this.shasher = driver;
// 	}
//
// };
//
// console.log()
// let driver = {
// 	name:"Ivan Petrovich",
// 	age : 45
// };
//
// console.log(car)
// console.log(driver)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Construct{
//     constructor(model,
//                 manufacturer,
//                 year,
//                 maxSpeed,
//                 volumeEngine,
//                 shasher) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volumeEngine = volumeEngine;
//     }
//     // this.shasher = shasher;
//     driver(){
//         console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
//     };
//     info()
//     {
//         console.log(`
// 			model : ${this.model}
// 			manufacturer : ${this.manufacturer}
// 			year : ${this.year}
// 			maxSpeed : ${this.maxSpeed}
// 			volumeEngine : ${this.volumeEngine}
// 			shasher : ${this.shasher},
// 		`);
//     };
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//     };
//     changeYear(newValue){
//         this.year = newValue;
//     };
//     addDriver(driver){
//         this.shasher = driver;
//     };
// };



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Human{
    constructor(name, age) {
        this.name = name || 'No Name';
        this.age = age || 'No age';
    }
}

class Cinderella extends Human{
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize || 'No FootSize';
    }
}
class Princ extends Human{
    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize || 'No shoeSize';
    }
    findCinderell(array){

    }
}
let cinderella1 = new Cinderella('Oksana', 29, 36);
let cinderella2 = new Cinderella('Karina', 30, 36.5);
let cinderella3 = new Cinderella('Anna', 19, 37.5);
let cinderella4 = new Cinderella('Tetiana', 17, 37);
let cinderella5 = new Cinderella('Yana', 21, 41);
let cinderella6 = new Cinderella('Natalka', 36, 35);
let cinderella7 = new Cinderella('Alina', 26, 40.5);
let cinderella8 = new Cinderella('Tamara', 22, 40);
let cinderella9 = new Cinderella('Lilia', 28, 39);
let cinderella10 = new Cinderella('Patrycja', 34, 38);

let arrayCinderells = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];





// Імітуємо наповнення інтернет магазину товарами:
// Створити форму з наступними полями:
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Збперігати товари в масив з локалсторидж. При збереженні товару з форми, action не повинно відбуватись.
//
//     створити елемент <a href ='list.html'> на сторінку товарів </a>, та list.html, при переході на який
// відобразити на сторінці всі товари.
//     На сторінці list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляєтся конкретний обраний товар.

    const form = document.forms.itemForm;
    const name = form.name;
    const price = form.price;
    const ok = form.ok;

    ok.onclick = function (ev) {
        ev.preventDefault();
        let storage = [];


        const item = { name, price };

        const storageJSON = localStorage.getItem('storage');
        if (storageJSON) {
            storage = JSON.parse(storageJSON);
        }
        storage.push({ name: name.value, price: price.value, id: storage.length + 1 });
        localStorage.setItem('storage', JSON.stringify(storage));
    };

    //створити фунцію яка приймає масив будь-яких об'єктів, та повертає масив значень всіх об'єктів
  //Example:
  // [{name: Dima, age: 13}, {model: 'Camry'}, {name: Nastya}]  ===> [Dima, 13, Camry, Nastya]

const listOfObjects = [{name: 'Dima', age: 13}, {model: 'Camry'}, {name: 'Nastya'}];

const AllKeys = []

for (const object of listOfObjects) {
    console.log(object)


	for (const objectKey in object) {

		AllKeys.push(object[objectKey]);
	}
	console.log('__________________');
}

console.log(AllKeys);
