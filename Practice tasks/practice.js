/*

// Task 1 - Object practice
let person = {
  name: "Sergey",
  age: 33,
  country: "Kazakhstan",
};

function showData() {
  output.textContent = `${person.name} is ${person.age} years old and lives in ${person.country}`;
}

// Task 2 - Conditional practice
let age = 26;

let freeMessage = "free";
let childDiscount = "child discount";
let studentDiscount = "student discount";
let fullPrice = "full price";
let seniorCitizenDiscount = "senior citizen discount";

if (age < 6) {
  output.textContent = freeMessage;
} else if (age < 18) {
  output.textContent = childDiscount;
} else if (age < 27) {
  output.textContent = studentDiscount;
} else if (age < 67) {
  output.textContent = fullPrice;
} else {
  output.textContent = seniorCitizenDiscount;
}
*/
// Task 3 - Array practice
/*
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries.shift();
largeCountries.unshift("China");
largeCountries.pop();
largeCountries.push("Pakistan");

for (let i = 0; i < largeCountries.length; i++) {
  output.innerHTML += `${largeCountries[i]}<br>`;
}
*/
/*
// Task 4 - Logical opearators practice
let dayOfMonth = 13;
let weekday = "Friday";

if (dayOfMonth === 13 && weekday === "Friday") {
  output.textContent = "😱";
}

// Task 5 - Random practice
let hands = ["rock", "paper", "scissors"];

function choice() {
  let randIndex = Math.floor(Math.random() * 3);
  return randIndex;
}

output.textContent = hands[choice()];


// Task 6 - For loop practice

let output = document.getElementById("output");

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// orangeShelf.textContent = "🍊";
// appleShelf.textContent = "🍎";

function sortFruits() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += fruit[i];
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += fruit[i];
    } else {
      //pass
    }
  }
}

sortFruits();

*/

// Task 7 - Event listener practice
/*
const scoreBtn = document.getElementById("score");

/*
let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

scoreBtn.addEventListener("click", function () {
  scoreBtn.textContent = data[0].score;
});

*/

// Task 8 - Template string practice
/*
function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `;
  const lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i == lastIndex) {
      baseString += arr[i];
    } else {
      baseString += arr[i] + ", ";
    }
  }

  return baseString;
}

console.log(generateSentence("largest countries", ["China", "India", "USA"]));
//console.log(generateSentence("best fruits", ["Apples", "Bananas"]));
*/

// Task 9 - Render images

/*
const imgCont = document.getElementById("container");
const imgs = ["/img1.png", "/img2.png", "/img3.png"];

function renderImg(arrImg) {
  let imgRaw = "";
  for (let i = 0; i < arrImg.length; i++) {
    imgRaw += `<img src=${arrImg[i]}>`;
  }
  imgCont.innerHTML = imgRaw;
}

renderImg(imgs);
*/
