let activeIndex = 0;
// return parrent from child
function upTo(el, tagName) {
  tagName = tagName.toLowerCase();

  while (el && el.parentNode) {
    el = el.parentNode;
    if (el.tagName && el.tagName.toLowerCase() == tagName) {
      return el;
    }
  }
  return null;
}
function activeBg(e) {
  let hiveElement = null;
  if (e.target.nodeName == "I" || e.target.classList.contains("hexagon-text")) {
    let parentEl = upTo(e.target, "div");
    hiveElement = parentEl;
    activeIndex = parentEl.getAttribute("data-hive");
  } else {
    hiveElement = e.target;
    activeIndex = e.target.getAttribute("data-hive");
  }

  // e.preventDefault();
  let hiveItemList = document.querySelectorAll(".hive-item");
  let elems_tab = document.querySelectorAll(".detailItem");
  for (let i = 0; i < elems_tab.length; i++) {
    elems_tab[i].classList.remove("activeTab");
  }
  //

  elems_tab[activeIndex].classList.add("activeTab");
  Array.from(hiveItemList).forEach(function (el) {
    el.classList.remove("activeHive");
  });

  hiveElement.classList.add("activeHive");
}

// auto play feature

const timeInterval = 5000;
function autoPlayKd() {
  let elems_tab = document.querySelectorAll(".activeTab");
  if (elems_tab.length == 0) {
    return;
  }
  autoHive = setInterval(() => {
    increaseButton();
  }, timeInterval);
}
autoPlayKd();

function increaseButton() {
  clearInterval(autoHive);
  if (activeIndex == 5) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  let elems_tab = document.querySelectorAll(".activeTab");
  if (elems_tab.length > 0) {
    [].forEach.call(elems_tab, function (el) {
      el.classList.remove("activeTab");
    });
  }
  const detailArray = document.querySelectorAll(".detailItem");
  if (detailArray.length > 0) {
    detailArray[activeIndex].classList.add("activeTab");
  }
  let hiveItemList = document.querySelectorAll(".hive-item");
  if (hiveItemList.length > 0) {
    Array.from(hiveItemList).forEach(function (el) {
      el.classList.remove("activeHive");
    });
  }

  document
    .querySelector(`div[data-hive='${activeIndex}']`)
    .classList.add("activeHive");
  autoPlayKd();
}

function decreaseButton() {
  clearInterval(autoHive);

  if (activeIndex == 0) {
    activeIndex = 5;
  } else {
    activeIndex--;
  }
  let elems_tab = document.querySelectorAll(".activeTab");
  if (elems_tab.length > 0) {
    [].forEach.call(elems_tab, function (el) {
      el.classList.remove("activeTab");
    });
  }
  const detailArray = document.querySelectorAll(".detailItem");
  if (detailArray.length > 0) {
    detailArray[activeIndex].classList.add("activeTab");
  }

  let hiveItemList = document.querySelectorAll(".hive-item");
  if (hiveItemList.length > 0) {
    Array.from(hiveItemList).forEach(function (el) {
      el.classList.remove("activeHive");
    });
  }
  document
    .querySelector(`div[data-hive='${activeIndex}']`)
    .classList.add("activeHive");
  autoPlayKd();
}

if (window.innerWidth > 1200) {
  var getdetailContent = document.getElementById("mainTabDetail");
  if (getdetailContent != undefined) {
    getdetailContent.addEventListener("mouseover", function () {
      //When the mouse enters the container, clear the interval
      clearInterval(autoHive);
    });
    getdetailContent.addEventListener("mouseout", function () {
      //When the mouse leaves the container, reset the interval

      autoPlayKd();
    });
  }
} else if (window.innerWidth < 1200) {
  var getdetailContent = document.getElementById("mainTabDetail");
  if (getdetailContent != undefined) {
    getdetailContent.addEventListener("touchstart", function () {
      //When the mouse enters the container, clear the interval
      clearInterval(autoHive);
    });
    getdetailContent.addEventListener("touchend", function () {
      autoPlayKd();
    });
  }
}

const addClassChyenMuc = document.querySelector(
  ".custom_chuyenMuc aside .zn_sidebar"
);
if (addClassChyenMuc !== null) {
  addClassChyenMuc.classList.add("cyberLeftBlog");
}
