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

let tableRow = document.querySelector("tbody");
let transformedResults = transformResults();

init();

function init() {
  tableRow.innerHTML += formTableRows(transformedResults);
}

function transformResults() {
  let newArr = [];
  resultsCollection.map(result => {
    let matchResult = {};
    let ourScore = parseInt(result.split(":")[0]);
    let opponentScore = parseInt(result.split(":")[1]);
    let points = countPoints(ourScore, opponentScore);
    matchResult = { ourScore, opponentScore, points };
    newArr.push(matchResult);
  });
  return newArr;
}

function countPoints(ourTeam, opponentTeam) {
  if (ourTeam > opponentTeam) {
    return 3;
  } else if (ourTeam < opponentTeam) {
    return 0;
  } else if (ourTeam === opponentTeam) {
    return 1;
  } else {
    return console.log("Something went wrong");
  }
}

function formTableRows(results) {
  let rowHTMLStr = formTotalsRow(results);
  results.map((result, index) => {
    rowHTMLStr += `<tr>
      <th scope="row">${index + 1}</th>
      <td>${result.ourScore}</td>
      <td>${result.opponentScore}</td>
      <td>${result.points}</td>
    </tr>`;
  });
  return rowHTMLStr;
}

function formTotalsRow(results) {
  let totalsHTMLStr = "";
  let numsOfGames = 0;
  let totalScored = 0;
  let totalOpponentScored = 0;
  let totalPoints = 0;

  results.map(result => {
    numsOfGames++;
    totalScored += result.ourScore;
    totalOpponentScored += result.opponentScore;
    totalPoints += result.points;
  });

  totalsHTMLStr = `
    <tr class="table-primary totals">
      <th scope="col ">${numsOfGames}</th>
      <th scope="col">${totalScored}</th>
      <th scope="col">${totalOpponentScored}</th>
      <th scope="col">${totalPoints}</th>
    </tr><th scope="col">`;

  return totalsHTMLStr;
}
