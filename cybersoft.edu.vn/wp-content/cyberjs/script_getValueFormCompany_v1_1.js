function getDataCompanyRegister() {
  let hoTen = document.querySelector(
    ".formDoanhNghiep #dhvc_form_control_hoten"
  ).value;
  let tenCongTy = document.querySelector(
    ".formDoanhNghiep #dhvc_form_control_tencty"
  ).value;
  let email = document.querySelector(
    ".formDoanhNghiep #dhvc_form_control_email"
  ).value;
  let soDT = document.querySelector(
    ".formDoanhNghiep #dhvc_form_control_sodienthoai"
  ).value;
  let thongTinKhac = document.querySelector(
    ".formDoanhNghiep #dhvc_form_control_thongtinkhac"
  ).value;
  console.log(thongTinKhac);
  if (hoTen && email && soDT && tenCongTy) {
    // if (noiHoc && thongTinKhac) {
    //   diaDiem = JSON.stringify(`${noiHoc.value + "," + thongTinKhac}`);
    // } else if (noiHoc) {
    //   diaDiem = JSON.stringify(noiHoc.value);
    // } else {
    //   diaDiem = JSON.stringify(thongTinKhac);
    // }
    const promise = axios({
      method: "post",
      url: "https://apicrm.cybersoft.edu.vn/api/leadform",
      data: {
        hoTen,
        email,
        soDT,
        diaDiem: tenCongTy,
        loaiForm: "doanh-nghiep",
        ghiChu: thongTinKhac,
      },
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyZWQiOiIxMC8xNy8yMDQ1IDExOjI3OjA2IEFNIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImI5Mzc2NDk3LTE2NzgtNDJlMC1iOGY4LWQ1Y2NhYTAzMjc0ZiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJDX0tIIiwiQU5ZIiwiQ19MTCIsIkNfTE9QIiwiQ19ORCIsIkNIRUNLX01FTlRPUl9MT1AiLCJEX0RBTkgiLCJEX0tIIiwiRF9MTCIsIkRfTkQiLCJGX0dDIiwiRl9MT1AiLCJHRF9MSCIsIktfVFQiLCJOX1FVWUVOIiwiUUxfQkwiLCJRTF9CTSIsIlFMX0NMIiwiUUxfR0MiLCJRTF9ITVQiLCJRTF9LSCIsIlFMX0xUIiwiUUxfVFQiLCJSX0JIIiwiUl9LSCIsIlJfTEwiLCJSX0xPUCIsIlJfTkQiLCJSX1ZMIiwiVV9LSCIsIlVfTEwiLCJVX0xPUCIsIlVfTkQiLCJYX0tIX0wiLCJRTF9MQ04iLCJRTF9US0QiLCJRTF9DSFRMIiwiUUxfUk0iXSwibmJmIjoxNjY1OTgwODI2LCJleHAiOjE2NjU5ODQ0MjZ9.jwNWA-hbWs2sIkfYYdcxPyQC_bQHIfdowEN77Toug2I",
      },
    });

    promise.then((result) => {});
  }
}

const buttonGetFormCompany = document.querySelector(
  ".formDoanhNghiep .dhvcform-action-default .dhvc-form-submit"
);
if (buttonGetFormCompany !== null) {
  buttonGetFormCompany.onclick = getDataCompanyRegister;
}
