var cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//var cardSuit = ["clubs", "diamonds", "hearts", "spades"];

//cardSuit Images in order of suits stated in line 2
var cardSuit = 
            [
              "http://www.clipartkid.com/images/377/card-icon-club-recreation-games-card-icons-card-icon-club-png-html-ORVOXM-clipart.png", 
              "http://www.iconsdb.com/icons/preview/red/diamonds-xxl.png", 
              "https://pbs.twimg.com/profile_images/552948755167596544/ixKTZV0h.png", 
              "https://image.freepik.com/free-icon/spades-symbol_318-40683.jpg"
            ];


function generateCard(){

	var randomNumber = Math.floor((Math.random()*cardNumber.length-1)+1);
	var randomSuit =  Math.floor((Math.random()*cardSuit.length-1)+1);

	var numberDisplay = cardNumber[randomNumber];
	var suitDisplay = cardSuit[randomSuit];

	document.getElementById("letter1").innerHTML = numberDisplay;
	document.getElementById("letter2").innerHTML = numberDisplay;
	document.getElementById("suitpic").src = suitDisplay;
	
	if (randomSuit == 1 || randomSuit == 2){
	  document.getElementById("letter1").style.color = "red";
	  document.getElementById("letter2").style.color = "red";
	}
	else{
	  document.getElementById("letter1").style.color = "black";
	  document.getElementById("letter2").style.color = "black";
	}
}

/* JSON that instructor wanted us to get via AJAX call
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
*/