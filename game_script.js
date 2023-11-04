const Failure = new Audio("./kl-music-box-game-over-ii-152200.mp3");
window.addEventListener("mousemove",()=>{
    Failure.play();
})
var cardsFlipped = 0;
var previousCardId = "";
var Score = 0;
var HighScore = window.localStorage.getItem("localHigh");
document.getElementById("score").innerHTML="Score: "+Score;
document.getElementById("highScore").innerHTML="High Score: "+HighScore;

function load(){
   document.getElementById("score").innerHTML="Score: "+Score;
   document.getElementById("highScore").innerHTML="High Score: "+ window.localStorage.getItem("localHigh");
}

Window.onload = load();

function card1Clicked(){
    
 if(cardsFlipped>=2){
    return;
 }
 if (document.getElementById("card1").src==="dragon1.jfif"){
    return;
 }

 cardsFlipped++;
 document.getElementById("card1").src = "dragon1.jfif";
 if(cardsFlipped ===1){
  previousCardId = "card1";
 }
 if(cardsFlipped === 2){
    console.log
    if(document.getElementById("card1").src === document.getElementById(previousCardId).src){
        cardsFlipped=0;
        previousCardId="";
        Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
    } else {
      setTimeout(function(){
        document.getElementById("card1").src = "matching_notClicked.jfif";
        document.getElementById(previousCardId).src = "matching_notClicked.jfif";
        cardsFlipped=0;
        previousCardId="";
      },1000);
    }
 }
}
function card2Clicked(){
    
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card2").src==="dragon7.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card2").src = "dragon7.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card2";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card2").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card2").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card3Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card3").src==="dragon2.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card3").src = "dragon2.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card3";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card3").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card3").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card4Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card4").src==="dragon5.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card4").src = "dragon5.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card4";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card4").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card4").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card5Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card5").src==="dragon8.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card5").src = "dragon8.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card5";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card5").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card5").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card6Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card6").src==="dragon1.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card6").src = "dragon1.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card6";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card6").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card6").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card7Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card7").src==="dragon8.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card7").src = "dragon8.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card7";
     
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card7").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card7").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card8Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card8").src==="dragon6.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card8").src = "dragon6.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card8";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card8").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card8").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card9Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card9").src==="dragon4.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card9").src = "dragon4.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card9";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card9").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card9").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card10Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card10").src==="dragon3.jpg"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card10").src = "dragon3.jpg";
    if(cardsFlipped ===1){
     previousCardId = "card10";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card10").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card10").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card11Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card11").src==="dragon6.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card11").src = "dragon6.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card11";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card11").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card11").src ="matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card12Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card12").src==="dragon5.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card12").src = "dragon5.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card12";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card12").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card12").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card13Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card13").src==="dragon4.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card13").src = "dragon4.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card13";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card13").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card13").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card14Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card14").src==="dragon2.jfif"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card14").src = "dragon2.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card14";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card14").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
           document.getElementById("card14").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card15Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card15").src==="dragon3.jpg"){
       return;
    }
   
    cardsFlipped++;
    document.getElementById("card15").src = "dragon3.jpg";
    if(cardsFlipped ===1){
     previousCardId = "card15";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card15").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
         setTimeout(function(){
         document.getElementById("card15").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
         },1000);
       }
    }
   }
   function card16Clicked(){
    cardsFlipped++;
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card16").src==="dragon7.jfif"){
       return;
    }
   
    
    document.getElementById("card16").src = "dragon7.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card16";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card16").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
           Score = Score+100;
        document.getElementById("score").innerHTML="Score:"+Score;
        if (Score > HighScore){
         window.localStorage.setItem("localHigh",Score);
         HighScore = window.localStorage.getItem("localHigh");
         document.getElementById("highScore").innerHTML = "High Score:"+window.localStorage.getItem("localHigh");
        }
       } else {
            setTimeout(function(){

            
           document.getElementById("card16").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       },1000);
       }
    }
   }