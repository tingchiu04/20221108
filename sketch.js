var face_size = []
var face_x = []
var face_y = []
var face_num = 4

var song
var songIsplay=false //設定此變數為"假"，收到按下滑鼠把變數改為"真"，音樂播放
var amp
function preload(){
  song = loadSound("368 - Dyalla.mp3");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);//改為角度模式

  for(var i=0;i<face_num;i++){
    face_size[i] = random(100,400)
    face_x[i] = random(0,width)
    face_y[i] = random(0,height)
    }
    
}

function draw() {
  background(220);

  for(var j=0;j<face_num;j++){
  push()
    translate(face_x[j],face_y[j])
    noStroke()
    fill("#ff8fa3")
    ellipse(0,0,face_size[j]/1.14,face_size[j]/1.25) //頭
    ellipse(-face_size[j]/3.07,-face_size[j]/2.85,face_size[j]/2.75) //左耳
    ellipse(face_size[j]/3.07,-face_size[j]/2.85,face_size[j]/2.75) //右耳
      beginShape()  //左腳
      curveVertex(-face_size[j]/5.33,face_size[j]/1.31)
      curveVertex(-face_size[j]/4.44,face_size[j]/1.159)
      curveVertex(-face_size[j]/4.44,face_size[j]/1.126)
      curveVertex(-face_size[j]/5,face_size[j]/1.066)
      curveVertex(-face_size[j]/6.66,face_size[j]/1.038)
      curveVertex(-face_size[j]/11.42,face_size[j]/1.038)
      curveVertex(-face_size[j]/20,face_size[j]/1.095)
      curveVertex(-face_size[j]/26.66,face_size[j]/1.21)

  endShape(CLOSE)
  beginShape()  //右腳
      curveVertex(face_size[j]/5.33,face_size[j]/1.31)
      curveVertex(face_size[j]/4.44,face_size[j]/1.159)
      curveVertex(face_size[j]/4.44,face_size[j]/1.126)
      curveVertex(face_size[j]/5,face_size[j]/1.066)
      curveVertex(face_size[j]/6.66,face_size[j]/1.038)
      curveVertex(face_size[j]/11.42,face_size[j]/1.038)
      curveVertex(face_size[j]/20,face_size[j]/1.095)
      curveVertex(face_size[j]/26.66,face_size[j]/1.21)

  endShape(CLOSE)

    fill("#ffeedd")
    ellipse(0,face_size[j]/1.904,face_size[j]/1.48,face_size[j]/1.428) //身體
    
    fill("#ff8fa3")
    beginShape()  //
      curveVertex(-face_size[j]/2.96,face_size[j]/1.904)
      curveVertex(-face_size[j]/20,0)
      curveVertex(face_size[j]/20,0)
      curveVertex(face_size[j]/2.96,face_size[j]/1.904)
  endShape(CLOSE)
  beginShape()  
      curveVertex(face_size[j]/2.96,face_size[j]/1.904)
      curveVertex(face_size[j]/20,0)
      curveVertex(-face_size[j]/20,0)
      curveVertex(-face_size[j]/2.96,face_size[j]/1.904)
  endShape(CLOSE)

    fill("#ffeedd")
    ellipse(0,face_size[j]/13.33,face_size[j]/1.311,face_size[j]/1.6) //臉中淺色部分
    
    fill(255)//左眼框
    ellipse(-face_size[j]/6.66,face_size[j]/26.66,face_size[j]/5.714)  
    fill("#ae2012") 
    arc(-face_size[j]/6.66, face_size[j]/20, face_size[j]/5, face_size[j]/5, 160, 320)      
    fill(255)
    arc(-face_size[j]/6.89, face_size[j]/20, face_size[j]/5.714, face_size[j]/5.33, 160, 320) 

    fill(255)//右眼框
    ellipse(face_size[j]/6.66,face_size[j]/26.66,face_size[j]/5.714) 
    fill("#ae2012")
    arc(face_size[j]/6.66, face_size[j]/20, face_size[j]/5, face_size[j]/5, 220, 20)     
    fill(255)
    arc(face_size[j]/6.89, face_size[j]/20, face_size[j]/5.714, face_size[j]/5.33, 220, 20)  

    fill("#ff4d6d") //左眼珠
    ellipse(-face_size[j]/7.27+map(mouseX,0,width,-face_size[j]/33.3,face_size[j]/80),face_size[j]/26.66+map(mouseY,0,height,-face_size[j]/57.14,face_size[j]/40),face_size[j]/8)
    fill("#a4133c")
    ellipse(-face_size[j]/7.27+map(mouseX,0,width,-face_size[j]/33.3,face_size[j]/80),face_size[j]/26.66+map(mouseY,0,height,-face_size[j]/57.14,face_size[j]/40),face_size[j]/13.33)

    fill("#ff4d6d") //右眼珠
    ellipse(face_size[j]/7.27+map(mouseX,0,width,-face_size[j]/80,face_size[j]/33.3),face_size[j]/26.66+map(mouseY,0,height,-face_size[j]/57.14,face_size[j]/40),face_size[j]/8)
    fill("#a4133c")
    ellipse(face_size[j]/7.27+map(mouseX,0,width,-face_size[j]/80,face_size[j]/33.3),face_size[j]/26.66+map(mouseY,0,height,-face_size[j]/57.14,face_size[j]/40),face_size[j]/13.33)

    fill("#ae2012") //鼻子
    ellipse(0,face_size[j]/13.33,face_size[j]/26.66,face_size[j]/40)

    


    fill("#ff8fa3")
    beginShape()  //左手
      curveVertex(-face_size[j]/3.809,face_size[j]/3.2)
      curveVertex(-face_size[j]/1.904,face_size[j]/2.105)
      curveVertex(-face_size[j]/2,face_size[j]/1.739)
      curveVertex(-face_size[j]/2.758,face_size[j]/1.86)
      curveVertex(-face_size[j]/4.44,face_size[j]/2.22)

  endShape(CLOSE)
  beginShape()  //右手
      curveVertex(face_size[j]/3.809,face_size[j]/3.2)
      curveVertex(face_size[j]/1.904,face_size[j]/2.105)
      curveVertex(face_size[j]/2,face_size[j]/1.739)
      curveVertex(face_size[j]/2.758,face_size[j]/1.86)
      curveVertex(face_size[j]/4.44,face_size[j]/2.22)

  endShape(CLOSE)


  // if(mouseIsPressed)
  // {
  //   fill("#5fa8d3") //嘴
  //   ellipse(0,face_size[j]/4.44,face_size[j]/11.42,face_size[j]/13.33)
  // }
  // else
  // {
  //   fill("#5fa8d3") //嘴
  //   ellipse(0,face_size[j]/4.44,face_size[j]/13.33,face_size[j]/40)
  
  // }

  if(!songIsplay){
    fill("#5fa8d3") //嘴
    ellipse(0,face_size[j]/4.44,face_size[j]/13.33,face_size[j]/40)//沒有播放
  }
  else{
    vol = amp.getLevel() //取得聲音值(值為0~1之間)
    // console.log(vol)
    fill("#5fa8d3") 
    ellipse(0,face_size[j]/4.44,face_size[j]/11.42,map(vol,0,0.5,face_size[j]/5,face_size[j]/13.33))
  }

  noFill()
  
  }


  pop()

  
}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
}


