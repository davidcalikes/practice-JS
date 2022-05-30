// Plays animals button sound when button is clicked and loads animals game page.
function playAnimals() {
  let sound = document.getElementById("animals");
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'animals.html';
  });
}
// Plays shapes button sound when button is clicked and loads shapes game page.
function playShapes() {
  let sound = document.getElementById("shapes");
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'shapes.html';
  });
}
// Plays colours button sound when button is clicked and loads colours game page.
function playColours() {
  let sound = document.getElementById("colours");
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'colours.html';
  });
}
// Plays pop button sound when button is clicked and loads about page.
function playAbout() {
  let sound = document.getElementById("about");
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'about.html';
  });
}

/** 
 * Contains all functions required to run a single game cycle.
 * Including shuffling of Flashcards, creating a matching pair and congratulating the user for a correct answer.
 * Includes functions that provides the user audio and visual feedback.  
 * */
function runGame() {

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
    
     let question = document.getElementById("question-button").innerHTML;

         if (quizPic === "assets/images/sheep.png") {
           document.getElementById("question-button").innerHTML = "Where is the sheep?";
         
          } else {

         if (quizPic === "assets/images/duck.png") {
          document.getElementById("question-button").innerHTML = "Where is the duck?";
         
        } else {

          if (quizPic === "assets/images/horse.png") {
           document.getElementById("question-button").innerHTML = "Where is the horse?";
        
          } else {

            if (quizPic === "assets/images/pig.png") {
             document.getElementById("question-button").innerHTML = "Where is the pig?";

          } else {

              if (quizPic === "assets/images/rooster.png") {
               document.getElementById("question-button").innerHTML = "Where is the rooster?";

          } else {

                if (quizPic === "assets/images/cat.png") {
                 document.getElementById("question-button").innerHTML = "Where is the cat?";     
          
                } else {

                  if (quizPic === "assets/images/dog.png") {
                   document.getElementById("question-button").innerHTML = "Where is the dog?";
              
                
                  } else {

                    if (quizPic === "assets/images/cow.png") {
                     document.getElementById("question-button").innerHTML = "Where is the cow?";
                
                    }

                    }
                  }
                }
              }
            }
          }
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
  
makeMatch();

}

// Checks the 1st flashcard to see if it is the "active" card that matches the card below.
function checkCard1 () {

  function congratsBox() {
    let congratsBox = document.getElementById("congrats-box").style.display = "flex";
    congratsBox;
  } 

  let box1 = document.getElementById("box-1").getAttribute('class');
  
  console.log(box1);
  
  let activeBox = "box active";

  if (box1 === activeBox) {
    congratsBox();
  
  } else {

      console.log("Try again!");
  }
}

// Checks the 2nd flashcard to see if it is the "active" card that matches the card below.
function checkCard2 () {

  function congratsBox() {
    let congratsBox = document.getElementById("congrats-box").style.display = "flex";
    congratsBox;
  } 

  let box2 = document.getElementById("box-2").getAttribute('class');
  
  console.log(box2);

  let activeBox = "box active";

  if (box2 === activeBox) {
    congratsBox();
  
  } else {

      console.log("Try again!");
  }
}

// Checks the 3rd flashcard to see if it is the "active" card that matches the thumbnail card.
function checkCard3 () {

  function congratsBox() {
    let congratsBox = document.getElementById("congrats-box").style.display = "flex";
    congratsBox;
  } 

  let box3 = document.getElementById("box-3").getAttribute('class');
  
  console.log(box3);

  let activeBox = "box active";

  if (box3 === activeBox) {
    congratsBox();
  
  } else {

      console.log("Try again!");
  }
}

runGame();

// Checks the 1st flashcard to see if it is the "active" card that matches the card below.
function checkCard4 () {
  
  function congratsBox() {
    let congratsBox = document.getElementById("congrats-box").style.display = "flex";
    congratsBox;
  }  

  let box4 = document.getElementById("box-4").getAttribute('class');
  
  console.log(box4);

  let activeBox = "box active";

  if (box4 === activeBox) {
    congratsBox();
  
  } else {

      console.log("Try again!");
  }
}

function playAgain() {
  
  document.getElementById("box-1").className = "box";
  document.getElementById("box-2").className = "box";
  document.getElementById("box-3").className = "box";
  document.getElementById("box-4").className = "box";
  
  let congratsBox = document.getElementById("congrats-box").style.display = "none";
  
  runGame();
}

function displayQuestion() {

}