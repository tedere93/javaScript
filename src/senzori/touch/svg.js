var c1 = document.getElementById("cerc1");
c1.addEventListener("touchmove",ontouchmove);
var c2 = document.getElementById("cerc2");
c2.addEventListener("touchmove",ontouchmove);


function ontouchmove(e){
	for(var i=0;i<e.changedTouches.length;i++){
		var t = e.changedTouches[i];
		var c = t.target;
		c.setAttribute("cx",t.pageX);
		c.setAttribute("cy",t.pageY);	
	}
}
