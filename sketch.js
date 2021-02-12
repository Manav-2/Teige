const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21;
var ground, stand, polygon;

function preload(){
     polygon_img= loadImage("polygon.png")
}


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);

    block1 = new Block(600,560,30,40);
    block2 = new Block(630,560,30,40);
    block3 = new Block(660,560,30,40);
    block4 = new Block(690,560,30,40);
    block5 = new Block(720,560,30,40);
    block6 = new Block(750,560,30,40);
    block7 = new Block(780,560,30,40);
    block8 = new Block(810,560,30,40);
    
    block9 = new Block(630,500,30,40);
    block10 = new Block(660,500,30,40);
    block11 = new Block(690,500,30,40);
    block12 = new Block(720,500,30,40);
    block13 = new Block(750,500,30,40);
    block14 = new Block(780,500,30,40);
    
    block15 = new Block(660,400,30,40);
    block16 = new Block(690,400,30,40);
    block17 = new Block(720,400,30,40);
    block18 = new Block(750,400,30,40);
    
    block19 = new Block(690,380,30,40);
    block20 = new Block(720,380,30,40);

    block21 = new Block(705,300,30,40);

    polygon = Bodies.circle(50,200,20); 
    World.add(world, polygon)
    slingshot = new Slingshot(this.polygon,{x:100, y:200});
}

function draw(){
        background("blue");
        
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40,40)
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly()
}
