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
