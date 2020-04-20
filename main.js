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
	arrowCloseMenu.style.top = finalHeight;
	arrowCloseMenu.style.left = "60%";
	arrowOpenMenu.style.display = "none";
	arrowCloseMenu.style.display = "block";
	sideMenu.style.height = "50vh";
});

arrowCloseMenu.addEventListener('click',function(){
	arrowOpenMenu.style.top = initialHeight;
	arrowOpenMenu.style.left = "0";
	arrowCloseMenu.style.display = "none";
	arrowOpenMenu.style.display = "block";
	/*document.querySelector("footer").style.*/
	
	setTimeout(function(){
		sideMenu.style.height = "0vh";
	},300);
});