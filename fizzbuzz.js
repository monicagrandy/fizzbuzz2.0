/*for (var i = 0; i < 100; i++) { // initial value sets i to 0; stop when i reaches 100; incrememt i by 1 
	if (i % 15 == 0){
		console.log("FizzBuzz");
	}
	else if (i % 3 == 0) {
		console.log("Fizz");
	}
	else if (i % 5 == 0) {
		console.log("Buzz");
	}
	else {
		console.log(i);
	}
}
*/
// function fizzbuzz() {
// 	var userNum = parseInt(prompt("Please provide a whole number"));
// 	if(isNaN(userNum)) { //check to make sure the string can be converted to an integer
// 		alert("That is not a number");
// 	}
// 	else if(userNum % 1 != 0) {
// 		alert("No decimals please!");
// 	};
// 	fizzbuzz2(userNum);
// }

// //else run this code
// function fizzbuzz2(userNum){
// 	function check(n) {
// 		var msg = "";
// 		if(n % 3 == 0) {msg += "Fizz"};
// 		if(n % 5 == 0) {msg += "Buzz"};
// 		return msg || n;
// 	}
// 	var i = 1;
// 	while(i <= userNum) {
// 		console.log(check(i));
// 		i++;
// 	}
// }


// console.log(fizzbuzz2(userNum));




var userNum = document.getElementById("numInput").value,
	maxnum = +userNum;
	if(isNaN(maxnum)) { //check to make sure the string can be converted to an integer
	alert("That is not a number");
	}
	else if(maxnum % 1 != 0) {
		alert("No decimals please!");
	}
	
function fizzbuzz2(maxnum){
	
	function check(n) {
		var msg = "";
		if(n % 3 == 0) {msg += "Fizz"};
		if(n % 5 == 0) {msg += "Buzz"};
		return msg || n;
	}
	var i = 0;
	while(i <= maxnum) {
		console.log(check(i));
		i++;
	}
}

console.log(fizzbuzz2(maxnum));



