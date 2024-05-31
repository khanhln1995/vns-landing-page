const checkHomePage = document.querySelector(".custom_carousel_homePage");
if (checkHomePage !== null) {
  document
    .querySelector(".custom_carousel_homePage .row")
    .classList.add("carousel_homePage");

  const innerHtmlCarousel = document.querySelector(
    ".custom_carousel_homePage .row"
  ).innerHTML;

  newHtml =
    "<div class='swiper-wrapper'>" +
    innerHtmlCarousel +
    "<div class='col-sm-6 col-lg-6 content_swiper swiper-slide'><a class='fix_taga' href='https://cybersoft.edu.vn/blog/'><img src='https://cybersoft.edu.vn/wp-content/uploads/2023/02/ti&#768;m-&#273;o&#803;c-the&#770;m.jpg' style='object-fit: contain; height: 100%;' alt=''/></a></div>" +
    "</div>" +
    "<div class='swiper-button-next next_homepage'></div><div class='swiper-button-prev prev_homepage'></div>";
  document.querySelector(
    ".custom_carousel_homePage .carousel_homePage"
  ).innerHTML = newHtml;

  const childDivSwiper = document.querySelectorAll(
    ".carousel_homePage .swiper-wrapper .col-lg-4"
  );

  document;

  for (let i = 0; i < childDivSwiper.length; i++) {
    childDivSwiper[i].classList.add("swiper-slide");
    childDivSwiper[i].classList.add("content_swiper");
    childDivSwiper[i].classList.add("col-lg-6");
    childDivSwiper[i].classList.remove("col-lg-4");
  }

  const childDivRemoveClear = document.querySelectorAll(
    ".carousel_homePage .swiper-wrapper .clearfix"
  );
  const listChild = Array.from(childDivRemoveClear);
  const parenRemove = document.querySelector(
    ".carousel_homePage .swiper-wrapper"
  );

  const lengthDesc = document.querySelectorAll(
    ".custom_carousel_homePage .row .swiper-wrapper .latest_posts-desc"
  );
  for (let j = 0; j < lengthDesc.length; j++) {
    let newTextLength;
    if (lengthDesc[j].innerHTML.length > 100) {
      newTextLength = lengthDesc[j].innerHTML.substring(0, 100);
      lengthDesc[j].innerHTML = newTextLength + "...";
    }
  }

  parenRemove.removeChild(...listChild);

  var swiper = new Swiper(".carousel_homePage", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 30,
        centeredSlides: false,
      },
      1300: {
        slidesPerView: 3.5,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },
  });
}
