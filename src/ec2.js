function read(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;

	var coef=[a,b,c];

	return coef;
}

function solveDelta(coef){
	var deltaa=coef[1]*coef[1] - 4*coef[0]*coef[2];
	return deltaa;

}

function solveRoots(coef,delta){
	var x1=x2=x1im=x2im=0;
	if(delta==0){
		x1=(-coef[1])/(2*coef[0]);
		x2=(-coef[1])/(2*coef[0]);
	}
	else if(delta<0) {
		x1=(-coef[1])/2*coef[0];
		x1im=Math.sqrt(-delta)/2*coef[0];
		x2=(-coef[1])/2*coef[0];
		x2im=-Math.sqrt(-delta)/2*coef[0];
		// document.getElementById("x1").innerHTML =x1.toString()+"+"+x1im.toString()+"i";
		// document.getElementById("x2").innerHTML =x2.toString()+x2im.toString()+"i";	
	}
	else if(delta>0){
		x1 = ((-coef[1])+Math.sqrt(delta))/(2*coef[0]);
		x2 = ((-coef[1])-Math.sqrt(delta))/(2*coef[0]);
		// document.getElementById("x1").innerHTML = "x1 =" + x1;
		// document.getElementById("x2").innerHTML = "x2 =" + x2;
	}
	var radacini=[x1,x2,x1im,x2im];
	return radacini;
}

function showAnswer(radacini){

	document.getElementById("x1").innerHTML = "x1 =" + radacini[0] + "+" + radacini[2] + "i";
	document.getElementById("x2").innerHTML = "x2 =" + radacini[1] + radacini[3] + "i";
}

function solve(){
			x1=x2=x1im=x2im=0;
			var coef = read();
			var deltaa = solveDelta(coef);
			var radacini=solveRoots(coef,deltaa);
			
			// document.getElementById("delta").innerHTML = "Delta=" + delta;
			showAnswer(radacini);
			document.getElementById("delta").innerHTML = "Delta=" + deltaa;
			document.getElementById("aa").innerHTML = "a= " + coef[0];
			document.getElementById("bb").innerHTML = "b= " + coef[1];
			document.getElementById("cc").innerHTML = "c= " + coef[2];



			
		}	
