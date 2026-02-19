/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
cnv = new Canvas(500, 500);

red = new Sprite(50, 50,100,100,"k");
red.color = 'red';

green = new Sprite( 450,50,100,100,"k");
green.color = 'green';

blue = new Sprite( 450,450,100,100,"k");
blue.color = 'blue';

yellow = new Sprite(50,450,100,100,"k");
yellow.color = 'yellow';

purple = new Sprite(250,250, 100,100,"k");
purple.color = 'purple';


	console.log("setup: ");

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('grey'); 
	
}

/*******************************************************/
//  END OF APP
/*	cnv = new Canvas(700, 850);
	rectangle = new Sprite(295,280, 150, 150);
	rectangle.color = 'yellow';
	circle = new Sprite(112, 100, 120);
	circle.color = 'blue';
	******************************************************/