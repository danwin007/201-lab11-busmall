'use strict';

console.log('proof of life');

// global variables
var picOne = document.getElementById('pic1');
var picTwo = document.getElementById('pic2');
var picThree = document.getElementById('pic3');

// images array
var picArray = [];

// picture container to pair with event listener
var pictureContainer = document.getElementById('image-container');

// constructor function for images
function Picture (src, name) {
  this.src = `../images/${src}.jpg`;
  this.title = name;
  this.alt = name;
  this.clicked = 0;
  this.viewed = 0;
  this.clickTotal = 0;
  picArray.push(this);
}

// random generator
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// function to hold images
function createOnPageLoad () {

  new Picture ('bag', 'bag');
  new Picture ('banana', 'banana');
  new Picture ('bathroom', 'bathroom');
  new Picture ('boots', 'boots');
  new Picture ('breakfast', 'breakfast');
  new Picture ('bubblegum', 'bubblegum');
  new Picture ('chair', 'chair');
  new Picture ('cthulhu', 'cthulhu');
  new Picture ('dog-duck', 'dog-duck');
  new Picture ('dragon', 'dragon');
  new Picture ('pen', 'pen');
  new Picture ('pet-sweep', 'pet-sweep');
  new Picture ('scissors', 'shark');
  new Picture ('shark', 'shark');
  new Picture ('sweep', 'sweep');
  new Picture ('tauntaun', 'tauntaun');
  new Picture ('unicorn', 'unicorn');
  new Picture ('usb', 'usb');
  new Picture ('water-can', 'water-can');
  new Picture ('wine-glass', 'wine-glass');
}

// event handler w dupe check
function handleClick(event) {
  // create var to hold click data to remember which was voted for
  var vote = event.target.title;
  // to count and catch clicked items
  for (var i = 0; i < picArray.length; i++) {
    if(vote === picArray[i].title) {
      picArray[i].clicked++;
    }
  }
  // make new images after click
  generateImages();
  // add to total click count, max 25
  Picture.clickTotal++;
}

// function to add images to page
function generateImages () {
  //picOne generate
  var index = randomIndex(picArray.length);
  picOne.src = picArray[index].src;
  picOne.title = picArray[index].title;
  picOne.alt = picArray[index].alt;

  // view counter for picOne
  picArray[index].viewed++;

  //picTwo generate
  var indexTwo = randomIndex(picArray.length);

  // catcher to check/fetch new image if dupe shows up
  while(indexTwo === index) {
    indexTwo = randomIndex(picArray.length);
  }

  picTwo.src = picArray[indexTwo].src;
  picTwo.title = picArray[indexTwo].title;
  picTwo.alt = picArray[indexTwo].alt;

  // view counter for picTwo
  picArray[indexTwo].viewed++;

  //picThree generate
  var indexThree = randomIndex(picArray.length);

  // catcher to check/fetch new image if dupe shows up
  while(indexThree === indexTwo || indexThree === index) {
    indexThree = randomIndex(picArray.length);
  }

  picThree.src = picArray[indexThree].src;
  picThree.title = picArray[indexThree].title;
  picThree.alt = picArray[indexThree].alt;

  picArray[indexThree].viewed++;

  console.table(picArray);
}

// event listener
pictureContainer.addEventListener('click', handleClick);

createOnPageLoad();
generateImages();


