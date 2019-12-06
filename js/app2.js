'use strict';

console.log('proof of life');

// global variables
var picOne = document.getElementById('pic1');
var picTwo = document.getElementById('pic2');
var picThree = document.getElementById('pic3');
// var ulEl = document.getElementById('results-container');
var chartPop = document.getElementById('chart');

// FULL images array for results holding
var picArray = [];

// image container array for voting
var picArrayContainers = [picOne, picTwo, picThree];

// arr to hold unique array of 6 images
var uniqueIndexes = [];

// total click counter
var clickTotal = 25;

// array to hold click, view, and name data for the chart
var clicksArray = [];
var viewsArray = [];
var titleArray = [];

// picture container to pair with event listener
var pictureContainer = document.getElementById('image-container');

// constructor function for images
function Picture (src, name) {
  this.src = `../images/${src}.jpg`;
  this.title = name;
  this.alt = name;
  this.clicked = 0;
  this.viewed = 0;
  picArray.push(this);
}

// random generator
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// function to create and hold images
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
  new Picture ('scissors', 'scissors');
  new Picture ('shark', 'shark');
  new Picture ('sweep', 'sweep');
  new Picture ('tauntaun', 'tauntaun');
  new Picture ('unicorn', 'unicorn');
  new Picture ('usb', 'usb');
  new Picture ('water-can', 'water-can');
  new Picture ('wine-glass', 'wine-glass');
  improvedPicSelect();
  dataGet();
}

// function to push click and view data into array
function clickAndViewPush () {
  for (var i = 0; i < picArray.length; i++) {
    clicksArray[i] = picArray[i].clicked;
    viewsArray[i] = picArray[i].viewed;
    titleArray[i] = picArray[i].title;
  }
}

// event handler w dupe check
function handleClick(event) {
  // create var to hold click data to remember which was voted for
  var vote = event.target.title;

  // subtract from countTotal
  clickTotal--;
  console.log('votes remaining', clickTotal);

  // to count and catch clicked items
  for (var i = 0; i < picArray.length; i++) {
    if(vote === picArray[i].title) {
      picArray[i].clicked++;
    }
  }

  // fn to call if clicks = 0
  // if, display chart, else, cycle images
  if (clickTotal === 0) {
    //remove listener
    pictureContainer.removeEventListener('click', handleClick);
    //push clicks/views into final array for chart
    clickAndViewPush();
    //build chart data
    makeChart();
    //show the chart
    show(chartPop);
    //store vote data
    dataStore();
  } else {
    removeThree();
    improvedPicSelect();
  }
}

// Get 6 FN, to create 2x sets of 3 unique images
function getUnique() {
  while (uniqueIndexes.length < 6) {
    var random = randomIndex(picArray.length);

    if (!uniqueIndexes.includes(random)) {
      uniqueIndexes.push(random);
    }
  }
}

// remove first 3 from 6 arr
function removeThree() {
  for (var i = 0; i < 3; i++) {
    // console.log('before shift', uniqueIndexes);
    uniqueIndexes.shift();
    // console.log('after shift', uniqueIndexes);
  }
}

// improved pic select fn aka generateImages()
function improvedPicSelect() {
  getUnique();

  //below forloop runs thru the arr of 3 imgs to display
  for (var i = 0; i <picArrayContainers.length; i++) {
    picArrayContainers[i].src = picArray[uniqueIndexes[i]].src;
    picArrayContainers[i].alt = picArray[uniqueIndexes[i]].alt;
    picArrayContainers[i].title = picArray[uniqueIndexes[i]].title;

    picArray[uniqueIndexes[i]].viewed++;
  }
}

// event listener
pictureContainer.addEventListener('click', handleClick);


// function to show/hide
function show(chartPop) {
  chartPop.style.display = 'block';
}

// function to make chart
function makeChart() {

  var ctx = document.getElementById('myChart').getContext('2d');
  // eslint-disable-next-line no-unused-vars
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
      datasets: [{
        label: 'Clicks',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: clicksArray
      },
      {
        label: 'Views',
        backgroundColor: 'rgb(25, 99, 132)',
        borderColor: 'rgb(25, 99, 132)',
        data: viewsArray
      }
      ]
    },

    // Configuration options go here
    options: {
      responsive: false,
    }
  });
}

// FN for localStorage to save vote data between page refreshes
function dataStore() {
  var voteString = JSON.stringify(picArray);
  localStorage.setItem('votes', voteString);
}

// FN to retrieve vote data from LS
function dataGet() {
  if (localStorage.getItem('votes')) {
    var getVotes = localStorage.getItem('votes');
    var parseVotes = JSON.parse(getVotes);
    picArray = parseVotes;
  }
}

// add images to array on page load & create initial images
createOnPageLoad();

