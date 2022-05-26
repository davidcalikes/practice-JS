// Plays button sound when button is clicked and loads relevant game page.
function playAnimals() {
  let sound = document.getElementById("animals");
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'animals.html';
  });
}

function playShapes() {
  let sound = document.getElementById("shapes");
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'shapes.html';
  });
}

function playColours() {
  let sound = document.getElementById("colours");
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'colours.html';
  });
}

function playAbout() {
  let sound = document.getElementById("about");
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'about.html';
  });
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
   
       [array[currentIndex], array[randomIndex]] = [
         array[randomIndex], array[currentIndex]];
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

function runGame() {

}

function turnCounter() {

}

function endGame() {

}

function displayQuestion() {

}


     

