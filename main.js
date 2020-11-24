canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_images = ["img1.jpg", "img2.jpg", "img3.jpg"];
random_number = Math.floor(Math.random() * 3);
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car12height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
var background_image = 'racing.jpg';
rover_image = 'rover.png';

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1();
    car1_imgTag.src = car1_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("up arrow key");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("down arrow key");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log("left arrow key");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("right arrow key");
    }
    if (keyPressed == '87') {
        car2_up();
        console.log("key w");
    }
    if (keyPressed == '83') {
        car2_down();
        console.log("key s");
    }
    if (keyPressed == '65') {
        car2_left();
        console.log("key a");
    }
    if (keyPressed == '68') {
        car2_right();
        console.log("key d");
    }
}

function up() {
    if (car1_y > 0) {
        car1_y = car1_y - 10;
        console.log("x=" + car1_x, "y=" + car1_y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("x=" + car1_x, "y=" + car1_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (car1_x > 0) {
        car1_x = car1_x - 10;
        console.log("x=" + car1_x, "y=" + car1_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (car1_x < 500) {
        car1_x = car1_x + 10;
        console.log("x=" + car1_x, "y=" + car1_y);
        uploadBackground();
        uploadrover();
    }
}
if (car1_x > 700) {
    console.log("car1 won");
    document.getElementById('game_status').innerHTML = "Car1 Won";
}
if (car2_x > 700) {
    console.log("car2 won");
    document.getElementById('game_status').innerHTML = "Car2 Won";
}