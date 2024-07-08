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

function countVowel(str) {
const vowels = "aeiou"
let total = 0;
// str = str.toLowerCase();
// str = str.toLoverCase();

str = str.toLowerCase();

for (let i = 0; i < str.length; i +=1) {
 if (vowels.includes(str[i])) {
   total += 1;
 }
   
};
return total;

}

// console.log(countVowel("HELLO WORLD")); // 3
console.log(countVowel("Junior Web Developer")); // 8