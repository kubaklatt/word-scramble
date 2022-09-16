let words = [
  {
    word: "addition",
    hint: "The process of adding numbers",
  },
  {
    word: "meeting",
    hint: "Event in which people come together",
  },
  {
    word: "number",
    hint: "Math symbol used for counting",
  },
  {
    word: "exchange",
    hint: "The act of trading",
  },
  {
    word: "canvas",
    hint: "Piece of fabric for oil painting",
  },
  {
    word: "garden",
    hint: "Space for planting flower and plant",
  },
  {
    word: "position",
    hint: "Location of someone or something",
  },
  {
    word: "feather",
    hint: "Hair like outer covering of bird",
  },
  {
    word: "comfort",
    hint: "A pleasant feeling of relaxation",
  },
  {
    word: "tongue",
    hint: "The muscular organ of mouth",
  },
  {
    word: "expansion",
    hint: "The process of increase or grow",
  },
  {
    word: "country",
    hint: "A politically identified region",
  },
  {
    word: "group",
    hint: "A number of objects or persons",
  },
  {
    word: "taste",
    hint: "Ability of tongue to detect flavour",
  },
  {
    word: "store",
    hint: "Large shop where goods are traded",
  },
  {
    word: "field",
    hint: "Area of land for farming activities",
  },
  {
    word: "friend",
    hint: "Person other than a family member",
  },
  {
    word: "pocket",
    hint: "A bag for carrying small items",
  },
  {
    word: "needle",
    hint: "A thin and sharp metal pin",
  },
  {
    word: "expert",
    hint: "Person with extensive knowledge",
  },
  {
    word: "statement",
    hint: "A declaration of something",
  },
  {
    word: "second",
    hint: "One-sixtieth of a minute",
  },
  {
    word: "library",
    hint: "Place containing collection of books",
  },
];

const playerInput = document.querySelector(".enter-word");
const infoInput = document.querySelector(".info");
const checkBtn = document.querySelector(".check-btn");
const newBtn = document.querySelector(".new-word");
const wordToGuess = document.querySelector(".word");
const hintToWord = document.querySelector(".hint-text");
const timeAmount = document.querySelector(".time-amount");

let seconds = 60;
let time = setInterval(timeLeft, 1000);

let randomObj = words[Math.floor(Math.random() * words.length)];
let wordToShuffle = randomObj.word;

const initGame = () => {
  let shuffled = wordToShuffle
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");

  wordToGuess.innerHTML = shuffled;
  hintToWord.innerHTML = randomObj.hint;
};

initGame();

function timeLeft() {
  timeAmount.innerHTML = seconds + " seconds";
  seconds--;
  if (seconds === 0) {
    seconds = 0;
    timeAmount.innerHTML = "You lost, time gone!";
    clearInterval(time);
  }
}

function checkTheWord() {
  let userValue = playerInput.value.toLowerCase();
  if (userValue === "") {
    infoInput.innerHTML = "You have to write something";
  } else if (userValue === wordToShuffle) {
    infoInput.innerHTML = "You won!";
  } else {
    infoInput.innerHTML = "Try again";
  }
}

function newWord() {
  seconds = 60;
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordToShuffle = randomObj.word;
  let shuffled = wordToShuffle
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  wordToGuess.innerHTML = shuffled;
  hintToWord.innerHTML = randomObj.hint;
}

checkBtn.addEventListener("click", checkTheWord);
newBtn.addEventListener("click", newWord);
