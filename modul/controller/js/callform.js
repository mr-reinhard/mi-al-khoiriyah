
// function call form by trigger
function callForm(mainMenu, trigger, urlForm, showForm){
        $(mainMenu).on("click", trigger, function(){
            $.ajax({
                url:urlForm,
                type:'GET',
                success:function(data){
                  $(showForm).html(data);
                }
              })
        })
}

// function callform auto
function callFormAuto(urlForm, showForm){
        $.ajax({
          url: urlForm,
          type: 'GET',
          success: function (data) {
            $(showForm).html(data);
          }
        })
}

// open modal from
function openModal(mainForm, triggerModal, urlForm, showForm, modalName){
  
  $(mainForm).on("click", triggerModal, function(){

        $.ajax({
          url: urlForm,
          type: 'GET',
          success: function (data) {
            $(showForm).html(data);
            $(modalName).modal("show");
          }
        })

  })
}




// call langsung
//callFormAuto("../../view/admin/dashboard/info.html","#mainContentAdmin")
//callFormAuto("../../view/admin/pendaftaran/list_pendaftaran.html","#mainContentAdmin")
//callFormAuto("../../view/admin/pendaftaran/detail_siswa.html","#mainContentAdmin")
//callFormAuto("../../view/admin/pendaftaran/siswa_register.html","#mainContentAdmin")
//callFormAuto("../../view/admin/pendaftaran/edit_siswa.html","#mainContentAdmin")

// callform section admin

// buka menu dashboard
callForm("#id_adminMenuNavbar", "#id_BtnBeranda_adminMenu", "../../view/admin/dashboard/info.html", "#mainContentAdmin")

// buka  form siswa register
callForm("#id_adminMenuNavbar", "#id_btnDaftarSiswa_adminMenu", "../../view/admin/pendaftaran/siswa_register.html", "#mainContentAdmin")

// buka list pendaftaran
callForm("#id_adminMenuNavbar", "#id_btnUbahDataSiswa_adminMenu", "../../view/admin/pendaftaran/list_pendaftaran.html", "#mainContentAdmin")

// buka form detail siswa
callForm("#mainContentAdmin", "#id_btnLihatSiswa_admFormListPendaftaran", "../../view/admin/pendaftaran/detail_siswa.html", "#mainContentAdmin")

// buka list pendaftaran
callForm("#mainContentAdmin", "#id_btnKembali_admFormDetailSiswa", "../../view/admin/pendaftaran/list_pendaftaran.html", "#mainContentAdmin")

// tombol kembali ke list pendaftaran
callForm("#mainContentAdmin", "#id_btnKembali_admFormDetailSiswa", "../../view/admin/pendaftaran/list_pendaftaran.html", "#mainContentAdmin")

// buka form edit siswa
callForm("#mainContentAdmin", "#id_btnEditSiswa_admFormListPendaftaran", "../../view/admin/pendaftaran/edit_siswa.html", "#mainContentAdmin")

// tombol kembali ke list pendaftaran
callForm("#mainContentAdmin", "#id_btnKembali_admFormEditSiswa", "../../view/admin/pendaftaran/list_pendaftaran.html", "#mainContentAdmin")

//==============================================================================================================
//==============================================================================================================
//==============================================================================================================
//==============================================================================================================
//==============================================================================================================

// login section
//callFormAuto("modul/view/login/login_user.html","#mainContentLoginUser");
callFormAuto("dashboard/menu_utama.html","#mainContentUser");
//callFormAuto("pendaftaran/siswa_register.html","#mainContentUser");
//callFormAuto("edit/list_pendaftar.html","#mainContentUser");
//callFormAuto("upload/upload_form.html","#mainContentUser");
//callFormAuto("pembayaran/form_pembayaran.html","#mainContentUser");
//callFormAuto("modul/view/login/daftar_baru.html","#mainContentLoginUser");
//callFormAuto("modul/view/login/lupa_pass.html","#mainContentLoginUser");

callForm("#mainContentLoginUser", "#id_btnDaftarAkun_userFormLogin", "modul/view/login/daftar_baru.html", "#mainContentLoginUser")

callForm("#mainContentLoginUser", "#id_btnKembali_userFormDaftarUserBaru", "modul/view/login/login_user.html", "#mainContentLoginUser")

callForm("#mainContentLoginUser", "#id_btnKembali_userFormLupaPassword", "modul/view/login/login_user.html", "#mainContentLoginUser")

callForm("#mainContentLoginUser", "#id_btnLupaPassowrd_userFormLogin", "modul/view/login/lupa_pass.html", "#mainContentLoginUser")



// user section

callForm("#mainContentUser", "#id_menuIsiFormulir_userFormMenuUtama", "pendaftaran/siswa_register.html", "#mainContentUser")

callForm("#mainContentUser", "#id_btnKembali_userFormSiswaRegister", "dashboard/menu_utama.html", "#mainContentUser")

callForm("#mainContentUser", "#id_menuEditFormulir_userFormMenuUtama", "edit/list_pendaftar.html", "#mainContentUser")

callForm("#mainContentUser", "#id_btnKembali_userModulEditFormListPendaftar", "dashboard/menu_utama.html", "#mainContentUser")

callForm("#mainContentUser", "#id_menuUploadDokumen_userFormMenuUtama", "upload/list_pendaftar.html", "#mainContentUser")

callForm("#mainContentUser", "#id_btnKembali_userModulUpload_formListPendaftar", "dashboard/menu_utama.html", "#mainContentUser")

callForm("#mainContentUser", "#id_btnKembali_userFormUpload_mdUpload", "upload/list_pendaftar.html", "#mainContentUser")

callForm("#mainContentUser", "#id_menuPembayaran_userFormMenuUtama", "pembayaran/list_pendaftar.html", "#mainContentUser")







