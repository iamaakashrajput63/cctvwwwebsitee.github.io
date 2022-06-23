


$(document).ready(function(){
	$(".search").click(function(){
		$(".contact-form").fadeToggle();
	});
});


var i = 0;

var path = new Array();
path[0]  = "images/pcctv.jpg";
path[1]  = "images/pcctv1.jpg";
path[2]  = "images/pcctv2.jpg";
path[3]  = "images/pcctv3.jpg";
path[4]  = "images/pcctv4.jpg";


function swapimage(){
	document.getElementById("slide").src= path[i];
	if(i < path.length -1) i++;
	else i = 0;
	setTimeout("swapimage()", 2000);
}



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})







$(document).ready(function(){
	$(".zenu-btn").click(function(){
		$(".zenu-btn i").toggleClass("fas fa-times")
		$("nav ul").toggleClass("active");
	});
});