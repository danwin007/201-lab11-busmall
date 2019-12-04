'use strict';

console.log('proof of life');

// global variables
var picOne = document.getElementById('pic1');
var picTwo = document.getElementById('pic2');
var picThree = document.getElementById('pic3');
// var ulEl = document.getElementById('results-container');
var chartPop = document.getElementById('chart');

// images array for results holding
var picArray = [];

// image container array for voting
var picArrayContainers = [picOne, picTwo, picThree];

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
  // to count and catch clicked items
  for (var i = 0; i < picArray.length; i++) {
    if(vote === picArray[i].title) {
      picArray[i].clicked++;
    }
  }
  // make new images after click
  picSelect();

  // check for 25 clicks
  totalFire();

  // add to countTotal
  clickTotal--;
  console.log('votes remaining', clickTotal);
}

// NEW FN TO GEN IMAGES
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
  console.table(picArray);
}

// event listener
pictureContainer.addEventListener('click', handleClick);

// function to display votes after 25 clicks
function totalFire(){
  if (clickTotal === 0) {
    //activate chart display 
    pictureContainer.removeEventListener('click', handleClick);
    clickAndViewPush();
    makeChart();
    console.log('views', viewsArray);
    console.log('clicks', clicksArray);
    show(chartPop);
  }
}

// function to show/hide
function show(chartPop) {
  chartPop.style.display = 'block';
}

// function to make chart
function makeChart() {

  var ctx = document.getElementById('myChart').getContext('2d');
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
// add images to array on page load
createOnPageLoad();
// generate images initially, and per click
picSelect();
