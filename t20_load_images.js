/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	function preload() {

  imgBG   = loadImage('../assets/images/space.jpg');

  imgFace = loadImage('../assets/images/face.png');

  cnv = new Canvas(700, 850);
  ball_1 = new Sprite(width/2, height/2, 50, 'd');

ball_1.bounciness = 1;

ball_1.friction   = 0;

ball_1.image = (imgFace);

imgFace.resize(50, 50);

}
	console.log("setup: ");

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG); 
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/