let getprogressbar = document.querySelector(".progress-bar");
let getdownloadbtn = document.querySelector(".download-btn");
let seturl = "https://linkedin.com";


getdownloadbtn.addEventListener('click',function(){

	this.setAttribute("disabled",true);

	var setinv = setInterval(progressinc,100);

	var setwidth = 0;

	function progressinc(){

		if(setwidth >= 100){
			clearInterval(setinv);
			window.location.href = seturl;
		}else{
			setwidth++;

			getprogressbar.style.width = `${setwidth}%`;
			getprogressbar.setAttribute("data-inc",`${setwidth}%`)
		}

	};

	

});