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
	
	setTimeout(function(){
		sideMenu.style.height = "0vh";
	},300);
});
/*end home settings*/

/*dev-news settings*/
let dev = document.querySelectorAll(".dev");
let p = document.querySelectorAll("#dev-news .p");
let readMore = document.querySelectorAll("#dev-news .read-more");
let readLess = document.querySelectorAll("#dev-news .read-less");
let cN = p[0].className;

readMore.forEach(function(rm,i){
	rm.addEventListener('click',function(){
		rm.previousElementSibling.classList.remove(cN);
		/*remove read more button*/
		rm.remove();
		readLess[i].style.display = "inline";
	});
});

readLess.forEach(function(rl,i){
	rl.addEventListener('click',function(){
		rl.previousElementSibling.classList.add(cN);
		/*insert read more button again before the read less*/
		dev[i].insertBefore(readMore[i],this);
		rl.style.display = "none";
		readMore[i].style.display = "inline";
	});
});
/*end dev-news settings*/