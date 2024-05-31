
function subStrText(els) {
    if (els.innerText.length > 100) {
        els.innerText = els.innerText.substring(0, 100) + "...";
    }
}

function addSubStr() {
    const countText = document.querySelectorAll(".itemIntroText p");
    if (countText !== undefined) {
        countText.forEach(subStrText);
    }
}

addSubStr();



const catItemBlog = document.querySelectorAll(".cyberLeftBlog #categories-2 .cat-item a");
const catItemDefault = document.querySelectorAll(".cyberLeftBlog #categories-3 .cat-item a");


let substrBlogSidebar = (catItems) => {
    if (catItems.length > 0) {
        for (const item of catItems) {
            // console.log(item);
            // let str = item.innerHTML;
            // let newContent = str.substring(2);
            item.innerHTML = item.innerHTML.substring(3);
        }
    }
}

substrBlogSidebar(catItemBlog);
substrBlogSidebar(catItemDefault);

const chuyenMuc = document.querySelector(".custom_chuyenMuc");

if (chuyenMuc !== undefined) {
    const linkBlog = document.createElement("li");
    linkBlog.innerHTML =
        "<a href='https://cybersoft.edu.vn/blog/'>Blog<span>/</span></a>";
    const customBreadcrumb = document.querySelector(
        ".custom_chuyenMuc .khai-breadcrumb"
    );
    if (customBreadcrumb !== undefined) {
        const linkCurrent = document.createElement("li");
        getText = document.querySelector(".custom_chuyenMuc .current-cat a");
        if (getText !== undefined && getText !== null) {
            linkCurrent.innerHTML = `<span>${getText.innerText}</span>`;
            customBreadcrumb.appendChild(linkBlog);
            customBreadcrumb.appendChild(linkCurrent);
        }
    }
}