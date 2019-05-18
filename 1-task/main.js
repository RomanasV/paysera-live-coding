const resultsCollection = [
  "10:1",
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
    console.log(3 + " points.");
    totalPoints += 3;
  } else if (ourTeam < opponentTeam) {
    console.log(0 + " points.");
    totalPoints += 0;
  } else if (ourTeam === opponentTeam) {
    console.log(1 + " points.");
    totalPoints += 1;
  } else {
    console.log("Something went wrong");
  }
});

console.log("Total points: " + totalPoints);
