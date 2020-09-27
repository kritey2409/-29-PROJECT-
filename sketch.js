function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  this=new Ground(50,50,10,10)

block1=new Block(330,235,30,40)

block2=new Block(360,235,30,40)

block3=new Block(390,235,30,40)

block4=new Block(420,235,30,40)

block5=new Block(450,235,30,40)

block6=new Block(360,195,30,40)

block7=new Block(390,195,30,40)

block8=new Block(420,193,30,40)

block9=new Block(390,155,30,40)
polygon=Bodies.circle(50,200,20)
world.add(world,polygon);
SlingShot=new SlingShot(this.polygon,{:x100,y:200})
imageMode=(CENTER)
iamge(polygon_img,polygon.position.x,polygon.position.y,40,40)

function mouseDragged(){
 
}


function mouseReleased(){
 
}
}