var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5; // shouldnt use a definitive counter when you can use 'bands.length' or 'vegetables.length' or like a million other counters

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");


var theBands = "<h2>Boy Bands</h2><ul>"; // string to concat all bands
var vegs = "<h2>Vegetables</h2><ul>"; // string to concat all the veggies

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  theBands += "<li>"; //opens new list element for both 
  vegs += "<li>"; 

  // Add the band names into the correct <div>
  currentBand = bands[loopTracker];
  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];
 
  theBands += currentBand; // adds current index value into strings
  vegs += currentVeggie;
  
  theBands += "</li>"; //closes the list element
  vegs += "</li>";

}
theBands += "</ul>"; //closes the list
vegs += "</ul>";

bandElement.innerHTML = theBands; // assigns the lists the the html of the divs
veggieElement.innerHTML = vegs;