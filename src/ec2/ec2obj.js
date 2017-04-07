// function read(){
// 	var _a = document.getElementById("a").value;
// 	var _b = document.getElementById("b").value;
// 	var _c = document.getElementById("c").value;

// 	var coef={a:_a,b:_b,c:_c};


// 	return coef;
// }

function solveDelta(coef){
	var delta=coef.b*coef.b - 4*coef.a*coef.c;
	return delta;

}

// function solveRoots(coef,delta){
// 	var x1=x2=x1im=x2im=0;
// 	if(delta==0){
// 		x1={re:(-coef.b)/(2*coef.a),im:0};
// 		x2={re:(-coef.b)/(2*coef.a),im:0};
// 	}
// 	else if(delta<0) {
// 		x1={re:(-coef.b)/2*coef.a,im:Math.sqrt(-delta)/2*coef.a};
// 		x2={re:(-coef.b)/2*coef.a,im:-Math.sqrt(-delta)/2*coef.a};	
// 	}
// 	else if(delta>0){
// 		x1 = {re:((-coef.b)+Math.sqrt(delta))/(2*coef.a),im:0};
// 		x2 = {re:((-coef.b)-Math.sqrt(delta))/(2*coef.a),im:0};
// 	}
// 	var radacini={x1:x1,x2:x2};
// 	return radacini;
// }

// function showAnswer(radacini){
// 	if(radacini.x2.im||radacini.x1.im!=0){
// 		document.getElementById("x1").innerHTML = "x1 =" + radacini.x1.re + "+" + radacini.x1.im + "i";
// 		document.getElementById("x2").innerHTML = "x2 =" + radacini.x2.re + radacini.x2.im + "i";
// 	}
// 	else{
// 		document.getElementById("x1").innerHTML = "x1 =" + radacini.x1.re;
// 		document.getElementById("x2").innerHTML = "x2 =" + radacini.x2.re;
// 	} 
// 	}

function ec2(){
	this.read = function(){
		this.a =document.getElementById("a").value;
		this.b =document.getElementById("b").value;
		this.c =document.getElementById("c").value;

	}
	this.solve = function(){
		var delta= solveDelta(this);
		if(delta==0){
		this.x1={re:(-this.b)/(2*this.a),im:0};
		this.x2={re:(-this.b)/(2*this.a),im:0};
		}
		else if(delta<0) {
			this.x1={re:(-this.b)/2*this.a,im:Math.sqrt(-delta)/2*this.a};
			this.x2={re:(-this.b)/2*this.a,im:-Math.sqrt(-delta)/2*this.a};	
		}
		else if(delta>0){
			this.x1 = {re:((-this.b)+Math.sqrt(delta))/(2*this.a),im:0};
			this.x2 = {re:((-this.b)-Math.sqrt(delta))/(2*this.a),im:0};
		}
	}
	this.show= function(){
		if(this.x2.im||this.x1.im!=0){
		document.getElementById("x1").innerHTML = "x1 =" + this.x1.re + "+" + this.x1.im + "i";
		document.getElementById("x2").innerHTML = "x2 =" + this.x2.re + this.x2.im + "i";
	}
	else{
		document.getElementById("x1").innerHTML = "x1 =" + this.x1.re;
		document.getElementById("x2").innerHTML = "x2 =" + this.x2.re;
	}
	}
}


function solve(){
			// // x1=x2=x1im=x2im=0;
			// var coef = read();
			// var delta = solveDelta(coef);
			// var radacini=solveRoots(coef,delta);
			// showAnswer(radacini);
			// document.getElementById("delta").innerHTML = "Delta=" + delta;
			// document.getElementById("aa").innerHTML = "a= " + coef.a;
			// document.getElementById("bb").innerHTML = "b= " + coef.b;
			// document.getElementById("cc").innerHTML = "c= " + coef.c;
	var e = new ec2();
	e.read();
	e.solve();
	e.show();


			
		}	
