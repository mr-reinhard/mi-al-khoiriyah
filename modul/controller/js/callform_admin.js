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

//callFormAuto("pembayaran/list_pendaftaran.html","#mainContentAdmin");
//callFormAuto("pembayaran/form_approve.html","#mainContentAdmin");
callFormAuto("dashboard/info.html","#mainContentAdmin");
//callFormAuto("pendaftaran/list_pendaftaran.html","#mainContentAdmin");

//callFormAuto("riwayat/list_riwayat.html","#mainContentAdmin");


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

// tombol ke menu pembayaran/konfirmasi
callForm("#id_adminMenuNavbar", "#id_menuKonfirmasiPembayaran_adminMenuPembayaran", "../../view/admin/pembayaran/list_pendaftaran.html", "#mainContentAdmin")

// id_btnKembali_userModulPembayaran_formListPendaftar
callForm("#mainContentAdmin", "#id_btnKembali_userModulPembayaran_formListPendaftar", "../../view/admin/pembayaran/list_pendaftaran.html", "#mainContentAdmin")

// ke menu riwayat pendaftaran
callForm("#id_adminMenuNavbar", "#id_menuPembayaran_adminMenuRiwayat", "../../view/admin/riwayat/list_riwayat.html", "#mainContentAdmin")

// ke menu print
callForm("#id_adminMenuNavbar", "#id_menuPrintPembayaran_adminMenuPrintRiwayat", "../../view/admin/print/list_pendaftar.html", "#mainContentAdmin")