
const sections = document.querySelectorAll(".system_study .desktop .section");
const system_study = document.querySelector('.system_study')
const navItems = document.querySelectorAll(".system_study .desktop .nav-link");
const class_navItems = document.querySelectorAll(".system_study .desktop .nav-item")
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY
}

let bodyRect = document.body.getBoundingClientRect();


window.addEventListener(
    "scroll",
    function () {
        let checkToView = null
        if (document.querySelector(".system_study .desktop")) {
            checkToView = document
                .querySelector(".system_study .desktop")
                .getBoundingClientRect().top;
        }

        // console.log( 'checkToView', checkToView )
        if (checkToView !== null) {
            if (checkToView < 0 && checkToView > -700) {
                document.querySelector(".system_study .desktop .left").style.position = "fixed";
                document.querySelector('.system_study .desktop .left').style.transform = 'scale(0.8) translateX(calc(-15% - 15px))'
                class_navItems[class_navItems.length - 1].style.top = '7vh'

            } else if (checkToView < -700) {
                document.querySelector(".system_study .desktop .left").style.position = "relative";
                document.querySelector('.system_study .desktop .left').style.transform = 'scale(1.1)';
                class_navItems[class_navItems.length - 1].style.top = '50vh'

            } else if (checkToView > 0) {
                document.querySelector(".system_study .desktop .left").style.position = "unset";
                document.querySelector('.system_study .desktop .left').style.transform = 'scale(1.1)';
            }
        }
        sections.forEach((section, index) => {
            const height = section.offsetHeight;
            let top = Math.floor(getOffset(section)) - 300;

            const html = document.documentElement;

            navItems.forEach((navItem) => {

                // const hrefNav = navItem.href.match(/#[a-zA-Z0-9]+/)[0];

                const hrefNav = navItem.getAttribute("data-target").match(/#[a-zA-Z0-9]+/)[0];
                const idSection = "#" + section.id;
                // console.log( 'top: ' + top )
                // console.log( 'html.scrollTop: ' + html.scrollTop)
                if (html.scrollTop >= top) {
                    hrefNav === idSection
                        ? navItem.parentElement.classList.add("active")
                        : navItem.parentElement.classList.remove("active");
                }
            });
        });
    },
    { passive: true }
);



