/**Animación para menú responsive */


let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


/**Animación para barra de habilidades */

function animateprogress (id, val){		


	var getRequestAnimationFrame = function () {  
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||   
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function ( callback ){
			window.setTimeout(enroute, 1 / 60 * 1000);
		};
		
	};
	
	var fpAnimationFrame = getRequestAnimationFrame();   
	var i = 0;
	var animacion = function () {
			
	if (i<=val) 
		{
			document.querySelector(id).setAttribute("value",i);     
			document.querySelector(id+"+ span").innerHTML = i+"%";     
			i++;
			fpAnimationFrame(animacion);         
		}
										
	}

		fpAnimationFrame(animacion);   
				
}