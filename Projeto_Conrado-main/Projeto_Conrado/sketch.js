var arqueiro, arqueiroImg, arqueiroGif
var bullet, bulletImg, bulletGroup
function preload (){
    bulletImg=loadImage("Untitled-removebg-preview.png")
    arqueiroImg=loadImage("sprite_00.png")
    arqueiroGif=loadAnimation("sprite_00.png","sprite_01.png","sprite_02.png","sprite_03.png","sprite_04.png","sprite_05.png","sprite_06.png","sprite_07.png","sprite_08.png","sprite_09.png","sprite_10.png","sprite_11.png","sprite_12.png","sprite_13.png","sprite_14.png","sprite_15.png","sprite_16.png","sprite_17.png","sprite_18.png","sprite_19.png","sprite_20.png","sprite_21.png","sprite_22.png","sprite_23.png","sprite_24.png","sprite_25.png","sprite_26.png","sprite_27.png")
}
function setup (){
    createCanvas(800,800)
    arqueiro=createSprite(300,height/2,50,50)
    arqueiro.addImage("Img",arqueiroImg)
    arqueiro.addAnimation("Gif",arqueiroGif)
    bulletGroup=createGroup()
}
function draw(){
    if(keyDown("space")&& getFrameRate()/60){
        shootBullet();
        arqueiro.changeImage(arqueiroImg)
      }
  
    drawSprites()
}
 
function shootBullet(){
    arqueiro.changeAnimation("Gif",arqueiroGif)
    bullet= createSprite(150, width/2, 50,20)
    bullet.y= arqueiro.y-20
    bullet.addImage(bulletImg)
    bullet.scale=0.12
    bullet.velocityX= -7
    bulletGroup.add(bullet)
}