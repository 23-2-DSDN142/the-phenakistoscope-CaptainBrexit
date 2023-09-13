const SLICE_COUNT = 12;



function setup_pScope(pScope){
  pScope.output_mode(STATIC_FRAME);
  //pScope.output_mode(ANIMATED_FRAME);
  //pScope.output_mode(STATIC_DISK);
  //pScope.output_mode(ANIMATED_DISK);
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

  var layer2 = new PLayer(animatedStuff);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

}


function animatedStuff(x, y, animation, pScope){

let angleOffset = (360 / SLICE_COUNT) / 2 //background arc
let backgroundArcStart = 270 - angleOffset;
let backgroundArcEnd = 270 + angleOffset;

let sinValue = sin(animation.frame * 360) * 75 //maths for translating lateral movement to circular movement
let cosValue = cos(animation.frame * 360) * 75


/*stroke(200, 200, 200); //piston shaft
strokeWeight(40);
strokeCap(SQUARE);
line(0, -825-animation.wave()*150, sinValue, -400-cosValue); 
strokeCap(ROUND);
strokeWeight(50);
line(sinValue, -400-cosValue, sinValue, -400-cosValue);
strokeWeight(1);
stroke(0);*/


fill(200, 200, 200); //spiny thing at the bottom that rotates idk what its called
push();
translate(0, -400);  
rotate(animation.frame*360);
beginShape();
vertex(20, -75);
vertex(20, -45);
vertex(70, 25);
bezierVertex(70, 25, 0, 100, -70, 25);
vertex(-20, -45);
vertex(-20, -75);
bezierVertex(-20, -75, -20, -100, 0, -100);
bezierVertex(0, -100, 20, -100, 20, -75);
endShape();
translate(0, 400);
pop();

circle(sinValue, -400-cosValue, 50, 50); //circle at the end of the piston shaft

beginShape(); //piston shaft
vertex(-20+sinValue, -415-cosValue);
vertex(-20, -725-animation.wave()*150);
vertex(20, -725-animation.wave()*150);
vertex(20+sinValue, -415-cosValue);
endShape();



//fill(120, 120, 120);
//strokeWeight(0);
//arc(sinValue, -500-cosValue, 50, 50, 0, 180);
//strokeWeight(1);



  beginShape(); //piston head
  vertex(-40, -650-animation.wave()*150);
  vertex(-50, -650-animation.wave()*150);

  vertex(-50, -750-animation.wave()*150);
  vertex(-40, -750-animation.wave()*150);
  vertex(-40, -760-animation.wave()*150);
  vertex(-50, -760-animation.wave()*150);

  vertex(-50, -770-animation.wave()*150);
  vertex(-40, -770-animation.wave()*150);
  vertex(-40, -775-animation.wave()*150);
  vertex(-50, -775-animation.wave()*150);

  vertex(-50, -780-animation.wave()*150);
  vertex(-40, -780-animation.wave()*150);
  vertex(-40, -785-animation.wave()*150);
  vertex(-50, -785-animation.wave()*150);

  vertex(-50, -800-animation.wave()*150);
  vertex(50, -800-animation.wave()*150);

  vertex(50, -785-animation.wave()*150);
  vertex(40, -785-animation.wave()*150);
  vertex(40, -780-animation.wave()*150);
  vertex(50, -780-animation.wave()*150);

  vertex(50, -775-animation.wave()*150);
  vertex(40, -775-animation.wave()*150);
  vertex(40, -770-animation.wave()*150);
  vertex(50, -770-animation.wave()*150);

  vertex(50, -760-animation.wave()*150);
  vertex(40, -760-animation.wave()*150);
  vertex(40, -750-animation.wave()*150);
  vertex(50, -750-animation.wave()*150);

  vertex(50, -650-animation.wave()*150);
  vertex(40, -650-animation.wave()*150);

  bezierVertex(40,-650-animation.wave()*150, 0, -700-animation.wave()*150, -40, -650-animation.wave()*150);
  endShape();



  fill(150, 150, 150);
  rect(-45, -760-animation.wave()*150, 90, 10);
  rect(-45, -775-animation.wave()*150, 90, 5);
  rect(-45, -785-animation.wave()*150, 90, 5);
  fill(200, 200, 200);
  
  fill(200, 200, 200);
  rect(-35, -740-animation.wave()*150, 70, 40, 5, 5, 5, 5); //piston head curved-edge rectangle
  circle(0,-720-animation.wave()*150,25,25); //small piston head circle

  //arc(0, -750-animation.wave()*150, 80, 60, 180, 0);



circle(sinValue, -400-cosValue, 20, 20); //small bottom circle

circle(0, -400, 40, 40);

//rotate(360*animation.frame)
  //console.log(cos(animation.frame))
  //circle(25-30*cos(animation.frame), -475-10*sin(animation.frame), 20, 20);
  //circle(25, 25, 20, 20);



  


} 



