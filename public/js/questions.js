
function check() {
// path may change depdning on model 
    var question1 = document.drop.question1.value;
    var question2 = document.drop.question2.value;
    var question3 = document.drop.question3.value;
    var question4 = document.drop.question4.value;
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
    // change below to fit into the correct view.
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    console.log(correct);
  }
  