var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edge1, edge2, edge3, edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,590,200,20);
    surface1.shapeColor = color("blue");

    surface2 = createSprite(300,590,200,20);
    surface2.shapeColor = color("orange");

    surface3 = createSprite(500,590,200,20);
    surface3.shapeColor = color("pink");

    surface4 = createSprite(700,590,200,20);
    surface4.shapeColor = color("green");

    box = createSprite(random(20,750),200,20,20);
    box.shapeColor = color("white");
    box.velocityX = 5;
    box.velocityY = 5;

    edge1 = createSprite(400,-1,800,1);
    edge2 = createSprite(800,300,-1,800);
    edge3 = createSprite(400,601,800,1);
    edge4 = createSprite(-1,300,1,600);

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box

    if(surface4.isTouching(box)){
        box.shapeColor = "green";
        music.play();
    }

    if(surface3.isTouching(box)){
        box.shapeColor = "pink";
        music.play();
    }

    if(surface2.isTouching(box)){
        box.shapeColor = "orange";
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }

    if(surface1.isTouching(box)){
        box.shapeColor = "blue";
        music.play();
    }

    box.bounceOff(surface4);
    box.bounceOff(surface3);
    box.bounceOff(surface2);
    box.bounceOff(surface1);
    box.bounceOff(edge1);
    box.bounceOff(edge2);
    box.bounceOff(edge3);
    box.bounceOff(edge4);
    
    drawSprites();
}
