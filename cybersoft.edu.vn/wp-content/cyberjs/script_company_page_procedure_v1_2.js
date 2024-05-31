
function handleShowProcedure(e) {
  let descEl = event.currentTarget.querySelector("#procedure .desc");
  let lineEl = event.currentTarget.querySelector("#procedure .line");
  descEl && descEl.classList.toggle("active");
  lineEl && lineEl.classList.toggle("active");
}

function page_doanh_nghiep_procedure() {
  const skills = document.querySelectorAll('#procedure .skill')
  skills && skills.forEach((skill) => {
    skill.onclick = () => {
      skill.classList.toggle('active')
    }
  })
}
page_doanh_nghiep_procedure()

