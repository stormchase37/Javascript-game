// Chris Wasmund 11/11/2015
"use strict";
document.getElementsByTagName("header")[0].innerHTML = "Chris' Javascript Game";

var name = prompt("What is your name?");
window.alert(name + ",Let's play the Javascript game!");

function add1() {
var n1 = document.getElementById("number1").value;
var n2 = document.getElementById("number2").value;
n1 = parseInt(n1);
n2 = parseInt(n2);
var result = n1 + n2;
document.getElementById("answer1").innerHTML = name + " the answer is " + result;
}

document.getElementById("button1").addEventListener("click", add1, false);

function subtract() {
var n3 = document.getElementById("number3").value;
var n4 = document.getElementById("number4").value;
n3 = parseInt(n3);
n4 = parseInt(n4);
var result2 = n3 - n4;

document.getElementById("answer2").innerHTML = name + " the answer is " + result2;
}

document.getElementById("button2").addEventListener("click", subtract, false);

function multiply() {
var n5 = document.getElementById("number5").value;
var n6 = document.getElementById("number6").value;
n5 = parseInt(n5);
n6 = parseInt(n6);
var result3 = n5 * n6;
document.getElementById("answer3").innerHTML = name + " the answer is " + result3;
}

document.getElementById("button3").addEventListener("click", multiply, false);

//Division for input of numbers
function divide() {
var n7 = document.getElementById("number7").value;
var n8 = document.getElementById("number8").value;
n7 = parseInt(n7);
n8 = parseInt(n8);
var result4 = n7 / n8;
document.getElementById("answer4").innerHTML = name + " the answer is " + result4;
}

document.getElementById("button4").addEventListener("click", divide, false);

//Is 50 greater than 100
function check() {
if (document.getElementById("radio1").checked)
{
	document.getElementById("answer").innerHTML = "Sorry, please try again.";
	document.bgColor = "red";
}
else {
	document.getElementById("answer").innerHTML = "You are correct!";
	document.bgColor = "green"; 
	}
}
document.getElementById("radio1").addEventListener("click", check, false);
document.getElementById("radio2").addEventListener("click", check, false);

//Chris is interested
function interested() {
	if (document.getElementById("radio3").checked)
	{
		document.getElementById("tut1").innerHTML = "Chris is interested in Ancient Egypt";
		document.getElementById("tut").src = "tutcoffin9.jpg";
	}
else {
		document.getElementById("tut1").innerHTML = "Please try again.";
		document.getElementById("tut").src = "";
	 }
}
document.getElementById("radio3").addEventListener("click", interested, false);
document.getElementById("radio4").addEventListener("click", interested, false);

//Javascript reserved words
function reserved() {
var reserved = ["abstract", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete"];
	document.getElementById("reserved1").innerHTML = "This is a reserved Javascript word."
}
document.getElementById("button5").addEventListener("click", reserved, false);

//Guess the number
function number() {
	
	var i = 0;
	var n9 = document.getElementById("magic").value;
	n9 = parseInt(n9);
	while (i < 10) {
    i++;
	} 
if (n9 == 6) {

 document.getElementById("magic1").innerHTML = "You entered the magic number."
}
else {
document.getElementById("magic1").innerHTML = "Your number is not the magic number."
	}
	if (n9 > 10) {
		document.getElementById("magic1").innerHTML = "Enter a number between 1 and 10."
	}
}
document.getElementById("button6").addEventListener("click", number, false);