
var game = document.querySelector('main');


function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var correct = 0;

  if (question1 == "Purple") {
    correct++;
  }
  if (question2 == "Kevin Bacon") {
    correct++;
  }
  if (question3 == "Queens") {
    correct++;
  }
  if (question4 == "Two") {
    correct++;
  }
  

  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
 
  
}

function reset() {
  
}

    

   
  