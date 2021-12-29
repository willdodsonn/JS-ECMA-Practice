const bottles = " bottles";
const bottle = " bottle";
const onTheWall = " of milk on the wall, ";
const noBottles= " No more bottles of milk on the wall, "; 
const takeOne = " Take one down and pass it around, ";
const goToStore = " Go to the store and buy some more,";


function bottlesOfMilk() {  
    
    for (var i = 99; i >= 0; i--) {
        if (i == 2) {
            console.log( i + bottles + onTheWall + i + bottles + ' of milk. ' + takeOne + ' 1 bottle of milk on the wall.');
        }
        else if (i == 1){
           console.log ('1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.');
            //console.log( i + bottle + onTheWall + i + bottle + ' of milk. ' + takeOne + ' no more bottles of milk on the wall.');
        }
        else if (i == 0){
           console.log( 'No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.');
            //console.log( noBottles + ' no more bottles of milk. ' + goToStore + ' 99 bottles of milk on the wall. ' );
        }
        
        else {
            console.log( i + bottles + onTheWall + i + bottles + ' of milk.' + takeOne + (i - 1) + bottles + ' of milk on the wall. '
            );
            //console.log(i + bottles + onTheWall + i + bottles + 'of milk.' + takeOne + i - 1 + bottles + onTheWall);
        } 
     }
}   

bottlesOfMilk();



