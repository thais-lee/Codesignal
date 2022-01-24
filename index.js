const fs = require("fs/promises");
const fs2 = require("fs");

const makeSlug = (str, postfix, prefix) => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  postfix = postfix ? `-${postfix}` : "";
  prefix = prefix ? `${prefix}-` : "";

  return prefix + str + postfix;
};

const names = [
  "Add Two Digits",
  "Largest Number",
  "Candies",
  "Seats in Theater",
  "Max Multiple",
  "Circle of Numbers",
  "Late Ride",
  "Phone Call",
  "Reach Next Level",
  "Knapsack Light",
  "Extra Number",
  "Is Infinite Process?",
  "Arithmetic Expression",
  "Tennis Set",
  "Will You?",
  "Metro Card",
  "Kill K-th Bit",
  "Array Packing",
  "Range Bit Count",
  "Mirror Bits",
  "Second-Rightmost Zero Bit",
  "Swap Adjacent Bits",
  "Different Rightmost Bit",
  "Equal Pair of Bits",
  "Least Factorial",
  "Count Sum of Two Representations 2",
  "Magical Well",
  "Lineup",
  "Addition Without Carrying",
  "Apple Boxes",
  "Increase Number Roundness",
  "Rounders",
  "Candles",
  "Count Black Cells",
  "Create Array",
  "Array Replace",
  "First Reverse Try",
  "Concatenate Arrays",
  "Remove Array Part",
  "Is Smooth?",
  "Replace Middle",
  "Make Array Consecutive 2",
  "Is Power?",
  "Is Sum of Consecutive 2",
  "Square Digits Sequence",
  "Pages Numbering With Ink",
  "Comfortable Numbers",
  "Weak Numbers",
  "Rectangle Rotation",
  "Crossword Formation",
  "Enclose In Brackets",
  "Proper Noun Correction",
  "Is Tandem Repeat?",
  "Is Case-Insensitive Palindrome?",
  "Find Email Domain",
  "HTML End Tag By Start Tag",
  "Is MAC48 Address?",
  "Is Unstable Pair?",
  "Strings Construction",
  "Is Substitution Cipher?",
  "Create Anagram",
  "Construct Square",
  "Numbers Grouping",
  "Different Squares",
  "Most Frequent Digit Sum",
  "Number of Clans",
  "House Numbers Sum",
  "All Longest Strings",
  "House of Cats",
  "Alphabet Subsequence",
  "Minimal Number of Coins",
  "Add Border",
  "Switch Lights",
  "Timed Reading",
  "Elections Winners",
  "Integer to String of Fixed Width",
  "Are Similar?",
  "Ada Number",
  "Three Split",
  "Character Parity",
  "Reflect String",
  "New Numeral System",
  "Cipher 26",
  "Stolen Lunch",
  "Higher Version",
  "Decipher",
  "Alphanumeric Less",
  "Array Conversion",
  "Array Previous Less",
  "Pair of Shoes",
  "Combs",
  "Strings Crossover",
  "Cyclic String",
  "Beautiful Text",
  "Runners Meetings",
  "Christmas Tree",
  "File Naming",
  "Extract Matrix Column",
  "Are Isomorphic?",
  "Reverse On Diagonals",
  "Swap Diagonals",
  "Crossing Sum",
  "Draw Rectangle",
  "Volleyball Positions",
  "Star Rotation",
  "Sudoku",
  "Minesweeper",
  "Box Blur",
  "Contours Shifting",
  "Polygon Perimeter",
  "Gravitation",
  "Is Information Consistent?",
  "Correct Nonogram",
  "Shuffled Array",
  "Sort by Height",
  "Sort By Length",
  "Boxes Packing",
  "Maximum Sum",
  "Rows Rearranging",
  "Digit Difference Sort",
  "Unique Digit Products",
  "Bishop and Pawn",
  "Chess Knight Moves",
  "Bishop Diagonal",
  "Whose Turn?",
  "Chess Bishop Dream",
  "Chess Triangle",
  "Amazon Checkmate",
  "Pawn Race",
  "Valid Time",
  "Video Part",
  "Day of Week",
  "Curious Clock",
  "New Year Celebrations",
  "Regular Months",
  "Missed Classes",
  "Holiday",
  "Is Sentence Correct?",
  "Replace All Digits RegExp",
  "Swap Adjacent Words",
  "N-th Number",
  "Is Subsequence?",
  "Eye Rhyme",
  "Program Translation",
  "Repetition Encryption",
  "Bugs and Bugfixes",
  "LRC to SubRip",
  "HTML Table",
  "Chess Notation",
  "Cells Joining",
  "First Operation Character",
  "Count Elements",
  "Tree Bottom",
  "Befunge-93",
  "Pipes Game",
  "Game 2048",
  "Snake Game",
  "Tetris Game",
  "Pyraminx Puzzle",
  "Lines Game",
  "Fractal",
  "Time ASCII Representation",
];

const namesSQL = [
  "projectList",
  "countriesSelection",
  "monthlyScholarships",
  "projectsTeam",
  "automaticNotifications",
  "volleyballResults",
  "mostExpensive",
  "contestLeaderboard",
  "gradeDistribution",
  "mischievousNephews",
  "suspectsInvestigation",
  "suspectsInvestigation2",
  "securityBreach",
  "testCheck",
  "expressionsVerification",
  "newsSubscribers",
  "countriesInfo",
  "itemCounts",
  "usersByContinent",
  "movieDirectors",
  "travelDiary",
  "soccerPlayers",
  "marketReport",
  "websiteHacking",
  "nullIntern",
  "legsCount",
  "combinationLock",
  "interestClub",
  "personalHobbies",
  "booksCatalogs",
  "habitatArea",
  "orderOfSuccession",
  "orderingEmails",
  "placesOfInterest",
  "soccerGameSeries",
  "correctIPs",
  "validPhoneNumbers",
  "importantEvents",
  "dateFormatting",
  "pastEvents",
  "netIncome",
  "alarmClocks",
  "companyEmployees",
  "scholarshipsDistribution",
  "userCountries",
  "placesOfInterestPairs",
  "localCalendar",
  "routeLength",
  "currencyCodes",
  "coursesDistribution",
  "nicknames",
  "tableSecurity",
  "officeBranches",
  "restaurantInfo",
  "studentsInClubs",
  "emptyDepartments",
  "sunnyHolidays",
  "closestCells",
  "top5AverageGrade",
  "salaryDifference",
  "recentHires",
  "checkExpenditure",
  "dancingCompetition",
  "trackingSystem",
  "storageOptimization",
  "consecutiveIds",
  "holidayEvent",
  "hostnamesOrdering",
  "orderAnalytics",
  "customerMessages",
  "orderPrices",
  "findTable",
  "queriesExecution",
  "filmLibrary",
  "bugsInComponent",
  "freeSeats",
  "giftPackaging",
  "stringsStatistics",
  "unluckyEmployees",
  "driversInfo",
  "sortBookChapters",
  "typeInheritance",
  "battleshipGameResults",
  "tictactoeTournament",
];

async function main() {
  for (let i = 30; i <= 34; i++) {
    let dir = "./Arcade/TheCore/LoopTunnel/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 35; i <= 42; i++) {
    let dir = "./Arcade/TheCore/ListForestEdge/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 43; i <= 50; i++) {
    let dir = "./Arcade/TheCore/LabyrinthOfNestedLoops/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 51; i <= 58; i++) {
    let dir = "./Arcade/TheCore/BookMarket/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 59; i <= 66; i++) {
    let dir = "./Arcade/TheCore/MirrorLake/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 67; i <= 79; i++) {
    let dir = "./Arcade/TheCore/WellOfIntegration/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 80; i <= 87; i++) {
    let dir = "./Arcade/TheCore/LabOfTransformations/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 88; i <= 97; i++) {
    let dir = "./Arcade/TheCore/SpringOfIntegration/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 98; i <= 105; i++) {
    let dir = "./Arcade/TheCore/ListBackwoods/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 106; i <= 113; i++) {
    let dir = "./Arcade/TheCore/WaterfallOfIntegration/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 114; i <= 121; i++) {
    let dir = "./Arcade/TheCore/SortingOutpost/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 122; i <= 129; i++) {
    let dir = "./Arcade/TheCore/Chess Tavern/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 130; i <= 137; i++) {
    let dir = "./Arcade/TheCore/TimeRiver/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 138; i <= 146; i++) {
    let dir = "./Arcade/TheCore/RegularHell/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 147; i <= 154; i++) {
    let dir = "./Arcade/TheCore/SecretArchives/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  for (let i = 155; i <= 162; i++) {
    let dir = "./Arcade/TheCore/CliffsOfPain/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(names[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.cpp`, "");
    }
  }

  //sql
  for (let i = 1; i <= 5; i++) {
    let dir = "./Arcade/SQL/Welcome to the Table/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }
  for (let i = 6; i <= 10; i++) {
    let dir = "./Arcade/SQL/Always Leave Table in ORDER/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }
  for (let i = 11; i <= 16; i++) {
    let dir = "./Arcade/SQL/Would you LIKE the Second Meal/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }
  for (let i = 17; i <= 23; i++) {
    let dir = "./Arcade/SQL/GROUP Dishes BY Type/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }
  for (let i = 24; i <= 27; i++) {
    let dir = "./Arcade/SQL/Time for Tricks/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }
  for (let i = 28; i <= 31; i++) {
    let dir = "./Arcade/SQL/Specialties/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }
  for (let i = 32; i <= 35; i++) {
    let dir = "./Arcade/SQL/WHEN was it the CASE/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }
  for (let i = 36; i <= 37; i++) {
    let dir = "./Arcade/SQL/Regular Paradise/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }
  for (let i = 38; i <= 42; i++) {
    let dir = "./Arcade/SQL/Time River Revisited/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }for (let i = 43; i <= 48; i++) {
    let dir = "./Arcade/SQL/JOIN Us at the Table/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }for (let i = 49; i <= 54; i++) {
    let dir = "./Arcade/SQL/Table Metamorphoses/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }for (let i = 55; i <= 68; i++) {
    let dir = "./Arcade/SQL/Selecting What to SELECT/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }for (let i = 69; i <= 71; i++) {
    let dir = "./Arcade/SQL/Express your CREATivity/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }for (let i = 72; i <= 73; i++) {
    let dir = "./Arcade/SQL/Exotic Dishes/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }for (let i = 74; i <= 79; i++) {
    let dir = "./Arcade/SQL/Between JOIN and SELECT/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }for (let i = 80; i <= 84; i++) {
    let dir = "./Arcade/SQL/A Table of Desserts/";
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
    }
    dir += makeSlug(namesSQL[i - 1], "", i);
    if (!fs2.existsSync(dir)) {
      await fs.mkdir(dir);
      await fs.writeFile(`${dir}/solution.sql`, "");
    }
  }
}

main();
