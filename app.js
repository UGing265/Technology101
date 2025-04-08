//làm công tắc 
//css làm đep công tắc chứ ko chỉnh được công tắc cái nút

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});