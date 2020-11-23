// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("2020 was a weird year",50,20,255,179);
}

function balloon(t,n,m,a,b){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(a,b,b);
  noStroke();
  rect(n, m, w+20, 2*h);
  triangle(2*(n+w+20)/3,m+2*h,2*(n+w+20)/3+15,m+2*h,2*(n+w+20)/3+15,m+2*h+15);
  fill(a)
  text(t, n+10, m+h);
}
