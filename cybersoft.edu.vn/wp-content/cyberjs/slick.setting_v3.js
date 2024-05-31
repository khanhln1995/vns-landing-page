
jQuery(document).ready(function ($) {
    let slickContainer = $("#container__list");
 slickContainer.slick({
   dots: true,
   autoplay: false,
autoplaySpeed: 5000,
   infinite: false,
   speed: 500,
   slidesToShow: 5,
   slidesToScroll: 5,
   arrows: true,
   prevArrow:
     "<button type='button' class='roadmap-prev slick-prev pull-left'><i class='fa fa-caret-left'></i></button>",
   nextArrow:
     "<button type='button' class='roadmap-next slick-next pull-right'><i class='fa fa-caret-right'></i></button>",
   responsive: [
     {
       breakpoint: 1400,
       settings: {
         slidesToShow: 5,
         slidesToScroll: 5,
         infinite: false,
         dots: true,
         autoplay: false
       },
     },
     {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
          autoplay: false
        },
      },
     {
       breakpoint: 992,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 4,
         dots: false,
         autoplay: false
       },
     },
     {
       breakpoint: 769,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: false,
         dots: false,
         autoplay: false
       },
     },
{
       breakpoint: 576,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         infinite: false,
         dots: false,
         autoplay: false
       },
     },
   ],
 });

let roadmap_cyber = document.querySelector(".roadmap_cyber .slick-dots");
 if (roadmap_cyber) {
   roadmap_cyber.insertAdjacentHTML(
     "beforeend",
     `<div class="btn-view">
          <a href="#decuongchitiet" class="arrow-link">Xem Chi Ti&#7871;t
           <span class="arrow"></span>
 
         </a>
       </div>`
   );
 }

});
