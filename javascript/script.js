var i = 0;
var j = 0;
var k = 0;
var o = 0;
const cursor1 = document.querySelector(".animated-text1");
const cake = document.querySelector(".fade");
const balloonContainer = document.getElementById("balloon-container");
const box = document.getElementById("input");
const btn = document.getElementById("btn-submit");
var q = 'What is 1+1 ???'
var txt = ['Thanks for answering, here is a cake for you!', 'Click on the flames!'];
var speed = 100;
var opct = 0;
var op = 0;

function startUp() {
  setTimeout(question, 1500);
}

function question() {
  if (o < q.length) {
    document.getElementById('first').innerHTML += q.charAt(o);
    o++;
    setTimeout(question, speed);
  }
  else
    display();
}

function display() {
  op = op + 0.2;
  if (op <= 1) {
    box.style.setProperty('opacity', op);
    btn.style.setProperty('opacity', op);
    setTimeout(display, 100);
  }
}

function submitted() {
  box.remove();
  btn.remove();
  run();
}

function run() {
  if (o >= 0) {
    document.getElementById('first').innerHTML = q.slice(0, o);
    o--;
    setTimeout(submitted, 50);
  }
  else
    triggerText();
}

function triggerText() {
  if (j == 0) {
    if (i > txt[j].length) {
      j++;
      fadeIn();
    }
    else {
      document.getElementById('first').innerHTML += txt[j].charAt(i);
      i++;
      if (i > txt[j].length)
        speed = 200;
      setTimeout(triggerText, 50);
    }
  }
  else {
    if (i >= 0) {
      document.getElementById('first').innerHTML = txt[j-1].slice(0, i);
      i--;
      setTimeout(triggerText, 50);
    }
    else {
      if (k < txt[j].length) {
        document.getElementById('first').innerHTML += txt[j].charAt(k);
        k++;
        setTimeout(triggerText, speed);
      }
    }
  }
}

function fadeIn() {
  opct = opct + 0.2;
  if (opct <= 1) {
    cake.style.setProperty('opacity', opct);
    setTimeout(fadeIn, speed);
  }
  else {
    speed = 100;
    triggerText();
  }
}

$(document).ready(function() {
  $(".candles").click(function() {
      
    $(".flame").animate({"opacity": 0}, "fast");
    $(".flame2").animate({"opacity": 0}, "fast");
    $(".flame3").animate({"opacity": 0}, "fast");
    $(".text").animate({"top": -90, "opacity": 1}, "fast");
    createBalloons(40);
  });
});

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(7) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}