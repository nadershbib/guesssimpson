var answer=Math.floor((Math.random()*3)+1);
var a="";
var x=document.getElementsByClassName("img");
var i;
function one()
{

var onee=parseInt(1);
if(onee==answer)
{
    document.getElementById("answerone").innerHTML="CORRECT GUESSS";
  for(i=0;i<x.length;i++)
  {
      x[i].src="4-45426_picture-transparent-library-did-it-againthe-tapped-homer.png";
  }
}

else{
    alert("Wrong!!!!!try again");
}



}
function two()
{

var twoo=parseInt(2);
if(twoo==answer)
{
    document.getElementById("answer2").innerHTML="CORRECT GUESSS";
    for(i=0;i<x.length;i++)
  {
      x[i].src="4-45426_picture-transparent-library-did-it-againthe-tapped-homer.png";
  }
   
    
}

else{
    alert("Wrong!!!!!try again");
}



}
function three()
{

var threee=parseInt(3);
if(threee==answer)
{
    document.getElementById("answer3").innerHTML="CORRECT GUESSS";
    for(i=0;i<x.length;i++)
  {
      x[i].src="4-45426_picture-transparent-library-did-it-againthe-tapped-homer.png";
  }
   
}

else{
    alert("Wrong!!!!!try again");
}



}
function four()
{

var fourr=parseInt(4);
if(fourr==answer)
{
    document.getElementById("answer4").innerHTML="CORRECT GUESSS";
    for(i=0;i<x.length;i++)
  {
      x[i].src="4-45426_picture-transparent-library-did-it-againthe-tapped-homer.png";
  }
    
    
}

else{
    alert("Wrong!!!!!try again");
}



}
function five()
{

var fivee=parseInt(5);
if(fivee==answer)
{
    document.getElementById("answer5").innerHTML="CORRECT GUESSS";
    for(i=0;i<x.length;i++)
  {
      x[i].src="4-45426_picture-transparent-library-did-it-againthe-tapped-homer.png";
  }
   
}

else{
    alert("Wrong!!!!!try again");
}



}
