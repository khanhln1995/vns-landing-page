let itemShow;
if (window.innerWidth <= 576) {
  itemShow = 2;
} else {
  itemShow = 3;
}

const noneDisplay = () => {
  const imgCompany = document.querySelectorAll(
    ".storyAndFeedback .logoContent .imgContainer"
  );
  if (imgCompany !== null) {
    for (let z = 12; z < imgCompany.length; z++) {
      imgCompany[z].style.display = "none";
    }
  }

  const imgReview = document.querySelectorAll(
    ".feedbackStudent .reviewList .imgContainer"
  );
  if (imgReview !== null) {
    for (let z = 12; z < imgReview.length; z++) {
      imgReview[z].style.display = "none";
    }
  }
};

noneDisplay();

function handleReadmorePartner() {
  const imgCompanyNone = document.querySelectorAll(
    '.logoContent .imgContainer[style="display: none;"]'
  );
  if (imgCompanyNone !== null && imgCompanyNone.length >= itemShow) {
    document.querySelector(".logoCompany .btn-readmore").style.display = "none";
    document.querySelector(".logoCompany #loading").style.display = "block";
    setTimeout(() => {
      document.querySelector(".logoCompany #loading").style.display = "none";
      for (let i = 0; i < itemShow; i++) {
        imgCompanyNone[i].style.display = "block";
      }
      document.querySelector(".logoCompany .btn-readmore").style.display =
        "inline-block";
    }, 1000);
  }
}

function handleReadmoreReveiw() {
  const imgReviewNone = document.querySelectorAll(
    '.feedbackStudent .reviewList .imgContainer[style="display: none;"]'
  );
  if (imgReviewNone !== null && imgReviewNone.length >= itemShow) {
    document.querySelector(".feedbackStudent .btn-readmore").style.display =
      "none";
    document.querySelector(".feedbackStudent #loading").style.display = "block";
    setTimeout(() => {
      document.querySelector(".feedbackStudent #loading").style.display =
        "none";
      for (let i = 0; i < itemShow; i++) {
        imgReviewNone[i].style.display = "block";
      }
      document.querySelector(".feedbackStudent .btn-readmore").style.display =
        "inline-block";
    }, 1000);
  }
}

function animateValue(els) {
  var current = Number(els.innerHTML);
  let numberPlus = current / 20;
  let numberPLusN = Number.parseFloat(numberPlus).toFixed(0);
  let timeFinal = 0;
  let valueInner = Number((els.innerHTML = 0));
  const haha = setInterval(function () {
    valueInner = valueInner + Number(numberPLusN);
    els.innerHTML = valueInner;
    timeFinal += 50;
    if (timeFinal == 1000) {
      els.innerHTML = current;
      clearInterval(haha);
    }
  }, 100);
}

// // Run the animation on all elements with a class of ‘countup’
function runAnimations() {
  const countupEls = document.querySelectorAll(".countup");
  if (countupEls !== null) {
    countupEls.forEach(animateValue);
  }
}
runAnimations();

jQuery(document).ready(function ($) {
  $(".slideshow-container").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow:
      "<button type='button' class='roadmap-prev slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='roadmap-next slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
