
// Change nav color on scoll and reset it to none at the top of the page 
window.addEventListener('scroll', function(e) {
  	const navColor = document.querySelector('nav')
  if (window.scrollY>10) { 
  	navColor.style.backgroundColor = 'black';
  	navColor.style.opacity = '0.8';

 }
 else {
 	navColor.style.backgroundColor = "transparent";
 }
})

// Responsive Navigation

const hamburger = document.querySelector('.hamburger-wrapper')
hamburger.addEventListener('click',function(){
	const menu = document.querySelector('.nav-list')
	menu.classList.toggle('expanded')
})
