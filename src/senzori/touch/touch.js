window.addEventListener("touchstart",ontouchstart);

function ontouchstart(event){
	var touches = event.changedTouches;
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	for(var i = 0; i < touches.lenght;i++){
		ctx.beginPath();
		ctx.arc(touches[i].pageX, touches[i].pageY,5,0,0);
		ctx.stroke();
	}
}
