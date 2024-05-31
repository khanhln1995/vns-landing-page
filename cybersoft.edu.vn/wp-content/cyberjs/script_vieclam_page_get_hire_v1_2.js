const listTabTitle = document.querySelectorAll(
  ".get_hire .tabTitle .titleItem"
);
const listTabTitleActive = document.querySelectorAll(
  ".get_hire .tabTitle .itemContent"
);
const arrowAfter = document.querySelectorAll(".get_hire .tabTitle .arrowAfter");
const tabContents = document.querySelectorAll(
  ".get_hire .tabContent .contentItem"
);
if (listTabTitle !== null || listTabTitle !== undefined) {
  for (let i = 0; i < listTabTitle.length; i++) {
    listTabTitle[i].style.width = `${100 / listTabTitle.length}%`;
    document.querySelector(".get_hire .tabTitleLine span").style.width = `${
      100 / (listTabTitle.length * 2)
    }%`;
  }
}

// t&#7841;o n�t b&#7845;m

const activeTabLearning = (e) => {
  e.preventDefault();

  //b�c ra &#273;&#7875; l&#7845;y index, v� listTabTitleActive l� node n�n ph&#7843;i Array.from
  rows = Array.from(listTabTitleActive);
  let indexEvent = rows.indexOf(e.currentTarget);
  // T�nh to�n width
  const widthPlus =
    100 / (listTabTitle.length * 2) + (100 / listTabTitle.length) * indexEvent;

  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }
  tabContents[indexEvent].classList.add("active");

  for (let i = 0; i <= indexEvent; i++) {
    listTabTitleActive[i].classList.add("active");
    document.querySelector(".get_hire .tabTitleLine span").style.width = `${
      widthPlus + 1
    }% `;
  }

  //remove active c�c th&#7867; l&#7899;n h&#417;n index
  for (let i = indexEvent + 1; i < listTabTitle.length; i++) {
    listTabTitleActive[i].classList.remove("active");
  }

  for (let z = 0; z < arrowAfter.length; z++) {
    arrowAfter[z].classList.remove("activeArrow");
  }

  arrowAfter[indexEvent].classList.add("activeArrow");
};
