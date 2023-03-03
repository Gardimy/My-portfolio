const option = document.querySelector('.option');
const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.closemenu');

function showmenu() {
  option.style.display = 'flex';
  openmenu.style.display = 'none';
}
openmenu.addEventListener('click', showmenu);
function close() {
  option.style.top = '-100%';
  closemenu.style.display = 'block';
}
closemenu.addEventListener('click', close);