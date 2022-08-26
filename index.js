function clicked(){

var randomnumber1=Math.floor(Math.random()*6)+1;
var randomImage1="images/dice" + randomnumber1 + ".png";
// var randomImageSrc1="images/" + randomImage1;
// var image1=document.querySelectorAll("img")[0];
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice" + randomnumber2 + ".png";
// var randomImageSrc2="images" + randomImage2;
// var image2=document.querySelectorAll("img")[1];
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomnumber1==randomnumber2){
  document.querySelector("h1").innerHTML="draw";
}
else if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="player 1 wins";
}
else{
  document.querySelector("h1").innerHTML="player 2 wins";
}

}



// while(c < 10)
// {
//   setTimeout(() =>
//    {
//      document.querySelectorAll("img")[0].setAttribute("src",("images/dice" + Math.floor(Math.random()*6+1) + ".png"));
//      console.log(document.querySelectorAll("img")[0].getAttribute("src"));
//    }, 3000d);
//    setTimeout(() =>
//    {
//      document.querySelectorAll("img")[1].setAttribute("src",("images/dice" + Math.floor(Math.random()*6+1) + ".png"));
//      console.log(document.querySelectorAll("img")[1].getAttribute("src"));
//    }, 3000);
  // document.querySelectorAll("img")[0].setAttribute("src",("images/dice" + Math.floor(Math.random()*6+1) + ".png"));
//   document.querySelectorAll("img")[1].setAttribute("src",("images/dice" + Math.floor(Math.random()*6+1) + ".png"));
  // c++;
