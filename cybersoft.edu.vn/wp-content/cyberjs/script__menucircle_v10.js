let counter = 0, counter2 = 0;
const CIRCLE_SIZE = 66;
const RING_SIZE = 100;
const ulEle = document.createElement('ul')
let windowHeight = window.innerHeight
let windowWidth = window.innerWidth
// const RING__CIRCLE = document.getElementById("wheel")
const CIRCLE_SNAP = document.createElement('div')
const RING__CIRCLE = document.createElement('div')


CIRCLE_SNAP.setAttribute("class", "circle__snapper");
CIRCLE_SNAP.setAttribute("id", "circle__snapper");
RING__CIRCLE.setAttribute("id", "wheel");

if (windowWidth > 992) {
  CIRCLE_SNAP.style.display = "none"
} else {
  CIRCLE_SNAP.style.display = "block"
}

window.addEventListener('resize', function () {
  windowHeight = window.innerHeight
  windowWidth = window.innerWidth
  hideRing()

  if (windowWidth > 992) {
    CIRCLE_SNAP.style.display = "none"
  } else {
    CIRCLE_SNAP.style.display = "block"
  }
})

let isDraggingOuter = false

window.onload = function () {
  window.onscroll = function (e) {
    hideRing();
  };
};

// DOMAIN: CYBERSOFT.EDU.VN
const CYBERSOFT_COURSEIDS = ['page-id-4018', 'page-id-4084', 'page-id-280', 'page-id-2218', 'page-id-2422', 'page-id-3409', 'page-id-4299', 'page-id-199']
if (checkBodyClass(CYBERSOFT_COURSEIDS)) {
  document.body.appendChild(CIRCLE_SNAP);
  createLink();
  document.body.appendChild(RING__CIRCLE);
  CIRCLE_SNAP.addEventListener("pointerdown", detectInputType, { passive: true });
}

///////////////////////////////////////////////
/////////////////FOR CIRCLE////////////////////
///////////////////////////////////////////////

// FUNCTION FOR DRAGGING ON DESKTOP/LAPTOP
function dragElement(elmnt, size) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  let active = false;

  let curTop = elmnt.style.top

  elmnt.onmousedown = dragMouseDown;
  elmnt.onmouseup = openMenu;

  function dragMouseDown(e) {
    curTop = elmnt.style.top

    e = e || window.event;
    active = false;
    // e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    active = true;
    RING__CIRCLE.style.transition = "opacity .3s, visibility .3s";
    hideRing()

    elmnt.style.transition = "none";
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let topPos = elmnt.offsetTop - pos2;
    let leftPos = elmnt.offsetLeft - pos1;

    let posObj = setPosition(topPos, leftPos, size)
    topPos = posObj.topPos
    leftPos = posObj.leftPos
    elmnt = setElement(elmnt, topPos, leftPos)
  }

  function closeDragElement(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let topPos = elmnt.offsetTop - pos2;
    let leftPos = elmnt.offsetLeft - pos1;


    let curPosTop = Number(!curTop.replace("px", "")) ? 0 : Number(curTop.replace("px", ""));
    let subTop = topPos - curPosTop;


    let posObj = snapCircleToPlace(subTop, curPosTop, leftPos, topPos, size)
    topPos = posObj.topPos
    leftPos = posObj.leftPos
    elmnt = setElement(elmnt, posObj.topPos, posObj.leftPos, true)




    elmnt.style.transition = "all 0.8s";
    elmnt.style.transitionTimingFunction = "cubic-bezier(0.060, 0.975, 0.195, 0.985)";


    document.onmouseup = null;
    document.onmousemove = null;
  }

  function openMenu(e) {
    RING__CIRCLE.style.transition = "all 1s"

    if (!active) {
      // RING__CIRCLE.style.transition = "all 1s" 
      if (counter === 0) {
        showRing()
        ++counter
      }
      else {
        if (RING__CIRCLE.style.opacity !== "0") {
          hideRing()
        }
        else {
          showRing()
        }
      }
    }
  }
}

// FUNCTION FOR DRAGGING ON TOUCHSCREEN
function dragElementTouch(elmnt, size) {
  let dragging = false;
  let curTop = elmnt.style.top
  let curPosTop = ""
  let subTop = "";
  let topPos = ""
  let leftPos = ""

  elmnt.addEventListener("touchstart", dragStart, { passive: true });
  elmnt.addEventListener("touchend", dragEnd, { passive: true });
  elmnt.addEventListener("touchmove", drag, { passive: true });
  elmnt.addEventListener("click", openMenu, { passive: true });

  function dragStart(e) {
    elmnt.style.opacity = ".8"
    curTop = elmnt.style.top
    elmnt.style.transition = "opacity .3s";
    dragging = false
  }

  function dragEnd(e) {

    if (dragging) {
      // Snap Top
      let posObj = snapCircleToPlace(subTop, curPosTop, leftPos, topPos, size)
      topPos = posObj.topPos
      leftPos = posObj.leftPos
      setTranslate(leftPos, topPos, true)
    }
    elmnt.style.opacity = "1"
  }

  function drag(e) {
    dragging = true
    if (dragging) {
      setTranslate(e.touches[0].clientX, e.touches[0].clientY, false);
    }
  }

  function setTranslate(xClient, yClient, isEnd) {
    RING__CIRCLE.style.transition = "opacity .3s, visibility .3s";
    hideRing()
    if (!isEnd) {
      topPos = yClient - size / 2
      leftPos = xClient - size / 2

      curPosTop = Number(!curTop.replace("px", "")) ? 0 : Number(curTop.replace("px", ""));
      subTop = topPos - curPosTop;

      let posObj = setPosition(topPos, leftPos, size)
      topPos = posObj.topPos
      leftPos = posObj.leftPos
      elmnt = setElement(elmnt, topPos, leftPos)
    } else {
      elmnt.style.transition = "all 0.5s, opacity .3s";
      elmnt = setElement(elmnt, topPos, leftPos, true)
    }

  }

  function openMenu(e) {
    e.stopImmediatePropagation()
    e.stopPropagation();
    RING__CIRCLE.style.transition = "all 1s"
    if (!dragging) {
      if (counter2 === 0) {
        showRing()
        ++counter2
      }
      else {
        if (RING__CIRCLE.style.opacity !== "0") {
          hideRing()
        }
        else {
          showRing()
        }
      }
    }
  }


}

function checkBodyClass(classArr) {
  let flag = false
  classArr.forEach(className => {
    if (document.body.classList.contains(className)) flag = true
  })
  return flag
}

function detectInputType(event) {
  if (event.pointerType === "touch") dragElementTouch(CIRCLE_SNAP, CIRCLE_SIZE);
  else dragElement(CIRCLE_SNAP, CIRCLE_SIZE);
}

function setPosition(topPos, leftPos, size) {
  let possibleHeight = 60;

  if (windowWidth <= 768) {
    possibleHeight = 60
  } else if (windowWidth <= 992) {
    possibleHeight = 120
  }

  if (topPos + size > windowHeight) topPos = windowHeight - size
  else if (topPos < possibleHeight) topPos = possibleHeight

  if (leftPos + size > windowWidth) leftPos = windowWidth - size
  else if (leftPos < 0) leftPos = 0

  return { topPos, leftPos }
}

function setElement(elmnt, topPos, leftPos, isSnapping) {
  if (isSnapping && leftPos !== 0) {
    elmnt.style.left = `calc(100% - ${CIRCLE_SIZE}px)`;
    RING__CIRCLE.style.left = `calc(100% - ${CIRCLE_SIZE / 2}px)`;
  } else {
    elmnt.style.left = leftPos + "px";
    RING__CIRCLE.style.left = leftPos + CIRCLE_SIZE / 2 + "px";
  }

  elmnt.style.top = topPos + "px";
  RING__CIRCLE.style.top = topPos + CIRCLE_SIZE / 2 + "px";
  return elmnt
}

function snapCircleToPlace(subTop, curPosTop, leftPos, topPos, size) {
  // Snap Top
  if (windowWidth - leftPos > 100) {
    if (!(leftPos >= 0 && leftPos < 100))
      if (subTop > 80 && subTop < 290) {
        topPos = curPosTop + subTop / 2;
      } else if (subTop < -80 && subTop > -290) {
        topPos -= subTop / 2;
      }
  }

  // Snap Left
  // if (leftPos < windowWidth / 2) {
  //   leftPos = 0
  // } else if (leftPos > windowWidth / 2) {
  leftPos = windowWidth - size
  // }

  return { topPos, leftPos }
}

function hideRing() {
  if (RING__CIRCLE.style.left === `${CIRCLE_SIZE / 2}px`)
    RING__CIRCLE.style.transform = "translate(-50%, -50%) rotate(10deg)"
  else
    RING__CIRCLE.style.transform = "translate(-50%, -50%) rotate(160deg)"
  RING__CIRCLE.style.visibility = "hidden"
  RING__CIRCLE.style.pointerEvents = "none"
  RING__CIRCLE.style.opacity = "0"
}

function showRing() {
  if (RING__CIRCLE.style.left === `${CIRCLE_SIZE / 2}px`)
    RING__CIRCLE.style.transform = "translate(-50%, -50%) rotate(160deg)"
  else
    RING__CIRCLE.style.transform = "translate(-50%, -50%) rotate(10deg)"
  RING__CIRCLE.style.visibility = "visible"
  RING__CIRCLE.style.pointerEvents = "auto"
  RING__CIRCLE.style.opacity = "1"
}

///////////////////////////////////////////////
/////////////////FOR LINK//////////////////////
///////////////////////////////////////////////

function dragLink(elmnt) {
  const radius = elmnt.offsetWidth / 2
  const centerX = elmnt.offsetLeft + radius;
  const centerY = elmnt.offsetTop + radius;
  let clickDegrees = 0
  let currentDegree = 0

  let myAnonymous = null;
  elmnt.onmousedown = dragLinkDown
  elmnt.onmouseup = dragLinkUp

  function getDegrees(mouseX, mouseY) {

    const radians = Math.atan2(mouseX - centerX, mouseY - centerY);
    const degrees = Math.round((radians * (180 / Math.PI) * -1) + 100);

    return degrees;
  }

  function dragLinkDown(event) {
    currentDegree = Number(elmnt.style.transform.split(") ")[1].split("(")[1].split("deg)")[0])
    isDraggingOuter = true;
    clickDegrees = getDegrees(event.clientX, event.clientY);
    document.onmousemove = setRotationTransform
    document.onmouseup = dragLinkUp
  }

  function setRotationTransform(event) {
    const degrees = getDegrees(event.clientX, event.clientY) - clickDegrees;
    elmnt.style.transition = 'none'
    if (elmnt.style.left.split("px")[0] < 50) {
      elmnt.style.transform = elmnt.style.transform.split(") ")[0] + ") " + `rotate(${degrees + currentDegree}deg)`
    } else
      elmnt.style.transform = elmnt.style.transform.split(") ")[0] + ") " + `rotate(${degrees + currentDegree}deg)`
  }

  function dragLinkUp(e) {
    // isDraggingOuter = false;
    e.preventDefault()
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function dragLinkTouch(elmnt) {
  const radius = elmnt.offsetWidth / 2
  const centerX = elmnt.offsetLeft + radius;
  const centerY = elmnt.offsetTop + radius;
  let clickDegrees = 0
  let currentDegree = 0

  elmnt.onmousedown = dragLinkDown
  elmnt.onmouseup = dragLinkUp

  elmnt.addEventListener("touchstart", dragLinkDown, { passive: true });
  elmnt.addEventListener("touchend", dragLinkUp, { passive: true });
  elmnt.addEventListener("touchmove", setRotationTransform, { passive: true });
  // elmnt.addEventListener("click", openMenu, { passive: true });

  function getDegrees(mouseX, mouseY) {

    const radians = Math.atan2(mouseX - centerX, mouseY - centerY);
    const degrees = Math.round((radians * (180 / Math.PI) * -1) + 100);

    return degrees;
  }

  function dragLinkDown(event) {

    currentDegree = Number(elmnt.style.transform.split(") ")[1].split("(")[1].split("deg)")[0])
    clickDegrees = getDegrees(event.touches[0].clientX, event.touches[0].clientY);
    document.onmousemove = setRotationTransform
    document.onmouseup = dragLinkUp
  }

  function setRotationTransform(event) {
    const degrees = getDegrees(event.touches[0].clientX, event.touches[0].clientY) - clickDegrees;
    elmnt.style.transition = 'none'
    setTranslate(degrees)
  }

  function setTranslate(degrees) {
    elmnt.style.transition = 'none'
    elmnt.style.transform = elmnt.style.transform.split(") ")[0] + ") " + `rotate(${degrees + currentDegree}deg)`
  }

  function dragLinkUp(e) {
    e.preventDefault()
    // document.onmouseup = null;
    // alert(2)
  }
}

function detectInputLinkType(event) {
  if (event.pointerType === "touch") dragLinkTouch(RING__CIRCLE);
  else dragLink(RING__CIRCLE);
}

function createLink() {
  let linkCount = 16
  let allSidebarLink = document.querySelectorAll(".sidebar.cyberLeftMenu #menu-frontendnav > li > a")
  if (document.body.classList.contains('page-id-199')) {
    linkCount = 6
    allSidebarLink = document.querySelectorAll(".sidebar.menugioithieu #menu-gioi-thieu > li > a")
  }

  for (let i = 0; i < linkCount; i++) {
    let divEle = document.createElement('div');
    let anchorEle = document.createElement('a');
    if (linkCount === 6) {
      divEle.setAttribute('class', 'intro__sidebar--link')
      anchorEle.setAttribute('class', 'intro__sidebar--anchor')
    } else {
      divEle.setAttribute('class', 'courses__sidebar--link')
      anchorEle.setAttribute('class', 'courses__sidebar--anchor')
    }

    anchorEle.setAttribute('href', allSidebarLink[i].getAttribute('href'))
    anchorEle.setAttribute('draggable', false)


    anchorEle.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });

    let imgEle = setImgElement(linkCount, i + 1)
    anchorEle.appendChild(imgEle)
    divEle.appendChild(anchorEle)
    RING__CIRCLE.appendChild(divEle)
    RING__CIRCLE.addEventListener("pointerdown", detectInputLinkType, { passive: true });
  }
}

function setImgElement(linkCount, index) {
  let imgEle = document.createElement('img')
  imgEle.setAttribute('draggable', false)
  if (linkCount === 16)
    switch (index) {
      case 1: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/001-info.svg'); break;
      case 2: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/002-who.svg'); break;
      case 3: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/003-goal.svg'); break;

      case 4: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/004-syllabus.svg'); break;
      case 5: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/005-project.svg'); break;

      case 6: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/006-benefit.svg'); break;
      case 7: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/007-teacher.svg'); break;
      case 8: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/008-certificate.svg'); break;
      case 9: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/009-images.svg'); break;
      case 10: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/010-comment.svg'); break;
      case 11: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/011-enroll.svg'); break;
      case 12: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/011-enroll.svg'); break;
      case 13: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/011-enroll.svg'); break;
      case 14: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/011-enroll.svg'); break;
      case 15: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/011-enroll.svg'); break;
      case 16: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/011-enroll.svg'); break;
    }
  else
    switch (index) {
      case 1: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/001-info.svg'); break;
      case 2: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/003-goal.svg'); break;
      case 3: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/012-benefit.svg'); break;
      case 4: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/006-benefit.svg'); break;
      case 5: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/007-teacher.svg'); break;
      case 6: imgEle.setAttribute('src', 'https://cybersoft.edu.vn/wp-content/svgimages/icon/013-class.svg'); break;
    }
  return imgEle
}