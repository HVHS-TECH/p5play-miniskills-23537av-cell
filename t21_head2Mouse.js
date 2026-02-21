/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	cnv = new Canvas(650, 600);
	world.gravity.y = 10;
	square = new Sprite(200,250, 100,150, '60');
	square.color = 'orange';
	square.rotationSpeed = 2;
	square.moveTowards(mouseX, mouseY, p);

if (mouse.presses()) 

square.moveTo(xPos, yPos, n);

}


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
/*******************************************************/