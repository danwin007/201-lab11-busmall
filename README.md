## Bus Mall Code Fellows 201 Project

## Main URL
https://danwin007.github.io/201-lab11-busmall/html/index.html

## Functionality
This project was one of our final lab assignments. It is intended to test our ability to utilize and manipulate arrays, constructor objects, and charts.

## Assignment Outline
We were tasked with creating a web app that is meant to simulate the catalogs you see in airplanes. The goal was to present the user with 3 random product images and let the user vote to pick which one they preferred. After 25 votes, a chart will display showing all the voting data over those 25 selections. The 3 images displayed should be both random and *different* from the previous 3 images. There should also be the ability for votes to persist beyond a single voting session via local storage of the voting data. 

## Key Interactions & Lessons Learned
- Getting the array of 3 product images to be different from the previous 3 selections was a daunting ask. In struggling to implement that seemingly simple functionality, I realized that there are some things you just don't know until somebody shows you. And that is totally okay! I also realized that having access to a broad coding vocabulary is essential. 
- Implementing the local storage functionality was relatively simple in regards to the number of lines of code used. However, it was a nice level-up moment because I was able to figure it out on the second try. For this feature, I focused on planning out what I wanted and how I wanted to implement before I wrote a single line of code. This made the actual coding process much less painful. I will keep this in mind the next time I start to blindly code a solution without first thinking about the full problem domain. 
- I struggled for quite a bit to make my chart appear. Only to realize that I had forgotten to call it as a function! Always remember to call your functions! They won't (usually) call themselves!

## A Word of Warning
Using the vote reset function will clear *all* of your browser's local storage data. Use this carefully!