let topPosition = 72;
function moveMouse(topPosition) {
    let mouseIcon = document.querySelector('svg[data-v-3d2b47e7]')
    let checkBox = document.querySelectorAll('.customCheckbox svg path')
    let timeLeft = 0;
    if(mouseIcon !=null){
      let runMouse = setInterval(function () {
        if (timeLeft === checkBox.length - 1) {
          checkBox[checkBox.length - 1].style.display = "block";
    
          setTimeout(function () {
            mouseIcon.style.top = 20;
            for (let i = 0; i < checkBox.length - 1; i++) {
              mouseIcon.style.transition = `left 1s, top 0.5s, transform .1s`;
              checkBox[i].style.display = "none";
            }
            checkBox[checkBox.length - 1].style.display = "none";
          }, 1000);
          timeLeft = -1;
        }
        mouseIcon.style.transition = `left 1s, top 2s, transform .1s`;
        mouseIcon.style.top = 20 + topPosition * (timeLeft + 1);
        mouseIcon.style.transform = `scale(0.7)`;
        setTimeout(function () {
          mouseIcon.style.transform = `scale(1)`;
        }, 100);
        if (timeLeft !== -1) {
          checkBox[timeLeft].style.display = "block";
        }
        timeLeft += 1;
      }, 3000);
    }
   
}
if (window.innerWidth < 1200 && window.innerWidth > 850) {
    topPosition = 75
} else if (window.innerWidth < 850 && window.innerWidth > 576) {
    topPosition = 92
} else if (window.innerWidth < 576 && window.innerWidth > 375) {
    topPosition = 92

}else if (window.innerWidth <= 375) {
    topPosition = 90
}
moveMouse(topPosition);