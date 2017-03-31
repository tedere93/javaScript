function read(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;

	var coef=[a,b,c];

	return coef;
}

function solveDelta(coef){
	var delta=coef[1]*coef[1] - 4*coef[0]*coef[2];
	return delta;

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
	}
	else if(delta>0){
		x1 = ((-coef[1])+Math.sqrt(delta))/(2*coef[0]);
		x2 = ((-coef[1])-Math.sqrt(delta))/(2*coef[0]);
	}
	var radacini=[x1,x2,x1im,x2im];
	return radacini;
}

function showAnswer(radacini){
	if(radacini[2]||radacini[3]!=0){
		document.getElementById("x1").innerHTML = "x1 =" + radacini[0] + "+" + radacini[2] + "i";
		document.getElementById("x2").innerHTML = "x2 =" + radacini[1] + radacini[3] + "i";
	}
	else{
		document.getElementById("x1").innerHTML = "x1 =" + radacini[0];
		document.getElementById("x2").innerHTML = "x2 =" + radacini[1];
	} 
	}

function solve(){
			// x1=x2=x1im=x2im=0;
			var coef = read();
			var delta = solveDelta(coef);
			var radacini=solveRoots(coef,delta);
			showAnswer(radacini);
			document.getElementById("delta").innerHTML = "Delta=" + delta;
			document.getElementById("aa").innerHTML = "a= " + coef[0];
			document.getElementById("bb").innerHTML = "b= " + coef[1];
			document.getElementById("cc").innerHTML = "c= " + coef[2];



			
		}	
