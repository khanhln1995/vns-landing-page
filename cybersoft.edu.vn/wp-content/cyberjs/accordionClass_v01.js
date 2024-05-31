let openAccordionByClass = (classSchedule) => {
    let accordionELE = document.querySelector(`#${classSchedule}`).parentNode;
    if (accordionELE != null) {
        if (accordionELE.classList.contains("collapsed")) {
            accordionELE.click();
        }
    }
}