const listTabTitleHorizon = document.querySelectorAll(".tabTitle .titleItem");
const listTabTitleActiveHorizon = document.querySelectorAll(
  ".tabTitle .itemContent"
);
const arrowAfterHorizon = document.querySelectorAll(".tabTitle .arrowAfter");
const tabContentHorizon = document.querySelectorAll(".tabContent .contentItem");
if (listTabTitleHorizon !== null || listTabTitleHorizon !== undefined) {
  for (let i = 0; i < listTabTitleHorizon.length; i++) {
    listTabTitleHorizon[i].style.width = `${100 / listTabTitleHorizon.length}%`;
    document.querySelector(".tabTitleLine span").style.width = `${
      105 / (listTabTitleHorizon.length * 2)
    }%`;
  }
}

let indexHorizonLearn = 0;

// t&#7841;o nút b&#7845;m
var timeoutHorizontal;
const activeTabLearningHorizon = (e) => {
  clearInterval(window.runHorizonLearn);

  e.preventDefault();

  //bóc ra &#273;&#7875; l&#7845;y index, vì listTabTitleActive là node nên ph&#7843;i Array.from
  rows = Array.from(listTabTitleActiveHorizon);
  let indexEvent = rows.indexOf(e.currentTarget);
  // Tính toán width
  const widthPlus =
    100 / (listTabTitleHorizon.length * 2) +
    (100 / listTabTitleHorizon.length) * indexEvent;

  const widthMinus =
    100 / (listTabTitleHorizon.length * 2) -
    (100 / listTabTitleHorizon.length) * indexEvent;

  for (let i = 0; i <= indexEvent; i++) {
    listTabTitleActiveHorizon[i].classList.add("active");
    document.querySelector(".tabTitleLine span").style.width = `${widthPlus}% `;
  }

  //remove active các th&#7867; l&#7899;n h&#417;n index
  for (let i = indexEvent + 1; i < listTabTitleActiveHorizon.length; i++) {
    listTabTitleActiveHorizon[i].classList.remove("active");
  }

  for (let z = 0; z < arrowAfterHorizon.length; z++) {
    arrowAfterHorizon[z].classList.remove("activeArrow");
  }

  for (let k = 0; k < tabContentHorizon.length; k++) {
    tabContentHorizon[k].classList.remove("active");
  }

  arrowAfterHorizon[indexEvent].classList.add("activeArrow");
  tabContentHorizon[indexEvent].classList.add("active");
  timeoutHorizontal = setTimeout(() => {
    autoRunHorizonLearn();
  }, 10000);
};

// t&#7921; &#273;&#7897;ng hoá

var observerHorizontal = new IntersectionObserver(
  function (entries) {
    // console.log(entries);
    if (entries[0]["isIntersecting"] === true) {
      if (entries[0]["intersectionRatio"] === 1) {
        clearInterval(window.runHorizonLearn);
        autoRunHorizonLearn();
        // console.log("Target is fully visible in screen");
      } else if (entries[0]["intersectionRatio"] > 0.5) {
        clearInterval(window.runHorizonLearn);
        autoRunHorizonLearn();
        // console.log("More than 50% of target is visible in screen");
      } else {
        clearInterval(window.runHorizonLearn);
        // console.log("Less than 50% of target is visible in screen");
      }
    } else {
      clearInterval(window.runHorizonLearn);
      // console.log("Target is not visible in screen");
    }
  },
  { threshold: [0, 0.5, 1] }
);

if (document.querySelector(".horizontalContentMobile .tabContent") !== null) {
  observerHorizontal.observe(
    document.querySelector(".horizontalContentMobile .tabContent")
  );
}

const autoRunHorizonLearn = () => {
  // clearTimeout(timeoutHorizontal);
  if (timeoutHorizontal) {
    clearTimeout(timeoutHorizontal);
  }
  window.runHorizonLearn = setInterval(function () {
    const listTabHorizonLearnActive = document.querySelectorAll(
      ".tabTitle .itemContent.active"
    );

    //check các item dc active có l&#7899;n h&#417;n ho&#7863;c b&#7857;ng v&#7899;i length t&#7893;ng không
    if (listTabHorizonLearnActive.length < listTabTitleActiveHorizon.length) {
      listTabTitleActiveHorizon[listTabHorizonLearnActive.length].classList.add(
        "active"
      );
      // Tính toán width
      const widthPlus =
        100 / (listTabTitleHorizon.length * 2) +
        (100 / listTabTitleHorizon.length) * listTabHorizonLearnActive.length;
      document.querySelector(
        ".tabTitleLine span"
      ).style.width = `${widthPlus}% `;
      for (let k = 0; k < tabContentHorizon.length; k++) {
        tabContentHorizon[k].classList.remove("active");
      }
      tabContentHorizon[listTabHorizonLearnActive.length].classList.add(
        "active"
      );
      for (let z = 0; z < arrowAfterHorizon.length; z++) {
        arrowAfterHorizon[z].classList.remove("activeArrow");
      }
      arrowAfterHorizon[listTabHorizonLearnActive.length].classList.add(
        "activeArrow"
      );
    } else if (
      listTabHorizonLearnActive.length == listTabTitleActiveHorizon.length
    ) {
      for (let i = 0; i < listTabTitleActiveHorizon.length; i++) {
        listTabTitleActiveHorizon[i].classList.remove("active");
      }
      listTabTitleActiveHorizon[0].classList.add("active");

      for (let z = 0; z < arrowAfterHorizon.length; z++) {
        arrowAfterHorizon[z].classList.remove("activeArrow");
      }
      arrowAfterHorizon[0].classList.add("activeArrow");
      for (let k = 0; k < tabContentHorizon.length; k++) {
        tabContentHorizon[k].classList.remove("active");
      }
      tabContentHorizon[0].classList.add("active");
      // Tính toán width
      const widthPlus = 100 / (listTabTitleHorizon.length * 2);
      document.querySelector(
        ".tabTitleLine span"
      ).style.width = `${widthPlus}% `;
    }
  }, 5000);
};
