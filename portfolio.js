$( document ).ready(function(){

	var requestURL = "./portfolio.json";
	
	$.ajax({
	  method: "GET",
	  cache: false,
	  url: requestURL,
	  dataType: "json",
	  success: mySuccessListener,
	  error: myErrorListener
	});
	
});

function mySuccessListener(data){

//	for(var 1=0; i<data.length; i++)
	document.getElementById("p0").href = data[0].fileurl;
	document.getElementById("pic0").src = data[0].img;
	document.getElementById("p1").href = data[1].fileurl;
	document.getElementById("pic1").src = data[1].img;
	document.getElementById("p2").href = data[2].fileurl;
	document.getElementById("pic2").src = data[2].img;
	document.getElementById("p3").href = data[3].fileurl;
	document.getElementById("pic3").src = data[3].img;
	
	for(i=0; i<=data.length; i++){
		alert (data[i].title);
	}
	
}

function myErrorListener(data,errorString){
	alert(errorString);
}


var hashString = document.location.hash;
var myVariable = hashString.substr(hashString.indexOf("#")+1);

var hashObject= parseParms(myVariable);


function parseParms(str) {
     if(typeof(str)=='undefined' || str=='') return {};
     var pieces = str.split('&'), data = {}, i, parts;
     // process each query pair 
     for (i = 0; i < pieces.length; i++) {
     parts = pieces[i].split('=');
     if (parts.length < 2) {
     parts.push('');
    }
    data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }
    return data;
}

var number =hashObject.project;

