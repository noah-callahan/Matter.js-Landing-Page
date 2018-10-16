


var blink1 = Matter.Bodies.rectangle(window.innerWidth/1.5, -1300, 100,100, {
    label: "squarelink1",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'https://www.google.com/',
    isStatic:false,
    render: {
      fillStyle: 'transparent',
      strokeStyle: '#424248',
      lineWidth: 2,
    }, 
  });

var blink2 = Matter.Bodies.rectangle(window.innerWidth/2, -1500, 100,100, {
  label: "squarelink2",
  density: 0.04,
  friction: 1,
  frictionAir: 0.00001,
  restitution: 0.6,
  url:'https://www.youtube.com/',
  isStatic:false,
  render: {
    fillStyle: 'transparent',
    strokeStyle: '#424248',
    lineWidth: 2,
  }, 
});

var blink3 = Matter.Bodies.rectangle(window.innerWidth/3, -1400, 100,100, {
  label: "squarelink3",
  density: 0.04,
  friction: 1,
  frictionAir: 0.00001,
  restitution: 0.6,
  url:'https://www.twitch.tv/',
  isStatic:false,
  render: {
    fillStyle: 'transparent',
    strokeStyle: '#424248',
    lineWidth: 2,
  }, 
});

var blink4 = Matter.Bodies.rectangle(window.innerWidth - 110, -1500, 100,100, {
    label: "squarelink4",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'https://www.reddit.com/',
    isStatic:false,
    render: {
      fillStyle: 'transparent',
      strokeStyle: '#424248',
      lineWidth: 2,
    }, 
  });

  var blink5 = Matter.Bodies.rectangle(window.innerWidth/1.3, -1700, 100,100, {
    label: "squarelink5",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'https://www.instagram.com/',
    isStatic:false,
    render: {
      fillStyle: 'transparent',
      strokeStyle: '#424248',
      lineWidth: 2,
    }, 
  });

  var blink6 = Matter.Bodies.rectangle(window.innerWidth/4, -1450, 100,100, {
    label: "squarelink6",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'https://www.google.com/',
    isStatic:false,
    render: {
      fillStyle: 'transparent',
      strokeStyle: '#424248',
      lineWidth: 2,
    }, 
  });

  var blink7 = Matter.Bodies.rectangle(200, -1250, 100,100, {
    label: "squarelink7",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'https://www.google.com/',
    isStatic:false,
    render: {
      fillStyle: 'transparent',
      strokeStyle: '#424248',
      lineWidth: 2,
    }, 
  });

  var blink8 = Matter.Bodies.rectangle(100, -1700, 100,100, {
    label: "squarelink8",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'https://www.google.com/',
    isStatic:false,
    render: {
      fillStyle: 'transparent',
      strokeStyle: '#424248',
      lineWidth: 2,
    }, 
  });

//sm circles

var linkBodies = [blink1,blink2,blink3,blink4,blink5,blink6,blink7,blink8];
var googlesprite = {xScale: 1, yScale: 1, xOffset: 0.5000000000000001, yOffset: 0.5,texture:'sizedgoogle.png'}