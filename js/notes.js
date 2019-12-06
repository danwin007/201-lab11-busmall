'use strict';

// ex of results calling function
function analysis() {
  var resultsSection = document.getElementById('list');
  var ulEl = document.createElement('ul');
  for(var i = 0; i < picArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${picArray[i].clicked} clicks and views`;
    ulEl.appendChild(liEl);

  } resultsSection.appendChild(ulEl);
}


// show hide
function show(elem) {
  elem.style.display = 'block';
}

function hide(elem) {
  elem.style.display = 'none';
}

// call hide function with elem param tied to your picture content block variable

// can change UL in css to 50% width with margin auto. that will help show results in a cleaner way

// reformat LI items to show # clicks, item name, views #. this makes it easier to read when they are all in a row like that

// cleaner way to gen images function
// make an array of image locations

var picArrayContainers = [photoOne, photoTwo, photoThree];

function picSelect() {
  var currentImages = [];
  for(var i = 0; i < picArrayContainers.length; i++) {
    var currentRandomIndex = randomIndex(picArray.length);
    while (currentImages.includes(currentRandomIndex)) {
      currentRandomIndex = randomIndex(picArray.length);
    }
    currentImages.push(currentRandomIndex);
    picArrayContainers[i].src = picArray[currentRandomIndex].src;
    picArrayContainers[i].title = picArray[currentRandomIndex].title;
    picArrayContainers[i].alt = picArray[currentRandomIndex].alt;
    picArray[currentRandomIndex].viewed++;
  }
}

// new thing today - chart.js

// fn to make chart
function makeChart() {

  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
      }]
    },

    // Configuration options go here
    options: {}
  });
}
// change gen list fn to make chart fn in OG js 
// need to get data into array so the makechart fn can access33

// 12/4 lecture notes

// erin made two helper functions
// made six unique indeces
// then made fn to remove first 3 of that 6
// then when she calls genImages, she populates 6 array
// runs while index is less than 6
// if clicks = 0, gen list, make chart, show/hide stuff
// if not = 0, refill 6 array, then remove 3
// uses shift function to remove first 3 off front of 6 array
// then backfill more randoms up to 6 array
// first thing that happens on click, calls getUnique fn
// that fn gets 6 unique w dupe check, operates while array less than 6
// populating fn pulls i from the 3 pic array
// populate from first 3, then diff fn to remove first 3
// then another fn to fill 3 more in, unique ones that aren't already in the array
// with a test to check that those new ones aren't already in the 6 array
// lots of diff fn to get this done

// chart stuff

//CLASS REVIEW on FRONTROW

// new arr
// xxx
var uniqueIndexes = [];

// GET 6 FN 
//xxx
// add this to the top of your GenImages fn
function getUnique () {
  while (uniqueIndexes.length < 6) {
    var random = randomIndex(picArray.length);

    if (!uniqueIndexes.includes(random)) {
      uniqueIndex.push(random);
    }
  }
}

// REMOVE FIRST 3 FROM ARR
//xxx
function removeThree() {
  for(var i = 0; i < 3; i++) {
    uniqueIndexes.shift();
  }
}

// fn to call if clicks === 0
// goes into handle click event fn
// at end
// xxxx
if (clickTotal === 0) {
  generateList();
  makeChart();
  show(chartContainer);
} else {
  removeThree();
  generateImages();
}

// gen images fn
//xxx
function generateImages() {
  getUnique();

  //below for loop runs through the arr of 3 imgs to display
  for (var i = 0; i < pics.length; i++) {
    pics[i].src = picArray[uniqueIndexes[i]].src;
    pics[i].alt = picArray[uniqueIndexes[i]].alt;
    pics[i].title = picArray[uniqueIndexes[i]].title;

    picArray[uniqueIndexes[i]].viewed++;
  }
}

