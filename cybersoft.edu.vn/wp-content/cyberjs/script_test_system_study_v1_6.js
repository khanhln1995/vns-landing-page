let break_number_item = 0;
let distance_top_element = 0;
const sections1 = document.querySelectorAll(".chien-test .system_study1 .desktop .section");
const containers = document.querySelectorAll(".chien-test .system_study1 .desktop .section .container")
const navItems1 = document.querySelectorAll(".chien-test .system_study1 .desktop .nav-link");
const class_navItems1 = document.querySelectorAll(".chien-test .system_study1  .desktop .colLeft .nav-item");
if (navItems1) {
  switch (navItems1.length) {
    case 9: {
      break_number_item = 3597
      distance_top_element = 1700
      break;
    };
    case 8: {
      break_number_item = 3090
      distance_top_element = 1450
      break;
    };
    case 7: {
      break_number_item = 2610
      distance_top_element = 1274
      break;
    };

    case 6: {
      break_number_item = 2052
      distance_top_element = 1032
      break;
    };
    case 5: {
      break_number_item = 1701.5
      distance_top_element = 860
      break;
    };
    default: {
      break_number_item = 700
      distance_top_element = 500
    }

  }
}





function getOffset1(el) {
  const rect = el.getBoundingClientRect();
  return rect.top + window.scrollY;
}

let bodyRect1 = document.body.getBoundingClientRect();

window.addEventListener(
  "scroll",
  function () {
    let checkToView = null;
    if (document.querySelector(".chien-test .system_study1 .desktop")) {
      checkToView = document
        .querySelector(".chien-test .system_study1 .desktop")
        .getBoundingClientRect().top;
    }

    

    if (checkToView !== null) {
      if (checkToView < 0 && checkToView > -(break_number_item)) {
        document.querySelector(".chien-test .system_study1 .desktop .left").style.position = "fixed";
        document.querySelector(".chien-test .system_study1 .desktop .left").style.transform = "scale(0.8) translateX(calc(-15% - 15px))";
        class_navItems1[class_navItems1.length - 1].style.top = "7vh";
      } else if (checkToView < -(break_number_item)) {
        document.querySelector(".chien-test .system_study1 .desktop .left").style.position = "relative";
        document.querySelector(".chien-test .system_study1 .desktop .left").style.transform = "scale(1.1)";
        class_navItems1[class_navItems1.length - 1].style.top = `${distance_top_element}px`;
      } else if (checkToView > 0) {
        document.querySelector(".chien-test .system_study1 .desktop .left").style.position = "unset";
        document.querySelector(".chien-test .system_study1 .desktop .left").style.transform = "scale(1.1)";
      }
    }
    sections1.forEach((section, index) => {
      const height = section.offsetHeight;
      let top = Math.floor(getOffset1(section)) - 300;
      const html = document.documentElement;

      navItems1.forEach((navItem) => {
        const hrefNav = navItem.getAttribute("data-target").match(/#[a-zA-Z0-9]+/)[0];
        const idSection = "#" + section.id;
        // console.log('top: ', top)
        // console.log('html.scrollTop: ', html.scrollTop)
        // if (index === sections1.length - 1 && sections1.length > 5) {
        //   top = Math.floor(getOffset1(section)) - 650;
        // }
        if (html.scrollTop >= top) {
          hrefNav === idSection
            ? navItem.parentElement.classList.add("active")
            : navItem.parentElement.classList.remove("active");
        }
      });

    });
  }
);
