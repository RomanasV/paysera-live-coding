const WIN_POINTS = 3;
const LOST_POINTS = 0;
const DRAW_POINTS = 1;
const resultsCollection = [
  "13:1",
  "2:2",
  "0:1",
  "3:3",
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

function countTotals(results) {
  let teamTotals = {
    numsOfGames: 0,
    scored: 0,
    opponentScored: 0,
    points: 0
  };

  results.map(result => {
    teamTotals.numsOfGames++;
    teamTotals.scored += result.ourScore;
    teamTotals.opponentScored += result.opponentScore;
    teamTotals.points += result.points;
  });

  return teamTotals;
}

function formTableRows(results) {
  let rowHTMLStr = formTotalsRow(results);

  results.map((result, index) => {
    let tablesClass = changeTableClass(result);
    rowHTMLStr += `<tr class="${tablesClass}">
      <th scope="row">${index + 1}</th>
      <td>${result.ourScore}</td>
      <td>${result.opponentScore}</td>
      <td>${result.points}</td>
    </tr>`;
  });
  return rowHTMLStr;
}

function formTotalsRow(results) {
  let totals = countTotals(results);
  let totalsHTMLStr = `
    <tr class="table-primary totals">
      <th scope="col ">${totals.numsOfGames}</th>
      <th scope="col">${totals.scored}</th>
      <th scope="col">${totals.opponentScored}</th>
      <th scope="col">${totals.points}</th>
    </tr>`;

  return totalsHTMLStr;
}

function changeTableClass(result) {
  let tableClass = "table-";
  switch (result.points) {
    case 3:
      tableClass += "success";
      break;
    case 1:
      tableClass += "warning";
      break;
    default:
      tableClass += "danger";
      break;
  }

  return tableClass;
}
