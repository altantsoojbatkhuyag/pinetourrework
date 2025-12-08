// const myDi = document.getElementById("my-di");
// console.log(myDi);
// myDi.innerHTML = "<h1>list</h1>";
// const myDiv = document.getElementById("my-div");
// console.log(myDiv);
// myDiv.innerHTML = "<ul><li><h2>Yogurt</h2></li>";
// const myDiv1 = document.getElementById("my-div1");
// console.log(myDiv1);
// myDiv1.innerHTML = "<ul><li><h2>Milk</h2></li>";
// const myDiv2 = document.getElementById("my-div2");
// console.log(myDiv2);
// myDiv2.innerHTML = "<ul><li><h2>Chicken</h2></li>";
// const myDiv3 = document.getElementById("my-div3");
// console.log(myDiv3);
// myDiv3.innerHTML = "<ul><li><h2>Fruits</h2></li>";
// const list = ["hi", "hi1", "hi2", "hello"];
// let elementList = "<h1>greetings</h1>";

// let ul = "<ul>";

// for (let i = 0; i < list.length; i++) {
//   const item = list[i];
//   const element = `<li>${item}</li>`;
//   ul += element;
// }

// ul += "</ul>";

// elementList += ul;

// console.log(elementList);
// document.body.innerHTML = elementList;
// const push = document.getElementById("push");
// const push1 = document.getElementById("push1");
// const input = document.getElementById("input");
// const randomNumber = Math.floor(Math.random() * 10);

// let attempt = 0;

// function start() {
//   const enteredNumber = Number(input.value);

//   // enteredNumber too ni random tootoi tenstuu baival // console.log("you win")
//   if (enteredNumber == randomNumber) {
//     push.innerHTML = "you win";
//     return;
//   }
//   // enteredNumber too ni random toonoos baga // baga baina gej console log
//   if (enteredNumber < randomNumber) {
//     push.innerHTML = "baga baina";
//     input.value = "";
//   }
//   // enteredNumber too ni random toonoos ikh // ikh baina gej console log
//   if (enteredNumber > randomNumber) {
//     push.innerHTML = "ikh baina";
//     input.value = "";
//   }

//   attempt++;
//   if (attempt === 5) {
//     // push.innerHTML = "game over";
//     console.log("game over");
//     input.value = "";
//   }

//   console.log(attempt);
//   push1.innerHTML = attempt;
// }

// hunii orullsan too 0-10 baih ystoi
// oroldologin toog haruulna

// const nums = [2, 4, 8];

// function multiple(a) {
//   return a * a;
// }
// const NewNums = nums.map(multiple);
// console.log(NewNums);
/////////////2/////////////
// const nums = [3, 7, 8]; // ['tegsh]

// function multiple(a) {
//   if (a % 2 === 0) {
//     return "tegsh";
//   } else {
//     return "sondgoi";
//   }
// }
// const NewNums = nums.map(multiple);
// console.log(NewNums);
/////////////3//////////////
// const nums = ["hi", "ok"];

// function multiple(a) {
//   return a + "!";
// }
// const NewNums = nums.map(multiple);
// console.log(NewNums);
////////////4/////////////////
// const nums = [1990, 2000];

// function multiple(a) {
//   return 2025 - a;
// }
// const NewNums = nums.map(multiple);
// console.log(NewNums);

//////////////////5///////////////
// function upperCase(str) {

//   const splittedStr = str.split(""); //  ["h", "e"];

//   const upperCaseChar = splittedStr[0].toUpperCase(); // "H"

//   splittedStr[0] = upperCaseChar; // onooh ["H", "e"];

//   return splittedStr.join(""); // "He"
// }

// const words = ["hello", "world"];

// const newWords = words.map(upperCase);

// console.log(newWords);
///////////////////6///////////////////////
// function count(str) {
//   const splittedStr = str.split("");

//   return splittedStr;
// }

// const words = ["sahfbsdiahfbsbvashbjhsabfobsia"];

// const newWords = words.map(count);

// console.log(newWords);
///////////////////7///////////////////
// const nums = [1000, 2000];

// function multiple(a) {
//   return a * 0.1 + a;
// }
// const NewNums = nums.map(multiple);
// console.log(NewNums);
//////////////////8///////////
// function count(str) {
//   const splittedStr = str.split("");

//   return "₮" + splittedStr.join("");
// }

// const words = ["1200"];

// const newWords = words.map(count);

// console.log(newWords);
//////////////9///////////////
// const nums = [3, 7, 8];
// function multiple(a) {
//   if (a % 2 === 0) {
//     return "tiim";
//   } else {
//   }
//   return "ugui";
// }
// const NewNums = nums.map(multiple);
// console.log(NewNums);
/////////////10////////////
// const nums = [1000, 2000];

// function multiple(a) {
//   return 1 + a;
// }
// const NewNums = nums.map(multiple);
// console.log(NewNums);
////////////for each 1//////////////
// const nums = [1, 2, 3];

// nums.forEach(function logger(a) {
//   console.log(a);
// });
//////////for each 2//////////////
// const nums = [1, 2, 3];
// let sum = 0;
// nums.forEach(function logger(a) {
//   sum += a;
// });
// console.log(sum);
//////////for each 3//////////////
// const nums = [3, 6, 7, 4, 10];
// let result = [];
// nums.forEach((a) => {
//   if (a > 5) {
//     result.push(a);
//   }
// });
// console.log(result);
//////////for each 4//////////////
// const nums = [3, 6, 7, 4, 10];

// nums.forEach((a) => {
//   if (a % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// });
// console.log(a);
//////////for each 5//////////////
// const nums = [3, 6, 7, 4, 10];
// let result = [];
// nums.forEach((a) => {
//   const multiplied = a * 2;

//   result.push(multiplied);
// });
// console.log(result);
//////////for each 6//////////////
// const nums = ["bold", "suren"];
// let result = [];
// nums.forEach((a) => {
//   const multiplied = a + "-student";

//   result.push(multiplied);
// });
// console.log(result);
//////////for each 7//////////////
// const nums = ["a", "b", "c"];
// let result = [];
// nums.forEach(() => {
//   result++;
// });
// console.log(result);
/////////for each 8///////////////
// const nums = ["bold", "suren", "otgon"];
// let result = [];
// nums.forEach((item) => {
//   if (item.includes("o")) {
//     result.push(item);
//   }
// });
// console.log(result);
/////////for each 9///////////////
// const nums = [3, -10, -8];
// let result = [];
// nums.forEach((item) => {
//   if (item < 0) {
//     result.push(item);
//   }
// });
// console.log(result);
/////////for each 10///////////////
// const words = ["dog", "cat", "hi"];
// let result = [];
// words.forEach((word) => {
//   const wordBin = word.split("");
//   result.push(wordBin[0]);
// });
// console.log(result);
///////////filter 1///////////////
// const nums = [1, 2, 3, 4, 5, 6];
// const evens = nums.filter((num) => num % 2 === 0)
// console.log(evens);
//////////filter 2/////////////////
// const nums = [1, 2, 3, 4, 5];
// const odds = nums.filter((num) => num % 2 !== 0);
// console.log(odds);
//////////filter 3/////////////////
// const nums = [5, 12, 8, 30];
// const odds = nums.filter((num) => num > 10);
// console.log(odds);
//////////filter 4/////////////////
// const nums = ["hi", "hello", "winter", "cat"];
// const odds = nums.filter((num) => num.length >= 4);
// console.log(odds);
//////////filter 5/////////////////
// const nums = ["bat", "dorj", "amar", "suren"];
// const odds = nums.filter((num) => num.includes("a"));
// console.log(odds);
//////////filter 6/////////////////
// const nums = [-3, 0, 5, -1, 10];
// const odds = nums.filter((num) => num > 0);
// console.log(odds);
//////////filter 7/////////////////
// const nums = [3, 4, 9, 10, 12];
// const evens = nums.filter((num) => num % 3 === 0);
// console.log(evens);
//////////filter 8/////////////////
// const nums = [true, false, true, false];
// const evens = nums.filter((num) => num);
// console.log(evens);
//////////filter 9/////////////////
// const nums = ["snow", "cat", "sun", "dark" , 'hahahs'];
// const odds = nums.filter((num) => num[0].includes("s"));
// console.log(odds);
//////////filter 10/////////////////
// const chars = ["a", "b", "a", "c", "b"      ];
// const temp = [];
// const duplicate = chars.filter((char) => {
//   if (!temp.includes(char)) {
//     temp.push(char);
//     return false;
//   } else {
//     return true;
//   }
// });

// console.log(duplicate);
//////////reduce 1/////////////////
// const nums = [1, 2, 3, 4, 5];
// const result = nums.reduce((acc, curr) => {
//   return acc + curr;
// });
// console.log(result);
//////////reduce 2/////////////////
// const nums = [2, 3, 4];
// const result = nums.reduce((acc, curr) => {
//   return acc * curr;
// });
// console.log(result);
//////////reduce 3/////////////////
// const nums = [10, 30, 5, 22];
// const result = nums.reduce((acc, curr) => {
//   if (acc < curr) {
//     return curr;
//   } else {
//     return acc;
//   }
// }, 0);
// console.log(result);
//////////reduce 4/////////////////
// const nums = [10, 3, 20, 7];
// const result = nums.reduce((acc, curr) => {
//   if (acc > curr) {
//     return curr;
//   } else {
//     return acc;
//   }
// });
// console.log(result);
//////////reduce 5/////////////////
// const nums = ["hi", "hello", "hey"];
// const result = nums.reduce((acc, curr) => {
//   return acc + curr;
// });
// console.log(result);
//////////reduce 6/////////////////
// const nums = ["hi", "hello", "hey"];

// const result = nums.reduce((acc, curr) => {
//   return acc + curr.length;
// }, 0);
// console.log(result);
// filter + map

// People array-аас 18 ба түүнээс дээш настай хүмүүсийн нэрийг шүүж гарга.//////////
// const people = [
//   { name: "John", age: 17 },
//   { name: "Jane", age: 20 },
//   { name: "Jack", age: 18 },
// ];
// const adultPeople = people.filter((person) => {
//   if (person.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(adultPeople);
// Зөвхөн эерэг тоонуудаар массив үүсгэ.//////////////
// const nums = [-5, 3, -1, 7, 0];
// const positiveNumbers = nums.filter((num) => num > 0);
// console.log(positiveNumbers);
// 3 аас дээш тооны урттай элементүүдээр массив үүсгэ.////////
// const words = ["hi", "hello", "yo", "world"];
// const longWord = words.filter((word) => word.length >= 3);
// console.log(longWord);
// Доорх array аас сондгой тоонуудыг 2 дахин ихэсгэсэн массив үүсгэ.
// const numbers = [1, 2, 3, 4, 5];
// const oddNumbers = numbers.filter((num) => {
//   if (num % 2 !== 0) {
//     return num * 2;
//   }
// });
// const multipliedNumber = oddNumbers.map((nums) => nums * 2);
// console.log(multipliedNumber);
// Pass хийсэн сурагдын firstname ийг нь upperCase болгосон array үүсгэ

// const students = [
//   { firstName: "John", lastName: "Doe", passed: true },
//   { firstName: "Jane", lastName: "Smith", passed: false },
//   { firstName: "Alice", lastName: "Jones", passed: true },
// ];
// const passedStudents = students.filter((student) => student.passed === true);
// const toUpper = passedStudents.map((student) => {
//   const fullName = `${student.firstName} ${student.lastName}`;
//   return fullName.toUpperCase();
// });
// console.log(toUpper);
// хамгийн өндөр оноотой 3 дүнгээр нь массив үүсгэ.

const students = [
  { name: "A", score: 88 },
  { name: "B", score: 95 },
  { name: "C", score: 72 },
  { name: "D", score: 99 },
  { name: "E", score: 91 },
];
// const ihToo = students.reduce((acc, curr) => {
//   if (acc.score > curr.score) {
//     return [acc];
//   } else {
//     return [curr];
//   }
// }, []);
// console.log(ihToo);

const arr = [{ score: 0 }];

for (let i = 0; i < students.length; i++) {
  const student = students[i];

  if (arr[0].score < student.score) {
    arr[1] = arr[0];
    arr[0] = student;
    arr[1] = arr[2];
    arr[1] = student;
    arr[2] = arr[2];
    arr[2] = student;
  }
}

console.log(arr);
