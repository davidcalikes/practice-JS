let sndToggleState = localStorage.getItem("toggle")
      console.log("Sound =",sndToggleState);

setToggle();

function setToggle() {
  if (sndToggleState === "ON") {
  soundToggle();

} else {
  if (sndToggleState === "OFF") {
  muteAudio();
    }
  }
}

// Mutes all Audio elements on page //
function muteAudio() {
const sounds = document.querySelectorAll("audio");
for (const sound of sounds)
  sound.muted = true 
}

// Plays animals button sound when button is clicked and loads animals game page //
function playAnimals() {
  let sound = document.getElementById("animals");
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'animals.html';
  });
}

// Plays shapes button sound when button is clicked and loads shapes game page //
function playShapes() {
  let sound = document.getElementById("shapes");
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'shapes.html';
  });
}

// Plays colours button sound when button is clicked and loads colours game page //
function playColours() {
  let sound = document.getElementById("colours");
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'colours.html';
  });
}

// Plays pop button sound when button is clicked and returns to menu page //
function playBack() {
  let sound = document.getElementById("back-btn");
  sound.play();
  sound.addEventListener("ended", function () {
    location.href = "index.html";
  });
}

// Plays pop button sound when button is clicked //
function playPop() {
  let sound = document.getElementById("start-btn");
  sound.play();
}

function playRight() {
  const correct = document.getElementById("correct-sound");
  correct.play();
}

function playWrong () {
  const incorrect = document.getElementById("incorrect-sound");
  incorrect.play();
}
    
// Plays pop button sound when button is clicked //
function qSound() {
  let sound = document.getElementById("q-sound");
  sound.play();
}

/** 
 * Contains all functions required to run the animals game a single game cycle.
 * Including shuffling of Flashcards, creating a matching pair and congratulating the user for a correct answer.
 * Includes functions that provides the user audio and visual feedback.  
 * */
function runGame() {

   // Applies shuffle algorithm to animals array & pushes first four elements to the game area placeholeders.
   let animals = ["assets/images/cat.png","assets/images/dog.png","assets/images/pig.png","assets/images/horse.png","assets/images/sheep.png","assets/images/cow.png","assets/images/duck.png","assets/images/rooster.png"];
   shuffle(animals);

     document.getElementById("box-1").src = animals[0];
     document.getElementById("box-2").src = animals[1];
     document.getElementById("box-3").src = animals[2];
     document.getElementById("box-4").src = animals[3];

     let quizList = animals.slice(0,4);

     document.getElementById("q-thumb").src = quizList[Math.floor(Math.random()* quizList.length)];
    
    let quizPic = document.getElementById("q-thumb").getAttribute('src');
    console.log(quizPic);

    // Uses quizzPic variable to duplicate image to floating congratsBox element"
    document.getElementById("float-pic").src = quizPic;
    
     let question = document.getElementById("question-txt").innerHTML;
     question;

         if (quizPic === "assets/images/sheep.png") {
           document.getElementById("question-txt").innerHTML = "Where is the sheep?";
           document.getElementById("q-sound").src = "assets/audio/q_sheep.mp3";
           document.getElementById("thumb-sound").src = "assets/audio/thumb_sheep.mp3";
         
          } else {

         if (quizPic === "assets/images/duck.png") {
          document.getElementById("question-txt").innerHTML = "Where is the duck?";
          document.getElementById("q-sound").src = "assets/audio/q_duck.mp3";
          document.getElementById("thumb-sound").src = "assets/audio/thumb_duck.mp3";
        } else {

          if (quizPic === "assets/images/horse.png") {
           document.getElementById("question-txt").innerHTML = "Where is the horse?";
           document.getElementById("q-sound").src = "assets/audio/q_horse.mp3";
           document.getElementById("thumb-sound").src = "assets/audio/thumb_horse.mp3";
          } else {

            if (quizPic === "assets/images/pig.png") {
             document.getElementById("question-txt").innerHTML = "Where is the pig?";
             document.getElementById("q-sound").src = "assets/audio/q_pig.mp3";
             document.getElementById("thumb-sound").src = "assets/audio/thumb_pig.mp3";
          } else {

              if (quizPic === "assets/images/rooster.png") {
               document.getElementById("question-txt").innerHTML = "Where is the rooster?";
               document.getElementById("q-sound").src = "assets/audio/q_rooster.mp3";
               document.getElementById("thumb-sound").src = "assets/audio/thumb_rooster.mp3";
          } else {

                if (quizPic === "assets/images/cat.png") {
                 document.getElementById("question-txt").innerHTML = "Where is the cat?";     
                 document.getElementById("q-sound").src = "assets/audio/q_cat.mp3";
                 document.getElementById("thumb-sound").src = "assets/audio/thumb_cat.mp3";
                } else {

                  if (quizPic === "assets/images/dog.png") {
                   document.getElementById("question-txt").innerHTML = "Where is the dog?";
                   document.getElementById("q-sound").src = "assets/audio/q_dog.mp3";
                   document.getElementById("thumb-sound").src = "assets/audio/thumb_dog.mp3";
                  } else {

                    if (quizPic === "assets/images/cow.png") {
                     document.getElementById("question-txt").innerHTML = "Where is the cow?";
                     document.getElementById("q-sound").src = "assets/audio/q_cow.mp3";
                     document.getElementById("thumb-sound").src = "assets/audio/thumb_cow.mp3";
                    }

                    }
                  }
                }
              }
            }
          }
        }

        makeMatch();
}

/** 
 * Contains all functions required to run the animals game a single game cycle.
 * Including shuffling of Flashcards, creating a matching pair and congratulating the user for a correct answer.
 * Includes functions that provides the user audio and visual feedback.  
 * */
 function runGame2() {

  // Applies shuffle algorithm to animals array & pushes first four elements to the game area placeholeders.
  let colours = ["assets/images/square.png","assets/images/circle.png","assets/images/oval.png","assets/images/star.png","assets/images/rectangle.png","assets/images/triangle.png"];
  shuffle(colours);

    document.getElementById("box-1").src = colours[0];
    document.getElementById("box-2").src = colours[1];
    document.getElementById("box-3").src = colours[2];
    document.getElementById("box-4").src = colours[3];

    let quizList = colours.slice(0,4);

    document.getElementById("q-thumb").src = quizList[Math.floor(Math.random()* quizList.length)];
   
   let quizPic = document.getElementById("q-thumb").getAttribute('src');
   console.log(quizPic);

   // Uses quizzPic variable to duplicate image to floating congratsBox element"
   document.getElementById("float-pic").src = quizPic;
   
    let question = document.getElementById("question-txt").innerHTML;
    question;

        if (quizPic === "assets/images/test.png") {
          document.getElementById("question-txt").innerHTML = "Where is the triangle?";
          document.getElementById("q-sound").src = "assets/audio/q_sheep.mp3";
          document.getElementById("thumb-sound").src = "assets/audio/thumb_sheep.mp3";
        
         } else {

        if (quizPic === "assets/images/circle.png") {
         document.getElementById("question-txt").innerHTML = "Where is the circle ?";
         document.getElementById("q-sound").src = "assets/audio/q_duck.mp3";
         document.getElementById("thumb-sound").src = "assets/audio/thumb_duck.mp3";
       } else {

         if (quizPic === "assets/images/square.png") {
          document.getElementById("question-txt").innerHTML = "Where is the square?";
          document.getElementById("q-sound").src = "assets/audio/q_horse.mp3";
          document.getElementById("thumb-sound").src = "assets/audio/thumb_horse.mp3";
         } else {

           if (quizPic === "assets/images/oval.png") {
            document.getElementById("question-txt").innerHTML = "Where is the oval?";
            document.getElementById("q-sound").src = "assets/audio/q_pig.mp3";
            document.getElementById("thumb-sound").src = "assets/audio/thumb_pig.mp3";
         } else {

             if (quizPic === "assets/images/rectangle.png") {
              document.getElementById("question-txt").innerHTML = "Where is the rectangle?";
              document.getElementById("q-sound").src = "assets/audio/q_rooster.mp3";
              document.getElementById("thumb-sound").src = "assets/audio/thumb_rooster.mp3";
         } else {

               if (quizPic === "assets/images/star.png") {
                document.getElementById("question-txt").innerHTML = "Where is the star?";     
                document.getElementById("q-sound").src = "assets/audio/q_cat.mp3";
                document.getElementById("thumb-sound").src = "assets/audio/thumb_cat.mp3";
               } else {
                   
             }
          }
        }
      }
    }
   }

       makeMatch();
}

// Creates active flash card that matches thumbnail image and waits for user interaction.       
function makeMatch() {
      
  let box1 = document.getElementById("box-1").getAttribute('src');
  let box2 = document.getElementById("box-2").getAttribute('src');
  let box3 = document.getElementById("box-3").getAttribute('src');
  let box4 = document.getElementById("box-4").getAttribute('src');
  
  let answerBox = document.getElementById("q-thumb").getAttribute('src');
  
  console.log(answerBox);
     
  if (box1 === answerBox) {
      let active = document.getElementById("box-1");
      active.className += " active"; 
      console.log("box1 winner");
    
    } else {
      
      if (box2 === answerBox) {
        let active = document.getElementById("box-2");
        active.className += " active"; 
        console.log("box2 winner");
      
      } else {
      
        if (box3 === answerBox) {
          let active = document.getElementById("box-3");
          active.className += " active"; 
          console.log("box3 winner");

        } else {
      
          if (box4 === answerBox) {
            let active = document.getElementById("box-4");
            active.className += " active"; 
            console.log("box4 winner");

          }  
        }
      }  
    }
  }


// Checks the 1st flashcard in response to user click event to see if it is the "active" card that matches the card below.
function checkCard1 () {
  
  function congratsBox() {
  let congrats = document.getElementById("congrats-box").style.display = "flex";
  congrats;
  } 

  let box1 = document.getElementById("box-1").getAttribute('class');
  console.log(box1);
  let testOnOff = document.getElementById("test-on-off");
  
  const activeBox = "box active";

  if (box1 === activeBox) {
  playRight();
  congratsBox();
  addScore();
  addAttempt();
  

} else {
  if (testOnOff.innerHTML === "ON") {
    addAttempt();
    chkGame();
    tenCheck();
    playWrong();

  } else {
  document.getElementById("box-1").src = "assets/images/try_again.png";
  playWrong();
  console.log("Try again!");
  }     
 }
}


// Checks the 2nd flashcard in response to user click event to see if it is the "active" card that matches the card below.
function checkCard2 () {

  function congratsBox() {
  let congrats = document.getElementById("congrats-box").style.display = "flex";
  congrats;
  } 

  let box2 = document.getElementById("box-2").getAttribute('class');
  console.log(box2);
  let testOnOff = document.getElementById("test-on-off");

  let activeBox = "box active";

  if (box2 === activeBox) {
  playRight();
  congratsBox();
  addScore();
  addAttempt();

} else {
  if (testOnOff.innerHTML === "ON") {
    addAttempt();
    chkGame();
    tenCheck();
    playWrong();
  
  } else {
  console.log("Try again!");
  document.getElementById("box-2").src = "assets/images/try_again.png";
  playWrong();
  }
}
}

// Checks the 3rd flashcard in response to user click event to see if it is the "active" card that matches the thumbnail card.
function checkCard3 () {

  function congratsBox() {
  let congrats = document.getElementById("congrats-box").style.display = "flex";
  congrats;
  } 

  let box3 = document.getElementById("box-3").getAttribute('class');
  console.log(box3);
  let testOnOff = document.getElementById("test-on-off");

  let activeBox = "box active";

  if (box3 === activeBox) {
    playRight();
    congratsBox();
    addScore();
    addAttempt();

  } else {
    if (testOnOff.innerHTML === "ON") {
      addAttempt();
      chkGame();
      tenCheck();
      playWrong();
  
  } else {
  console.log("Try again!");
  document.getElementById("box-3").src = "assets/images/try_again.png";
  playWrong();
  }
}
}

// Checks the 4th flashcard in response to user click event to see if it is the "active" card that matches the card below.
function checkCard4 () {
  
  function congratsBox() {
  let congrats = document.getElementById("congrats-box").style.display = "flex";
  congrats;
  }  

  let box4 = document.getElementById("box-4").getAttribute('class');
  console.log(box4);
  let testOnOff = document.getElementById("test-on-off");

  let activeBox = "box active";

  if (box4 === activeBox) {
    playRight();
    congratsBox();
    addScore();
    addAttempt();
   

  } else {
    if (testOnOff.innerHTML === "ON") {
      addAttempt();
      chkGame();
      tenCheck();
      playWrong();
  
  } else {
  console.log("Try again!");
  document.getElementById("box-4").src = "assets/images/try_again.png";
  playWrong();

  }
}
}

function playAgain() {

  tenCheck();

  document.getElementById("box-1").className = "box";
  document.getElementById("box-2").className = "box";
  document.getElementById("box-3").className = "box";
  document.getElementById("box-4").className = "box";
  
  let congratsBox = document.getElementById("congrats-box").style.display = "none";
  congratsBox;
  hideHint();
  chkGame();
}

function playAgain2() {

  tenCheck();

  document.getElementById("box-1").className = "box";
  document.getElementById("box-2").className = "box";
  document.getElementById("box-3").className = "box";
  document.getElementById("box-4").className = "box";
  
  let congratsBox = document.getElementById("congrats-box").style.display = "none";
  congratsBox;
  hideHint();
  runGame2();
}

function startGame() {
  
  document.getElementById("box-1").className = "box";
  document.getElementById("box-2").className = "box";
  document.getElementById("box-3").className = "box";
  document.getElementById("box-4").className = "box";
  
  let modal = document.getElementById("modal-box").style.display = "none";
  modal;
runGame();
}

function startGame2() {
  
  document.getElementById("box-1").className = "box";
  document.getElementById("box-2").className = "box";
  document.getElementById("box-3").className = "box";
  document.getElementById("box-4").className = "box";
  
  let modal = document.getElementById("modal-box").style.display = "none";
  modal;
runGame2();
}

function soundToggle() {
  let soundOnOff = document.getElementById("sound-on-off");
  let soundIcon = document.getElementById("sound-icon");
  let sndBtnIcon = document.getElementById("snd-btn-icon");
  
  if (soundOnOff.innerHTML === "OFF") {
      soundOnOff.innerHTML = "ON";
      soundIcon.className = "fa-solid fa-volume-low";
      sndBtnIcon.className = "fa-solid fa-volume-low";
      const sounds = document.querySelectorAll("audio");
      for (const sound of sounds) {
      sound.muted = false;
      localStorage.setItem("toggle", "ON");
      let sndToggleState = localStorage.getItem("toggle")
    }
      
  } else {
    soundOnOff.innerHTML = "OFF";
    soundIcon.className = "fa-solid fa-volume-xmark";
    sndBtnIcon.className = "fa-solid fa-volume-xmark";
    const sounds = document.querySelectorAll("audio");
    for (const sound of sounds) {
    sound.muted = true;
    localStorage.setItem("toggle", "OFF");
    sndToggleState = localStorage.getItem("toggle");
    }
  }
}

function testToggle() {
  chkGame();
  let testOnOff = document.getElementById("test-on-off");
  if (testOnOff.innerHTML === "OFF") {
      testOnOff.innerHTML = "ON";
      console.log("Test Mode Activated")
      runTest();
  } else {
    testOnOff.innerHTML = "OFF";
    document.location.reload();
  }
}
 
function runTest() {
  
  document.getElementById("box-1").className = "box";
  document.getElementById("box-2").className = "box";
  document.getElementById("box-3").className = "box";
  document.getElementById("box-4").className = "box";
  
  let hidePlayInfo = document.getElementById("play-info").style.display = "none";
  hidePlayInfo;
  let showScore = document.getElementById("score-board").style.display = "block";
  showScore;
  let hideTestModal = document.getElementById("end-test").style.display = "none";
  hideTestModal;
  let resetScore = document.getElementById("add-score").innerHTML = "0";
  resetScore;
  let resetAttempts = document.getElementById("attempts").innerHTML = "0";
  resetAttempts;

  makeMatch();
}

function addScore() {
  let getScore = parseInt(document.getElementById("add-score").innerText);
  document.getElementById("add-score").innerText = ++getScore;
}

function addAttempt() {
  let testAttempts = parseInt(document.getElementById("attempts").innerText);
  document.getElementById("attempts").innerText = ++testAttempts;
}

function endTest() {
  const endModal = document.getElementById("end-test").style.display = "flex";
  endModal;

  const getFinalScr = document.getElementById("add-score").innerText;
  console.log("Final Score =",getFinalScr,"/10")
  const dspFinalScr = document.getElementById("final-score").innerHTML = getFinalScr;
  dspFinalScr;
}

function tenCheck() {
  const maxAttempts = document.getElementById("attempts").innerHTML;
  const testState = document.getElementById("test-on-off");
  if (maxAttempts === "10" && testState.innerHTML === "ON") {
    endTest();
  }
}

function thumbSound() {
  const thumbSound = document.getElementById("thumb-sound");
  thumbSound;
  thumbSound.play();
  }

function thumbHint() {
  const thumbHint = document.getElementById("thumb-hint").style.display = "flex";
  thumbHint;
}

function hideHint() {
  const hideHint = document.getElementById("thumb-hint").style.display = "none";
  hideHint;
}

/**
 * Returns random elements from array using Fisher-Yates Shuffle Algorithm. 
 * (Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
 */
 function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = 
    [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function chkGame() {
  let gameType = document.getElementById("game-type").innerHTML

  if (gameType === "Animals") {
  runGame();

}else{
  if (gameType === "Shapes"){
  runGame2();
}
}
}
