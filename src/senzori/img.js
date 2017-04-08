window.addEventListener("deviceorientation",ondeviceorientation);

var img = document.getElementById("img");


function ondeviceorientation(evt){
	var alpha = evt.alpha;
	var beta = evt.beta;
	var gamma = evt.gamma;

	document.getElementById("a").innerHTML = "Alpha =" + alpha;
	document.getElementById("b").innerHTML = "Beta =" + beta;
	document.getElementById("c").innerHTML = "Gamma =" +gamma;


	var canvas = document.getElementById("cnv");
	var context = canvas.getContext("2d");
	var latura_patrat = 50;
	//var raza = 50;
	var centru = {x:canvas.width/2, y:canvas.height/2};

	context.setTransform(1,0,0,1,0,0);
	context.clearRect(0,0,canvas.width,canvas.height);
	context.translate(centru.x,centru.y);
	context.rotate(alpha * Math.PI/180);
	
		
	context.beginPath();
	context.drawImage(img, - latura_patrat / 2 * (-beta) *(canvas.width/2 - latura_patrat * 1.42/2 )/90,- latura_patrat / 2 * gamma * (canvas.height/2 - latura_patrat * 1.42/2)/90);
	context.stroke();


}