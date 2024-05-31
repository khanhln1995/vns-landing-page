let optionsViecLam = {
  rootMargin: "10%",
  threshold: 1.0,
};

const listCountUpViecLam = Array.from(
  document.querySelectorAll("#statistical .number_percent")
);

//Countup vi&#7871;t b&#7857;ng js
function countUpElForViecLam(el) {
  let start; // set on the first step to the timestamp provided
  // const el = document.getElementById("count"); // get the element
  const final = parseInt(el.textContent, 10); // parse out the final number
  const duration = 4000; // duration in ms

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

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry.intersectionRatio);
      if (entry.intersectionRatio > 0.6) {
        listCountUpViecLam.forEach((el) => {
          countUpElForViecLam(el);
        });
        observer.unobserve(entry.target);
      }
    });
  },

  optionsViecLam
);

const contentViecLam = document.querySelector("#statistical");

if (contentViecLam) {
  observer.observe(contentViecLam);
}
