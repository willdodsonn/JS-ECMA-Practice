// Your code here:
var bottles = "bottles";
var bottles2 = "bottle";
var bottlesRemaining = " of milk on the wall";
var bottlesRemaining2 = "No bottles of milk on the wall"; 
var takeOne = "Take one down, pass it around,";


function bottlesOfMilk() {  
    
    for (i = 99; i >= 1; i--) {
        if (i == 1) {
            bottles = bottles2;
            bottlesRemain = bottlesRemaining2;
      } 
      else {
            bottlesRemain = i - 1 + bottlesRemaining;
            bottles = " "; 
      } 
      bottlesOfMilk();

      var milkString = i + " " + bottlesRemaining + takeOne + bottles2 + bottlesRemaining2;




     
      
  }
  console.log(milkString);