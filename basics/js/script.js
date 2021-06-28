// ex 1 | Temperature v1.0
const GetTemperature = (min = -5, max = 25) => Math.round(min + Math.random()*(max-min));

// var cur_temp = GetTemperature(); // Current Temperature

// document.getElementById("temperature").innerHTML = cur_temp + "C<br>";

// if (cur_temp >= (-5) && cur_temp <= 10) document.getElementById("temperature").innerHTML +=  "The weather is cold";
// else document.getElementById("temperature").innerHTML +=  "The weather is moderate";



// ex 2 | Highest value in an array
// var array = [1, 7, -3, 9];

// var lo = -1e20;
// for (val of array) {
//     lo = Math.max(lo, val);
// }

// console.log(lo);



// ex 3 | Temperature v2.0
var cur_temp = GetTemperature(-5,40); // Current Temperature
document.getElementById("temperature").innerHTML = cur_temp + "C<br>";
// document.getElementById("temperature").innerHTML = "";
if (cur_temp >= (-5) && cur_temp <= 10) document.getElementById("temperature").innerHTML +=  "The weather is cold";
else if (cur_temp >= 11 && cur_temp <= 15) document.getElementById("temperature").innerHTML +=  "The weather is chilly";
else if (cur_temp >= 26 && cur_temp <= 31) document.getElementById("temperature").innerHTML +=  "The weather is warm";
else if (cur_temp > 32 && cur_temp < 38) document.getElementById("temperature").innerHTML +=  "The weather is hot";
else if (cur_temp > 38) document.getElementById("temperature").innerHTML +=  "The weather is <strong> very hot</stong>";
else document.getElementById("temperature").innerHTML +=  "The weather is moderate"; // anything between 16-25C