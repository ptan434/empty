var i = 0;
var j = 0;
const cursor = document.querySelector(".animated-text");
const cake = document.querySelector(".fade");
var txt = ['Here is a cake for you!'];
var element = ['first'];
var speed = 100;
var opct = 0;

function startUp() {
  setTimeout(triggerText, 1500);
}

function triggerText() {
  if (i > txt[j].length) {
    cursor.style.setProperty('--primary-animation', 'cursor 0.6s infinite');
    fadeIn();
  }
  else {
    document.getElementById(element[j]).innerHTML += txt[j].charAt(i);
    i++;
    if (i > txt[j].length)
      speed = 200;
    setTimeout(triggerText, speed);
  }
}

function fadeIn() {
  opct = opct + 0.2;
  cake.style.setProperty('opacity', opct);
  setTimeout(fadeIn, speed);
}

$(document).ready(function() {
  $(".candles:before").click(function() {
      
    $(".flame").animate({"opacity": 0}, "fast");
    $(".flame2").animate({"opacity": 0}, "fast");
    $(".flame3").animate({"opacity": 0}, "fast");
    $(".text").animate({"top": -90, "opacity": 1}, "fast");
  });

  $(".candles").click(function() {
      
    $(".flame").animate({"opacity": 0}, "fast");
    $(".flame2").animate({"opacity": 0}, "fast");
    $(".flame3").animate({"opacity": 0}, "fast");
    $(".text").animate({"top": -90, "opacity": 1}, "fast");
  });

  $(".candles:after").click(function() {
      
    $(".flame").animate({"opacity": 0}, "fast");
    $(".flame2").animate({"opacity": 0}, "fast");
    $(".flame3").animate({"opacity": 0}, "fast");
    $(".text").animate({"top": -90, "opacity": 1}, "fast");
  });
});
