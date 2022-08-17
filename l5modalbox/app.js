var getmodal = document.getElementById("singupmodal");
var getbtnsignup = document.getElementById("signup-btn");
var getclosebtn = document.querySelector(".close-btn");
var getbtnfullscreen = document.querySelector("#btn-fullscreen");
var getbtnclosescreen = document.querySelector("#btn-closescreen");

getbtnsignup.addEventListener('click',function(){

	getmodal.style.display = "block";

});

getclosebtn.addEventListener('click',function(){

	getmodal.style.display = "none";

});

window.onclick = function(e){

	if(e.target === getmodal){
		getmodal.style.display = "none";
	}

}

getbtnfullscreen.addEventListener('click',function(){

	var fullscr = localStorage.setItem('Fullscreen',1);
	// console.log(fullscr)

	var getde = document.documentElement;
	// console.log(getde);

	if(getde.requestFullscreen){
		getde.requestFullscreen();
	}else if(getde.msRequestFullscreen){
		getde.msRequestFullscreen();
	}else if(getde.webkitRequestFullscreen){
		getde.webkitRequestFullscreen();
	}	

	getbtnclosescreen.style.display = "inline-block";

});

getbtnclosescreen.addEventListener('click',function(){

	

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}


	getbtnclosescreen.style.display = "none" ;	

});

function checkfullscreen(){

	if(localStorage.setItem('Fullscreen',1)){
		document.documentElement.requestFullscreen();
	}else{
		localStorage.removeItem('Fullscreen');
	}

};

checkfullscreen();