var digit = 0;
var digit2 = 0;
var digit3 = 0;
var digit4 = 0;
var digit5 = 0;
var digit6 = 0;


function firstDigit(){
    digit = digit + 1;
       if (digit>9)
        { 
            digit = 0;
        }
       document.getElementById("d1").innerHTML = digit;
}

function secondDigit(){
    digit2 = digit2 + 1;
       if (digit2>9)
        { 
            digit2 = 0;
        }
       document.getElementById("d2").innerHTML = digit2;
}

function thirdDigit(){
    digit3 = digit3 + 1;
       if (digit3>9)
        { 
            digit3 = 0;
        }
       document.getElementById("d3").innerHTML = digit3;
}
function fourthDigit(){
    digit4 = digit4 + 1;
       if (digit4>9)
        { 
            digit4 = 0;
        }
       document.getElementById("d4").innerHTML = digit4;
}

function fifthDigit(){
    digit5 = digit5 + 1;
       if (digit5>9)
        { 
           digit5 = 0;
        }
       document.getElementById("d5").innerHTML = digit5;
}

function sixthDigit(){
    digit6 = digit6 + 1;
       if (digit6>9)
        { 
            digit6 = 0;
        }
       document.getElementById("d6").innerHTML = digit6;
}
/*
function numberToHTML(number) {
    
    var stgnumber=number.toString();

        
}   
*/
    
setInterval(firstDigit, 1000);
setInterval(secondDigit, 10000);
setInterval(thirdDigit, 100000);
setInterval(fourthDigit, 1000000);
setInterval (fifthDigit, 10000000);
setInterval(sixthDigit, 100000000);



