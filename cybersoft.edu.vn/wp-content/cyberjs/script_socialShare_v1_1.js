function shareOnFacebook(url) {
  const width = 600;
  const height = 600;
  const left = screen.width / 2 - width / 2;
  const top = screen.height / 2 - height / 2;
  const options = `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=${width},height=${height},top=${top},left=${left}`;

  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    "Facebook Share",
    options
  );
}

function shareOnLinkedIn(url) {
  window.open(
    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      url
    )}`
  );
}

let allShareSocial = document.querySelector(".itemSocialSharing");
if (allShareSocial) {
  const linkUrlNeedShare = String(window.location.href);
  const innerSocial = allShareSocial.innerHTML;
  const newInner =
    innerSocial +
    `<li class='facebook_share'><button onclick="shareOnFacebook('${linkUrlNeedShare}')"><i class='fa fa-facebook' aria-hidden='true'></i></li>` +
    `<li class='linkedin_share'><button onclick="shareOnLinkedIn('${linkUrlNeedShare}')"><i class="fa fa-linkedin" aria-hidden="true"></i></li>`;

  allShareSocial.innerHTML = newInner;
}
