var readlineSync = require("readline-sync");
const chalk = require("chalk");

var playerName = readlineSync.question(
  chalk.yellowBright("🙏  Nameste! Give me your name Please! 🙏\n=> ")
);
console.log(
  chalk.bold.underline.cyanBright(
    `\n👋  Welcome! to ${chalk.yellow(
      `"The Dark Knight Trilogy Quiz"`
    )} Game ${chalk.bold.yellowBright(playerName)}`
  )
);

console.log(
  chalk.magentaBright(
    `\n${chalk.bold.underline("Rules:-")}\n\n${chalk.bold(
      "The Game is divided into 3 levels"
    )}\n\n${chalk.bold.underline(
      "Level 1 :-"
    )}\n1. Total number of questions => 10\n2. Each correct answer => 2 points\n3. No negative marking for incorrect answers\n${chalk.bold(
      "=> You have to give atleast 6 correct answers to go to level 2"
    )}`
  )
);

if (
  readlineSync.keyInYN(
    chalk.bgCyan.black.bold(`\nLets Play! Level 1  ${playerName} `)
  )
) {
} else {
  console.log(chalk.red.bold("\n😔 😔  Oh no!! You exit from the Game"));
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

console.log(chalk.yellow.bold("\nPlease! select correct option between 1 - 4"));

var levelOneQues = [
  {
    array: ["...immortal", "...the villain", "...corrupted", "...the bad guy"],
    question: chalk.yellowBright.bold(
      `Q.1 Complete the quote: "You either die a hero or you live long enough to see yourself become ......."`
    ),
    answer: "...the villain",
  },

  {
    array: ["China", "Taiwan", "Hong kong", "Japan"],
    question: chalk.yellowBright.bold("Q.2 Where does Batman find Lau? "),
    answer: "Hong kong",
  },

  {
    array: ["Tumbler", "Roller", "Toppler", "Dumpler"],
    question: chalk.yellowBright.bold(
      `Q.3 What is "The Dark Knight trilogy's" Batmobile called? `
    ),
    answer: "Tumbler",
  },

  {
    array: [
      "Suicide Squad",
      "The Assassination League",
      "Justice League Dark",
      "League of Shadows",
    ],
    question: chalk.yellowBright.bold(
      "Q.4 Which group does Bruce train with in Bhutan? "
    ),
    answer: "League of Shadows",
  },

  {
    array: ["Amy Beddos", "Barbara Gordon", "Talia Al Ghul", "Selina Kyle"],
    question: chalk.yellowBright.bold("Q.5 What is Miranda Tate's real name? "),
    answer: "Talia Al Ghul",
  },

  {
    array: ["Doctor", "Nurse", "Receptionist", "Patient"],
    question: chalk.yellowBright.bold(
      "Q.6 What is the Joker's disguise when he demolishes the hospital? "
    ),
    answer: "Nurse",
  },

  {
    array: ["burn", "end", "perish", "die"],
    question: chalk.yellowBright.bold(
      `Q.7 Complete the quote: "Some men just want to watch the world..." `
    ),
    answer: "burn",
  },

  {
    array: ["a play", "a dance concert", "an opera", "a standup comic"],
    question: chalk.yellowBright.bold(
      "Q.8 What is Bruce watching with his parents before they are mugged?"
    ),
    answer: "an opera",
  },

  {
    array: ["Uzbekistan", "Tajakistan", "Iran", "Afganistan"],
    question: chalk.yellowBright.bold(
      "Q.9 What Country Did Bane Abduct Dr. Leonid Pavel From? "
    ),
    answer: "Uzbekistan",
  },

  {
    array: ["pen", "knife", "Handkerchief", "Pencil"],
    question: chalk.yellowBright.bold(
      "Q.10 What object does the Joker make 'disappear' as a magic trick? "
    ),
    answer: "Pencil",
  },
];

var play = (question, array, answer) => {
  var playerAnswer = readlineSync.keyInSelect(array, question);
  console.log("\n");
  if (array[playerAnswer] === answer) {
    console.log(chalk.green.bold("Congrats!! You are Correct 👍 👍"));
    score = score + 2;
  } else {
    console.log(chalk.red.bold("Oops!! You are Wrong 👎 👎"));
    console.log(chalk.green("The correct answer is : ", answer));
  }
  console.log(
    chalk.bgMagentaBright.black.bold(
      `Current score is: ${chalk.red.bold(score)} `
    )
  );
  console.log("\n       ************");
};

for (i = 0; i < levelOneQues.length; i++) {
  currentQues = levelOneQues[i];
  play(currentQues.question, currentQues.array, currentQues.answer);
}

console.log(
  chalk.cyanBright.bold("\nYour final score is: " + chalk.red.bold(score))
);

if (score === 20) {
  console.log(
    chalk.yellowBright(
      "\n🤩 🤩  Wow!! You have answered all correct 🎉 🎉\n🤗  You are a true Batman fan 🤗"
    )
  );
  console.log(
    chalk.bold.cyan("\n\n🎉  Congrats!! You are qualified for Level 2 🎉")
  );
} else if (score >= 12) {
  console.log(
    chalk.bold.cyan("\n\n🎉  Congrats!! You are qualified for Level 2 🎉")
  );
}

var scoreTwo = 0;

if (score >= 12) {
  console.log(
    chalk.magentaBright(
      `\n\n${chalk.bold.underline(
        "Level 2 :-"
      )}\n1. Total number of questions => 5\n2. Each correct answer => 2 points\n3. Negative marking for incorrect answers => -1\n${chalk.bold(
        "=> You have to give all correct answers to go to level 3"
      )}`
    )
  );

  if (
    readlineSync.keyInYN(
      chalk.bgCyan.black.bold(`\nLets Play! Level 2  ${playerName} `)
    )
  ) {
  } else {
    console.log(chalk.red.bold("\n😔 😔  Oh no!! The Game Ended"));

    for (let i = 0; i < leaderBoard.length; i++) {
      if (leaderBoard[i].score < score) {
        console.log(
          chalk.cyan.bold(
            `\n🎉  Congrats! ${chalk.red.bold(
              playerName
            )} you have broken records 🎉`
          )
        );
        break;
      }
    }

    console.log(
      chalk.magentaBright(
        `\n${chalk.red.bold(
          "=>>"
        )} Please sent a screenshort of your score, so that I can update the LeaderBoard.`
      )
    );

    console.log(
      chalk.yellow.bold(
        `\n\n🙏 🙏  Thanks for playing ${chalk.red.bold(
          playerName
        )} 😊  Hope you enjoyed!!!`
      )
    );

    process.exit();
  }

  var levelTwoQues = [
    {
      array: ["both 7", "8 and 9", "both 8", "7 and 9"],
      question: chalk.yellowBright.bold(
        "Q.1 How Old Were Rachel Dawes And Bruce Wayne When Bruce Fell In The Well? "
      ),
      answer: "both 8",
    },

    {
      array: ["Museum", "Orphanage home", "Art Gallery", "Opera Hall"],
      question: chalk.yellowBright.bold(
        "Q.2 What was the wayne mansion taken use for at the end? "
      ),
      answer: "Orphanage home",
    },

    {
      array: ["Bucky", "Bonny", "Bane", "Robin"],
      question: chalk.yellowBright.bold("Q.3 What is John Blake's real name? "),
      answer: "Robin",
    },

    {
      array: ["Ras Al Ghul", "Scarecrow", "Falcone", "Two Face"],
      question: chalk.yellowBright.bold(
        "Q.4 Which Villain Has Appeared In Each Film? "
      ),
      answer: "Scarecrow",
    },

    {
      array: [
        "Gotham Rogues",
        "Gotham Riders",
        "Gotham League",
        "Gotham Knights",
      ],
      question: chalk.yellowBright.bold(
        "Q.5 What is the name of Gotham’s football team? "
      ),
      answer: "Gotham Rogues",
    },
  ];

  var play = (question, array, answer) => {
    var playerAnswer = readlineSync.keyInSelect(array, question);
    console.log("\n");
    if (array[playerAnswer] === answer) {
      console.log(chalk.green.bold("Congrats!! You are Correct 👍 👍"));
      scoreTwo = scoreTwo + 2;
    } else {
      console.log(chalk.red.bold("Oops!! You are Wrong 👎 👎"));
      console.log(chalk.green("The correct answer is : ", answer));
      scoreTwo = scoreTwo - 1;
    }
    console.log(
      chalk.bgMagentaBright.black.bold(
        `Current score is: ${chalk.red.bold(scoreTwo + score)} `
      )
    );
    console.log("\n       ***********");
  };

  for (i = 0; i < levelTwoQues.length; i++) {
    currentQues = levelTwoQues[i];
    play(currentQues.question, currentQues.array, currentQues.answer);
  }

  console.log(
    chalk.cyanBright.bold(
      "\nYour final score is: " + chalk.red.bold(scoreTwo + score)
    )
  );

  if (scoreTwo + score === 30) {
    console.log(
      chalk.yellowBright(
        "\n🤩 🤩  Wow!! You have answered all correct 🎉 🎉\n🤗  You are a true Batman fan 🤗"
      )
    );
    console.log(
      chalk.bold.cyan("\n\n🎉  Congrats!! You are qualified for Level 3 🎉")
    );
  } else if (scoreTwo === 10) {
    console.log(
      chalk.bold.cyan("\n\n🎉  Congrats!! You are qualified for Level 3 🎉")
    );
  }

  if (scoreTwo === 10) {
    console.log(
      chalk.magentaBright(
        `\n\n${chalk.bold.underline(
          "Level 3 :-"
        )}\n1. Total number of questions => 5\n2. Each correct answer => 4 points\n3. Negative marking for incorrect answers => -2`
      )
    );

    if (
      readlineSync.keyInYN(
        chalk.bgCyan.black.bold(`\nLets Play! Level 3  ${playerName} `)
      )
    ) {
    } else {
      console.log(chalk.red.bold("\n😔 😔  Oh no!! The Game Ended"));

      for (let i = 0; i < leaderBoard.length; i++) {
        if (leaderBoard[i].score < scoreTwo + score) {
          console.log(
            chalk.cyan.bold(
              `\n🎉  Congrats! ${chalk.red.bold(
                playerName
              )} you have broken records 🎉`
            )
          );
          break;
        }
      }

      console.log(
        chalk.magentaBright(
          `\n${chalk.red.bold(
            "=>>"
          )} Please sent a screenshort of your score, so that I can update the LeaderBoard.`
        )
      );

      console.log(
        chalk.yellow.bold(
          `\n\n🙏 🙏  Thanks for playing ${chalk.red.bold(
            playerName
          )} 😊  Hope you enjoyed!!!`
        )
      );

      process.exit();
    }

    var levelThreeQues = [
      {
        array: ["Parsi", "Moroccan Arabic", "Urdu", "Frictional Language"],
        question: chalk.yellowBright.bold(
          "Q.1 What is the language of the prison inmates in the pit? "
        ),
        answer: "Moroccan Arabic",
      },

      {
        array: ["Joe Chill", "Damon Caro", "Carmine Falcone", "Jack Napier"],
        question: chalk.yellowBright.bold(
          "Q.2 Who robbed Bruce Wayne's parents? "
        ),
        answer: "Joe Chill",
      },

      {
        array: ["Gambo", "Gambit", "Gabbrit", "Gambol"],
        question: chalk.yellowBright.bold(
          "Q.3 What's The Name Of The Mobster That The Joker Killed In The Dark Knight? "
        ),
        answer: "Gambol",
      },

      {
        array: ["Alfred Pennyworth", "Jim Gordon", "Lucius Fox", "Two Face"],
        question: chalk.yellowBright.bold(
          "Q.4 In All Three Movies, Which Character Is The Last Person To Speak To Batman? "
        ),
        answer: "Jim Gordon",
      },

      {
        array: ["Paris", "Venice", "Florence", "Milan"],
        question: chalk.yellowBright.bold(
          `Q.5 Where did Bruce was Seen Last Time in "The Dark Khight Rises"?  `
        ),
        answer: "Florence",
      },
    ];

    var play = (question, array, answer) => {
      var playerAnswer = readlineSync.keyInSelect(array, question);
      console.log("\n");
      if (array[playerAnswer] === answer) {
        console.log(chalk.green.bold("Congrats!! You are Correct 👍 👍"));
        scoreTwo = scoreTwo + 4;
      } else {
        console.log(chalk.red.bold("Oops!! You are Wrong 👎 👎"));
        console.log(chalk.green("The correct answer is : ", answer));
        scoreTwo = scoreTwo - 2;
      }
      console.log(
        chalk.bgMagentaBright.black.bold(
          `Current score is: ${chalk.red.bold(scoreTwo + score)} `
        )
      );
      console.log("\n       ***********");
    };

    for (i = 0; i < levelThreeQues.length; i++) {
      currentQues = levelThreeQues[i];
      play(currentQues.question, currentQues.array, currentQues.answer);
    }

    console.log(
      chalk.cyanBright.bold(
        "\nYour final score is: " + chalk.red.bold(scoreTwo + score)
      )
    );

    if (scoreTwo + score === 50) {
      console.log(
        chalk.yellowBright(
          "\n🤩 🤩  Wow!! You have answered all correct 🎉 🎉\n🤗  You are a true Batman fan 🤗"
        )
      );
    }
  } else {
    console.log(
      chalk.red.bold(
        "\n😔 😔  Oh no!! You havn't answered all questions correct\nSorry! you can't get into level 3 😔 😔"
      )
    );
  }
} else {
  console.log(
    chalk.red.bold(
      "\n😔 😔  Oh no!! You havn't answered 6 questions correct\nSorry! you can't get into level 2 😔 😔"
    )
  );
}

for (let i = 0; i < leaderBoard.length; i++) {
  if (leaderBoard[i].score < scoreTwo + score) {
    console.log(
      chalk.cyan.bold(
        `\n🎉  Congrats! ${chalk.red.bold(
          playerName
        )} you have broken records 🎉`
      )
    );
    break;
  }
}

console.log(
  chalk.magentaBright(
    `\n${chalk.red.bold(
      "=>>"
    )} Please sent a screenshort of your score, so that I can update the LeaderBoard.`
  )
);

console.log(
  chalk.yellow.bold(
    `\n\n🙏 🙏  Thanks for playing ${chalk.red.bold(
      playerName
    )} 😊  Hope you enjoyed!!!`
  )
);
