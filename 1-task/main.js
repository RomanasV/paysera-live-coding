const WIN_POINTS = 3;
const LOST_POINTS = 0;
const DRAW_POINTS = 1;

const resultsCollection = [
  "13:1",
  "2:2",
  "0:1",
  "3:1",
  "2:2",
  "0:1",
  "3:1",
  "2:2",
  "0:1",
  "5:6"
];

let totalPoints = 0;

resultsCollection.map(result => {
  const strToArr = result.split(":");
  const ourTeam = parseInt(strToArr[0]);
  const opponentTeam = parseInt(strToArr[1]);

  if (ourTeam > opponentTeam) {
    console.log(WIN_POINTS + " points.");
    totalPoints += WIN_POINTS;
  } else if (ourTeam < opponentTeam) {
    console.log(LOST_POINTS + " points.");
    totalPoints += LOST_POINTS;
  } else if (ourTeam === opponentTeam) {
    console.log(DRAW_POINTS + " points.");
    totalPoints += DRAW_POINTS;
  } else {
    console.log("Something went wrong");
  }
});

countPoints = () => {};

console.log("Total points: " + totalPoints);
