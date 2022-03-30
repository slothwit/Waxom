$(function(){
// mixitup
var containerEl = document.querySelector('.project-main');
var mixer = mixitup(containerEl, {
    animation: {
        duration: 1000
    }
});

//venobox
    $('.venobox').venobox();
    

// blog slider

$('.blog-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding:0,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              centerMode:false,
            }
          }
      ]
});
			    


});