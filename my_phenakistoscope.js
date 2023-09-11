const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_FRAME);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  //var layer1 = new PLayer(faces);
  //layer1.mode( SWIRL(2) );
  //layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

}


/*function faces(x, y, animation, pScope){
  
  scale(animation.frame*2);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}*/

function draw() {

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;


  //angleMode(DEGREES)

  fill(200, 200, 200);
  rect(-50,-900-animation.wave()*50,100,150) // .wave is a cosine wave btw
  circle(0,-800-animation.wave()*50,25,25);
  
//translate(0, -500)
//let mappedFrame = map(animation.frame, 0, 1, -1,1)
let sinValue = sin(animation.frame * 360) * 50
let cosValue = cos(animation.frame * 360) * 50
circle(0, -500, 150, 150);

circle(sinValue, -500-cosValue, 20, 20);
line(0, -800-animation.wave()*50, sinValue, -500-cosValue)


//rotate(360*animation.frame)
  //console.log(cos(animation.frame))
  //circle(25-30*cos(animation.frame), -475-10*sin(animation.frame), 20, 20);
  //circle(25, 25, 20, 20);

} 



