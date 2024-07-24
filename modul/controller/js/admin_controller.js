

        // fungsi setInterval()
        // fungsi clearInterval()
        // fungsi setTimeout()
        //if(navigator.onLine) <-- cek koneksi internet


function ajaxHttpRequest(mainForm, trigger, urlForm){

    $(mainForm).on("click", trigger, function(){

        $.ajax({

            url:urlForm,
            type:'HEAD',
            timeout:2000,

            success:function(){
                console.log("koneksi internet terhubung. \n\nStatus Code : 200 OK")
            },

            error: function(statusCode, textStatus, errorThrow){
                if (statusCode.status === 0) {
                    console.log("Tidak ada koneksi internet")
                }
                else{
                    console.log("Terdapat masalah pada server. \n\nStatus Code : " + statusCode.status)
                }
            }
        })
    })
}


/*

Parameter List:

- mainFormId
- childFormId
- urlBackend
- titleBefore
- textBefore
- iconBefore
- confirmBtnText
- cancelBtnText
- logoAfter
- judulAfter
- urlFormToShow
- showForm

*/

// save data yang tipenya multipart/form data
// tanpa serialize()
function saveData_nonSerialize(mainFormId,
    childFormId,
    titleBefore,
    textBefore,
    iconBefore,
    cancelBtn,
    confirmBtn,
    urlBackend,
    urlFormToShow,
    showForm,) {

    $(mainFormId).on("submit", childFormId, function (e) {
        e.preventDefault();

        Swal.fire({
            title: titleBefore,
            text: textBefore,
            icon: iconBefore,
            showCancelButton: true,
            cancelButtonText: cancelBtn,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: confirmBtn
        }).then((result) => {
            if (result.isConfirmed) {

                if (navigator.onLine) {
                    var formData = new FormData(this);

                    $.ajax({
                        url: urlBackend,
                        type: 'POST',
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            // Handle successful response
                            console.log('Success:', data);

                            // Load the form to show
                            $.ajax({
                                url: urlFormToShow,
                                type: 'GET',
                                success: function (formData) {
                                    $(showForm).html(formData);
                                },
                                error: function (xhr, status, error) {
                                    console.error('Error loading form:', status, error);
                                }
                            });

                            // Show Toast notification
                            const Toast = Swal.mixin({
                                toast: true,
                                position: "top-end",
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.onmouseenter = Swal.stopTimer;
                                    toast.onmouseleave = Swal.resumeTimer;
                                }
                            });
                            Toast.fire({
                                icon: data.Logo,
                                title: data.Message
                            });
                        },
                        error: function (xhr, status, error) {
                            console.error('AJAX Error:', status, error);
                            console.error('Response Text:', xhr.responseText);
                            console.error('Status:', xhr.status);
                        }
                    });
                } else {
                    sweetAlert_notifikasiDiTengah("Koneksi terputus", "Periksa koneksi internet kamu", "error");
                }
            }
        });
    });
}

// end function


// function save all data function
function saveData(mainForm, formId, urlBackend){

    $(mainForm).on("submit", formId, function(e){

        e.preventDefault();

        $.ajax({
            url:urlBackend,
            type:'POST',
            data: $(formId).serialize(),
            success:function(data){
                console.log(data)
                console.log("Simpan berhasil");
            }
        })
    })

}

// function delete all data function
function deleteData(mainForm, btnValue, endpointUrl){

    $(mainForm).on("click", btnValue, function(){

        var nilaiTombol = $(btnValue).attr("value");

        $.ajax({
            url:endpointUrl,
            type:'POST',
            data: {
                value: nilaiTombol
            },
            success: function(data){
                // logika kemananya disini
            }
        })
    })
}

// open all form function
function openForm(mainForm, btnValTrigger, urlEndpoint, idFormToLoad){

    $(mainForm).on("click", btnValTrigger, function(){

        var idParameter = (btnValTrigger).val();

        $, ajax({
            url: urlEndpoint,
            method: "POST",
            data: {
                id: idParameter
            },
            dataType: "text",
            success: function (data) {
                $(idFormToLoad).html(data)
            }
        })

    })

}

function uploadFile(mainFormId, childFormId, urlBackend){

    $(mainFormId).on("submit", childFormId, function(e){
        e.preventDefault();
        var formData = new FormData(this)
        $.ajax({
            type:'POST',
            url:urlBackend,
            data:formData,
            contentType:false,
            processData:false,
            success:function(response){
                console.log(response)
            }
        })
    })

}

function liveSearchAjax(mainForm, fieldId, urlBackend){

    $(mainForm).on("keyup", fieldId, function(){
        var nilaiInputan = $(fieldId).val();
        $.ajax({
            type:'POST',
            url:urlBackend,
            data:{
                query:nilaiInputan
            },
            dataType:'HTML',
            success:function(data){
                //console.log(data)
                    console.log(data)
            },
            error:function(xhr, status, error){
                console.log("Error : ", error)
            }

        })
    })
}

function fetchDropDown(idSelectOption,selectOptionVal,selectOptionList,namaSebelum,urlBackEnd){

    

        $.ajax({
            url:urlBackEnd,
            type:'GET',
            dataType:'JSON',
            success:function(data){

                //console.log(data)
                $(idSelectOption).empty()
                $(idSelectOption).append('<option disabled selected>'+namaSebelum+'</option>');
                
                $.each(data, function(index, item,){

                    var option = '<option value = "'+item[selectOptionVal]+'">'+item[selectOptionList]+'</option>';

                    $(idSelectOption).append(option);

                })
            },
            
            error:function(xhr, status, error){
                console.log("Error", error);
            }
        })

    

}


function switchPembayaran(FormId,namaDiv,idSelectOption1,namaBank,uploadTransfer){
        
            $(FormId).on("change",idSelectOption1,function(){

                var select1 = $(idSelectOption1).val()
    
                if (select1 === "TB1") {
                    //alert("Cash");
                    //console.log("Cash")
                    $(namaDiv).hide()
                    $(namaBank).prop('required',false)
                    $(uploadTransfer).prop('required',false)
                }
                else{
                    //$(testDivId).remove()
                    //console.log("Non Tunai")
                    $(namaDiv).show()
                    $(namaBank).prop('required',true)
                    $(uploadTransfer).prop('required',true)
                }
    
            })
    
}

function switchSkema(formId,tableDiv,idSelectOption1,nilaiSkema){

    $(formId).on("change",idSelectOption1,function(){

        var select1 = $(idSelectOption1).val()

        if (select1 === nilaiSkema) {
            $(tableDiv).show()
        }
        else{
            $(tableDiv).hide()
        }
    })
    
}

function testSave(mainForm,ChildForm){
    
    $(mainForm).on("submit",ChildForm,function(e){

        e.preventDefault()

          Swal.fire({
    title: "Hello",
    text: "Hello",
    icon: "info",
    showCancelButton: true,
    cancelButtonText: "Batal",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Simpan"
  }).then((result) => {
    if (result.isConfirmed) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: success,
        title: Berhasil
      });
    }
  });
    })
}


//testSave("#mainContentAdmin","#id_adminFormRegisterSiswa")

//saveData("#mainContentAdmin","#id_adminFormRegisterSiswa","../../controller/php/pendaftaran_controller.php?aksi=simpanDataSiswa")



// mainContentAdmin
// id_adminFormRegisterSiswa
// idDiv_sectionBayarNonTunai
// id_admFormRegisSiswa_pilihTipePembayaran
// hide and show nama bank dan upload buti transfer


    
    //fetchDropDown("#id_adminFormRegisterSiswa","#id_admFormRegisSiswa_pilihTipePembayaran","id_tipe_bayar","tipe_bayar","-- Pilih tipe bayar --","../../controller/php/admin_controller.php?aksi=fetchTipePembayaran");




//switchPembayaran("#mainContentAdmin","#id_admFormRegisSiswa_pilihTipePembayaran");

// dropdown tipe pembayaran


// dropdown bank
//fetchDropDown("#id_adminFormRegisterSiswa","#id_admFormRegisSiswa_pilihNamaBank","id_bank","nama_bank","-- Pilih nama bank --","../../controller/php/admin_controller.php?aksi=fetchNamaBank");


// dropdown nama bank
//fetchDropDown("#id_adminFormRegisterSiswa","#id_admFormRegisSiswa_pilihNamaBank","id_bank","nama_bank","-- Pilih nama bank --","../../controller/php/admin_controller.php?aksi=fetchNamaBank");

// mainFormId,
//     childFormId,
//     titleBefore,
//     textBefore,
//     iconBefore,
//     cancelBtn,
//     confirmBtn,
//     urlBackend,
//     urlFormToShow,
//     showForm,iconAfter,
//     judulAfter

saveData_nonSerialize("#mainContentAdmin",
    "#id_adminFormRegisterSiswa",
    "Register siswa","Apakah data sudah benar ?","question",
    "Batal","Ya, Simpan",
    "../../controller/php/pendaftaran_controller.php?aksi=admin_simpanDataSiswa",
    "pendaftaran/siswa_register.html","#mainContentAdmin"
)

// saveData_nonSerialize("#mainContentAdmin",
//     "#id_adminFormRegisterSiswa",
//     "../../controller/php/pendaftaran_controller.php?aksi=simpanDataSiswa",
//     "Register Siswa",
//     "Apakah data sudah benar?",
//     "question",
//     "Ya, Simpan",
//     "Batal",
//     "success",
//     "Registrasi Berhasil",
//     "../../admin/siswa/siswa_register.html",
//     "#mainContentAdmin");

//liveSearchAjax("#mainContentAdmin","#id_inputNamaSiswa","../../controller/php/admin_controller.php?aksi=simpanDataSiswa");



/*

1- mainFormId
2- childFormId
3- urlBackend
4- titleBefore
5- textBefore
6- iconBefore
7- confirmBtnText
8- cancelBtnText
9- logoAfter
10- judulAfter
11- urlFormToShow
12- showForm

*/



//uploadFile("#mainContentAdmin","#idForm_siswaRegister","../../controller/php/admin_controller.php?aksi=simpanDataSiswa");

