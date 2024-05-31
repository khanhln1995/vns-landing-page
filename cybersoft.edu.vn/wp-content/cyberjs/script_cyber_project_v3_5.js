var tab_pane = document.querySelectorAll(".capstoneTabPane");
var nav_link = document.querySelectorAll(".capstoneNavLink");
let tabTitle = document.querySelectorAll(".capstonenNavItem");
var setProgress = document.querySelector(".percentProgress");

if (
  tab_pane != undefined &&
  nav_link != undefined &&
  tabTitle != undefined &&
  setProgress != undefined
) {
  function deviceTabCapstone() {
    for (let i = 0; i < tabTitle.length; i++) {
      tabTitle[i].style.width = `${100 / tabTitle.length}%`;
    }
    setProgress.style.width = `${100 - 100 / tabTitle.length}%`;
  }
  deviceTabCapstone();

  function autoPlusProgress(count) {
    if (count === 1) {
      nav_link[0].classList.add("active");
    }
    let progress = document.querySelector(".percentProgress");
    let buttonTab = document.querySelectorAll(".capstoneNavLink");
    let divTab = document.querySelectorAll(".capstoneTabPane");
    if (
      progress != undefined &&
      buttonTab != undefined &&
      divTab != undefined
    ) {
      window.runAuto = setInterval(function () {
        if (count === tab_pane.length + 1) {
          count = 1;
          divTab[tab_pane.length - 1].style.display = "none";
          buttonTab[tab_pane.length - 1].classList.remove("active");
        }
        progress.style.width = `${
          (100 / tabTitle.length) * (tab_pane.length - count)
        }%`;
        if (count - 2 >= 0) {
          buttonTab[count - 2].classList.remove("active");
          divTab[count - 2].style.display = "none";
        }
        buttonTab[count - 1].className += " active";
        divTab[count - 1].style.display = "block";
        count += 1;

        const currenScroll = window.pageYOffset;
        const divBottom =
          document.getElementsByClassName("capstoneDynamicTab")[0];
        if (divBottom !== undefined) {
          const checkToPause = divBottom.getBoundingClientRect().top;
          
          if (divBottom !== undefined && checkToPause < 20) {
            clearInterval(window.runAuto);
          }
        }
      }, 5000);
    }
  }

  function activeMenu(e, tab, index, count) {
    clearInterval(window.runAuto);

    for (var i = 0; i < tab_pane.length; i++) {
      tab_pane[i].style.display = "none";
    }
    for (i = 0; i < tab_pane.length; i++) {
      nav_link[i].classList.remove("active");
    }
    document.getElementById(tab).style.display = "block";
    document.querySelector(".percentProgress").style.width = `${
      (100 / tabTitle.length) * index
    }%`;
    e.currentTarget.className += " active";
    autoPlusProgress(count);
  }

  if (window.innerWidth > 1200) {
    var getCapStone = document.getElementById("mainTabCapstone");
    if (getCapStone != undefined) {
      mainTabCapstone.addEventListener("mouseover", function () {
        //When the mouse enters the container, clear the interval
        clearInterval(window.runAuto);
      });
      mainTabCapstone.addEventListener("mouseout", function () {
        //When the mouse leaves the container, reset the interval
        const listActive = [...document.querySelectorAll(".capstoneNavLink")];
        const active = document.querySelector(".capstoneNavLink.active");
        if (active != undefined && listActive != undefined) {
          const countNeed = listActive.indexOf(active);
          autoPlusProgress(countNeed + 1);
        }
      });
    }
  } else if (window.innerWidth < 1200) {
    var getCapStone = document.getElementById("mainTabCapstone");
    if (getCapStone != undefined) {
      mainTabCapstone.addEventListener("touchstart", function () {
        //When the mouse enters the container, clear the interval
        clearInterval(window.runAuto);
      });
      mainTabCapstone.addEventListener("touchend", function () {
        const listActive = [...document.querySelectorAll(".capstoneNavLink")];
        const active = document.querySelector(".capstoneNavLink.active");
        if (active != undefined && listActive != undefined) {
          const countNeed = listActive.indexOf(active);
          autoPlusProgress(countNeed + 1);
        }
      });
    }
  }
  autoPlusProgress(1);
}
// End of file index.js

// Check viewport User