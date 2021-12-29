var loopLyrics1 = '';
var beatles1 = 'whisper words of wisdom, ';
var loopLyrics2 = '';
var beatles2 = 'there will be an answer,';


function sing(){
    var letItBeLyrics = 'let it be, ';
    for (var i = 1; i < 5; i++){
        loopLyrics1 += letItBeLyrics;
    }

    for (var i = 1; i < 6; i++){
        loopLyrics2 += letItBeLyrics;
    }
}
sing();

var beatlesString = loopLyrics1 + beatles1 + loopLyrics2 + beatles2 + ' let it be';


console.log(beatlesString);