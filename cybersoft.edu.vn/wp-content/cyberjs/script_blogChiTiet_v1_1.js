const custom_xemChiTiet = document.querySelector(".custom_xemChiTiet");

if (custom_xemChiTiet !== null) {
    const contentBlogRelated = document.querySelector(
        ".custom_xemChiTiet .kl-blog-related-row"
    ).innerHTML;
    newHtml = `
    <div class="custom_blogLienQuan">
    <img src="https://cybersoft.edu.vn/wp-content/uploads/2022/12/text_lien_quan.png" alt=""/>
    </div> ${contentBlogRelated}
  `;
    document.querySelector(".custom_xemChiTiet .kl-blog-related-row").innerHTML =
        newHtml;
}
