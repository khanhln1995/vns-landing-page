const arrResignerNow = document.querySelectorAll(".resigterNow");
const inputHotenFocus = document.getElementById("dhvc_form_control_hoten");
if (arrResignerNow !== null && inputHotenFocus !== null) {
  for (let i = 0; i < arrResignerNow.length; i++) {
    arrResignerNow[i].addEventListener("click", function () {
      inputHotenFocus.focus();
    });
  }
}
