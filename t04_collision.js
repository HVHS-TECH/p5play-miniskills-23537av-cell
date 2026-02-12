/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	cnv = new Canvas(650, 600);
	world.gravity.y = 10;

    rectangle = new Sprite(295, 250, 150, 100, '80');
    rectangle.color = 'yellow';
    rectangle.rotationSpeed = 2;
    rectangle.vel.x = 2;
    platform_1 = new Sprite(350, 300, 200, 160, 'D');


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