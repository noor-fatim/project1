var cursor = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",function(dets){
	cursor.style.left = dets.x +30+ "px";
	cursor.style.top = dets.y + "px";
	blur.style.left = dets.x - 200 +"px";
	blur.style.top = dets.y - 200 + "px";
})

var h4all= document.querySelectorAll(".nav h4");
h4all.forEach(function(elem){
	elem.addEventListener("mouseenter", function(){
		cursor.style.scale =3;
		cursor.style.border="1px solid white";
		cursor.style.backgroundColor="transparent";
	})
	elem.addEventListener("mouseleave", function(){
		cursor.style.scale =1;
		cursor.style.border="0px solid #95C11E";
		cursor.style.backgroundColor="#95C11E";
	})
	
})



gsap.to(".nav",{
	backgroundColor:"#000",
	duration:0.5,
	height:"90px",
	scrollTrigger:{
		trigger:".nav",
		scroller:"body",
		start:"top -10%",
		end:"top -11",
		scrub:1,
	}
})

gsap.to(".main",{
	backgroundColor:"#000",
	scrollTrigger:{
		trigger:".main",
		scroller:"body",
		start:"top -25%",
		end:"top -70%",
		scrub:2,
	}
})

gsap.from(".about-us img ,.about-us-in",{
	y:50,
	opacity:0,
	duration:1,
	scrollTrigger:{
		trigger:".about-us",
		scroller:"body",
		// markers:true,
		start:"top 60%",
		end:"top 55%",
		scrub:3,
	}

})
gsap.from("#colon1",{
	y:-70,
	x:-70,
	scrollTrigger:{
		trigger:"#colon1",
		scroller:"body",
		// markers:true,
		start:"top 55%",
		end:"top 45%",
		scrub:4,
	}
})
gsap.from("#colon2",{
	y:70,
	x:70,
	scrollTrigger:{
		trigger:"#colon1",
		scroller:"body",
		start:"top 55%",
		end:"top 45%",
		scrub:4,
	}
})