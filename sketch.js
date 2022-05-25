var background, bgImg;
var circleOL, circleImg, circlesGroupOL;
var circleIL, circlesGroupIL;
var circleIR, circlesGroupIR;
var circleOR, circlesGroupOR;

var score = 0;
var rstart = true;
var circleVelocity = 15;
var input, button, greeting;
gameState = "start"
var z, y;

var countOL = 0;
var countIL = 0;
var countIR = 0;
var countOR = 0;

var incOL = 60;
var incIL = 60;
var incIR = 60;
var incOR = 60;

var xOL = 60;
var xIL = 60;
var xIR = 60;
var xOR = 60;

var val = 0

function preload(){
    circleImg = loadImage("Circle.png");
    bgImg = loadImage("Bg3.jpg");
}

function setup() {
    createCanvas(1200, 800);
    
    circlesGroupOL = createGroup();
    circlesGroupIL = createGroup();
    circlesGroupIR = createGroup();
    circlesGroupOR = createGroup();

}
function createCircleOL() {
    circleOL = createSprite(50, 50);
    circleOL.addImage("Circle", circleImg);
    circleOL.x = 415;
    circleOL.y = -200;
    circleOL.scale = 0.3;
    circleOL.velocityY = circleVelocity;
    circlesGroupOL.push(circleOL)

}

function createCircleIL() {
    circleIL = createSprite(50, 50);
    circleIL.addImage("Circle", circleImg);
    circleIL.x = 630;
    circleIL.y = -200;
    circleIL.scale = 0.3;
    circleIL.velocityY = circleVelocity;
    circlesGroupIL.push(circleIL)

}

function createCircleIR() {
    circleIR = createSprite(50, 50);
    circleIR.addImage("Circle", circleImg);
    circleIR.x = 860;
    circleIR.y = -200;
    circleIR.scale = 0.3;
    circleIR.velocityY = circleVelocity;
    circlesGroupIR.push(circleIR)

}

function createCircleOR() {
    circleOR = createSprite(50, 50);
    circleOR.addImage("Circle", circleImg);
    circleOR.x = 1090;
    circleOR.y = -200;
    circleOR.scale = 0.3;
    circleOR.velocityY = circleVelocity;
    circlesGroupOR.push(circleOR)

}

function keyTyped() {
    console.log(key)
    if(key == "r") {

        circlesGroupOL.destroyEach();
        countOL = circlesGroupOL.length
        incOL = 60

        circlesGroupIL.destroyEach();
        countIL = circlesGroupIL.length
        incIL = 60

        circlesGroupIR.destroyEach();
        countIR = circlesGroupIR.length
        incIR = 60

        circlesGroupOR.destroyEach();
        countOR = circlesGroupOR.length
        incOR = 60

        circleVelocity = 10;
        frameCount = 0;
        xOL = 60;
        xIL = 60;
        xIR = 60;
        xOR = 60;
        score = 0;
        val = 0;
        gameState = "start";

    }
    if(key == "d" && circlesGroupOL.includes(circleOL) && circlesGroupOL[countOL].y >= 630 && circlesGroupOL[countOL].y <= 850) {
        circlesGroupOL[countOL].destroy();

        circlesGroupOL.splice(0,1,circlesGroupOL[countOL]);
        circlesGroupOL[countOL].remove()
        
        score += 1;
        countOL += 1;

    }
    if(key == "f" && circlesGroupIL.includes(circleIL) && circlesGroupIL[countIL].y >= 630 && circlesGroupIL[countIL].y <= 850) {
        circlesGroupIL[countIL].destroy();

        circlesGroupIL.splice(0,1,circlesGroupIL[countIL]);
        circlesGroupIL[countIL].remove()
        
        score += 1;
        countIL += 1;

    }
    if(key == "j" && circlesGroupIR.includes(circleIR) && circlesGroupIR[countIR].y >= 630 && circlesGroupIR[countIR].y <= 850) {
        circlesGroupIR[countIR].destroy();

        circlesGroupIR.splice(0,1,circlesGroupIR[countIR]);
        circlesGroupIR[countIR].remove()
        
        score += 1;
        countIR += 1;

    }
    if(key == "k" && circlesGroupOR.includes(circleOR) && circlesGroupOR[countOR].y >= 630 && circlesGroupOR[countOR].y <= 850) {
        circlesGroupOR[countOR].destroy();

        circlesGroupOR.splice(0,1,circlesGroupOR[countOR]);
        circlesGroupOR[countOR].remove()
        
        score += 1;
        countOR += 1;

    }

    }



function draw() {
    background(bgImg, 0);

    if(gameState == "start") {
    
    val += 1;

    if(val == 100) {
        incOL -= Math.ceil(Math.random() * 11)
        incIL -= Math.ceil(Math.random() * 10)
        incIR -= Math.ceil(Math.random() * 7)
        incOR -= Math.ceil(Math.random() * 7)
    }
    if(val == 300) {
        incOL -= Math.ceil(Math.random() * 7)
        incIL -= Math.ceil(Math.random() * 8)
        incIR -= Math.ceil(Math.random() * 4)
        incOR -= Math.ceil(Math.random() * 10)
    }
    if(val == 400) {
        incOL -= Math.ceil(Math.random() * 5)
        incIL -= Math.ceil(Math.random() * 9)
        incIR -= Math.ceil(Math.random() * 8)
        incOR -= Math.ceil(Math.random() * 12)
    }
    if(val == 600) {
        incOL -= Math.ceil(Math.random() * 7)
        incIL -= Math.ceil(Math.random() * 12)
        incIR -= Math.ceil(Math.random() * 7)
        incOR -= Math.ceil(Math.random() * 7)
    }
    if(val == 800) {
        incOL -= Math.ceil(Math.random() * 4)
        incIL -= Math.ceil(Math.random() * 7)
        incIR -= Math.ceil(Math.random() * 6)
        incOR -= Math.ceil(Math.random() * 7)
    }
    if(val == 1000) {
        incOL -= Math.ceil(Math.random() * 12)
        incIL -= Math.ceil(Math.random() * 6)
        incIR -= Math.ceil(Math.random() * 7)
        incOR -= Math.ceil(Math.random() * 9)
    }
    if(val == 1200) {
        incOL -= Math.ceil(Math.random() * 7)
        incIL -= Math.ceil(Math.random() * 9)
        incIR -= Math.ceil(Math.random() * 7)
        incOR -= Math.ceil(Math.random() * 7)
    }
    if(val == 1300) {
        incOL -= Math.ceil(Math.random() * 7)
        incIL -= Math.ceil(Math.random() * 7)
        incIR -= Math.ceil(Math.random() * 8)
        incOR -= Math.ceil(Math.random() * 8)
    }
    if(val == 1500) {
        incOL -= Math.ceil(Math.random() * 7)
        incIL -= Math.ceil(Math.random() * 5)
        incIR -= Math.ceil(Math.random() * 7)
        incOR -= Math.ceil(Math.random() * 8)
    }
    if(val == 1800) {
        incOL -= Math.ceil(Math.random() * 6)
        incIL -= Math.ceil(Math.random() * 7)
        incIR -= Math.ceil(Math.random() * 4)
        incOR -= Math.ceil(Math.random() * 5)
    }
    if(val == 2100) {
        incOL -= Math.ceil(Math.random() * 7)
        incIL -= Math.ceil(Math.random() * 8)
        incIR -= Math.ceil(Math.random() * 7)
        incOR -= Math.ceil(Math.random() * 12)
    }
    if(val == 2300) {
        incOL -= Math.ceil(Math.random() * 7)
        incIL -= Math.ceil(Math.random() * 8)
        incIR -= Math.ceil(Math.random() * 10)
        incOR -= Math.ceil(Math.random() * 9)
    }
    if(val == 2500) {
        incOL -= Math.ceil(Math.random() * 2)
        incIL -= Math.ceil(Math.random() * 4)
        incIR -= Math.ceil(Math.random() * 8)
        incOR -= Math.ceil(Math.random() * 7)
    }
    if(val == 2600) {
        incOL -= Math.ceil(Math.random() * 7)
        incIL -= Math.ceil(Math.random() * 7)
        incIR -= Math.ceil(Math.random() * 4)
        incOR -= Math.ceil(Math.random() * 5)
    }
    if(val == 2700) {
        incOL -= Math.ceil(Math.random() * 5)
        incIL -= Math.ceil(Math.random() * 7)
        incIR -= Math.ceil(Math.random() * 8)
        incOR -= Math.ceil(Math.random() * 9)
    }
    if(val == 2800) {
        incOL -= Math.ceil(Math.random() * 3)
        incIL -= Math.ceil(Math.random() * 7)
        incIR -= Math.ceil(Math.random() * 8)
        incOR -= Math.ceil(Math.random() * 6)
    }
    if(val == 3000) {
        incOL -= Math.ceil(Math.random() * 7)
        incIL -= Math.ceil(Math.random() * 9)
        incIR -= Math.ceil(Math.random() * 8)
        incOR -= Math.ceil(Math.random() * 12)
    }
    if(val == 3200) {
        incOL -= Math.ceil(Math.random() * 10)
        incIL -= Math.ceil(Math.random() * 12)
        incIR -= Math.ceil(Math.random() * 13)
        incOR -= Math.ceil(Math.random() * 12)
    }

    if(frameCount == xOL) {
        xOL += incOL;
        createCircleOL();
    }
    if(frameCount == xIL) {
        xIL += incIL;
        createCircleIL();
    }
    if(frameCount == xIR) {
        xIR += incIR;
        createCircleIR();
    }
    if(frameCount == xOR) {
        xOR += incOR;
        createCircleOR();
    }

    textSize(50);
    fill(255, 255, 255);
    text("Score: " + score, 30, 125)


    if(frameCount >= 60) {
        for(var i=0; i<circlesGroupOL.length; i++) {
            if(circlesGroupOL[i].y >= 860) {
                gameState = "end"
            }
        }
        for(var i=0; i<circlesGroupIL.length; i++) {
            if(circlesGroupIL[i].y >= 860) {
                gameState = "end"
            }
        }
        for(var i=0; i<circlesGroupIR.length; i++) {
            if(circlesGroupIR[i].y >= 860) {
                gameState = "end"
            }
        }
        for(var i=0; i<circlesGroupOR.length; i++) {
            if(circlesGroupOR[i].y >= 860) {
                gameState = "end"
            }
        }
}
    
}
    if(gameState == "end") {
        if(circlesGroupOL.length > 1) {
        circlesGroupOL.setVelocityYEach(0);
        } else if(circlesGroupOL.length == 1) {
            circleGroupOL[0].velocityY = 0;
        }
        if(circlesGroupIL.length > 1) {
        circlesGroupIL.setVelocityYEach(0);
        } else if(circlesGroupIL.length == 1) {
            circleGroupIL[0].velocityY = 0;
        }
        if(circlesGroupIR.length > 1) {
        circlesGroupIR.setVelocityYEach(0);
        } else if(circlesGroupIR.length == 1) {
            circleGroupIR[0].velocityY = 0;
        }
        if(circlesGroupOR.length > 1) {
        circlesGroupOR.setVelocityYEach(0);
        } else if(circlesGroupOR.length == 1) {
            circleGroupOR[0].velocityY = 0;
        }
        textSize(75);
        fill(255, 255, 255);
        text("Game over!", 500, 400);

        textSize(50);
        fill(255, 255, 255);
        text("Score: " + score, 30, 125)

    }
    //112kL
    drawSprites();
}
