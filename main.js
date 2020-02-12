import { builtinModules } from "module";

//Setup

var mycanvas = document.getElementById('mycanvas');
var context = mycanvas.getContext('2d');
var snakeSize = 10;
var w = 350;
var h = 350;
var goal = 0;
var food;
var snake;



var objects = (function () {
    var snakeBody = function (x, y) {
        context.fillStyle = "white";
        context.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        context.strokeStyle = "grey";
        context.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }

    var food = function (x, y) {
        context.fillStyle = "green";
        context.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
    }

    var goal = function () {
        var goal_text = "Dein Score: " + goal;
        context.fillStyle = "Blue";
        context.fillText(score_text, 145, h-5);
    }
})


//The actual drawing of the Game

//Drawing the Snake

var snakeDraw = function(){
    snake = []; //Snake is an empty array
    var length = 4;

    for (var i = length; i>=0; i--){
        snake.push({x:i, y:0});
    }
}

//Drawing the food

var foodDraw = function() {
    food = {
        x: Math.floor((Math.random()*30) +1),
        y: Math.floor((Math.random()*30) +1)
    } //food location
    //followed by: What if food and snake share same location
    for (var i = 0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;

        if (food.x === snakeX || food.y === snakeY || food.x === snakeX && food.y === snakeY) {
            food.x = Math.floor((Math.random() *30) +1);
            food.y = Math.floor((Math.random() *30) +1);
        }
    }
}

var snakeEatHimself = function (x, y, array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
    }
    return false;
}


//Movement

var movement = function () {
    context.fillStyle = 'lightgrey';
    context.fillRect(0, 0, w, h);
    context.strokeStyle = "black";
    context.strokeRect(0, 0, w, h);

    btn.setAttribute("disabled", true);

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    if (direction == 'right') {
        snakeX++;
    } else if (direction == 'left') {
        snakeX--;
    } else if (direction == 'up') {
        snakeY++;
    } else if (direction == 'down') {
        snakeY--;
    }


    if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || snakeEatHimself(snakeX, snakeY, snake)) {
        btn.setAttribute('disabled', true);

        context.clearRect(0, 0, w, h);
        gameloop = clearInterval(gameloop);
        return;
    }
}