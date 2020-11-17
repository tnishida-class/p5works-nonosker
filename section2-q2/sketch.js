// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2==0){
      fill(255);
    }
    else{
      fill(128);
    }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      rect(size*i,size*j,size,size);
    }
    }
    for(let i=0; i<8; i++){
      for(let j=0; j<8; j++){
        if(((i+j)%2!=0)&&j<3){
          fill(255,0,0);
          ellipse(i*size+size/2,j*size+size/2,9*size/10)
        }
        if(((i+j)%2!=0)&&j>4){
          fill(0);
          ellipse(i*size+size/2,j*size+size/2,9*size/10)
        }
      }
    }
  }
