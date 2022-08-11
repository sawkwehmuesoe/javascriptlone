var getprogressbar = document.getElementById("progress-bar");
// console.log(getprogressbar);

window.onscroll = function(){
	scrollpoint();
}

function scrollpoint(){
	
	var getscrollTop = document.documentElement.scrollTop;
	// console.log(getscrollTop);
	var getscrollHeight = document.documentElement.scrollHeight;
	// console.log(getscrollHeight);
	var getclientHeight = document.documentElement.clientHeight;
	// console.log(getclientHeight);

	var calcheight = getscrollHeight - getclientHeight;
	// console.log(calcheight);

	// var finalheight = Math.round((getscrollTop * 100) / calcheight);

	var finalheight = Math.round((getscrollTop / calcheight) * 100);
	console.log(finalheight);

	getprogressbar.style.width = `${finalheight}%`;

}