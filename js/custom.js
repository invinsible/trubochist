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


$('.select select').click(function(){
    
    $(this).parent().toggleClass('down');
});


$('.tabs__body').hide();
    $('.tabs__body:first').show();    

    $('.tabs__btns button').click(function() {
    $('.tabs__body').hide();
    let activeTab = $(this).attr('rel');
    $('#' + activeTab).fadeIn();
        
    $('.tabs__btns button').removeClass('active');
    $(this).addClass('active');
});


$(function() {
    $(".owl-carousel").owlCarousel({                
        items: 1,
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
            650: {
                center: false,
                items: 2
            }
            

        }   
    });
});