
var game = document.querySelector('main');

function reset() {
  
}
// MARVEL
function checkMarvel() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;
  if (question1 === "Star-Prince") {
    correct++;
  }
  if (question2 === "Johann Schmidt") {
    correct++;
  }
  if (question3 === "Ex-Wife") {
    correct++;
  }
  if (question4 === "Kree") {
    correct++;
  }
  if (question5 === "Fury") {
    correct++;
  }
  document.getElementById("number_correct").innerHTML = "The Nova Corps thanks you for your effort! You got " + correct + " correct.";
}

// DR. WHO
function checkWho() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;
  if (question1 === "who") {
    correct++;
  }
  if (question2 === "who") {
    correct++;
  }
  if (question3 === "who") {
    correct++;
  }
  if (question4 === "who") {
    correct++;
  }
  if (question5 === "adventure") {
    correct++;
  }
  document.getElementById("number_correct").innerHTML = "Dr. Who will find you! You got " + correct + " correct.";
}

// ADVENTURE TIME
function checkAdventure() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;
  if (question1 === "adventure") {
    correct++;
  }
  if (question2 === "adventure") {
    correct++;
  }
  if (question3 === "adventure") {
    correct++;
  }
  if (question4 === "adventure") {
    correct++;
  }
  if (question5 === "adventure") {
    correct++;
  }
  document.getElementById("number_correct").innerHTML = "The adventure isn't over yet! You got " + correct + " correct.";
}
    

   
  