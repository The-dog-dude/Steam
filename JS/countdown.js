//-----------------------------------#1-----------------------------------------------

// Set the date we're counting down to
var countDownDate = new Date("Jun 3, 2025 12:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("summervac").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("summervac").innerHTML = "EXPIRED";
  }
}, 1000);

//-----------------------------------#2-----------------------------------------------

// Set the date we're counting down to
var countDownDate2 = new Date("Jun 20, 2025 08:41:00").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {

  // Get today's date and time
  var now2 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now2;

  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("summer").innerHTML = days2 + "d " + hours2 + "h "
  + minutes2 + "m " + seconds2 + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x2);
    document.getElementById("summer").innerHTML = "EXPIRED";
  }
}, 1000);

//-----------------------------------#3-----------------------------------------------

// Set the date we're counting down to
var countDownDate3 = new Date("Oct 31, 2025 00:00:01").getTime();

// Update the count down every 1 second
var x3 = setInterval(function() {

  // Get today's date and time
  var now3 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance3 = countDownDate3 - now3;

  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("halloween").innerHTML = days3 + "d " + hours3 + "h "
  + minutes3 + "m " + seconds3 + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x3);
    document.getElementById("halloween").innerHTML = "EXPIRED";
  }
}, 1000);

//-----------------------------------#4-----------------------------------------------

// Set the date we're counting down to
var countDownDate4 = new Date("Dec 31, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x4 = setInterval(function() {

  // Get today's date and time
  var now4 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance4 = countDownDate4 - now4;

  // Time calculations for days, hours, minutes and seconds
  var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("newyears").innerHTML = days4 + "d " + hours4 + "h "
  + minutes4 + "m " + seconds4 + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x4);
    document.getElementById("newyears").innerHTML = "EXPIRED";
  }
}, 1000);

//-----------------------------------#5-----------------------------------------------

// Set the date we're counting down to
var countDownDate5 = new Date("Jul 14, 2028 07:30:00").getTime();

// Update the count down every 1 second
var x5 = setInterval(function() {

  // Get today's date and time
  var now5 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance5 = countDownDate5 - now5;

  // Time calculations for days, hours, minutes and seconds
  var days5 = Math.floor(distance5 / (1000 * 60 * 60 * 24));
  var hours5 = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes5 = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds5 = Math.floor((distance5 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("usa").innerHTML = days5 + "d " + hours5 + "h "
  + minutes5 + "m " + seconds5 + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x5);
    document.getElementById("usa").innerHTML = "EXPIRED";
  }
}, 1000);