window.addEventListener("deviceorientation",ondeviceorientation);

function ondeviceorientation(evt){
	var alpha = evt.alpha;
	var beta = evt.beta;
	var gamma = evt.gamma;

	document.getElementById("a").innerHTML = "Alpha =" + alpha;
	document.getElementById("b").innerHTML = "Beta =" + beta;
	document.getElementById("c").innerHTML = "Gamma =" +gamma;


	var canvas = document.getElementById("cnv");
	var context = canvas.getContext("2d");

	var raza = 50;
	var centru = {x:canvas.width/2, y:canvas.height/2};

	context.clearRect(0,0,canvas.width,canvas.height);
	context.beginPath();
	context.arc(centru.x+gamma*(canvas.width/2 - raza)/90,centru.y+beta*(canvas.height/2-raza)/90,raza,0,2*Math.PI);
	context.stroke();

}