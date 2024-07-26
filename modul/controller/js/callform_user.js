

function callForm(mainMenu, trigger, urlForm, showForm) {
    $(mainMenu).on("click", trigger, function () {
        $.ajax({
            url: urlForm,
            type: 'GET',
            success: function (data) {
                $(showForm).html(data);
            }
        })
    })
}

// function callform auto
function callFormAuto(urlForm, showForm) {
    $.ajax({
        url: urlForm,
        type: 'GET',
        success: function (data) {
            $(showForm).html(data);
        }
    })
}

// open modal from
function openModal(mainForm, triggerModal, urlForm, showForm, modalName) {

    $(mainForm).on("click", triggerModal, function () {

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

callFormAuto("dashboard/menu_utama.html","#mainContentUser");

// dari menu utama ke siswa register
callForm("#mainContentUser", "#id_menuIsiFormulir_userFormMenuUtama", "pendaftaran/siswa_register.html", "#mainContentUser")

// dari form siswa register kembali ke dashboard menu utama
callForm("#mainContentUser", "#id_btnKembali_userFormSiswaRegister", "dashboard/menu_utama.html", "#mainContentUser")

// dari list siswa edit formulir ke form edit formulir nya
callForm("#mainContentUser", "#id_menuEditFormulir_userFormMenuUtama", "edit/list_pendaftar.html", "#mainContentUser")

// dari list siswa edit formulir ke dashboard utama
callForm("#mainContentUser", "#id_btnKembali_userModulEditFormListPendaftar", "dashboard/menu_utama.html", "#mainContentUser")

// dari menu dashboard lalu klik upload dokumen
callForm("#mainContentUser", "#id_menuUploadDokumen_userFormMenuUtama", "upload/list_pendaftar.html", "#mainContentUser")

// dari menu list dokumen upload ke dashboard utama
callForm("#mainContentUser", "#id_btnKembali_userModulUpload_formListPendaftar", "dashboard/menu_utama.html", "#mainContentUser")

// dari menu utama klik upload dokumen lalu buka form list pendaftar
callForm("#mainContentUser", "#id_btnKembali_userFormUpload_mdUpload", "upload/list_pendaftar.html", "#mainContentUser")

// menu pembayaran lalu tampilkan list pendaftar
callForm("#mainContentUser", "#id_menuPembayaran_userFormMenuUtama", "pembayaran/list_pendaftar.html", "#mainContentUser")

// tombol kembali dari list pendaftar modul pembayaran
callForm("#mainContentUser", "#id_btnKembali_userModulPembayaran_formListPendaftar", "dashboard/menu_utama.html", "#mainContentUser")

// dari menu utama ke menu riwayat
callForm("#mainContentUser", "#id_menuRiwayat_userFormMenuUtama", "riwayat/list_riwayat.html", "#mainContentUser")

// dari menu riwayat kembali ke home
callForm("#mainContentUser", "#id_btnKembali_adminFormListRiwayat", "dashboard/menu_utama.html", "#mainContentUser")

// dari menu utama ke form print dokumen
callForm("#mainContentUser", "#id_menuPrintDokumen_userFormMenuUtama", "print/list_riwayat.html", "#mainContentUser")

// dari menu print dokumen ke home
callForm("#mainContentUser", "#id_btnKembali_userModulPrint_formListRiwayat", "dashboard/menu_utama.html", "#mainContentUser")

// dari menu pembayaran ke form isi pembayaran
callForm("#mainContentUser", "#id_btnBayar_formListPendaftar_mdPembayaran", "pembayaran/form_pembayaran.html", "#mainContentUser")

// dari menu isi form pembayaran ke list pembayaran
callForm("#mainContentUser", "#id_btnKembali_formIsiPembayaran_mdPembayaran", "pembayaran/list_pendaftar.html", "#mainContentUser")