x = 0;
y = 0;
to_number= "" ;
draw_apple = "";
screen_width= 0;
screen_height=0;
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

to_number = Number(content) ;

 console.log(event); 

 content = event.results[0][0].transcript;
if(Number.isInteger(to_number))
{
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    else 
    document.getElementById("status").innerHTML = "The speech has not been Recognized "; 
}
}

function preload()
{
  draw_apple = loadImage('apple.png');
}

function setup() {
 screen_width = window.innerWidth ;
screen_height= window.innerHeight ;

canvas= createCanvas(screen_width-50 , screen_height-150);
canvas.center() ;
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    for (var i = 1 ;  i <= to_number ; i++)
    {
      x = Math.floor(Math.random() * 700) ;
      y = Math.floor(Math.random() * 400)
      Image(apple , x , y , 50 , 50)
    }
    
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = to_number + "  Apple Drawn!" ;
    speak() ;
}
