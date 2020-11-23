// ダーツ
let cx, cy, maxR;

function setup() {
  let a = color(233, 233, 229);
  let b = color(188, 226, 232);
  let black = color(0);
  let c = color(165, 154, 202);
  let d = color(171,105,83)
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

  cx = width / 2;
  cy = height / 2;
  maxR = min(width, height);

  drawCircle(black, maxR);
  drawArcs(d, c, maxR * 0.85);
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  drawArcs(b,a,maxR*0.8)
  drawArcs(d,c,maxR*0.5)
  drawArcs(b,a,maxR*0.45)
  drawCircle(d,maxR*0.1)
  drawCircle(c, maxR * 0.05);

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
