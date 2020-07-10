const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function(){
    let menu = document.querySelector('.menu-wrapper');
    this.classList.toggle('active');
    menu.classList.toggle('active');
    // document.body.classList.toggle('bg');
});