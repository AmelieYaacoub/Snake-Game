import { globalAgent } from "http";

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