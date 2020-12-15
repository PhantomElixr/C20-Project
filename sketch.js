var car;
var wall;

var speed, weight;

function setup() {
  createCanvas(600,200);

  car = createSprite(100,100,20,20);
  car.shapeColor = "white";

  wall = createSprite(550,100,10,180);
  wall.shapeColor = "gray";

  speed = random(55,90);
  weight = random(400,1500);

}

function draw() {
  background("black");  

  car.velocityX = speed;

  var deformation = 0.5 * weight * speed * speed / 22500;

  if(wall.x - car.x < (car.width + wall.width / 2)){
    car.velocityX = 0;
    car.x = 535;
    if(deformation < 100){
      car.shapeColor = "green";
    }

    if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }
    if(deformation > 180){
      car.shapeColor = "red";
    }
  }

  drawSprites();
}