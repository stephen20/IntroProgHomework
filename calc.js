var readNumbers = function(){
	var inputBox, inputStr, inputInt
  	inputBox = document.getElementById("num");
  	inputStr = inputBox.value;
  	inputInt = parseInt(inputStr);
  	return inputInt;
}


var triangular = function (n){
        var result = 0;
        var num = 1;
        for(i = 0; i < n; i++){
                result = result + num;
                num = num + 1;
        }
        return result;
}
var fibonacci = function(n){
        var result;
        var lastFib = 1;
        var lastLastFib = 0;
        if( n === 0){
                result = 0;
        }else if( n===1){
                result = 1;
        }else{
                while( n > 1){
                        result = lastFib + lastLastFib;
                        lastFib = result;
                        lastLastFib = result - lastLastFib;
                        n--;
                }
        }
        return result;
}

var runFib = function() {
 	var num = readNumbers();
 	if(num === 1)
	 		suf = 'st';
	 	else if(num === 2)
	 		suf = 'nd';
	 	else if(num === 3)
	 		suf = 'rd';
	 	else
 			suf = 'th';
 	var fibNum = fibonacci(num);
 	document.getElementById("result").innerHTML = "The " + num + suf + " Fibonacci number is " + fibNum + ".";
}
var runTri = function() {
 	var num = readNumbers();
 	var suf;
 	if(num === 1)
 		suf = 'st';
 	else if(num === 2)
 		suf = 'nd';
 	else if(num === 3)
 		suf = 'rd';
 	else
 		suf = 'th';
 	var triNum = triangular(num);
 	document.getElementById("result").innerHTML = "The " + num + suf + " Triangular number is " + triNum + ".";
}
var button = document.getElementById("fib");
button.onclick = runFib;
var button2 = document.getElementById("tri");
button2.onclick = runTri;
