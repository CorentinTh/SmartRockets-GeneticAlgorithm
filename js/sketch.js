var generation;
var count = 0;
var countParagraphe;
var aime;
var obstacleManager;
var sliderSkipper;
var sliderMutation;

var config = {
    lifeSpan: 400,
    maxForce: 0.3,
    generationStep: 100,
    skipDrawing: false,
    mutation: 0.01
}

function setup() {
    var canvas = createCanvas(800, 600);
    canvas.parent("canvas-container");
    generation = new Generation();
    aime = createVector(width / 2, 50);
    noStroke();

    sliderSkipper = createSlider(1, 500, 100, 1);
    sliderSkipper.parent("slider1");

    obstacleManager = new ObstacleManager();
    obstacleManager.obstacles.push(new Obstacle(200, height / 2, width - 400, 10));
    obstacleManager.obstacles.push(new Obstacle(0, height / 4, width - 600, 10));
    obstacleManager.obstacles.push(new Obstacle(600, height / 4, width, 10));


    obstacleManager.obstacles.push(new Obstacle(width / 2 - 150, height / 4, 300, 10));
}

function draw() {
    config.generationStep = sliderSkipper.value();

    background(40, 48, 51);
    fill(248, 90);
    ellipse(aime.x, aime.y, 30);

    generation.run();

    obstacleManager.draw();

    fill(255, 90);
    textSize(15);
    textAlign(LEFT, TOP);
    text("Generation: " + generation.nbGeneration + "\n" +
        "Mutation rate: " + config.mutation + "\n" +
        "Frame: " + count + "/" + config.lifeSpan, 10, 10);
}



/*

function draw() {
    background(40, 48, 51);
    fill(248, 90);
    ellipse(aime.x, aime.y, 30);

    generation.run();

    if (++count >= config.lifeSpan) {
        generation.evaluate();
        generation.selection();
        count = 0;
    }

    obstacleManager.draw();

    fill(255, 90);
    textSize(20);
    textAlign(LEFT, TOP);
    text(count + "\n", 10, 10);
}

*/
