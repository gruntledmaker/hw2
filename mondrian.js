function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  noStroke();


  //magenta square
  colorMode(HSB, 255);
  let c = color(210, 120, 200);
  fill(c);

  rect(90, 0, 100, 240)


  //red square
  colorMode(HSB, 255);
  let d = color(255, 255, 140);
  fill(d);

  rect(310, 73, 100, 60)


  //green square
  colorMode(HSB, 255);
  let e = color(50, 195, 110);
  fill(e);

  rect(60, 300, 250, 115)


  //long vertical
  colorMode(HSB, 255);
  let f = color(0, 0, 50);
  fill(f);

  rect(20, 0, 14, 400)
  
  
    //long vertical 2
  colorMode(HSB, 255);
  fill(f);

  rect(90, 0, 14, 305)


  //long horizontal
  colorMode(HSB, 255);
  fill(f);

  rect(0, 296, 400, 14)


  //short vertical bottom
  colorMode(HSB, 255);
  fill(f);

  rect(305, 300, 7, 400)
  
  
    //short vertical top
  colorMode(HSB, 255);
  fill(f);

  rect(305, 0, 7, 241)


    //top long hor.
  colorMode(HSB, 255);
  fill(f);

  rect(0, 240, 400, 10)


    //right short vert.
  colorMode(HSB, 255);
  fill(f);

  rect(370, 300, 400, 100)
  
  
    //left short vert.
  colorMode(HSB, 255);
  fill(f);

  rect(30, 300, 42, 100)
  
  
    //middle short vert.
  colorMode(HSB, 255);
  fill(f);

  rect(190, 250, 42, 60)
  
  
      //top hor. bar
  colorMode(HSB, 255);
  fill(f);

  rect(190, 73, 120, 60)

  
  //short vertical bottom
  colorMode(HSB, 255);
  fill(f);

  rect(190, 0, 7, 80)
  
}
