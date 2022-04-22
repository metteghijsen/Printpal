/**
 * Draws a line between two points.           
 * @param {number} x - the x coordinate of the first point.           
 * @param {number} y - the y coordinate of the first point.           
 * @param {number} x2 - the x coordinate of the second point.           
 * @param {number} y2 - the y coordinate of the second point.           
 * @param {string} color - the color of the line.           
 * @param {number} lineWidth - the width of the line.           
 * @returns None           
 */
let canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

/**
 * A function that takes in two strings and returns the sum of the two.           
 * @param {string} x - the first string to add           
 * @param {string} y - the second string to add           
 * @returns {string} the sum of the two strings           
 */
const x = "black",
      y = 2;

/**
 * Initializes the canvas and adds event listeners.           
 * @returns None           
 */
function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function(e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function(e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function(e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function(e) {
        findxy('out', e)
    }, false);
}

/**
 * Takes in a string of code and adds the correct amount of spaces to the beginning of each line.           
 * @param {string} code - the code to format           
 * @param {number} [spaces=0] - the number of spaces to indent the code           
 * @returns None           
 */
function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break
        case "blue":
            x = "blue";
            break
        case "red":
            x = "red";
            break
        case "yellow":
            x = "yellow"
            break
        case "orange":
            x = "orange";
            break
        case "black":
            x = "black";
            break
        case "white":
            x = "white";
            break
    }
    if (x == "white") y = 14;
    else y = 2;
}

/**
 * Draws a line from the previous point to the current point.           
 * @param {number} prevX - the x coordinate of the previous point.           
 * @param {number} prevY - the y coordinate of the previous point.           
 * @param {number} currX - the x coordinate of the current point.           
 * @param {number} currY - the y coordinate of the current point.           
 * @param {string} x - the color of the line.           
 * @param {number} y - the width of the line.           
 * @returns None           
 */
function draw() {
    ctx.beginPath();
    ctx.moveTO(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

/**
 * Erases the canvas and hides the image.           
 * @returns None           
 */
function erase() {
    const m = confirm("Want to clear?");
    if(m){
        ctx.clearRect(0, 0, w, h);
        document.getElementById(canvasimg).style.display = "none";
    }
}

