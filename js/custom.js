const menuBtn = document.querySelector('.mobile-menu-btn');

menuBtn.addEventListener('click', function(){
    let menu = document.querySelector('.page-nav__mob-wrapper');
    this.classList.toggle('active');
    menu.classList.toggle('active');
});


if ( $(window).width() < 1024 ) {
    $('.haveSub > .menu__link').click(function(e){
      e.preventDefault();
           
      $(this).next('.menu__sub').slideToggle(350);
    })
}




$(function() {
    $(".owl-carousel").owlCarousel({   
        center: true,      
        items:2,
        loop:true,
        dots: false,
        margin:40,
        responsive:{
            1360:{
                center: true,
                items:5
            },
            1120:{                
                items:3
            },
            

        }   
    });
});