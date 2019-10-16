var bird;
var pipes = [];
var birdSprite;
var topPipeSprite;
var bottomPipeSprite;
var backgroundSprite;
var groundSprite;
var panSpeed = 8;
var ground;
var playerScore;
var highScore;
var hit;

function preload() {
    birdSprite = loadImage("images/bird.png");
    topPipeSprite = loadImage("images/full pipe top.png");
    bottomPipeSprite = loadImage("images/full pipe bottom.png");
    backgroundSprite = loadImage("images/background.png");
    groundSprite = loadImage("images/ground.png");
    playerScore = 0;
    highScore = 0;
}

function setup() {
    createCanvas(600,600);
    textAlign(CENTER, CENTER);
    ground = new Ground();
    bird = new Bird();
    pipes.push(new Pipes());
    var button = createButton("reset");
    button.mousePressed(resetSketch);
    hit = false;
}

function resetSketch() {
    console.log("Redraw");
    hit = false;
    ground = new Ground();
    playerScore = 0;
    bird.y = height/2;
    bird.velY = -15;
    pipes = [];
    panSpeed = 8;
    bird.update;
    bird.show;
}

function draw() {
    image(backgroundSprite, 0, 0, width, height);

    ground.show();
    ground.update();

    textSize(20);
    text('Score: ', 40, 30);
    text(playerScore, 30, 60);
    text('HighScore: ', width-100, 30);
    text(highScore, width-100, 60);


    if (ground.hitsGround(bird)) {
        panSpeed = 0;
        fill(0, 102, 153);
        textSize(80);
        text('Game Over', width/2, height/2);
        hit = true;
        //text('I love Jennifer', 50, 200);
    }

    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            panSpeed = 0;
            fill(0, 102, 153);
            textSize(80);
            text('Game Over', width/2, height/2);
            hit = true;
            //text('I love Jennifer', 50, 200);
        }

        pipes[i].score();
        if(playerScore > highScore) {
            highScore = playerScore;
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

    bird.update();
    bird.show();

    if (frameCount % 70 === 0) {
        pipes.push(new Pipes());
    }
}

function keyPressed() {
    if (key == ' ' && panSpeed != 0 && !hit) {
        console.log("SPACE");
        bird.up();
    }
}