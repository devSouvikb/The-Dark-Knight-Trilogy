var readlineSync = require("readline-sync");
const chalk = require("chalk");

var playerName = readlineSync.question(
  "Nameste! Give me your name Please!\n=> "
);
console.log(
  `\nWelcome! to ${`"The Dark Knight Trilogy Quiz"`} Game ${playerName}`
);

console.log(
  `\n${"Rules:-"}\n\n${"The Game is divided into 3 levels"}\n\n${"Level 1 :-"}\n1. Total number of questions => 10\n2. Each correct answer => 2 points\n3. No negative marking for incorrect answers\n${"=> You have to give atleast 6 correct answers to go to level 2"}`
);

if (readlineSync.keyInYN(`\nLets Play! Level 1  ${playerName} `)) {
} else {
  console.log("\nOh no!! You exit from the Game");
  process.exit();
}

var score = 0;

console.log("\nPlease! select correct option between 1 - 4");

var levelOneQues = [
  {
    array: ["...immortal", "...the villain", "...corrupted", "...the bad guy"],
    question: `Q.1 Complete the quote: "You either die a hero or you live long enough to see yourself become ......."`,
    answer: "...the villain",
  },

  {
    array: ["China", "Taiwan", "Hong kong", "Japan"],
    question: "Q.2 Where does Batman find Lau? ",
    answer: "Hong kong",
  },

  {
    array: ["Tumbler", "Roller", "Toppler", "Dumpler"],
    question: `Q.3 What is "The Dark Knight trilogy's" Batmobile called? `,
    answer: "Tumbler",
  },

  {
    array: [
      "Suicide Squad",
      "The Assassination League",
      "Justice League Dark",
      "League of Shadows",
    ],
    question: "Q.4 Which group does Bruce train with in Bhutan? ",
    answer: "League of Shadows",
  },

  {
    array: ["Amy Beddos", "Barbara Gordon", "Talia Al Ghul", "Selina Kyle"],
    question: "Q.5 What is Miranda Tate's real name? ",
    answer: "Talia Al Ghul",
  },

  {
    array: ["Doctor", "Nurse", "Receptionist", "Patient"],
    question:
      "Q.6 What is the Joker's disguise when he demolishes the hospital? ",
    answer: "Nurse",
  },

  {
    array: ["burn", "end", "perish", "die"],
    question: `Q.7 Complete the quote: "Some men just want to watch the world..." `,
    answer: "burn",
  },

  {
    array: ["a play", "a dance concert", "an opera", "a standup comic"],
    question:
      "Q.8 What is Bruce watching with his parents before they are mugged?",
    answer: "an opera",
  },

  {
    array: ["Uzbekistan", "Tajakistan", "Iran", "Afganistan"],
    question: "Q.9 What Country Did Bane Abduct Dr. Leonid Pavel From? ",
    answer: "Uzbekistan",
  },

  {
    array: ["pen", "knife", "Handkerchief", "Pencil"],
    question:
      "Q.10 What object does the Joker make 'disappear' as a magic trick? ",
    answer: "Pencil",
  },
];

var play = (question, array, answer) => {
  var playerAnswer = readlineSync.keyInSelect(array, question);
  console.log("\n");
  if (array[playerAnswer] === answer) {
    console.log("Congrats!! You are Correct");
    score = score + 2;
  } else {
    console.log("Oops!! You are Wrong");
    console.log("The correct answer is : ", answer);
  }
  console.log(`Current score is: ${score} `);
  console.log("\n       ************");
};

for (i = 0; i < levelOneQues.length; i++) {
  currentQues = levelOneQues[i];
  play(currentQues.question, currentQues.array, currentQues.answer);
}

console.log("\nYour final score is: " + score);

if (score === 20) {
  console.log(
    "\nWow!! You have answered all correct\nYou are a true Batman fan"
  );
  console.log("\n\nCongrats!! You are qualified for Level 2");
} else if (score >= 12) {
  console.log("\n\nCongrats!! You are qualified for Level 2");
}

console.log(`\n\nThanks for playing ${playerName} Hope you enjoyed!!!`);
