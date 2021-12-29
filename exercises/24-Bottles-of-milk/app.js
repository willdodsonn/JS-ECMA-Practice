// Your code here:
const bottles = "bottles";
const bottle = "bottle";
const onTheWall = " of milk on the wall";
const noBottles= "No bottles of milk on the wall"; 
const takeOne = "Take one down, pass it around,";
const goToStore = "go to the store and by some more.";


function bottlesOfMilk() {  
    
    for (var i = 99; i >= 0; i--) {
        if (i == 0){
            console.log(0);
        }
        else if (i == 1) {
            console.log(1);
        } 
        else {
            console.log(i + bottles + onTheWall + i + bottles + 'of milk.' + takeOne + (i - 1) + bottles + onTheWall
            );
            //console.log(i + bottles + onTheWall + i + bottles + 'of milk.' + takeOne + i - 1 + bottles + onTheWall);
        } 
     }
}   


bottlesOfMilk();