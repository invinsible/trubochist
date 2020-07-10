const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function(){
    let menu = document.querySelector('.menu');
    this.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('bg');
});