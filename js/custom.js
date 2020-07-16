const menuBtn = document.querySelector('.mobile-menu-btn');

menuBtn.addEventListener('click', function(){
    let menu = document.querySelector('.page-nav__mob-wrapper');
    this.classList.toggle('active');
    menu.classList.toggle('active');
    // document.body.classList.toggle('bg');
});

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })


$(function() {
    $(".owl-carousel").owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    nav: true,
    responsive:{
        600:{
            items:6
        }
    }
    });
});