setTimeout(() => {
  async function getDataUserRegisterPopup(event) {
    event.preventDefault();

    let hoTen = document.querySelector(
      '.cyberpopup_style1 #dhvc_form_control_hoten3'
    ).value;
    let email = document.querySelector(
      '.cyberpopup_style1 #dhvc_form_control_email3'
    ).value;
    let soDT = document.querySelector(
      '.cyberpopup_style1 #dhvc_form_control_sodienthoai3'
    ).value;
    if (hoTen && email && soDT) {
      try {
        const checkEmail = await axios({
          method: 'get',
          url: `https://apicrm.cybersoft.edu.vn/api/leadform/check-mail-leadform/${email}`,
          headers: {
            Authorization:
              'Bearer ' +
              'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyZWQiOiIxMC8xNy8yMDQ1IDExOjI3OjA2IEFNIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImI5Mzc2NDk3LTE2NzgtNDJlMC1iOGY4LWQ1Y2NhYTAzMjc0ZiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJDX0tIIiwiQU5ZIiwiQ19MTCIsIkNfTE9QIiwiQ19ORCIsIkNIRUNLX01FTlRPUl9MT1AiLCJEX0RBTkgiLCJEX0tIIiwiRF9MTCIsIkRfTkQiLCJGX0dDIiwiRl9MT1AiLCJHRF9MSCIsIktfVFQiLCJOX1FVWUVOIiwiUUxfQkwiLCJRTF9CTSIsIlFMX0NMIiwiUUxfR0MiLCJRTF9ITVQiLCJRTF9LSCIsIlFMX0xUIiwiUUxfVFQiLCJSX0JIIiwiUl9LSCIsIlJfTEwiLCJSX0xPUCIsIlJfTkQiLCJSX1ZMIiwiVV9LSCIsIlVfTEwiLCJVX0xPUCIsIlVfTkQiLCJYX0tIX0wiLCJRTF9MQ04iLCJRTF9US0QiLCJRTF9DSFRMIiwiUUxfUk0iXSwibmJmIjoxNjY1OTgwODI2LCJleHAiOjE2NjU5ODQ0MjZ9.jwNWA-hbWs2sIkfYYdcxPyQC_bQHIfdowEN77Toug2I',
          },
        });
        if (checkEmail.data.content === 0) {
          await axios({
            method: 'post',
            url: 'https://apicrm.cybersoft.edu.vn/api/leadform',
            data: {
              hoTen,
              email,
              soDT,
              diaDiem: 'tron bo fullstack',
              loaiForm: 'Form popup',
            },
            headers: {
              Authorization:
                'Bearer ' +
                'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyZWQiOiIxMC8xNy8yMDQ1IDExOjI3OjA2IEFNIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImI5Mzc2NDk3LTE2NzgtNDJlMC1iOGY4LWQ1Y2NhYTAzMjc0ZiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJDX0tIIiwiQU5ZIiwiQ19MTCIsIkNfTE9QIiwiQ19ORCIsIkNIRUNLX01FTlRPUl9MT1AiLCJEX0RBTkgiLCJEX0tIIiwiRF9MTCIsIkRfTkQiLCJGX0dDIiwiRl9MT1AiLCJHRF9MSCIsIktfVFQiLCJOX1FVWUVOIiwiUUxfQkwiLCJRTF9CTSIsIlFMX0NMIiwiUUxfR0MiLCJRTF9ITVQiLCJRTF9LSCIsIlFMX0xUIiwiUUxfVFQiLCJSX0JIIiwiUl9LSCIsIlJfTEwiLCJSX0xPUCIsIlJfTkQiLCJSX1ZMIiwiVV9LSCIsIlVfTEwiLCJVX0xPUCIsIlVfTkQiLCJYX0tIX0wiLCJRTF9MQ04iLCJRTF9US0QiLCJRTF9DSFRMIiwiUUxfUk0iXSwibmJmIjoxNjY1OTgwODI2LCJleHAiOjE2NjU5ODQ0MjZ9.jwNWA-hbWs2sIkfYYdcxPyQC_bQHIfdowEN77Toug2I',
            },
          });
          // redirect to another page
          window.location.href = 'https://cybersoft.edu.vn/dang-ky-thanh-cong/';
        }
        //how to prevent form submit continue if condition is true

        event.preventDefault();
        return false;
      } catch (error) {
        console.log(error);
      }
    }
  }
  const buttonGetFormPopup = document.querySelector(
    '.cyberpopup_style1 .dhvc_form_submit_button .dhvc-form-submit'
  );
  if (buttonGetFormPopup !== null) {
    buttonGetFormPopup.addEventListener('click', getDataUserRegisterPopup);
  }
}, 2000);
