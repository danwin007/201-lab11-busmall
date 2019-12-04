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
