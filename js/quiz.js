var currentQuestion = 1;

function nextQuestion(next) {
  var current = document.getElementById("question" + currentQuestion);
  current.style.display = "none";

  var nextQuestion = document.getElementById("question" + next);
  nextQuestion.style.display = "block";

  currentQuestion = next;
}

function previousQuestion(previous) {
  var current = document.getElementById("question" + currentQuestion);
  current.style.display = "none";

  var previousQuestion = document.getElementById("question" + previous);
  previousQuestion.style.display = "block";

  currentQuestion = previous;
}

document.getElementById("resultBtn").addEventListener("click", showResult);

function showResult() {
  var qualities = document.getElementsByName("qualities");
  var superpower = document.getElementsByName("superpower");
  var weapon = document.getElementsByName("weapon");
  var color = document.getElementsByName("color");

  var selectedQualities = [];
  for (var i = 0; i < qualities.length; i++) {
    if (qualities[i].checked) {
      selectedQualities.push(qualities[i].value);
    }
  }

  var selectedSuperpower;
  for (i = 0; i < superpower.length; i++) {
    if (superpower[i].checked) {
      selectedSuperpower = superpower[i].value;
      break;
    }
  }

  var selectedWeapon;
  for (i = 0; i < weapon.length; i++) {
    if (weapon[i].checked) {
      selectedWeapon = weapon[i].value;
      break;
    }
  }

  var selectedColor;
  for (i = 0; i < color.length; i++) {
    if (color[i].checked) {
      selectedColor = color[i].value;
      break;
    }
  }

  if (
    selectedQualities.length === 0 ||
    !selectedSuperpower ||
    !selectedWeapon ||
    !selectedColor
  ) {
    alert("Please answer all the questions.");
    return;
  }

  var avengers = {
    bravery: { name: "Captain America", img: "../images/captain_america.jpeg" },
    intelligence: { name: "Iron Man", img: "../images/iron_man.jpeg" },
    strength: { name: "Thor", img: "../images/thor.jpeg" },
    speed: { name: "Hulk", img: "../images/hulk.jpg" },
  };

  var result = avengers[selectedQualities[0]];
  document.getElementById("result").innerHTML =
    "You are " +
    result.name +
    '!<br><img src="' +
    result.img +
    '" alt="' +
    result.name +
    '">';
  document.getElementById("result").style.display = "block";
}
