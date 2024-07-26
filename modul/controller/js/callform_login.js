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


callFormAuto("modul/view/login/login_user.html","#mainContentLoginUser");
//callFormAuto("modul/view/login/daftar_baru.html","#mainContentLoginUser");
//callFormAuto("modul/view/login/lupa_pass.html","#mainContentLoginUser");

// ke form daftar akun
callForm("#mainContentLoginUser", "#id_btnDaftarAkun_userFormLogin", "modul/view/login/daftar_baru.html", "#mainContentLoginUser")

// kembali dari form daftar user baru
callForm("#mainContentLoginUser", "#id_btnKembali_userFormDaftarUserBaru", "modul/view/login/login_user.html", "#mainContentLoginUser")

// kembali dari form lupa password
callForm("#mainContentLoginUser", "#id_btnKembali_userFormLupaPassword", "modul/view/login/login_user.html", "#mainContentLoginUser")

// ke form lupa password
callForm("#mainContentLoginUser", "#id_btnLupaPassowrd_userFormLogin", "modul/view/login/lupa_pass.html", "#mainContentLoginUser")