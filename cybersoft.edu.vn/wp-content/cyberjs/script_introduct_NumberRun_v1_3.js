const number_runs_page_introduction_logo = document.querySelectorAll('.number_run_page_introduc .number > span')
const number_runs_page_introduction_systemMyclass = document.querySelectorAll('.system_myclass_page_introduct .numberRun .item .content .number .number_item > span')
function logo_company_page_introduct(element_biggest) {

    function debounce(func, timeout = 700) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    function animateNumber(
        finalNumber,
        duration = 2000,
        startNumber = 0,
        processChange,
        element
    ) {
        let currentNumber = startNumber;
        const interval = window.setInterval(updateNumber, 17);
        function updateNumber() {
            if (currentNumber >= finalNumber) {
                clearInterval(interval);
                window.addEventListener("scroll", processChange);
            } else {
                window.removeEventListener("scroll", processChange);
                let inc = Math.ceil(finalNumber / (duration / 17));
                if (currentNumber + inc > finalNumber) {
                    currentNumber = finalNumber;
                    clearInterval(interval);
                } else {
                    currentNumber += inc;
                }

                element.innerHTML = currentNumber
            }
        }
    }

    function run() {
        element_biggest.forEach((item) => {
            let finalNumber = Number(item.innerHTML)
            let processChange = () => { }
            animateNumber(finalNumber, 1500, 0, processChange, item)
        })
    }
    let debounce_scroll = debounce(() => run())

    let indexScrollPrev = 0
    window.addEventListener('scroll', () => {
        if (window.scrollY > indexScrollPrev) {

            debounce_scroll()
        }
        indexScrollPrev = window.scrollY
    })
}

window.onload = () => {
    setTimeout(() => {
        number_runs_page_introduction_logo && logo_company_page_introduct(number_runs_page_introduction_logo)
        number_runs_page_introduction_systemMyclass && logo_company_page_introduct(number_runs_page_introduction_systemMyclass)
        
    }, 1000);

}
