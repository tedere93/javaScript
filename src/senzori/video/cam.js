var video = document.getElementById("video");
video.addEventListener("touchstart",capteaza);
video.addEventListener("mousedown",capteaza);

function onCamSuccess(stream) {
	video.srcObject = stream;
}

function onCamError(err){
	alert("cacevanu-ibine.com");
}

var constraints = {audio: true, video: true};
navigator.mediaDevices.getUserMedia(constraints).then(onCamSuccess).catch(onCamError);


function capteaza(){
	var c = document.getElementById("canvas");
	c.width = video.width;
	c.height = video.height;
	var ctx = c.getContext("2d");
	ctx.drawImage(video,0,0,640,480);
}

