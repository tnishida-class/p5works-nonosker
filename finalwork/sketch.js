// 最終課題を制作しよう

let cx, cy, maxR,n,m;

function setup() {
  createCanvas(windowWidth,windowHeight);
   l= width / 2;
   m= width / 2;
}

function draw(){
  background(255);
  let a = color(233, 233, 229);
  let b = color(188, 226, 232);
  let black = color(0);
  let c = color(165, 154, 202);
  let d = color(171,105,83)
  stroke(255);
  strokeWeight(3);

  cx = windowWidth / 2;
  cy = windowHeight / 2;
  maxR = min(windowWidth, windowHeight);
  drawCircle(black, maxR);
  drawArcs(d, c, maxR * 0.85);
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  drawArcs(b,a,maxR*0.8)
  drawArcs(d,c,maxR*0.5)
  drawArcs(b,a,maxR*0.45)
  drawCircle(d,maxR*0.1)
  drawCircle(c, maxR * 0.05);
  stroke(0);
  cross(30)
  fill(186,38,54);
  noStroke();
  ellipse(m,l,20)
  textSize(15);
  text("クリックして、ダーツを投げる",40,40);

}


function mouseClicked(){
  m= random(0,windowWidth);
  l= random(0,windowHeight);
}
function cross(n){
  line(n,n,n+10,n+10)
  line(n+10,n,n,n+10)
}

function drawCircle(c, r){
  fill(c);
  ellipse(cx, cy, r, r);
}

function drawArcs(c1, c2, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
