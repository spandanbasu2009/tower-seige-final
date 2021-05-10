const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;
var box12,box13,box14,box15;
var box16,box17,box18;
var box19,box20,box21;
var polygon,polygon_img;
var slingshot;

function setup(){
    createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    
    polygon_img = loadImage("polygon.png");

    ground = new Ground(500,595,1000,10);
    stand = new Ground(500,500,300,10);

    box1 = new Box(375,455,50,80);
    box2 = new Box(425,455,50,80);
    box3 = new Box(475,455,50,80);
    box4 = new Box(525,455,50,80);
    box5 = new Box(575,455,50,80);
    box6 = new Box(625,455,50,80);
    box7 = new Box(400,375,50,80);
    box8 = new Box(450,375,50,80);
    box9 = new Box(500,375,50,80);
    box10 = new Box(550,375,50,80);
    box11 = new Box(600,375,50,80);
    box12 = new Box(425,295,50,80);
    box13 = new Box(475,295,50,80);
    box14 = new Box(525,295,50,80);
    box15 = new Box(575,295,50,80);
    box16 = new Box(450,215,50,80);
    box17 = new Box(500,215,50,80);
    box18 = new Box(550,215,50,80);
    box19 = new Box(475,135,50,80);
    box20 = new Box(525,135,50,80);
    box21 = new Box(500,55,50,80);

    var options = {
        density:1.5
    }
    polygon = Bodies.circle(150,400,20,options)
    World.add(world,polygon);

    slingshot = new SlingShot(polygon,{x:100,y:200})
}

function draw(){
    background("pink");

    Engine.update(engine);

    textSize(20);
    fill("red");
    text("Drag the stone to launch it towards the blocks",50,50);
    //drawSprites();
    //polygon.display();
    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}