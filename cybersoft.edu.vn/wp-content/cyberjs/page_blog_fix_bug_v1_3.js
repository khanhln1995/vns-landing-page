const list_tags = document.querySelectorAll('.tagcloud .tag-cloud-link')
if (list_tags && list_tags.length > 10) {
    for (let i = 0; i < list_tags.length; i++) {
        if (i >= 10) {
            list_tags[i].classList.add('d-none')
        }

    }
}

const pageTitleBlog = document.querySelector('.custom_xemChiTiet .kl-blog-post-title');
if (pageTitleBlog != null) {
    let breadcrumbText = pageTitleBlog.innerHTML;
    document.getElementById("breadcrumbBlogDetail").innerHTML = breadcrumbText;
}
