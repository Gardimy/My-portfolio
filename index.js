const option = document.querySelector('.option');
const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.closemenu');

openmenu.addEventListener('click' , showmenu);
closemenu.addEventListener('click' , close);

function showmenu () {
	option.style.display = 'flex';
	openmenu.style.display = 'none';
}
function close () {
	option.style.top = '-100%'
	closemenu.style.display = 'block';
}