var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83)

  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  

  wall = createSprite(1200,200,thickness,1600/2);
  wall.shapeColor= "gray";
}

function draw() {
  background("black"); 
     
  if(bullet.velocityX = speed){
    if(wall.x-bullet.x < (bullet.width+wall.width)/2){
      bullet.velocityX = 0;
      var damage= 0.5* weight*speed*speed/(wall.width*wall.width*wall.width);
      if(damage<10){
       bullet.shapeColor="green";
      }     

      if(damage>10){
        bullet.shapeColor="red";
      }
    }
  }
  


  drawSprites();
}