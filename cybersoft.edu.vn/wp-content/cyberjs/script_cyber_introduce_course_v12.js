
let activeOptionIndex_course = 0;
let isMouseHover = false;

let currentButtonIndexHover = null;
let handleChangeOption = (index) => {
  // remove css btnlet

  btnList = document.querySelectorAll(
    ".introduce_course_left #option_list .btn-option"
  );
  if (btnList.length == 0) {
    return;
  }

  btnList = document.querySelectorAll("#option_list .btn-option");

  for (let index = 0; index < btnList.length; index++) {
    const element = btnList[index];
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
  }
  //

  //   add class active to btn
  activeOptionIndex_course = index;

  btnList[activeOptionIndex_course].classList.add("active");

  let bgActive = document.querySelector("#option_list .active-bg");
  bgActive.style.left = `${(100 / 3) * activeOptionIndex_course}%`;

  let optionContentEle = document.getElementById("option_content");

  // add custome data set

  optionContentEle.dataset.activeIndex = activeOptionIndex_course;
  // show content
  let listItemContent = document.querySelectorAll(
    ".introduce_course_left .item_content"
  );
  for (let index = 0; index < listItemContent.length; index++) {
    const element = listItemContent[index];
    if (element.dataset.index == activeOptionIndex_course) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  // optionContentEle.innerHTML =
  //   data_gioi_thieu_khoaHoc[activeOptionIndex_course].content;

  document
    .getElementById("option_content")
    .addEventListener("mouseover", function () {
      isMouseHover = true;
    });
  document
    .getElementById("option_content")
    .addEventListener("mouseout", function () {
      isMouseHover = false;
    });
  // diable autoplay when hover button
};

// disable autoplay when hover content

function handleMouseover(index) {
  isMouseHover = true;
  currentButtonIndexHover = index;
}
function handleMouseout(index) {
  isMouseHover = false;
  currentButtonIndexHover = null;
}
myInterval = setInterval(() => {
  // check option conent is hovered or not
  let option_content_el = document.getElementById("option_content");
  if (!option_content_el) {
    return;
  }
  let currentIndexHover = option_content_el.dataset.activeIndex;
  if (currentIndexHover == activeOptionIndex_course && isMouseHover) {
    return;
  }

  activeOptionIndex_course++;
  if (activeOptionIndex_course == 3) {
    activeOptionIndex_course = 0;
  }

  handleChangeOption(activeOptionIndex_course);
}, 5000);
