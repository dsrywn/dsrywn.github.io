const nav = document.querySelector('#nav');

nav.addEventListener('click', function(){
    nav.classList.toggle('nav-active')
});

window.onscroll = function (){
    const header = documnet.querySelector('header');
    const fixednav = header.offSetTop;

    if(window.pageYOffset > fixednav){
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
};