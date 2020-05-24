var start;
var place;
var situation;
var name;

var backgroundImg;
var backgroundImg1;

var name_text;

var player;
var arrow, arrow_img;

var x = 0;

function preload()
{
  backgroundImg = loadImage("Images/menu.PNG");
  backgroundImg1 = loadImage("Images/b1.PNG");

  arrow_img = loadImage("Images/arrow.PNG");
}

function setup()
{
  createCanvas(1200,800);

  start = new Start(); 
}


function draw()
{
  if (player == undefined)
  {
    background(backgroundImg);
  }

  start.display();

  if(x == 1 && situation == "Thug Life/Gangster")
  {
   background(backgroundImg1);
 
   player.play();
  }
  drawSprites();
}