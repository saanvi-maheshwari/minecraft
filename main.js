canvas = new fabric.Canvas("myCanvas");

player_x = 400;
player_y = 200;

player_height = 140;
player_width = 150;

block_height = 50;
block_width = 50;

player_object = "";
block_object = "";
// In fabric.js images are stored in canvas as objects,
//  so as we add an object, we also can delete the same object.
//  It simply means that we can add and delete images using objects.

function player_upload() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(player_width);
        player_object.scaleToHeight(player_height);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function block_upload(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", mykeyDown);

function mykeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "87") {
        block_upload("wall.jpg");
        console.log("W");
    }
    if (keyPressed == "87") {
        block_upload("wall.jpg");
        console.log("W");
    }
    if (keyPressed == "71") {
        block_upload("ground.png");
        console.log("G");
    }
    if (keyPressed == "76") {
        block_upload("light_green.png");
        console.log("LG");
    }
    if (keyPressed == "84") {
        block_upload("trunk.jpg");
        console.log("T");
    }
    if (keyPressed == "82") {
        block_upload("roof.jpg");
        console.log("R");
    }
    if (keyPressed == "89") {
        block_upload("yellow_wall.png");
        console.log("YW");
    }
    if (keyPressed == "68") {
        block_upload("dark_green.png");
        console.log("DG");
    }
    if (keyPressed == "85") {
        block_upload("unique.png");
        console.log("U");
    }
    if (keyPressed == "67") {
        block_upload("cloud.jpg");
        console.log("C");
    }
    // arrow keys
    if (keyPressed == "38") {
        up();
        console.log("UP!");
    }
    if (keyPressed == "40") {
        down();
        console.log("DOWN!");
    }
    if (keyPressed == "37") {
        left();
        console.log("LEFT!");
    }
    if (keyPressed == "39") {
        right();
        console.log("Right");
    }
}

