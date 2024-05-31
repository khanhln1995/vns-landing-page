const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

let timerID_afterClickTab;
let autoPlay = true;
let timer;
let number_index = 0;
const tabs = $$("#outcomes_study .track_tabs .tab-item");
const panes = $$("#outcomes_study .track_tabs .tab-pane");

const arrow_left = $("#outcomes_study .track_tabs .arrow_left");
const arrow_right = $("#outcomes_study .track_tabs .arrow_right");
const tabActive = $("#outcomes_study .track_tabs .tab-item.active");
const tab_content = $("#outcomes_study .track_tabs .tab-content");
const group_button = $(
  "#outcomes_study .track_tabs .tab-content .group_button"
);
if(tabs && tabs[0]){ 
   tabs[0].onclick = () => {
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove("active");
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove("active");
  
    tabs[0].classList.add("active");
    panes[0].classList.add("active");
    number_index = 0;
  }
}



tabs ? tabs.forEach((tab, index) => {
  const pane = panes[index];


  tab ? tab.onclick = function () {
    number_index = index;
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove(
      "active"
    );
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove(
      "active"
    );
    autoPlay = false;
    timer && clearInterval(timer);


    function runAutoPlayAgain() {
      if (timerID_afterClickTab) {
        clearTimeout(timerID_afterClickTab)
      }
      timerID_afterClickTab = setTimeout(() => {
        autoPlay = true;
        timer = setInterval(() => {
          myTimer();
        }, 5000);
      }, 2000)
    }
    const processChange = debounce(() => runAutoPlayAgain())
    processChange()


   tab ? tab.classList.add("active") : null
    pane ? pane.classList.add("active"): null
  } : null


}) : null

arrow_left ? arrow_left.onclick = function () {
  number_index = number_index - 1;
  if ( tabs && number_index < 0) {
    number_index = tabs.length - 1;
  }
  if (number_index >= 0) {
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove(
      "active"
    );
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove(
      "active"
    );
    tabs ? tabs[number_index].classList.add("active") : null
    panes ? panes[number_index].classList.add("active") : null
  }
  if (number_index === 0) {
    arrow_left.classList.remove("active");
  }
  if (tabs && number_index > 0 && number_index < tabs.length - 1) {
    arrow_right && arrow_right.classList.add("active");
    arrow_left.classList.add("active");
  }
} : null;

arrow_right ? arrow_right.onclick = function () {
  number_index++;
  if (tabs && number_index > tabs.length - 1) {
    number_index = 0;
  }
  if (tabs && number_index < tabs.length) {
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove(
      "active"
    );
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove(
      "active"
    );
    tabs ? tabs[number_index].classList.add("active"): null
    panes ? panes[number_index].classList.add("active"): null
  }
  if (tabs && number_index === tabs.length - 1) {
    arrow_right.classList.remove("active");
  }
  if (tabs && number_index > 0 && number_index < tabs.length - 1) {
    arrow_right.classList.add("active");
    arrow_left && arrow_left.classList.add("active");
  }
} : null;

function myTimer() {
 arrow_right && arrow_right.click()
  if (tabs && number_index === tabs.length - 1) {
    number_index = 0;
    setTimeout(() => {
       tabs[0].click()
    }, 5000);
  }
}
if (autoPlay) {
  timer = setInterval(() => {
    myTimer();
  }, 5000);
}
const pauseOnHover = $(
  "#outcomes_study .track_tabs .tab-content .bg-tab-content"
);
if (pauseOnHover) {
  pauseOnHover.onmouseout = () => {
    autoPlay = true;
    timer = setInterval(() => {
      myTimer();
    }, 5000);
  };

  pauseOnHover.onmouseover = () => {
    autoPlay = false;
    timer && clearInterval(timer);
    clearInterval(timerID_afterClickTab)
    timerID_afterClickTab && clearInterval(timer)
  };
  pauseOnHover.onclick = () => {
    autoPlay = false;
    timer && clearInterval(timer);
    clearInterval(timerID_afterClickTab)
    timerID_afterClickTab && clearInterval(timer)
  };
}

if (group_button) {
  group_button.onmouseout = () => {
    autoPlay = true;
    timer = setInterval(() => {
      myTimer();
    }, 5000);
  };

  group_button.onmouseover = () => {
    autoPlay = false;
    timer && clearInterval(timer);
  };
}

