function investmentHistoryData() {
  var investmentHistory = [
    {
      invested_at: "2020-1-07 12:03pm",
      amount: "45000",
      paid: "20000",
      details: "View More",
    },
    {
      invested_at: "2020-02-07 8:00am",
      amount: "10000",
      paid: "5000",
      details: "View More",
    },
    {
      invested_at: "2020-02-07 3:10pm",
      amount: "2020-02-07",
      paid: "40000",
      details: "View More",
    },
  ];

  var investmentTable = document.querySelector("#investmentTable");
  var noOfInvestment = investmentHistory.length;

  if (noOfInvestment > 0) {
    var col = []; // define an empty array
    for (var i = 0; i < noOfInvestment; i++) {
      for (var key in investmentHistory[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }
    // CREATE TABLE HEAD .
    var tHead = document.querySelector("#tableHead");
    // CREATE ROW FOR TABLE HEAD .
    var hRow = document.querySelector("#tableRow");
    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    tHead.appendChild(hRow);
    investmentTable.appendChild(tHead);
    // CREATE TABLE BODY .
    var tBody = document.createElement("tbody");
    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    for (var i = 0; i < noOfInvestment; i++) {
      var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
      var td = document.createElement("td");

      for (var j = 0; j < col.length; j++) {
        var td = document.createElement("td");
        if (j == 3) {
          td.innerHTML =
            '<a href="investmentDetails.html"><div style="font-size:large;"  class="badge badge-success">' +
            investmentHistory[i][col[j]] +
            "</div></a>";

          bRow.appendChild(td);
        } else {
          td.innerHTML = investmentHistory[i][col[j]];
          bRow.appendChild(td);
        }
      }
      tBody.appendChild(bRow);
    }
    investmentTable.appendChild(tBody);
  }
}
