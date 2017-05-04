var c1 = document.getElementById("cerc1");
c1.addEventListener("touchmove",ontouchmove);

function ontouchmove(e){
	var t = e.changedTouches[0];
	var x = c1.getAttribute("cx");

	c1.setAttribute("cx",t.pageX);
	c1.setAttribute("cy",t.pageY);
}