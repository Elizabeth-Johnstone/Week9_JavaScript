function showStuff(el) {
var elementID = document.getElementById(el);
	for (i=0; i<elementID.length; i++) {
	if (elementID[i].selected=== true) {
		var x = elementID[i].text;
	}
	}
	return x;
}

function showMore(el) {
	var elementID = document.getElementsByName(el);
	//console.log(elementID.length);
	var myCheck = "";
	for (i = 0; i < elementID.length; i++) {
			if (elementID[i].checked === true) {
				myCheck += elementID[i].value + '<br>';
			}
	}
return myCheck;
}

function evaluatePage() {
	var feedbackState = showStuff("state");
	var feedbackHome = showStuff("home");
	var feedbackLight = showMore('bulb');
	document.getElementById("output").innerHTML = feedbackState +'<br>' +feedbackHome +'<br>'+ feedbackLight;	
}

