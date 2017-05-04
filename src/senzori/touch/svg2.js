document.getElementById("svg").addEventListener("touchstart",draw);

function random_color(){
	var s = "0123456789ABCDEF"
		var color="#";
		for(var i=0;i<6;i++){
			var j = Math.floor(Math.random()*15);
			color+= s[j];
		}
		return color;
}

function draw(evt){
	for(var i=0;i<evt.touches.length;i++){
		var t = evt.touches[i];
		var color = random_color();
		var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
		c.setAttribute("cx", t.pageX);
		c.setAttribute("cy", t.pageY);
		c.setAttribute("r", 50);
		c.setAttribute("stroke", color);
		c.setAttribute("fill",color);
		svg.appendChild(c);
	}
}