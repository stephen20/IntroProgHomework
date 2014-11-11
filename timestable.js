var readNumbers = function(){
	var inputBox, inputStr, inputInt;
  	inputBox = document.getElementById("num");
  	inputStr = inputBox.value;
  	inputInt = parseInt(inputStr);
  	return inputInt;
}
var compute = function(n){
        var products = [];
        for(var count = 0;count < 11; count++){
                products.push(count * n);
        }
        return products;
}
var objectArray = function (n, array){
	var newArray = [];
	for(var count = 0; count < array.length ; count++){
		var multProblem = {Problem: "" ,Answer: 0};
		multProblem.Problem = "" + n + " x " + count;
		multProblem.Answer = array[count];
		//console.log(multProblem);
		newArray.push(multProblem);
	 }
	 return newArray;
}
function buildTable(data) {
    var table = document.createElement("table");

    var fields = Object.keys(data[0]);
    var headRow = document.createElement("tr");
    fields.forEach(function(field) {
      var headCell = document.createElement("th");
      headCell.textContent = field;
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
      var row = document.createElement("tr");
      fields.forEach(function(field) {
        var cell = document.createElement("td");
        cell.textContent = object[field];
        if (typeof object[field] == "number")
          cell.style.textAlign = "right";
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }




var run = function() {
 	var num = readNumbers();
 	var timesTable = compute(num);
 	var newArray = objectArray(num, timesTable);
	document.body.appendChild(buildTable(newArray));
}
var button = document.getElementById("runner");
button.onclick = run;

