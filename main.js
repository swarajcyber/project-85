canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
car_width=75
car_heigth=100
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x=5
car_y=255

function add() {
	background_imgtag=new Image()
    background_imgtag.onload=uploadBackground
    background_imgtag.src=background_img

    rover_imgtag=new Image()
    rover_imgtag.onload=uploadgreencar
    rover_imgtag.src=greencar_image

}

function uploadBackground() {
	ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgtag,car_x,car_y,car_width,car_height) 

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y>0){
        car_y=car_y-10
        uploadBackground()
        uploadgreencar()
    }
}

function down()
{
	if(car_y<500){
        car_y=car_y+10
        uploadBackground()
        uploadgreencar()
    }
}

function left()
{
	if(car_x<700){
        car_x=car_x+10
        uploadBackground()
        uploadgreencar()
    }
}

function right()
{
	if(car_x>0){
        car_x=car_x-10
        uploadBackground()
        uploadgreencar()
    }
}
