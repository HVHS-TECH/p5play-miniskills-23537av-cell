/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	cnv = new Canvas(700, 850);
	wallLH  = new Sprite(400, height/2, 8, height, '400');
	wallLH.color = 'black';
    wallRH  = new Sprite(200,295, 180, 150, '600');
    wallTop = new Sprite(150, 300, 200, 150, '100');
    wallBot = new Sprite(500, 750, 400, 300, '100');
	ball_1 = new Sprite(width/2, height/2, 50, '200');
    ball_1.color = 'cyan';
    ball_1.vel.x = 2;
    ball_1.bounciness = 1;
    ball_1.friction = 0;
    ball_1.drag = 0;

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