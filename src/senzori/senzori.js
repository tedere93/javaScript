window.addEventListener("deviceorientation",ondeviceorientation);

function ondeviceorientation(evt){
	var alpha = evt.alpha;
	var beta = evt.beta;
	var gamma = evt.gamma;

	document.getElementById("a").innerHTML = "Alpha =" + alpha;
	document.getElementById("b").innerHTML = "Beta =" + beta;
	document.getElementById("c").innerHTML = "Gamma =" +gamma;

}