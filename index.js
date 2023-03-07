
const option = document.querySelector('.option');
const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.closemenu');

openmenu.addEventListener('click', function(){
	option.style.display = 'flex';
	openmenu.style.display ='none';
});

closemenu.addEventListener('click', function(){
	option.style.top = '-100%';
});



