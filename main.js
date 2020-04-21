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
	/*document.querySelector("footer").style.*/
	
	setTimeout(function(){
		sideMenu.style.height = "0vh";
	},300);
});
/*end home settings*/

/*dev-news settings*/
let dev = document.querySelectorAll(".dev");
let ps = document.querySelectorAll("#dev-news p");
let readMore = document.querySelectorAll("#dev-news .read-more");
let content = document.querySelectorAll("#dev-news .content");
//let readLess = document.querySelectorAll("#dev-news .read-less");
//let readLess = document.createElement("a");

readMore.forEach(function(button){
	button.addEventListener('click',function(e){
		/*remove styles from the previous element sibling*/
		button.previousElementSibling.style.all = "unset";
		button.style.display = "none";
		
		let readLess = document.createElement("a");
		readLess.textContent = "Read Less";
		readLess.className = "read-less";
		buttonCreated = true;
		/*add read less button before the read more on the clicked card because you need to grab the previous element sibling and it must be the paragraph*/
		dev[e.target.id.replace("b","")-1].insertBefore(readLess,button);
		
		/*read less functionality*/
		readLess.addEventListener('click',function(){
			/*later on look it up about this css "all" property*/
			readLess.previousElementSibling.className = "#dev-news .dev p";
		
			//console.log(readLess.previousElementSibling);
			readLess.style.display = "none";
			button.style.display = "inline";
		});
	});
});

/*end dev-news settings*/