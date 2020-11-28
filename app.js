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

var leaderBoard = [
  {
    name: "Souvik",
    score: 50,
  },

  {
    name: "Mahir",
    score: 42,
  },

  {
    name: "Rajdeep",
    score: 38,
  },

  {
    name: "Subham",
    score: 35,
  },

  {
    name: "Pradeep",
    score: 27,
  },

  {
    name: "Rahul",
    score: 19,
  },
];

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

var scoreTwo = 0;

if (score >= 12) {
  console.log(
    `\n\n${"Level 2 :-"}\n1. Total number of questions => 5\n2. Each correct answer => 2 points\n3. Negative marking for incorrect answers => -1\n${"=> You have to give all correct answers to go to level 3"}`
  );

  if (readlineSync.keyInYN(`\nLets Play! Level 2  ${playerName} `)) {
  } else {
    console.log("\n Oh no!! The Game Ended");

    for (let i = 0; i < leaderBoard.length; i++) {
      if (leaderBoard[i].score < score) {
        console.log(`\nCongrats! ${playerName} you have broken records`);
        break;
      }
    }

    console.log(
      `\n${"=>>"} Please sent a screenshort of your score, so that I can update the LeaderBoard.`
    );

    console.log(`\n\nThanks for playing ${playerName}Hope you enjoyed!!!`);
    process.exit();
  }

  var levelTwoQues = [
    {
      array: ["both 7", "8 and 9", "both 8", "7 and 9"],
      question:
        "Q.1 How Old Were Rachel Dawes And Bruce Wayne When Bruce Fell In The Well? ",
      answer: "both 8",
    },

    {
      array: ["Museum", "Orphanage home", "Art Gallery", "Opera Hall"],
      question: "Q.2 What was the wayne mansion taken use for at the end? ",
      answer: "Orphanage home",
    },

    {
      array: ["Bucky", "Bonny", "Bane", "Robin"],
      question: "Q.3 What is John Blake's real name? ",
      answer: "Robin",
    },

    {
      array: ["Ras Al Ghul", "Scarecrow", "Falcone", "Two Face"],
      question: "Q.4 Which Villain Has Appeared In Each Film? ",
      answer: "Scarecrow",
    },

    {
      array: [
        "Gotham Rogues",
        "Gotham Riders",
        "Gotham League",
        "Gotham Knights",
      ],
      question: "Q.5 What is the name of Gotham’s football team? ",
      answer: "Gotham Rogues",
    },
  ];

  var play = (question, array, answer) => {
    var playerAnswer = readlineSync.keyInSelect(array, question);
    console.log("\n");
    if (array[playerAnswer] === answer) {
      console.log("Congrats!! You are Correct");
      scoreTwo = scoreTwo + 2;
    } else {
      console.log("Oops!! You are Wrong");
      console.log("The correct answer is : ", answer);
      scoreTwo = scoreTwo - 1;
    }
    console.log(`Current score is: ${scoreTwo + score} `);
    console.log("\n       ***********");
  };

  for (i = 0; i < levelTwoQues.length; i++) {
    currentQues = levelTwoQues[i];
    play(currentQues.question, currentQues.array, currentQues.answer);
  }

  console.log("\nYour final score is: " + scoreTwo + score);

  if (scoreTwo + score === 30) {
    console.log(
      "\nWow!! You have answered all correct\nYou are a true Batman fan"
    );
    console.log("\n\nCongrats!! You are qualified for Level 3");
  } else if (scoreTwo === 10) {
    console.log("\n\nCongrats!! You are qualified for Level 3");
  }

  if (scoreTwo === 10) {
    console.log(
      `\n\n${"Level 3 :-"}\n1. Total number of questions => 5\n2. Each correct answer => 4 points\n3. Negative marking for incorrect answers => -2`
    );

    if (readlineSync.keyInYN(`\nLets Play! Level 3  ${playerName} `)) {
    } else {
      console.log("\nOh no!! The Game Ended");

      for (let i = 0; i < leaderBoard.length; i++) {
        if (leaderBoard[i].score < scoreTwo + score) {
          console.log(`\nCongrats! ${playerName} you have broken records`);
          break;
        }
      }

      console.log(
        `\n${"=>>"} Please sent a screenshort of your score, so that I can update the LeaderBoard.`
      );

      console.log(`\n\nThanks for playing ${playerName} Hope you enjoyed!!!`);

      process.exit();
    }

    var levelThreeQues = [
      {
        array: ["Parsi", "Moroccan Arabic", "Urdu", "Frictional Language"],
        question: "Q.1 What is the language of the prison inmates in the pit? ",
        answer: "Moroccan Arabic",
      },

      {
        array: ["Joe Chill", "Damon Caro", "Carmine Falcone", "Jack Napier"],
        question: "Q.2 Who robbed Bruce Wayne's parents? ",
        answer: "Joe Chill",
      },

      {
        array: ["Gambo", "Gambit", "Gabbrit", "Gambol"],
        question:
          "Q.3 What's The Name Of The Mobster That The Joker Killed In The Dark Knight? ",
        answer: "Gambol",
      },

      {
        array: ["Alfred Pennyworth", "Jim Gordon", "Lucius Fox", "Two Face"],
        question:
          "Q.4 In All Three Movies, Which Character Is The Last Person To Speak To Batman? ",
        answer: "Jim Gordon",
      },

      {
        array: ["Paris", "Venice", "Florence", "Milan"],
        question: `Q.5 Where did Bruce was Seen Last Time in "The Dark Khight Rises"?  `,
        answer: "Florence",
      },
    ];

    var play = (question, array, answer) => {
      var playerAnswer = readlineSync.keyInSelect(array, question);
      console.log("\n");
      if (array[playerAnswer] === answer) {
        console.log("Congrats!! You are Correct");
        scoreTwo = scoreTwo + 4;
      } else {
        console.log("Oops!! You are Wrong");
        console.log("The correct answer is : ", answer);
        scoreTwo = scoreTwo - 2;
      }
      console.log(`Current score is: ${scoreTwo + score} `);
      console.log("\n       ***********");
    };

    for (i = 0; i < levelThreeQues.length; i++) {
      currentQues = levelThreeQues[i];
      play(currentQues.question, currentQues.array, currentQues.answer);
    }

    console.log("\nYour final score is: " + scoreTwo + score);

    if (scoreTwo + score === 50) {
      console.log(
        "\nWow!! You have answered all correct\nYou are a true Batman fan"
      );
    }
  } else {
    console.log(
      "\nOh no!! You havn't answered all questions correct\nSorry! you can't get into level 3"
    );
  }
} else {
  console.log(
    "\nOh no!! You havn't answered 6 questions correct\nSorry! you can't get into level 2"
  );
}

for (let i = 0; i < leaderBoard.length; i++) {
  if (leaderBoard[i].score < scoreTwo + score) {
    console.log(`\nCongrats! ${playerName} you have broken records`);
    break;
  }
}

console.log(
  `\n${"=>>"} Please sent a screenshort of your score, so that I can update the LeaderBoard.`
);

console.log(`\n\nThanks for playing ${playerName} Hope you enjoyed!!!`);
