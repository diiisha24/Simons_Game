var gamePattern=[];
var userClickedPattern=[];
const buttonColours=["red","blue","green","yellow"];

var level=0;
var started=false;

$(document).keypress(function(){
    if(started==false){
        nextSequence();
        started=true;

    }
});







function checkAnswer(currentLevel){
    
        if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
            if(gamePattern.length===userClickedPattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);}
        }
        else{
        $("#level-title").text("Game over!!Press any key to restart.");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
            }, 200);
            var audio1=new Audio("sounds/wrong.mp3");
            audio1.play();
            
                startOver();

            
        }
    }  
    
    function nextSequence(){
        userClickedPattern=[];
        level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChooseColour =buttonColours[randomNumber];
    gamePattern.push(randomChooseColour);
    $("#"+randomChooseColour).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+randomChooseColour+".mp3");
    audio.play();
    // var x=randomChooseColour;
    // animatePress(randomChooseColour);
}
// var currentLevel=level;

// checkAnswer(currentLevel);
$(".btn").click(function(){
    // checkAnswer(currentLevel);
    
        var userChosenColour=(this).id;
        userClickedPattern.push(userChosenColour);

   var audio = new Audio("sounds/"+userChosenColour+".mp3");
   audio.play();
    // animatePress(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
        

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(() => {
    $("#"+currentColour).removeClass("pressed");
}, 100);
}

function startOver(){
    gamePattern=[];
    level=0;
    started=false;
}