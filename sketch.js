var dog,dogImg,dog1Img;
var foodS, foodStock,readStock;

var database;

function preload()
{
	dogImg = loadImage("images/dogImg.png");
  dog1Img = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(600, 600);
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  foodStock.set(30);

  dog = createSprite(350,450,10,60);
  dog.addImage(dogImg);
  dog.scale = 0.3;
}


function draw() {  
background("yellow");
if(foodS!== undefined){
  textSize(20);
  fill("red");
  text("TIP : PRESS (UP ARROW KEY) TO FEED JACK SOME MILK",30,50);
  text("MILK REMAINING: "+foodS,150,150);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dog1Img);
}

if(keyWentUp(UP_ARROW)){
  dog.addImage(dogImg);
}

if(foodS === 0){
  foodS = 30;
}






  drawSprites();
}

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
else{
x = x-1;
}

database.ref("/").update({
  food :x
})


}










