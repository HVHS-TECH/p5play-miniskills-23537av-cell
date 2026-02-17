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
	wallLH  = new Sprite(350 , height/0.673 ,800, height, 'k');
	wallLH.color = 'black';
    wallRH  = new Sprite(5,5, 2000, 15, 'k');
    wallTop = new Sprite(5, 9, 15, 2000, 'k');
    wallBot = new Sprite(695, 30, 15, 2000, 'k');
	ball_1 = new Sprite(width/5, height/2, 50, 'd');
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