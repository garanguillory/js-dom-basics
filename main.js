console.log("sanity check");
var firstParagraph = document.getElementById('main');
firstParagraph.innerText = 'Tiger Shark';
console.log(firstParagraph);



var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements)

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement)

var allListItems = document.getElementsByTagName('li');

console.log(allListItems);

var looper = function(collection){
		for(var i=0;i<collection.length;i++){
				console.log(collection[i]);
		}
};

looper(allListItems);

var evenElements = document.getElementsByClassName('even');
console.log(evenElements)

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements)

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement)

var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement)


var main = document.querySelector('#main');
console.log(main);


var main = document.querySelector('#main');
console.log(main);


var firstOddElement = document.querySelector('.odd');
console.log(firstOddElement);

var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);





































