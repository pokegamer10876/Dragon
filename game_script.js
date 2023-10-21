const Failure = new Audio("./kl-music-box-game-over-ii-152200.mp3");
window.addEventListener("mousemove",()=>{
    Failure.play();
})
var cardsFlipped = 0;
var previousCardId = "";
function card1Clicked(){
    cardsFlipped++
 if(cardsFlipped>2){
    return;
 }
 if (document.getElementById("card1").src==="dragon1.jfif"){
    return;
 }


 document.getElementById("card1").src = "dragon1.jfif";
 if(cardsFlipped ===1){
  previousCardId = "card1";
 }
 if(cardsFlipped === 2){
    console.log
    if(document.getElementById("card1").src === document.getElementById(previousCardId).src){
        cardsFlipped=0;
        previousCardId="";
    } else {
        document.getElementById("card1").src = "matching_notClicked.jfif";
        document.getElementById(previousCardId).src = "matching_notClicked.jfif";
        cardsFlipped=0;
        previousCardId="";
    }
 }
}
function card2Clicked(){
    cardsFlipped++
    if(cardsFlipped>2){
       return;
    }
    if (document.getElementById("card2").src==="dragon1.jfif"){
       return;
    }
   
    
    document.getElementById("card2").src = "dragon1.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card2";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card2").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card2").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card3Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card3").src==="dragon1.jfif"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card3").src = "dragon1.png";
    if(cardsFlipped ===1){
     previousCardId = "card3";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card3").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card3").src === "matching_notClicked.jfif";
           document.getElementById(previousCardId).src === "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card4Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card4").src==="dragon1.jfif"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card4").src = "dragon1.png";
    if(cardsFlipped ===1){
     previousCardId = "card4";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card4").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card4").src === "matching_notClicked.jfif";
           document.getElementById(previousCardId).src === "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card5Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card5").src==="dragon1.jfif"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card5").src = "dragon1.png";
    if(cardsFlipped ===1){
     previousCardId = "card5";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card5").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card5").src === "matching_notClicked.jfif";
           document.getElementById(previousCardId).src === "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
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
   
    cardsFlipped++
    document.getElementById("card6").src = "dragon1.png";
    if(cardsFlipped ===1){
     previousCardId = "card6";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card6").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card6").src === "matching_notClicked.jfif";
           document.getElementById(previousCardId).src === "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card7Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card7").src==="dragon1.jfif"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card7").src = "dragon1.png";
    if(cardsFlipped ===1){
     previousCardId = "card7";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card7").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card7").src === "matching_notClicked.jfif";
           document.getElementById(previousCardId).src === "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card8Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card8").src==="dragon1.jfif"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card8").src = "dragon1.png";
    if(cardsFlipped ===1){
     previousCardId = "card8";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card8").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card8").src === "matching_notClicked.jfif";
           document.getElementById(previousCardId).src === "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card9Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card9").src==="dragon1.jfif"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card9").src = "dragon1.png";
    if(cardsFlipped ===1){
     previousCardId = "card9";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card9").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card9").src === "matching_notClicked.jfif";
           document.getElementById(previousCardId).src === "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card10Clicked(){
    if(cardsFlipped>=2){
       return;
    }
    if (document.getElementById("card10").src==="dragon3.png"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card10").src = "dragon3.png";
    if(cardsFlipped ===1){
     previousCardId = "card10";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card10").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card10").src === "matching_notClicked.jfif";
           document.getElementById(previousCardId).src === "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card11Clicked(){
    if(cardsFlipped>2){
       return;
    }
    if (document.getElementById("card11").src==="dragon1.jfif"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card11").src = "dragon1.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card11";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card11").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card11").src ="matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card12Clicked(){
    if(cardsFlipped>2){
       return;
    }
    if (document.getElementById("card12").src==="dragon1.jfif"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card12").src = "dragon1.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card12";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card12").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card12").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card13Clicked(){
    if(cardsFlipped>2){
       return;
    }
    if (document.getElementById("card13").src==="dragon1.jfif"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card13").src = "dragon1.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card13";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card13").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card13").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card14Clicked(){
    if(cardsFlipped>2){
       return;
    }
    if (document.getElementById("card14").src==="dragon1.jfif"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card14").src = "dragon1.jfif";
    if(cardsFlipped ===1){
     previousCardId = "card14";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card14").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card14").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card15Clicked(){
    if(cardsFlipped>2){
       return;
    }
    if (document.getElementById("card15").src==="dragon3.png"){
       return;
    }
   
    cardsFlipped++
    document.getElementById("card15").src = "dragon3.png";
    if(cardsFlipped ===1){
     previousCardId = "card15";
    }
    if(cardsFlipped === 2){
       if(document.getElementById("card15").src === document.getElementById(previousCardId).src){
           cardsFlipped=0;
           previousCardId="";
       } else {
           document.getElementById("card15").src = "matching_notClicked.jfif";
           document.getElementById(previousCardId).src = "matching_notClicked.jfif";
           cardsFlipped=0;
           previousCardId="";
       }
    }
   }
   function card16Clicked(){
    cardsFlipped++
    if(cardsFlipped>2){
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