function withdrawalHistoryData() {
  var withdrawalHistory = [
    {
      withdraw_at: "2020-1-07 12:03pm",
      amount: "45000",
      paid: "20000",
      details: "Pending",
    },
    {
      withdraw_at: "2020-02-07 8:00am",
      amount: "10000",
      paid: "5000",
      details: "Completed",
    },
    {
      withdraw_at: "2020-02-07 3:10pm",
      amount: "2020-02-07",
      paid: "40000",
      details: "Pending",
    },
  ];

  var withdrawalTable = document.querySelector("#withdrawalTable");
  var noOfWithdrawal = withdrawalHistory.length;

  if (noOfWithdrawal > 0) {
    var col = []; // define an empty array
    for (var i = 0; i < noOfWithdrawal; i++) {
      for (var key in withdrawalHistory[i]) {
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
    withdrawalTable.appendChild(tHead);
    // CREATE TABLE BODY .
    var tBody = document.createElement("tbody");
    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    for (var i = 0; i < noOfWithdrawal; i++) {
      var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
      var td = document.createElement("td");

      for (var j = 0; j < col.length; j++) {
        var td = document.createElement("td");
        if (j == 3) {
          td.innerHTML =
            '<div style="font-size:large;"  class="badge ">' +
            withdrawalHistory[i][col[j]] +
            "</div>";
          if (td.textContent === "Completed") {
            td.innerHTML =
              '<div style="font-size:large;"  class="badge badge-success">' +
              withdrawalHistory[i][col[j]] +
              "</div>";
          } else {
            td.innerHTML =
              '<div style="font-size:large;"  class="badge badge-warning">' +
              withdrawalHistory[i][col[j]] +
              "</div>";
          }
          bRow.appendChild(td);
        } else {
          td.innerHTML = withdrawalHistory[i][col[j]];
          bRow.appendChild(td);
        }
      }
      tBody.appendChild(bRow);
    }
    withdrawalTable.appendChild(tBody);
  }
}
