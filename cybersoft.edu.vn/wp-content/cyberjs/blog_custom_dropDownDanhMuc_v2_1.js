let checkOpenDropDown = false;

const checkDisableItemDropDown = () => {
  const testTitle = document.querySelector(".selectDanhMuc .dropDownDanhMuc");
  if (testTitle) {
    const arrayFilter = document.querySelectorAll(
      ".dropDownContent .dropDownItem a"
    );
    for (let i = 0; i < arrayFilter.length; i++) {
      if (arrayFilter[i].innerText === testTitle.innerText) {
        // arrayFilter[i].style.display = "none";
        arrayFilter[i].classList.add("disableItem");
        return;
      }
    }
  }
};

const checkChangeTitleDropDown = () => {
  const urlPath = window.location.pathname;
  // const urlPath = "/category/tat-ca-bai-viet";
  const arrayFilter = document.querySelectorAll(
    ".dropDownContent .dropDownItem a"
  );
  for (let i = 0; i < arrayFilter.length; i++) {
    if (arrayFilter[i].href.includes(urlPath)) {
      document.querySelector(
        ".selectDanhMuc .dropDownDanhMuc .titleDanhMuc"
      ).innerHTML = arrayFilter[i].innerText;
      return;
    }
  }
  if (urlPath.includes("/blog")) {
    document.querySelector(
      ".selectDanhMuc .dropDownDanhMuc .titleDanhMuc"
    ).innerHTML = arrayFilter[0].innerText;
  }
};

const renderDropDown = () => {
  const getDropDownContent = document.querySelectorAll(
    ".cyberLeftBlog .menu .cat-item"
  );
  const arrayDropDownContent = Array.from(getDropDownContent);
  let newArrayDropDown = "";
  arrayDropDownContent.map((item) => {
    newArrayDropDown += `
    <div class="dropDownItem">
   ${item.innerHTML}
  </div>
    `;
  });
  const dropDownContentDanhMuc = document.querySelector(
    ".selectDanhMuc .dropDownContent"
  );
  if (dropDownContentDanhMuc)
    dropDownContentDanhMuc.innerHTML = newArrayDropDown;
};

window.onload = () => {
  renderDropDown();
  checkChangeTitleDropDown();
  checkDisableItemDropDown();
};

const listDanhMuc = document.querySelector(".selectDanhMuc .dropDownDanhMuc");
if (listDanhMuc) {
  listDanhMuc.addEventListener("click", function () {
    checkOpenDropDown = !checkOpenDropDown;

    if (checkOpenDropDown) {
      document.querySelector(".dropDownContent").style.display = "block";
      document.querySelector(".dropDownDanhMuc").style.borderRadius =
        "25px 25px 0px 0px";
      document.querySelector(
        ".dropDownDanhMuc .angleDropDown"
      ).style.transform = "rotate(180deg)";
    } else {
      document.querySelector(".dropDownContent").style.display = "none";
      document.querySelector(".dropDownDanhMuc").style.borderRadius = "25px";
      document.querySelector(
        ".dropDownDanhMuc .angleDropDown"
      ).style.transform = "rotate(360deg)";
    }
  });
}
