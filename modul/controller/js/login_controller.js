
function login(mainForm,loginForm,urlBackEnd){

    $(mainForm).on("submit",loginForm,function(e){

        e.preventDefault()

        $.ajax({
            url:urlBackEnd,
            type:'POST',
            dataType:'json',
            data:$(loginForm).serialize(),
            success:function(data){
                if (data.directHalaman) {
                    window.location.href = data.directHalaman;
                    //console.log(data.kodeLogin)
                }
                else{
                    // judul, text, icon
                    sweetAlert_notifikasiDiTengah(data.Judul,data.Pesan,data.Logo)
                }
            },
            error:function(xhr,status,error){
                console.log('Ajax Error : ',status,error)
                console.log('Response Text : ',xhr.resposeText)
                console.log('Status : ',xhr.status)
            }
        })

    })
}

function daftarAkunBaru(mainForm,childForm,urlBackEnd){

    $(mainForm).on("submit",childForm,function(e){

        e.preventDefault()

        $.ajax({
            url:urlBackEnd,
            type:'POST',
            data:$(childForm).serialize(),
            success:function(data){
                callFormAuto(data.directHalaman,"#mainContentLoginUser");
                sweetAlert_notifikasiDiTengah(data.Judul,data.Pesan,data.Logo)
            },
            error:function(xhr,status,error){
                console.log('AJAX ERROR', status,error)
                console.log('Response Text : ',xhr.responseTest)
                console.log('Status : ',xhr.status)
            }
        })
    })
}

function cekSession(urlBackEnd){

    $.ajax({
        url:urlBackEnd,
        type:'GET',
        success:function(data){
            console.log(data)
            // handling here
        },
        error:function(xhr,status,error){
            console.log('Ajax Error : ',status.error)
            console.log('Response Text : ',xhr,responseText)
            console.log('Status : ',xhr.status)
        }
    })
}

function resetPassword(mainForm,childForm,urlBackEnd){

    $(mainForm).on("submit",childForm,function(e){

        e.preventDefault()

        $.ajax({
            url:urlBackEnd,
            type:'POST',
            data:$(childForm).serialize(),
            success:function(data){
                if (data.directHalaman) {
                    callFormAuto(data.directHalaman,"#mainContentLoginUser")
                    sweetAlert_notifikasiPojokKananAtas(data.Logo,data.Pesan)
                }
                else{
                    sweetAlert_notifikasiDiTengah(data.Judul,data.Pesan,data.Logo)
                }
            },
            error:function(xhr,status,error){
                console.log('Ajax Error : ',status,error)
                console.log('Response Text : ',xhr.resposeText)
                console.log('Status : ',xhr.status)
            }
        })
    })

}

// form reset password
resetPassword("#mainContentLoginUser","#id_formResetPassword","modul/controller/php/login_controller.php?aksi_login=resetPassword")

// form daftar akun baru
daftarAkunBaru("#mainContentLoginUser","#id_formRegisterLogin","modul/controller/php/login_controller.php?aksi_login=daftarAkunBaru")

// form login
login("#mainContentLoginUser","#id_formLogin_userLoginUser","modul/controller/php/login_controller.php?aksi_login=loginMasuk")