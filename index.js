var randaa = Math.floor( Math.random()*6)+1;
var dc= "images/dice"+randaa+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",dc);

var randa = Math.floor( Math.random()*6)+1;
var dc2= "images/dice"+randa+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",dc2);


if(randa>randaa){
  document.querySelector("h1").innerHTML="palyer 2 win the match🙂";
}
else if(randa<randaa){
    document.querySelector("h1").innerHTML="palyer 1 win the match😍";
}
else{
  document.querySelector("h1").innerHTML="Draw match 😁";
}
