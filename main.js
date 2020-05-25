/*home settings*/
let arrowOpenMenu = document.querySelector(".open-menu");
let arrowCloseMenu = document.querySelector(".close-menu");
let sideMenu = document.querySelector("aside");

const initialHeight = "75vh";
const finalHeight = "100vh";

arrowOpenMenu.style.top = initialHeight;
arrowOpenMenu.style.left = "0";
arrowCloseMenu.style.display = "none";
sideMenu.style.height = "0vh";

arrowOpenMenu.addEventListener('click',function(){
	if(detectMob()){
		arrowCloseMenu.style.top = finalHeight;
		arrowCloseMenu.style.left = "60%";
		arrowOpenMenu.style.display = "none";
		arrowCloseMenu.style.display = "block";
		sideMenu.style.height = "50vh";
	}else{
		arrowCloseMenu.style.top = finalHeight;
		arrowCloseMenu.style.left = "100%";
		arrowOpenMenu.style.display = "none";
		arrowCloseMenu.style.display = "block";
		sideMenu.style.height = "50vh";
	}
});

arrowCloseMenu.addEventListener('click',function(){
	arrowOpenMenu.style.top = initialHeight;
	arrowOpenMenu.style.left = "0";
	arrowCloseMenu.style.display = "none";
	arrowOpenMenu.style.display = "block";
	
	setTimeout(function(){
		sideMenu.style.height = "0vh";
	},300);
});

function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}

//alert(detectMob());
/*end home settings*/

/*dev-news settings*/
let dots = document.querySelectorAll(".dots");
let moreText = document.querySelectorAll("#dev-news .more");
let readMore = document.querySelectorAll("#dev-news .read-more");

readMore.forEach(function(rm,i){
	rm.addEventListener('click',function(e){
		if(dots[i].style.display == "none"){
			dots[i].style.display = "inline";
			e.target.innerHTML = "Read More";
			moreText[i].style.display = "none";
		}else{
			dots[i].style.display = "none";
			e.target.innerHTML = "Read Less";
			moreText[i].style.display = "inline";
		}
	});
});

/*end dev-news settings*/