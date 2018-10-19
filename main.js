var myCanvas = document.getElementById('c');
var ctx = myCanvas.getContext("2d");
var flip = document.getElementById('flip');
var flipCount = 0
var cycle = 0

var Bodies = Matter.Bodies
var engine = Matter.Engine.create();
var world = engine.world;

var render = Matter.Render.create({
  canvas: myCanvas,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    background: '#18181f',
    wireframes: false,
    showAngleIndicator: false
  }
});

engine.world.gravity.y = 0.35;
engine.world.gravity.x = 0


var Mouse = Matter.Mouse
var MouseConstraint = Matter.MouseConstraint;
var mConstraint;

function flipMe() {
  if (flipCount == 0){
    flip.setAttribute('style','transform:rotate(90deg); transition-duration: 1s;');
    flipCount += 90
  } 
  else {
    flip.setAttribute('style','transform:rotate('+flipCount+'deg); transition-duration: 1s;');
  }
  flipCount += 90
};

var walls = [
  Matter.Bodies.rectangle(window.innerWidth/2, 0, 4000, 50, { isStatic: true,render: {
    fillStyle: 'transparent',} }),
  Matter.Bodies.rectangle(window.innerWidth/2, window.innerHeight, 4000, 50, { isStatic: true,render: {
    fillStyle: 'transparent',} }),
  Matter.Bodies.rectangle(window.innerWidth, window.innerHeight/2, 50, 4000, { isStatic: true,render: {
    fillStyle: 'transparent',} }),
  Matter.Bodies.rectangle(0, window.innerHeight/2, 50, 4000, { isStatic: true,render: {
    fillStyle: 'transparent',} })
]


window.addEventListener("resize", testFunc);
Matter.World.add(world, linkBodies);
Matter.World.add(world, fillers);
Matter.World.add(world, [walls[1],walls[2],walls[3]
]);


setTimeout(function(){Matter.World.add(world,walls[0]);}, 4000);
Matter.Engine.run(engine);
Matter.Render.run(render);

function testFunc() {
    Matter.Body.setPosition(walls[2], { x: window.innerWidth, y: window.innerHeight / 2 });
    Matter.Body.setPosition(walls[1], { x: window.innerWidth / 2, y: window.innerHeight });
    
    
};
var canvasmouse = Mouse.create(myCanvas);
var options = {
    body:null,
    mouse:canvasmouse,
    constraint:{
      stiffness:0,
      render:{
        visible:false
      }  
    },
   
};

function invertGrav(){
  if(cycle == 0){
    engine.world.gravity.y = 0
    engine.world.gravity.x = -0.5;
    cycle += 1
  } else if (cycle == 1){
    engine.world.gravity.x = 0
    engine.world.gravity.y = -0.5;
    cycle += 1
  }else if (cycle == 2){
    engine.world.gravity.y = -0.3;
    engine.world.gravity.x = 0.5
    cycle += 1
  }else if (cycle == 3){
    engine.world.gravity.x = 0;
    engine.world.gravity.y = 0.35;
    cycle = 0
  } 
}



mConstraint = MouseConstraint.create(engine,options);
console.log(mConstraint)
Matter.World.add(world,mConstraint);



Matter.Events.on(mConstraint,'mousedown',function(event){
    if(mConstraint.body == null){
      console.log(mConstraint);

    }else{
      if(mConstraint.body.label != null){
        a = mConstraint.body;
        a.force = {x:0,y:-17.5};
  
        if(a.label.includes("squarelink")){
          window.open('https://www.google.com', '_blank');
          mConstraint.body = null;
        }
        
      }
    }
});


Matter.Events.on(mConstraint, 'mousemove', function(event) {
  mousepos = event.mouse.absolute;
  list = Matter.Query.point(linkBodies,mousepos)
  if(list.length == 0){
    for(var i = 0;i < linkBodies.length;i++){
      linkBodies[i].render.sprite.texture = null;
      linkBodies[i].render.fillStyle="transparent";
    }
    // if(returnColor != null){
    //   returnColor.render.fillStyle="transparent";
    //   returnColor.render.sprite.texture = null;
    // } else {
    //   return;
    // }
    return;
  } else if (list.length != 0){
    if(list[0].label == 'squarelink1'){
      list[0].render.sprite.texture = 'images/sizedgoogle.png'
      returnColor = list[0]
    } else if (list[0].label == 'squarelink2'){
      list[0].render.sprite.texture = 'images/sizedyoutube.png'
      returnColor = list[0]
    } else if (list[0].label == 'squarelink3'){
      list[0].render.sprite.texture = 'images/sizedgoogle.png'
      returnColor = list[0]
    }else if (list[0].label == 'squarelink4'){
      list[0].render.sprite.texture = 'images/sizedgoogle.png'
      returnColor = list[0]
    }else if (list[0].label == 'squarelink5'){
      list[0].render.sprite.texture = 'images/sizedgoogle.png'
      returnColor = list[0]
    }else if (list[0].label == 'squarelink6'){
      list[0].render.sprite.texture = 'images/sizedgoogle.png'
      returnColor = list[0]
    }else if (list[0].label == 'squarelink7'){
      list[0].render.sprite.texture = 'images/sizedgoogle.png'
      returnColor = list[0]
    }else if (list[0].label == 'squarelink8'){
      list[0].render.sprite.texture = 'images/sizedgoogle.png'
      returnColor = list[0]
    }
    
  }

  
});



// a.render.sprite = {
//   xOffset:0.5,
//   xScale:1,
//   yOffset:0.5,
//   yScale:1,
//   texture:'texture.jpg',
// }