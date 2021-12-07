var foundYou = document.getElementById('overview');
console.log(foundYou);
console.log(foundYou.innerText);
foundYou.innerText = "I changed you!";

var foundYou = document.getElementsByTagName('h1');
console.log(foundYou);
console.log(foundYou[2].innerText);
foundYou[2].innerText = ">>I Changed You<<";

var foundYou = document.getElementsByName('description');
console.log(foundYou);
console.log(foundYou[0].innerText);
foundYou[0].innerHTML = ">>I Changed You<<";

var foundYou = document.getElementsByClassName('smallCenter');
console.log(foundYou);
console.log(foundYou[0].innerText);
foundYou[0].innerHTML = ">>I Changed You<<";

var foundYou = document.querySelectorAll('li');
console.log(foundYou);
console.log(foundYou[7].innerText);
foundYou[7].innerHTML = ">>I Changed You<<";

var foundYou = document.querySelectorAll('ul#lp_list li');
console.log(foundYou);
console.log(foundYou[2].innerText);
foundYou[2].innerHTML = ">>I Changed You<<";

var foundYou = document.getElementById('sw_list');
console.log(foundYou);
var childArray = foundYou.getElementsByTagName('LI');
console.log(childArray);
childArray[0].innerText = '>>These Items';
childArray[1].innerText = '>> Have Just';
childArray[2].innerText = '>> Been Changed';

var newOptions = ['Orange', 'Red', 'Blue'];
var foundYou = document.getElementById('myForm');
console.log(foundYou);
var selectArray = foundYou.getElementsByTagName('option');
console.log(selectArray);
for (i=0; i<selectArray.length;i++) {
	selectArray[i].innerText= newOptions[i];
}

var foundYou = document.getElementById('myForm');
console.log(foundYou);
var selectArray = foundYou.getElementsByTagName('input');
console.log(selectArray.length);
for (i=0; i<selectArray.length;i++) {
	console.log(selectArray[i].value);
}