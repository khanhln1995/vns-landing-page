let optionsHomePage = {
  rootMargin: "20%",
  threshold: 1.0,
};
const listCountUpHomePage = Array.from(
  document.querySelectorAll("#listThongKe .counterThongKeHome")
);

//Countup vi&#7871;t b&#7857;ng js
function countUpElForHomePage(el) {
  let start; // set on the first step to the timestamp provided
  // const el = document.getElementById("count"); // get the element
  const final = parseInt(el.textContent, 10); // parse out the final number
  const duration = 2000; // duration in ms
  const step = (ts) => {
    if (!start) {
      start = ts;
    }
    // get the time passed as a fraction of total duration
    let progress = Math.min((ts - start) / duration, 1);
    // console.log(Math.floor(progress * final));
    el.textContent = Math.ceil(progress * final); // set the text
    if (progress < 1) {
      // if we're not 100% complete, request another animation frame
      requestAnimationFrame(step);
    }
  };

  // start the animation
  requestAnimationFrame(step);
}

let observerHomePage = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.4) {
      listCountUpHomePage.forEach((el) => {
        countUpElForHomePage(el);
      });
      observerHomePage.unobserve(entry.target);
    }
  });
}, optionsHomePage);

const contentHomePage = document.querySelector("#listThongKe");

if (contentHomePage) {
  observerHomePage.observe(contentHomePage);
}
