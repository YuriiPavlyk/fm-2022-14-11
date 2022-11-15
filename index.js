// Людина вводить номер місяця, ви виводите пору року
// 1,2,12 - winter
// 3,4,5 - spring
// 6,7,8, - summer
// 9,10,11 - fall
// 404 try again
// виконати 2 варіантами: через switch та if...else if...else

const season = prompt("Season");
if (season === "1" || season === "2" || season === "12") {
  console.log("winter");
} else if (season === "3" || season === "4" || season === "5") {
  console.log("spring");
} else if (season === "6" || season === "7" || season === "8") {
  console.log("summer");
} else if (season === "9" || season === "10" || season === "11") {
  console.log("fall");
} else {
  console.log("404 Try again");
}

const season1 = prompt("Season");
switch (season1) {
  case "1":
  case "2":
  case "12":
    console.log("winter");
    break;
  case "3":
  case "4":
  case "5":
    console.log("spring");
    break;
  case "6":
  case "7":
  case "8":
    console.log("summer");
    break;
  case "9":
  case "10":
  case "11":
    console.log("fall");
    break;
  default:
    console.log("404 try again");
    break;
}

// Людина вводить вік (привести до числа), ви виводите класифікацію за віком:
// [0 - 2) baby
// [2 - 6) kinder
// [6 - 12) child
// [12 - 18) teenager
// [18 - 65) adult
// [65 - 100) oldmen
// [100 - 150) super!
// 404 try again
// оберіть самі потрібну конструкцію

const userInput = prompt("Age");
const userInputNumber = Number(userInput);
if (userInput >= 0 && userInput < 2) {
  console.log("baby");
} else if (userInput >= 2 && userInput < 6) {
  console.log("kinder");
} else if (userInput >= 6 && userInput < 12) {
  console.log("child");
} else if (userInput >= 12 && userInput < 18) {
  console.log("teenager");
} else if (userInput >= 18 && userInput < 65) {
  console.log("adult");
} else if (userInput >= 65 && userInput < 100) {
  console.log("old man");
} else if (userInput >= 100 && userInput < 150) {
  console.log("super!");
} else {
  console.log("404 Try again");
}

// Людина вводить годину([0-23]), ви виводите привітання
// [7 - 11) - good morning
// [11 - 18) - good day
// [18 - 23) - good evening
// усе інше - good night
// усе невірне - 404 try again
// виконати 2 варіантами: через switch та if...else if...else і скажете який краще!!!
// if else Краще

const userInputTime = Number(prompt('time'));
if (userInputTime >= 7 && userInputTime < 11) {
  console.log("good morning");
} else if (userInputTime >= 11 && userInputTime < 18) {
  console.log("good day");
} else if (userInputTime >= 18 && userInputTime < 23) {
  console.log("good evening");
} else if ((userInputTime >= 0 && userInputTime < 7) || userInputTime === 23) {
  console.log("good night");
} else {
  console.log("404 try again");
}


const userInputTime1 = Number(prompt('Time'));
switch (userInputTime1) {
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("good morning");
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    console.log("good day");
    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
    console.log("good evening");
    break;
  case 23:
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("good night");
    break;
  default:
    console.log("404 try again");
    break;
}