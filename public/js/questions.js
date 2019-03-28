
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
  document.getElementById("number_correct").innerHTML = "The Nova Corps thank you for your effort! You got " + correct + " correct.";
}

// DR. WHO
function checkWho() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;
  if (question1 === "Rose") {
    correct++;
  }
  if (question2 === "Newspaper Seller") {
    correct++;
  }
  if (question3 === "Time and relative dimensions in space") {
    correct++;
  }
  if (question4 === "Die") {
    correct++;
  }
  if (question5 === "The Chameleon Circuit") {
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
  if (question1 === "Dog") {
    correct++;
  }
  if (question2 === "Ash") {
    correct++;
  }
  if (question3 === "Stretching") {
    correct++;
  }
  if (question4 === "Am I Joke, your knight or your brother?") {
    correct++;
  }
  if (question5 === "Base Axe") {
    correct++;
  }
  document.getElementById("number_correct").innerHTML = "The adventure isn't over yet! You got " + correct + " correct.";
}
    

   
  