

const numberRuns_static = document.querySelectorAll('#static .list .item span')
window.addEventListener('scroll', () => {
    processChange_static()
})

function onScroll_static() {
    numberRuns_static && numberRuns_static.forEach((numberRun) => {
        let textOfNumberRun = numberRun.innerHTML
        let numberOfNumberRun = textOfNumberRun && Number((textOfNumberRun.substring(0, textOfNumberRun.length - 1)))
        animateNumber_static(numberOfNumberRun, 1000, 0, numberRun)
    })
}


const processChange_static = debounce(() => onScroll_static());

function animateNumber_static(
    finalNumber,
    duration = 1000,
    startNumber = 0,
    elementNumber
) {
    let currentNumber = startNumber;
    const interval = window.setInterval(updateNumber, 17);
    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval);
            window.addEventListener("scroll", processChange_static);
        } else {
            window.removeEventListener("scroll", processChange_static);
            let inc = Math.ceil(finalNumber / (duration / 17));
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber;
                clearInterval(interval);
            } else {
                currentNumber += inc;
            }
            elementNumber.innerHTML = currentNumber + "%"
        }
    }
}

function debounce(func, timeout = 700) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}