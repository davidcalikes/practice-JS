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
   
   // Applies shuffle algorithm to animals array

   let animals = ["assets/images/cat.png","assets/images/dog.png","assets/images/pig.png","assets/images/horse.png","assets/images/sheep.png","assets/images/cow.png","assets/images/duck.png","assets/images/rooster.png"];
   shuffle(animals);
   console.log(animals);

     document.getElementById("box-1").src = animals[0];
     document.getElementById("box-2").src = animals[1];
     document.getElementById("box-3").src = animals[2];
     document.getElementById("box-4").src = animals[3];






     

