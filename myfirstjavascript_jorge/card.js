var cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var cardSuit = ["clubs", "diamonds", "hearts", "spades"];

function generateCard(){

	var randomNumber = Math.floor((Math.random()*cardNumber.length-1)+1);
	var randomSuit =  Math.floor((Math.random()*cardSuit.length-1)+1);

	var numberDisplay = cardNumber[randomNumber];
	var suitDisplay = cardSuit[randomSuit];

	document.getElementById("letter1").innerHTML = numberDisplay;
	document.getElementById("letter2").innerHTML = numberDisplay;
	document.getElementById("suitimage").innerHTML = suitDisplay;
}

$(document).ready(function(){

  var myURL = "https://4geeksacademy.github.io/code-projects/javascript-begginer/random-card/data.json";
  
  	$.ajax({
    method: "GET",
    url: myURL,
    dataType: "json",
    success: mySuccessListener,
    error: myErrorListener
  });
  
});

function mySuccessListener(data)
{
  $("body").css("background", data.styles.background);
  $("#myButton").css("background", data.styles["button-background"]);
  $("#myButton").css("color", data.styles["button-text-color"]);

}

function myErrorListener(data)
{
  alert('error');
}
