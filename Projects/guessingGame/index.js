
 // generating random variable
 var y = Math.floor(Math.random()*10-1);
    // counting No of guesses made by user
    // for correct guess
    var guess =1;
    var guesslimit = 3;
    document.getElementById("submitguess").onclick=
    function(){
        // number guessed by user
        var x = document.getElementById("guessField").value;
        if(x==y){
            alert("Congratulations You have WON!! " +guess +"GUESS");
        }
        else if(x>y){
            guess++;
            alert("Sorry!! try a smaller number. ");
        }
        else if(guess = guesslimit) {
            alert("Time out! You have exhausted you chances.");
        } 
        else{
            guess++;
            alert("Sorry!! try a bigger number.");
        }
    }    
