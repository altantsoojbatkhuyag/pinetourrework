/// let weekNumber = 3;
// let weekName;

// if (weekNumber == 1) {
//   weekName = "Monday";
//   console.log(weekName);
// } else if (weekNumber == 2) {
//   weekName = "tuesday";
//   console.log(weekName);
// } else if (weekNumber == 3) {
//   weekName = "wednesday";
//   console.log(weekName);
// } else if (weekNumber == 4) {
//   weekName = "friday";
//   console.log(weekName);
// } else if (weekNumber == 6) {
//   weekName = "saturday";
//   console.log(weekName);
// } else if (weekNumber == 7) {
//   weekName = "sunday";
//   console.log(weekName);
// }

// const weekNumber = 4;
// switch (weekNumber) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
// }

// const x = 6;
// const y = 3;
// if (x < y) {
//   console.log("x ih", x);
// } else {
//   console.log("y ih", y);
// }

// const x = 6;
// const y = 3;
// if (x / 2) {
//   c;
// }
// if (y / 2) {
//   console.log(y % 2 === 0);
// }

// const a = 8000;
// const b = 50000;
// const c = 90000;

// if (a > b) {
//   if (a > c) {
//     console.log("a n ih");
//   } else {
//     console.log("c n ih");
//   }
// } else {
//   if (b > c) {
//     console.log("b n ih");
//   } else {
//     console.log("c n ih");
//   }
// }

// if (a > b && a < c) {
//   console.log("a n ih");
// } else {
//   console.log("c n ih");
// }

// if (b > c && b < a) {
//   console.log("b n ih");
// } else {
//   console.log("a n ih");
// }
// if (c > a && c < b) {
//   console.log("c n ih");
// } else {
//   console.log("b n ih");
// }

// const string = "najksnflasfjvnds";
// console.log(string.length);

// const word = "hello world";
// console.log(word.toUpperCase());
// console.log(word.length);

// const x = 15;
// if (x % 5 === 0) {
//   console.log("buzz");
// }
// if (x % 3 === 0) {
//   console.log("fizz");
// }
// if (x % 3 === 0 && x % 5 === 0) {
//   console.log("fizzbuzz");
// }

// const a = "hello";
// const b = "world";

// const merge = a + " " + b;
// console.log(merge);

// const a = 6;
// const b = 3;
// console.log((6 + 3) / 2);

// const cars = ["R&R , BMW , Bentley , Lada , Toyota"];

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const lastFruit = fruits.at(fruits.length - 1);
// console.log("last fruit", lastFruit);

// const fruits = ["apple", "banana"];
// const fruitadded = fruits.push("Kiwi");
// console.log(fruits);

// const numbers = [1, 2, 3, 4];
// const poppednumbers = numbers.pop();
// console.log(numbers);

// const numbers = [10, 20, 30];
// numbers.unshift(5);
// console.log(numbers);

// const numbers = [100, 200, 300];
// numbers.shift();
// console.log(numbers);

// const numbers1 = ["1", "2", "3"];
// const numbers2 = ["4", "5", "6"];

// const numberss = numbers1.concat(numbers2);
// console.log(numberss);

// const fruits = ["apple", "banana", "orange"];
// const incfruits = fruits.includes("banana");
// console.log(incfruits);

// const pets = ["cat", "dog", "bird"];
// const indexdog = pets.indexOf("dog");
// console.log(indexdog);

// const nums = ["i", "love", "javascript"];
// const joined = nums.join();
// console.log(joined);

// const fruits = [10, 20, 30, 40, 50];
// const nums = fruits.slice(0, 4);
// console.log(nums);

// 10 аас 1 рүү буурах дарааллаар хэвлэ.
// Өгөгдсөн n тооны хүрдийг харуул.
// Example:
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30
// 2 ийн n зэргийг ол. (Example: 5. Result:32)
// Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол. (Example: 234. Result:9)
// 987654 дээрх тоо хэдэн оронтой тоо гэдгийг тоол. Result:6
// Өгөгдёөн тооны квадратыг ол . Example: 5 . Result: 25
// Эхний N  тооны кубын нийлбэр. Example: 4 . Result:100
// 1–30 хүртэлх тоонууд дундаас 2 болон 3-т зэрэг хуваагддаг тоонуудыг хэвлэх
// Хэрвээ тоо 3-т хуваагдвал “Fizz”, 5-т хуваагдвал “Buzz” гэж хэвлэх
// 1–100 хүртэлх 7-д хуваагддаггүй тоонуудыг хэвлэх
// 1–50 хүртэлх тоонууд дундаас сондгой бөгөөд 5-ын үржвэр тоонуудыг олох
// 1–100 хүртэлх тоонуудын дундаас 50–60 хооронд байгаа тоонуудын нийлбэрийг гарга.
// 1–20 хүртэлх тоонууд дундаас анхны тоонуудыг (prime numbers) ол.
// 1–50 хүртэлх бүх сондгой тооны кубын нийлбэрийг ол.
// 1–100 хүртэлх тоо бүрийг шалгаад 2-т болон 5-т зэрэг хуваагддаг бол тоог хэвлэ.

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(3 * i);
// }

// const n = 5;

// let m = 1;

// for (let i = 0; i < n; i++) {
//   m = m * 2;
// }

// console.log(m);

// const nums = 125;

// const stringNums = String(nums);

// let sum = 0;

// for (let i = 0; i < stringNums.length; i++) {
//   const num = stringNums[i];
//   sum = sum + Number(num);
// }

// console.log(sum);

// const m = 987654;
// let j = 987465;
// let n = 1;
// for (let i = 0; i < m.toString().length; i++) {
//   console.log("i: ", i, "j: ", j);
//   j = Math.floor(j / 10);

//   n = n + i;
//   console.log("n: ", n);
// }

// console.log(n);

// console.log(String(m));

// for (i = 5; i < 2; i++) {
//   console.log(i ^ i);
// }
//   weekName = "thursday";
//   console.log(weekName);
// } else if (weekNumber == 5) {

// function tooNiilber(a , b) {
//   console.log(1 + 2);
// }
// tooNiilber();

// function tooYalgavar() {
//   return 4 - 2;
// }
// let Yalgavar = tooYalgavar;
// console.log(Yalgavar);

// function add(a, b) {
//   return a + b;
// }

// const sum = add(2, 1);

// console.log(sum);

// function numberSquare(n) {
//   return n * n;
// }

// const sum = numberSquare(2);
// console.log(sum);

// function isEven(n) {
//     {
//     return true;
//   } else {
//     return false;
//   }
// }
// const too = isEven(10);
// console.log(too);

// const numbers = [50, 100, 150];

// function maxinArray(nums) {
//   let maxNumber = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const number = nums[i];
//     if (number > maxNumber) {
//       maxNumber = number;
//     }
//   }

//   return maxNumber;
// }

// const maxNumber = maxinArray(numbers);

// console.log(maxNumber);

// const text = "hello";

// function toUpperCasee(ctext) {
//   let result = "";

//   for (let i = 0; i < ctext.length; i++) {
//     result + ctext[i];
//     if (i === 0) {
//       result += ctext[i].toUpperCase();
//     } else {
//       result += ctext[i];
//     }
//   }

//   return result;
// }
// const result = toUpperCasee(text);
// console.log(result);

// let num = 1;

// function factorial(n) {
//   for (let i = 0; i < n; i++) {
//     num += num * i;
//   }
//   return num;
// }

// console.log(factorial(5));

// const text1 = "mom";
// const text2 = "haha";
// const text3 = "madam";
// const text4 = "hadgalagdah";
// const text5 = "halagdah";

// function isPalindrome(str) {
//   let reverseChar = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseChar += str[i];
//   }

//   return str === reverseChar;
// }
// console.log(isPalindrome(text1));
// console.log(isPalindrome(text2));
// console.log(isPalindrome(text3));
// console.log(isPalindrome(text4));
// console.log(isPalindrome(text5));

// const text = "text";

// function lastItem(arr) {
//   for (let i = arr.length; i <= 0; i--) return arr;
// }
// console.log(lastItem(text));
