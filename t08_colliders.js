/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup(){
	cnv = new Canvas(700, 850);
	wallLH  = new Sprite(350 , height/0.673 ,800, height, 'k');
	wallLH.color = 'blue';
    wallRH  = new Sprite(5,5, 2000, 15, 'k');
    wallTop = new Sprite(5, 9, 15, 2000, 'k');
    wallBot = new Sprite(695, 30, 15, 2000, 'k');
	ball_1 = new Sprite(width/5, height/2, 50, 'd');
    ball_1.color = 'lightgrey';
    ball_1.vel.x = 2;
    ball_1.bounciness = 1;
    ball_1.friction = 0;
    ball_1.drag = 0;

    cnv = new Canvas(700, 850);
    wallLH  = new Sprite(0, height/2, 8, height, 'k');
	ball_1 = new Sprite(width/2, height/2, 50, 'd');
    alienGroup = new Group();
	alienGroup.collides(ball_1, func2Call);
	for (i = 5; i < 50; i++) {
       alien = new Sprite(7, 8) ;
       alien.vel.x = 3;
       alien.vel.y = 4;
       alien.bounciness = 1;
       alien.friction = 0;  
        alienGroup.add(alien);
		function func2Call(_ssss, _ball_1) {

// Delete the alien which was hit

_ssss.remove();

}
    }
    
	console.log("setup: ");

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('grey');}
	

/*******************************************************/
//  END OF APP
/*******************************************************/