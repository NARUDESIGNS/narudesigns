//Resources 
const menuItems = document.getElementById('menu-items');
const menuBtn = document.getElementById('menu');
const closeMenuBtn = document.getElementById('close-menu');


//Menu btn is clicked
menuBtn.addEventListener('click', () => {
    menuItems.classList.add('fade-in');
});

//Close-Menu btn is clicked
closeMenuBtn.addEventListener('click', () => {
    menuItems.classList.remove('fade-in');
});