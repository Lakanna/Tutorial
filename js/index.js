// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//     for (let i = min; i <= max; i += 2) {
//       return arr.push(i)
//     }
// }
// console.log(fillArray(2, 10));
/***** Оголошення змінних *****/
// const value = 15;

// let value;
// console.log(value);
// value = 20;
// console.log(value);
// value = 'Hello';
// console.log(value);

/***** Примітивні типи даних ****/

// Number
// const value = 15;
// console.log(value);
// String
// let str = "1'5";
// str = `Value - ${value - 10}`;
// console.log(str);

// Типи рядків '' "" ``
// const message = "JavaScript is awesome!";
// alert(message);

// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value);

// console.log(Math.random() * (10 - 1) + 1);

// Boolean (true, false)

// true false
// console.log(2 === '2');
// console.log(2 === 2);

// undefined

// null

// перевірка типу даних з яким працюємо метод typeof

// const num = 15;
// const str = '15';

// console.log(typeof str);
// console.log(typeof str === 'number'); //false

/***** Комунікація з користувачем та можливість відображення якогось результату *****/
// console.log('Привіт вчи JS');

// alert('Привіт вчи JS')

// const message = prompt("Введіть і'мя");
// console.log(message);

// const result = confirm('Будеш вчити JS ?');
// console.log(result);

/***** Основні оператори *****/

// >
// console.log(25 > 25);

// <
// console.log(25 < 26);

// ==
// console.log('false' == 0);
// console.log(false == 0);
// console.log('0' == 0); // 0 == 0

// ===
// console.log('25' === 25);
// console.log(false === 0);

// <=
// console.log(24 <= 25);
// console.log(25 <= 25);

// >=
// console.log(26 >= 20);
// console.log(26 >= '26');

// console.log(null > 0);
// console.log(null == 0);
// console.log(null === 0);
// console.log(null <= 0);

// !=
// console.log('1' != 1); // false 1 != 1

// !==
// console.log('1' !== 1);

// Приклади роботи

// console.log(1 == true); // true

// console.log(1 === true); //false

// console.log('0' == false); true

// console.log('0' === false); // false

// console.log('Papaya' < 'papaya');

// console.log('a' < 'aAbBc');

// console.log('Papaya' === 'papaya');

/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

//  0 (число нуль)
// console.log(Boolean(0));
// // "" (порожній рядок)
// console.log(Boolean(''));
// // NaN
// console.log(Boolean(NaN));
// // undefined
// console.log(Boolean(undefined));
// // null
// console.log(Boolean(null));
// // false
// console.log(Boolean(false));

// Перева до 21.15

/***** Логічні оператори *****/

// 0
// ''
// null
// NaN
// undefined
// false

// ||
// console.log(false || 1);
// console.log(1 || false);
// console.log(0 || false);
// console.log(2 || 0 || 1);
// console.log(0 || '' || 4);

// ?? реагує лише на null та undefined

// console.log(0 ?? 1);
// console.log(null ?? 1);
// console.log(undefined ?? 10);
// console.log(undefined ?? null);

// &&
// console.log(false && 1);
// console.log(NaN && 2);

// console.log(1 && 5 && 23);
// console.log(1 && 0 && 23);

// Приклади роботи

// console.log(true && 3); //3

// console.log(false && 3);

// console.log(true && 4 && 'kiwi'); /'kiwi'

// console.log(true && 0 && 'kiwi'); //0

// console.log(true || 3);

// console.log(3 || true || 4);

// console.log('' || false || 7);

// console.log(null || 2 || undefined);

// console.log('' ??  4);

// console.log(false ?? 7);

// console.log(null ?? 7);

// console.log(undefined ?? 7);

/***** Методи для роботки з числами (тип даних Number) *****/

// const str = '25.721a32px';
// const str = 'd2sadasdasdas'

// Number.parseInt()
// console.log(Number.parseInt(str));

// Number.parseFloat()
// console.log(Number.parseFloat(str));

// const num = '25.721a32px';
// // const result = Number(num)
// // console.log(result);
// console.log(Number.isNaN(num)); // string
// console.log(isNaN(num)); // Number(num) => NaN

// console.log(Number(str) === NaN);
// console.log(NaN == NaN);

// Number.isNaN()  та метод isNaN()
// console.log(isNaN(num)); // Number(num)
// console.log(Number.isNaN(num)); NaN

// const str = '25.7a32px';
// console.log(typeof str);
// console.log(Number.isNaN(str));// NaN //String
// console.log(isNaN(str)); //Number(str) => NaN

// Класс Math
// const value = 11.5;
// console.log(Math.floor(value));

// console.log(Math.ceil(value));

// Math.round()
// console.log(Math.round(value));

// console.log(Math.pow(5, 4));
// console.log(5 ** 4);

/***** Методи та властивості для роботки з рядками (тип даних String) *****/

// const str = "Hello world";

// length
// console.log(str.length);

// toLowerCase()
// console.log(str.toLowerCase());

// toUpperCase()
// console.log(str.toUpperCase());

// indexOf()
// console.log(str.indexOf(' '));
// console.log(str.indexOf('h'));

// includes
// console.log(str.includes('world'));
// console.log(str.includes(' '));
// console.log(str.includes('h'));
// const str = "Hello world";
// endsWith()
// console.log(str.endsWith('-world'));

// startsWith()
// console.log(str.startsWith('Hello-'));

// replace()
// console.log(str.replace('Hello', '🍕'));
// console.log(str.replace('a', '🍕'));
// replaceAll()
// console.log(str.replaceAll('l','🍟'));

// slice()
// const str = "Hello world";
// console.log(str.indexOf("world"));
// console.log(str.slice(str.indexOf("world"), str.length));
// console.log(str.slice(0, str.indexOf(" ")));
// console.log(str);

// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та загальну вартість за кожен продукт.

// const apple = "🍎";

// const appleQuantity = 8;

// const applePrice = 34;

// const total = appleQuantity * applePrice;

// const  appleMessage = `${apple} total cost ${total}`;
// console.log(appleMessage);

// const cherry = "🍒";

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `${cherry} total cost ${cherryPrice * cherryQuantity}`;

// console.log(cherryMessage);

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441;

// const hours = Math.floor(totalMinutes / 60);
// const minuts = totalMinutes % 60;
// const result = `${hours.toString().padStart(2, "0")} : ${minuts.toString().padStart(2, "0")}`;

// console.log(hours);
// console.log(minuts);
// console.log(result);

// const hours = Math.floor(totalMinutes / 60);
// const minuts = totalMinutes % 60;
// const result = `${hours.toString().padStart(2, '0')} : ${minuts.toString().padStart(2, '0')}`;

// const totalMinutes = 450;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(minutes);

// const result = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')}`
// console.log(result);

// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is ${name}`;
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery + price}`;
// console.log(message);

// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0. Використовуй оператор ?? (nullish coalescing operator).

// 0
// ''
// null
// NaN
// undefined
// false
// const incomingValue = Number('dasdas'); //NaN
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

// function slugify(title) {
//   // Change code below this line
// title = title.toLowerCase();
//   let slug;
//       console.log(title);
//   let array;
//     array = title.split(" ");
//     console.log(array);
//   slug = array.join("-");
//     return slug;

//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// function getCommonElements(array1, array2) {
//   // Change code below this line
// let newArr = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     console.log(array1[i]);
//     if (array2.includes(array1[i]))
//     newArr.push(array1[i])
//   }
// return newArr;

//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Знайшли число 3, робимо повернення, перериваючи цикл і функцію");
//       return i;
//     }
//   }

//   // Цей console.log не виконається
//   console.log("Лог після циклу в тілі функції");
// }

// const result = fn();
// console.log("Лог після виходу з функції");
// console.log(`Результат виконання функції ${result}`);

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

// let args = [1, 2, 5];
// Math.
// function add(...args) {
//   let sumElement = 0;
//   for (let i = 0; i < args.length; i++) {
//     // const element = args[i];
//     // console.log(args[i]);
//     sumElement = sumElement + args[i];
//   }

//   return sumElement;
//   // Change code above this line
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(74, 11, 62, 46, 12, 36));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIdx = this.books.indexOf(oldName);
//     this.books.splice(bookIdx, 1, newName);
//     return this.books;

//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)) {
//       console.log(onSuccess(pizzaName));
//       return;
//     };
//     console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));
//     return ;
//   },
// };
// Change code above this line

// Callback for onSuccess
// function makePizza(pizzaName) {
//   console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`)
//   return ;
// }

// // Callback for onError
// function onOrderError(error) {
//   console.log(`Error! ${error}`)
//   return ;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {

//     if (this.pizzas.includes(pizzaName)) {
//       console.log(onSuccess(pizzaName))
//     return onSuccess(pizzaName);
//     };
//   console.log(onError(There is no pizza with a name ${pizzaName} in the assortment.));
//       return onError(There is no pizza with a name ${pizzaName} in the assortment.);
//   },
// };

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//    firstArray.foreach(function callback(elem) {
//      if (secondArray.includes(elem)) {
//       commonElements.push(elem);
//    };
//    })

//   return commonElements;
//   // Change code above this line
// }

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
// firstArray.forEach(function callback(elem) {
//   if (secondArray.includes(elem)) {
//     commonElements.push(elem);
//   };
// });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.foreach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//   }});

// // function filterArray(numbers, value) {
// //   const filteredNumbers = [];

// //   numbers.forEach(function (number) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

//   // Change code above this line
//   return filteredNumbers;
// }

// function changeEven(numbers, value) {
//   // Change code below this line
// const newArr = [];
//   numbers.forEach( (number) => {
//     if (number % 2 === 0) {
//       newArr.push(number + value);
//       return;
//     }
//     newArr.push(number);

//   });

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   // Change code above this line
//   return newArr;
// }
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log()

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = users.map((user) => {

//   return user.name;
// });
// console.log(getUserNames);

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const averAge = users.filter((user) => user.age >= minAge && user.age <= maxAge);
//   return averAge ;

// };
// console.log(getUsersWithAge(users, 20, 30));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];
// const getUsersWithFriend = (users, friendName) => {
//   const withFriend = users.filter(({friends}) => friends.includes(friendName)

//    );
//     return withFriend;
// };
// console.log(getUsersWithFriend(users, "Briana Decker"));

// const getFriends = (users) => {
//    const allFriends = users.flatMap((user)=> user.friends);
//   console.log(allFriends);
//   const orFriends = allFriends.filter((friend, idx, arrey) =>
//     arrey.indexOf(friend) === idx);
//   return orFriends;
// };
// console.log(getFriends(users));

// const getActiveUsers = (users) => {
//    const activeUser = users.filter( ({isActive}) => isActive === true);
//   return activeUser;
// };

// console.log(getActiveUsers(users));

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// Change code below this line

// const child = Object.create(parent);
// console.log(child);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// class Storage {
//   constructor(items){
//   this.items = items;
//   }

//   getItems(){
//     return this.items;
//   }

//   addItem(nemItem){
//     this.items.push(nemItem);
//   }

//   removeItem(itemToRemove){
//    for (let i = 0; i < this.items.length; i++) {
//      if (this.items[i] === itemToRemove) {
//        this.items.splice(i, 1);
//        return;
//      };
//    };
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     } else {
//       return "Success! Price is within acceptable limits";
//     };
//   };
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// Change code below this line
// class Admin extends User {
//   constructor(BASIC, SUPERUSER) {
//     BASIC = "basic";
//     SUPERUSER = "superuser";
//  };
// }

// console.log(Admin);

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
//
// Change code below this line
// function add(a,b,c) {
//   let result = a + b + c;
//   console.log(`Addition result equals ${result}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// console.log(object);

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt("Color?");
// let action;

// if (message) {
//   message = message.toLowerCase();
// }

// switch (message) {
//   case "red":
//     action = "Stop";
//     break;
//   case "yellow":
//     action = "Ready";
//     break;

//   case "green":
//     action = "Go";
//     break;

//   default:
//     action = "Be careful";

// }

// console.log(action);

// let message = prompt("Color?");
// let action;

// if(message){
//     message = message.toLowerCase();
// }

// switch (message) {
//   case "red":
//     action = "Stop";
//     break;
//   case "yellow":
//     action = "Ready";
//     break;
//   case "green":
//     action = "Go";
//     break;
//   default:
//     action = "Be careful";
// }

// console.log(action);

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
// let message = prompt(text);

// if(message){
//  message = message.toLowerCase();
// }

// return message === answer;
// }

// // console.log(
// //   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// // );
// console.log(check('Через воду він проводить, А сам з місця вік не сходить', 'міст'));

// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(deps) {
// const nightSpeed = 2;
// const daySpeed = 7;
// let totalDays = 0;
// let totalWay = 0;

// while (deps > totalWay) {
//   totalDays +=1;
//   totalWay += daySpeed;

//   if (totalWay < deps) {
//     totalWay -= nightSpeed;
//   }

// }
// return totalDays;
// }
// console.log(getDays(18));
// 8
// getDays(17) // 3
// getDays(18) // 4

// / Task - 4
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
// const vowels = "aeiou"
// let total = 0;
// // str = str.toLowerCase();
// // str = str.toLoverCase();

// str = str.toLowerCase();

// for (let i = 0; i < str.length; i +=1) {
//  if (vowels.includes(str[i])) {
//    total += 1;
//  }

// };
// return total;

// }

// console.log(countVowel("HELLO WORLD")); // 3
// console.log(countVowel("Junior Web Developer")); // 8

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [3, "Hello", null, 42, false];

// for (let i = arr.length - 1; i >= 0; i-=1) {

//     if (typeof arr[i] !== "number"){

//         console.log(arr[i]);
//          arr.splice(i, 1);
//     }

// }

// console.log(arr);

// for (let i = arr.length - 1; i >= 0; i-=1) {

//     if(typeof arr[i] !== "boolean") {
//         console.log(arr[i]);
// arr.splice(i, 1)
//     }

// }
// console.log(arr);

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1)) {
//       if (!result.includes(arr[i])) {
//         result.push(arr[i]);
//       }
//     }
//   }
//   return result;
// }

// function getCommonElements(arr) {
//       const result = [];
//       for (let i = 0; i < arr.length; i += 1) {
//         if (arr.includes(arr[i], i + 1)) {
//           // console.log(`${arr[i]} - ${arr.includes(arr[i])}`);
//         //   if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//         //   }
//         }
//       }

//       return result;
//     }

//

// function getCommonElements(arr) {
// const result = [];

// for (let i = 0; i < arr.length; i+=1) {

//     if(arr.includes(arr[i], i + 1)){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);
//         };
//     };
//   }
//  return result;
// }
// console.log(getCommonElements([1, 2, 3, 2, 1, 1, 1, 1, 17, 19]));

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = [
//     "Artem",
//     "Anna",
//     "Larisa",
//     "Maksim",
//     "Svetlana",
//     "David",
//     "Roman",
//     "Olga",
//   ];

//   // console.table(users);
//   const men = ["Artem", "Maksim", "David", "Roman"];

//   function getWomen(users, men) {
// const women = [];
// for (const user of users) {
//     if(!men.includes(user)){
//         women.push(user)
//     }
//     }
// return women;
//   }

//   console.log(getWomen(users, men));

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// const SEPARATOR = "";

// const result = string.split(SEPARATOR).reverse().join(SEPARATOR);

// console.log(result);

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елементи на вірнi
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

// for (let i = 1; i < numbers.length; i+= 1) {
//   const curentEl = numbers[i];
//   const prevEl = numbers[i - 1];

//   if(curentEl - prevEl !== 1){
//     numbers[i] = prevEl + 1;
//   }

// }

// console.log(numbers);
// for(let i = 1; i < numbers.length; i +=1){
// let currentNumber = numbers[i];
// let prevNumber = numbers[i - 1];
// console.log(currentNumber, prevNumber);

// if(currentNumber - prevNumber !==1){
//     numbers[i] = prevNumber + 1;
// }
// }

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {
//   let result = "";

//   switch (arr.length) {
//     case 0:
//       result = "no one likes this";
//       break;
//     case 1:
//       result = `${arr[0]} likes this`;
//       break;
//     case 2:
//       result = `${arr[0]} and ${arr[1]} like this`;
//       break;
//     case 3:
//       result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//       break;

//     default:
//       result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//       break;
//   }
//   return result;
// }
// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

// let result = "";
// switch (arr.length) {
//   case 0:
//     result = `No one likes this`;
//     break;
//   case 1:
//     result = `${arr[0]} likes this`;
//     break;
//   case 2:
//     result = `${arr[0]} and ${arr[1]} like this`;
//     break;
//   case 3:
//     result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//     break;
//   default:
//     result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;

// }

// return result;

// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];

//     function checkValue(arr, targetValue) {
//         let message = "Success ✅";

//        for (const currValue of arr) {
//         if(currValue <= targetValue){
//             message = "Fail ❌";
//             return message;
//         }
//        }
//        return message;
//     }

// console.log(checkValue(numbers, 12));

// Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементів в масиві
//  Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(data, count) {
// const arr = [];

// for(let i = 0; i < data.length; i += count){
//     console.log(i);
//     const arrEl = data.slice(i, i + count);
//     arr.push(arrEl);
// }
// return arr;
//  }
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   arr = dimensions.split(" ");
//   console.log(arr);
//   let valueA = Number(arr[0]);
//   let valueB = Number(arr[1]);
//   return valueA * valueB;
// }

// console.log(getRectArea("8 11"));
// console.log(getRectArea("15 11"));

// Task-4
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// function addCourse(name) {
//   if (courses.includes(name)) {
//     return "Ви вже маєте такий курс";
//     alert("Ви вже маєте такий курс");
//   } else {
//     courses.push(name);
//   }
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'Ви вже маєте такий курс'

// function removeCourse(name){
//     if(courses.includes(name)){
//        let idx = courses.indexOf(name);
//        courses.splice(idx, 1);
//     }else{
//         console.log("Курс з таким ім'ям не знайдено");
//     }

// }
// removeCourse("Hpluj");
// console.log(courses);
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function updateCourse(oldName, newName) {
//   if (courses.includes(oldName) && !courses.includes(newName)) {
//     let idx = courses.indexOf(oldName);
//     courses.splice(idx, 1, newName);
//   } else if (!courses.includes(oldName)) {
//     console.log("Курс з таким ім*ям не знайдено");
//   } else {
//     console.log("Ви вже вивчаєте такий курс");
//   }
// }
// updateCourse("HTML", "JavaScript");
// // updateCourse("qwerty", "NestJS");
// // updateCourse("qwerty", "qwe")
// console.log(courses);

// function includes(array, value) {
//   // Change code below this line
//   let result = false;
//   for (let el of array) {
//     if (el === value) {
//       result = true;
//     }
//   }
//   return result;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
//   }

// function normalizeInput(input, to) {
//   let result = input.toLowerCase();
//   console.log(result);
//   if (to === "upper") {
//     result =  input.toUpperCase();
//       };
//   return result;

// };
// let res = normalizeInput("This ISN'T SpaM", "lower")
// console.log(res);
// console.log(normalizeInput("This ISN'T SpaM", "upper"));

// let input = "This ISN'T SpaM";
// let res = input.toLocaleLowerCase();
// console.log(res);

// function getFileName(file) {
//   let idx = file.indexOf(".");
//   if(idx === -1){
//     return file.slice(0);
//   }
//   return file.slice(0, idx);
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("app"));

// function calculateTotal(number) {
//   let total = 0;
//   for(let i = 0; i <= number; i += 1){
//     total += i;
//   }
//   return total;
// }

// function calculateEvenTotal(number) {
//   let total = 0;
//   for(let i = 1; i <= number; i +=1){
//     if(i % 2 === 0){
//       total += i;
//     }
//   }
//   return total;
// }

// function calculateEngravingPrice(message, pricePerWord) {
//   const totalWord = message.split(" ");
//   console.log(totalWord);
//   return totalWord.length * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// function getSlice(array, value) {
//   let result = [];
//   let idx = array.indexOf(value);
//   if(idx !== -1){
//     result = array.slice(0, idx + 1);
//   }
//   return result;
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"))

// function createArrayOfNumbers(min, max) {
//   let result = [];
//   for(let i = min; i <= max; i += 1){
//     result.push(i);
//   };
//   return result;
// }

// console.log(createArrayOfNumbers(29, 34));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for(let i = 0; i < order.length; i += 1){
//     total += order[i]
//   }
//   return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function getEvenNumbers(start, end) {
//   let result = [];
//   for(let i = start; i <= end; i += 1){
//     if(i % 2 === 0){
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(getEvenNumbers(3, 11));

// function getCommonElements(array1, array2) {
//   let result = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for(const element of order){
//     total += element;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function createReversedArray() {
//   // let arr = Array.from(arguments);
//   // return arr.toReversed();
//   let result = [];
//   for (let i = arguments.length - 1; i >= 0; i -= 1) {
//     result.push(arguments[i]);
//   }
//   return result;
// }

// console.log(createReversedArray(164, 48, 291));

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName);

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   const keys = Object.keys(apartment);
//   console.log(keys);

//   for(let key of keys){
//     values.push(apartment[key])
//   };

//   console.log(values);

//   function getProductPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     let priceProduct = null;

//     for(product of products){
//       if(productName === product.name){
//         priceProduct = product.price;
//       }
//     }
//     return priceProduct;
//   }

//   console.log(getProductPrice("Scanner"));
//   console.log(getProductPrice("engine"));

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let result = [];

//     for (let product of products) {
//       if (Object.keys(product).includes(propName)){

//       result.push(product[propName]);}
//     }

//   return result;}

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("category"));

// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультету
// (перевірити чи є властивість points !!!)

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   slizerin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],

//   getUserList(faculty) {
//     if (!this.hasOwnProperty(faculty)) {
//       return "This facult not found 😢";
//     }
//     let list = [];

//     for (const student of this[faculty]) {
//       // console.log(student.name);
//       list.push(student.name);
//     }
//     // console.log(list);
//     return list.join(", ") + ".";
//   },
// };

// console.log(hogvarts.getUserList("griffindor"));
// console.log(hogvarts.getUserList("qwerty"));
// console.log(hogvarts.getUserList("slizerin"));
// console.log(hogvarts.getUserList("slitherin"));

//   getTotalPoints(fac) {
//     let totalPoints = 0;
//     // console.log(this.hasOwnProperty('griffindor'));
//     if (!(this.hasOwnProperty(fac))) {    // (!(fac in this))
//         return "This faculty undefined"
//     };
//       // console.log(this.griffindor[0].points);
//       for (const person of this[fac]) {
//         if (person.points) {      // if( "points" in person)
//           totalPoints += person.points;
//         }
//         // console.log(person.points);
//       }

//     return `totalPoints of ${fac} = ${totalPoints}`;
//   },
// };

// console.log(hogvarts.getTotalPoints("griffindor"));
// console.log(hogvarts.getTotalPoints("slizerin"));
// console.log(hogvarts.getTotalPoints("slitherin"));

// function isEnoughCapacity(products, containerSize) {
//   const quantity = Object.values(products);
//   let total = 0;
//   for (const idx of quantity) {
//     total += idx;
//   }
//   return total < containerSize;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// function calcAverageCalories(days) {
//   let totalCal = 0;
//   let totalDays = 0;
//   if (days.length !== 0) {
//     for (const day of days) {
//       if (day.hasOwnProperty("calories")) {
//         totalCal += day.calories;
//         totalDays += 1;
//       }
//       // console.log(totalCal);
//     }
//     return `Average calories = ${totalCal / totalDays}`;
//   }
//   return 0;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

// const profile = {
//   username: "Jacob",
//   playTime: 300,
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (elem, idx) {
//       totalPrice += elem;
//     });

//     return totalPrice;
//   }

//   console.log(calculateTotalPrice([2,4,9,6,7,12]));

//   function filterArray(numbers, value) {
//     let result = [];
//     numbers.forEach(function(elem){
//       if(elem > value){
//         result.push(elem)
//       }
//     });
//     return result;
//   }

//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));

//   function changeEven(numbers, value) {
//     let resultArr = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         resultArr.push(numbers[i] + value);
//       }
//     }
//     return resultArr;
//   }

//   console.log(changeEven([17, 24, 68, 31, 42], 100)` повертає новий масив `[17, 124, 168, 31, 142]);

//   const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) =>{
//     return planet.length; });
//     console.log(planetsLengths);

// let users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

//   const getUserEmails = (users) => {
//    return users.map((user) => user.email)
//   };

//   console.log(getUserEmails(users));

//   const isAnyUserActive = (users) => {
//     return users.some((user) => user.isActive === true)
//   };
//   console.log(isAnyUserActive(users));

//   const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       rating: 7.94,
//     },
//     {
//       title: "Enemy of God",
//       author: "Bernard Cornwell",
//       rating: 8.67,
//     },
//   ];

//   const sortedByAuthorName = books.toSorted((a, b) =>
//     a.author.localeCompare(b.author)
//   );

//   const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));

//   const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

//   const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

//   console.log(sortedByAuthorName, sortedByAscendingRating);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(names);

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764
//     },
//   ]

// const getUserNames = (arr) => {
//     return arr.map((user)=>
//     user.name)
// };

// console.log(
//     getUserNames(users)
//   ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

//   const allUsers = [
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"]
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"]
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"]
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"]
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"]
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"]
//     }
//   ];

//   const getUsersWithFriend = (users, friendName) =>{
//     return users.filter((user) => user.friends.includes(friendName))
//   }

//   console.log(getUsersWithFriend(allUsers, "Briana Decker"));
//   console.log(getUsersWithFriend(allUsers, "Adrian Cross" ));

// const users =
// [
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ];

//   const sortByDescendingFriendCount = (users) =>{
//     return users.toSorted((a, b) =>{
//         return b.friends.length - a.friends.length
//     })
//   }

//   console.log(sortByDescendingFriendCount(users));

// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811,
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821,
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793,
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278,
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951,
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498,
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764,
//   },
// ];

// const getTotalBalanceByGender = (clients, gender) => {
//   return clients
//     .filter((client) => client.gender === gender)
//     .reduce((acc, client) => {
//       return acc + client.balance;
//     }, 0);
// };

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

// Task - 1
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює
//  об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек
//  передаючи йому створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback){
//     const item = {
//        id: Date.now(),
//        ...obj
//     };

//     // item = {...obj};
//     //  item.id = Date.now();
//     return callback(item);
// }

// function logProduct(product){
//    return console.log(product);
// }

// function logTotalPrice(product){
//    return console.log(`Total price of ${product.name} ${product.quantity * product.price}`);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// Task - 2
// Напишіть функцію яка буде отримувати 2 параметри.
// 1 - масив чисел.
// 2 - функцію яка має опрацювати кожен елемент масиву.
//
// Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції

// function each(arr, action) {
//   // let result = [];
//   // arr.forEach(element => {
//   //     const item = action(element);
//   //     result.push(item);
//   //     })
//   //     return result;
//   return arr.map((item) => action(item));
// }

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

// Task-3
// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback.
// Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.
// У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.

// const products = [
//   {
//     id: 1,
//     name: "Телефон",
//     price: 10000,
//     description: "Смартфон з високоякісним дисплеєм та потужним процесором.",
//   },
//   {
//     id: 2,
//     name: "Ноутбук",
//     price: 25000,
//     description: "Легкий та потужний ноутбук для роботи та розваг.",
//   },
//   {
//     id: 3,
//     name: "Планшет",
//     price: 8000,
//     description: "Компактний планшет для перегляду контенту.",
//   },
// ];

// function getProductDetails(id, success, error) {
//  const result = products.find((item)=>item.id === id);

//  if(result){
//    return success(result);
//  }

//  error(id) ;

// }

// getProductDetails(3, handleSuccess, handleError);
// getProductDetails(44, handleSuccess, handleError);

// function handleSuccess(obj){
//    return console.log(`Product is found ✅`,obj);
// };

// function handleError(id){
//     return console.log(`Error ❌ product with id ${id} not found`);
// }

// Task-4
// Напишіть функцію calculateAveragePrice, яка приймає на вхід масив об'єктів, що представляють товари, та колбеки onSuccess та onError.
// Функція повинна обчислювати середню ціну товарів у масиві та викликати колбек onSuccess, передаючи йому отриману середню ціну як аргумент.
// Якщо масив товарів порожній, функція повинна викликати колбек onError, передаючи йому рядок "No products found".
// Для форматування середньої ціни використовується метод toFixed(2), щоб обмежити число до двох десяткових знаків.

// const products = [
//   { name: "Apple", price: 0.99 },
//   { name: "Banana", price: 0.49 },
//   { name: "Orange", price: 0.79 },
//   { name: "Mango", price: 1.99 },
// ];

// function calculateAveragePrice(products, onSuccess, onError) {
//   if (!products.length) {
//     return onError("Error ❌ products not found");
//   }
//   const totalPrice = products.reduce((acc, item) => {
//    return acc + item.price;
//   }, 0);

//   return onSuccess(totalPrice / products.length);
// }

// function onSuccess(averPrice) {
//   return console.log(`Average price of products is ${averPrice.toFixed(2)}`);
// }

// function onError(message) {
//   return console.log(message);
// }

// calculateAveragePrice(products, onSuccess, onError);

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] },
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [] },
// ];

// function getAverage(arr) {
//  return arr.map(({name, grades})=>{
//   const total = grades.reduce((acc, grade)=>{
//     return acc += grade;
//   }, 0);
//   return {
//     name,
//     averGrade: grades.length ? Math.round(total / grades.length)
// : total  }
//  })
// }
// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];

// function getAdult(arr) {
//   return arr.filter(({age})=>age > 20).map(({name})=> name)
// }

// console.log(getAdult(students));

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.
// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function getBook(arr, titleBook) {
//   return arr.find(({ title }) => title === titleBook)||`Not found`;
// }

// console.log(getBook(books, "Design Patterns: Elements of Reusable Object-Oriented "));

// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві,
//  яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами.
//  Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//   { id: 1, name: "T-shirt", price: 20, quantity: 3 },
//   { id: 2, name: "Jeans", price: 50, quantity: 4 },
//   { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//   { id: 4, name: "Hat", price: 15, quantity: 4 },
//   { id: 5, name: "Socks", price: 5, quantity: 6 },
// ];

//   function getTotal(arr) {
//     return arr.reduce((acc, {price, quantity})=>{
//       return acc+= price*quantity;
//     }, 0)
//   }

//   console.log(getTotal(products));

// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за роком видання.

// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
// ];

// function sortDesc(arr) {
//   return arr.toSorted((a, b) => b.year - a.year);
// }
// console.log(sortDesc(books));
// console.log(books);

// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів
// та відсортуй їх за алфавітним порядком.
// const products = [
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 3, name: "Orange", price: 2.49 },
//   { id: 4, name: "Grapes", price: 3.99 },
// ];

// function getProducts(arr) {
//   return arr
//     .filter(({ price }) => price < 2)
//     .map(({ name }) => name)
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getProducts(products));

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків,
//  потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа

// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }

const str = "absdabsrgbadgtdswwbetflg";
// function getAbc(str) {
//   const arr = str.split("");
//   console.log(arr);
//   let result = {};
//   for (let i = 0; i < arr.length; i += 1) {
//     // console.log(arr[i]);
//     if (!result.hasOwnProperty(arr[i])) {
//       result[arr[i]] = 0;
//     }
//     result[arr[i]] += 1;
//   }
//   return result;
// }

// function getAbc(str) {
//   const result = str.split("")
//   .reduce((acc, item) => {
//     if (item in acc) {
//       acc[item] += 1;
//     } else {
//       acc[item] = 1;
//     }
//     return acc;
//   }, {});
//   return result;
// }

// console.log(getAbc(str));

// class Car {
//   constructor(brand, model, price) {
//     this.model = model;
//     this.brand = brand;
//     this.price = price;
//   }
// }

// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));

// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice > Car.maxPrice){
//       return;
//     }
//     this.#price = newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price){
//     if(price > Car.#maxPrice){
//       return "Error! Price exceeds the maximum";
//     }else{
//       return "Success! Price is within acceptable limits";
//     }
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser"
//   }
// }

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor(params){
//     super(params.email);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }

//   blacklistedEmails = [];

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// class Storage{
//   #items;

//   constructor(items){
//     this.#items = items;
//   }

//   getItems(){
//     return this.#items;
//   }

//   addItem(newItem){
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove){
//     if(this.#items.includes(itemToRemove)){
//      const idx = this.#items.indexOf(itemToRemove);
//      this.#items.splice(idx, 1);
//     }else{
//       return "Error. This item not found"
//     }
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder{
//   #value;

//   constructor(initialValue){
//     this.#value = initialValue;
//   }

//   getValue(){
//     return this.#value;
//   }

//   padEnd(str){
//     this.#value += str;
//   }

//   padStart(str){
//     this.#value = str + this.#value;
//   }

//   padBoth(str){
//     this.#value = str + this.#value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class User {
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }

//     getFullname(){
//         return `${this.name} ${this.surname}`
//     }
// }

// class Student extends User{
//     constructor(name, surname, year){
//         super(name, surname);
//         this.year = year;
//     }

//     getCours(){
//         const currentYear = new Date().getFullYear();
//         return `Current cours - ${currentYear - this.year}`
//     }
// }

// let student1 = new Student("Pedro", "Salvares", 2022);

// console.log(student1.getCours());

// *******Task-4******* \\
// Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну
//  властивість balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw,
//   які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому balance повинна
//   бути доступна лише в межах класу BankAccount та його приватних методів.

// class BankAccount {
//   #balance;
//   constructor() {
//     this.#balance = 0;
//   }

//   deposit(sum){
//     this.#balance += sum;
//   };

//   withdraw(sum){
//     if(sum > this.#balance){
//        return console.log("Недостатньо коштів на рахунку");}
//      this.#balance -= sum;

// }}

// const instance = new BankAccount()
// instance.deposit(100)
// instance.deposit(1200)
// instance.withdraw(1500)
// console.log(instance);

// Яким буде результат виклику функції?

// function f() {
//   console.log(this.name);
// }
// const foo = f.bind({ name: "Іван" }).bind({ name: "Juan" });
// foo();

// Функція askPassword приймає 2 колбека і викливає 1 іх них в задежності від пароля

// function askPassword(ok, fail) {

//     let password = prompt("Password?");

//     if(password === "qwerty111"){
//         ok();
//     }else{
//         fail();
//     }
// }

//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// class User {
//   constructor({userName, age, numberOfPost}) {
//     this.userName = userName;
//     this.age = age;
//     this.numberOfPost = numberOfPost;
//   }

//   getInfo(){
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numberOfPost}  публікацій`
//   }
// }


