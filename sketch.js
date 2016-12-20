 //I DIDN'T USE THE WINDOW SIZE BECAUSE MY P5 WAS CRASHING EVERYTIME I TRY TO USE THIS FUNCTION
 
 var range = 25
 var colorList = ['#A5DF00','#FF4000','#D8F781','#D7DF01'];
function setup() {
 createCanvas(800,600);
 background(200)
  frameRate(2)
  
}

function draw() {
 
 for(var x=0 ; x < width ; x+=50){
 for(var y=0 ; y < height ; y+=50){
 noStroke()
 var index = floor(random() * colorList.length);
 var colorHex = colorList[index];
 fill(color(colorHex));

  
    if(mouseX>x-range && mouseX<x+range && mouseY>y-range && mouseY<y+range){
        if (mouseIsPressed) {
  push()        
  ellipse(x+25,y+25,50,50);
   noStroke();
   var index = floor(random() * colorList.length);
   var colorHex = colorList[index];
   fill(color(colorHex));
  
        }
 }
 
  
   if(mouseX>x-range && mouseX<x+range && mouseY>y-range && mouseY<y+range){
        if (mouseIsPressed) {
        
  ellipse(x+25,y+25,10,10)
   noStroke();
   fill(color(colorHex));
   pop() 
        }
}
}
  push()
  
  textSize(20)
  textAlign(CENTER)
  text('CLICK AND DRAG',width/2,height/10)
  textFont('Helvetica')
  fill(0)
  
  pop()
        }   


}
          
      
      
          
          