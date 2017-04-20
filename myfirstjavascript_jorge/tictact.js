var gameWinner = null;
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');

currentTurn = "X";

function startGame(){
  currentTurn = "X";
  document.getElementById('displayMessage').innerHTML = "It's X's turn.";
}

function myFunction(y){

  if(gameWinner == "X" || gameWinner == "O"){
    document.getElementById('displayMessage').innerHTML = gameWinner + " has won the game!";
    alert(gameWinner + " has already won."); return;
  }

  if (y.innerHTML == "X" || y.innerHTML == "O")
  {alert ("This field is already occupied."); return}


  y.innerHTML = currentTurn;

declareWinner();

  if(currentTurn=="X")
  {
    currentTurn = "O";
  }
  else
  {
    currentTurn = "X";
  }

 document.getElementById('displayMessage').innerHTML = "It's "+currentTurn+"'s turn.";
}

function declareWinner(){

  if    (((box1.innerHTML == "X") && (box2.innerHTML == "X") && (box3.innerHTML == "X")) ||
            ((box4.innerHTML == "X") && (box5.innerHTML == "X") && (box6.innerHTML == "X")) ||
            ((box7.innerHTML == "X") && (box8.innerHTML == "X") && (box9.innerHTML == "X")) ||
            ((box1.innerHTML == "X") && (box4.innerHTML == "X") && (box7.innerHTML == "X")) ||
            ((box2.innerHTML == "X") && (box5.innerHTML == "X") && (box8.innerHTML == "X")) ||
            ((box3.innerHTML == "X") && (box6.innerHTML == "X") && (box9.innerHTML == "X")) ||
            ((box1.innerHTML == "X") && (box5.innerHTML == "X") && (box9.innerHTML == "X")) ||
            ((box3.innerHTML == "X") && (box5.innerHTML == "X") && (box7.innerHTML == "X")))

           {gameWinner = "X";}

    if (((box1.innerHTML == "O") && (box2.innerHTML == "O") && (box3.innerHTML == "O")) ||
            ((box4.innerHTML == "O") && (box5.innerHTML == "O") && (box6.innerHTML == "O")) ||
            ((box7.innerHTML == "O") && (box8.innerHTML == "O") && (box9.innerHTML == "O")) ||
            ((box1.innerHTML == "O") && (box4.innerHTML == "O") && (box7.innerHTML == "O")) ||
            ((box2.innerHTML == "O") && (box5.innerHTML == "O") && (box8.innerHTML == "O")) ||
            ((box3.innerHTML == "O") && (box6.innerHTML == "O") && (box9.innerHTML == "O")) ||
            ((box1.innerHTML == "O") && (box5.innerHTML == "O") && (box9.innerHTML == "O")) ||
            ((box3.innerHTML == "O") && (box5.innerHTML == "O") && (box7.innerHTML == "O")))

           {gameWinner="O";}
          
  }  
    
    
    
  /* else {(((box1.innerHTML == "O" || box1.innerHTML == "X") && gameWinner== null && 
          (box2.innerHTML == "O" || box2.innerHTML == "X")
          (box3.innerHTML == "O" || box3.innerHTML == "X")
          (box4.innerHTML == "O" || box4.innerHTML == "X")
          (box5.innerHTML == "O" || box5.innerHTML == "X")
          (box6.innerHTML == "O" || box6.innerHTML == "X")
          (box7.innerHTML == "O" || box7.innerHTML == "X")
          (box8.innerHTML == "O" || box8.innerHTML == "X")
          (box9.innerHTML == "O" || box9.innerHTML == "X"))) */
  


function resetGame (){
  for(i=1; i<=9; i++)
    {
      document.getElementById("box" + i).innerHTML = "";
      gameWinner="";
      currentTurn="";
      document.getElementById('displayMessage').innerHTML = "It's X's turn.";
    }
}


  function loadAjax(){
    $.ajax({
      type: "GET",
      url: /*"/my/url",*/ "https://4geeksacademy.github.io/exercise-assets/json/weird_portfolio.json",
      success: function(resp) {
        alert(resp.posts[1].attachments[0].images.thumbnail.url);
      },
      error: function(pup) {
        alert("error!!!");
        console.log(pup);
      }
    });
  }    