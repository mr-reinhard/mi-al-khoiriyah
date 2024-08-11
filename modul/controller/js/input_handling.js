


    
    function handlingOnlyAphabet(mainForm, fieldId){
    
        // gunakan event handler keyup untuk memantau input yang masuk
        $(mainForm).on("input", fieldId, function(){
    
            // deklarasi id element ke dalam variable
            var text = $(fieldId).val();

            // ubah karakter isi text menjadi huruf besar semua
            var capitalizedtext = text.toUpperCase()

            // Menghapus karakter selain huruf
            capitalizedtext = capitalizedtext.replace(/[^a-zA-Z\s]/g, '');
    
            // Menetapkan nilai kembali ke input
            newText = $(fieldId).val(capitalizedtext)
    
        })
    
    }

    function handlingOnlyNumber(mainForm, fieldId){

        $(mainForm).on("input", fieldId, function(){
    
            var text = $(fieldId).val();

            // Menghapus karakter selain huruf
            text = text.replace(/[^0-9]/g, '');
    
            // Menetapkan nilai kembali ke input
            newText = $(fieldId).val(text)
    
        })
    }


    function handlingUploadFileGambar(mainForm,uploadFile){

        $(mainForm).on("change",uploadFile,function(){

             var fileInput = $(this)[0]
             var file = fileInput.files[0]

             if (file) {

                var maxSizeInBytes = 0.5 * 1024 * 1024;

                var fileExtension = file.name.split('.').pop().toLowerCase();

                var allowedExtension = ['jpg','jpeg','png']

                if ($.inArray(fileExtension,allowedExtension) !== -1    ) {

                    if (file.size > maxSizeInBytes) {
                        Swal.fire({
                            title: "File terlalu besar",
                            text: "Maksimal hanya 524KB",
                            icon: "error"
                          });
                        $(this).val('')
                        return;    
                    }

                }
                else{
                    Swal.fire({
                        title: "Ekstensi tidak valid",
                        text: "hanya file .JPG .JPEG .PNG",
                        icon: "error"
                      });
                    $(this).val('')
                }
             }
        })

    }

    function handlingUploadFilePDF(mainForm,uploadFile){

        $(mainForm).on("change",uploadFile,function(){

             var fileInput = $(this)[0]
             var file = fileInput.files[0]

             if (file) {

                var maxSizeInBytes = 0.5 * 1024 * 1024;

                var fileExtension = file.name.split('.').pop().toLowerCase();

                var allowedExtension = ['pdf']

                if ($.inArray(fileExtension,allowedExtension) !== -1    ) {

                    if (file.size > maxSizeInBytes) {
                        Swal.fire({
                            title: "File terlalu besar",
                            text: "Maksimal hanya 524KB",
                            icon: "error"
                          });
                        $(this).val('')
                        return;    
                    }

                }
                else{
                    Swal.fire({
                        title: "Ekstensi tidak valid",
                        text: "hanya file .PDF",
                        icon: "error"
                      });
                    $(this).val('')
                }
             }
        })

    }

    function cekPanjangKarakter(mainForm,fieldId){

        $(mainForm).on("blur",fieldId,function(){

            var textField = $(this).val()

            if (textField.length < 16) {
                Swal.fire({
                    title: "NIK tidak valid",
                    text: "NIK hanya terdiri dari 16 digit",
                    icon: "error"
                  });

                  $(this).val('')
            }
        })
    }

    function togglePassword(mainForm,divTogglePassword,idPassword,toggleIconPassword){

        $(mainForm).on("click",divTogglePassword,function(){

            const passWord = $(idPassword)
            const type = passWord.attr('type') === 'password' ? 'text' : 'password';
            passWord.attr('type',type);
            $(toggleIconPassword).toggleClass('fa-eye-slash fa-eye');

        })
    }

    function toggleCheckbox(mainForm,checkBoxId,disabledElement){

        $(disabledElement).prop('disabled',true)

        $(mainForm).on("change",checkBoxId,function(){

            if ($(this).is(':checked')) {

                $(disabledElement).prop('disabled',false)

            }
            else{
                
                $(disabledElement).prop('disabled',true)
            }
        })
    }

    function blokSpasi(formName,elementInput){

        $(formName).on("input",elementInput, function(){
            $(this).val($(this).val().replace(/\s/g, ''));
        })
    }



cekPanjangKarakter("#mainContentAdmin","#id_admFormRegisSiswa_inputNikBapak")

cekPanjangKarakter("#mainContentAdmin","#id_admFormRegisSiswa_inputNikIbu")

    
// karakter handling admin
handlingOnlyAphabet("#mainContentAdmin", "#id_admFormRegisSiswa_inputNamaSiswa");

handlingOnlyNumber("#mainContentAdmin","#id_admFormRegisSiswa_inputNikBapak");

handlingOnlyAphabet("#mainContentAdmin","#id_admFormRegisSiswa_inputNamaBapak");

handlingOnlyNumber("#mainContentAdmin","#id_admFormRegisSiswa_inputKontakBapak");

handlingOnlyNumber("#mainContentAdmin","#id_admFormRegisSiswa_inputNikIbu");

handlingOnlyAphabet("#mainContentAdmin","#id_admFormRegisSiswa_inputNamaIbu");

handlingOnlyNumber("#mainContentAdmin","#id_admFormRegisSiswa_inputKontakIbu");

//==========================================================================================
// upload handling admin
handlingUploadFileGambar("#mainContentAdmin","#id_admFormRegisSiswa_uploadPassPhoto");

handlingUploadFilePDF("#mainContentAdmin","#id_admFormRegisSiswa_uploadIjazah");

handlingUploadFilePDF("#mainContentAdmin","#id_admFormRegisSiswa_uploadKk");

handlingUploadFilePDF("#mainContentAdmin","#id_admFormRegisSiswa_uploadAktaKelahiran");

handlingUploadFilePDF("#mainContentAdmin","#id_admFormRegisSiswa_UploadSuratPernyataan");

handlingUploadFileGambar("#mainContentAdmin","#id_admFormRegisSiswa_uploadBuktiTransfer");

//=========================================================================================

// password login user
togglePassword("#mainContentLoginUser","#id_spanTogglePassword_userFormLoginUser","#id_inputPassword_userFormLoginUser","#id_iInputPassword_userFormLoginUser")
togglePassword("#mainContentLoginUser","#id_spanTogglePassword_userFormRegisterUser","#id_inputPassword_userFormRegisterUser","#id_iInputPassword_userFormRegisterUser")

// handling karakter register user
blokSpasi("#mainContentLoginUser","#id_inputUsername_userFormRegisterUser")
handlingOnlyNumber("#mainContentLoginUser","#id_inputTelfonUser_userFormRegisterUser");

// handling karakter login user
blokSpasi("#mainContentLoginUser","#id_inputUsername_formLoginUser")


//=======================================================================================
// karakter handling user











