

function ajaxHttpRequest(){

}

function saveData(){

}

function openFormByValue(mainForm,buttonName,urlForm){

    var btnValue = $(buttonName).attr("value")

    $.ajax({
        url:urlForm,
        method:'GET',
        data:{
            btn_value:btnValue
        },
        dataType:"text",
        success:function(data){
            $(mainForm).html(data)
        },
        error:function(xhr, status, error){
            console.error('AJAX Error:', status, error);
            console.error('Response Text:', xhr.responseText);
            console.error('Status:', xhr.status);
        }
    })
}

function saveDataSiswa(mainFormId,childFormId,titleBefore,textBefore,iconBefore,cancelBtn,confirmBtn,urlBackend,urlFormToShow,showForm){

    $(mainFormId).on("submit",childFormId,function(e){

        e.preventDefault()

        Swal.fire({
            title:titleBefore,
            text:textBefore,
            icon:iconBefore,
            showCancelButton:true,
            cancelButtonText:cancelBtn,
            confirmButtonColor:"#3085D6",
            cancelButtonColor:"#D33",
            confirmButtonText:confirmBtn
        }).then((result) => {

            if (result.isConfirmed) {
                
                
                $.ajax({
                    url:urlBackend,
                    type:'POST',
                    data:$(childFormId).serialize(),
                    success:function(data){
                        console.log('Input Berhasil',data.Message)

                        $.ajax({
                            url:urlFormToShow,
                            type:'GET',
                            success:function(data){
                                $(showForm).html(data)
                            },
                            error:function(xhr,status,error){
                                console.log('Error loading form', status, error)
                            }
                        })

                        sweetAlert_notifikasiPojokKananAtas(data.Logo,data.Message)
                    },
                    error:function(xhr,status,error){
                            console.error('AJAX Error:', status, error);
                            console.error('Response Text:', xhr.responseText);
                            console.error('Status:', xhr.status);
                    }
                })

            }

        })
    })

}

function saveDataOrangtua(){

}

// non serialize
function saveDataUpload(){
    
}

// non serialize
function saveDataPembayaran(){

}



// mainFormId,
// childFormId,
// titleBefore,
// textBefore,
// iconBefore,
// cancelBtn,
// confirmBtn,
// urlBackend,
// urlFormToShow,
// showForm



saveDataSiswa(
"#mainContentUser",
"#id_formBiodataSiswa_userFormSiswaRegister",
"Simpan Data ?",
"Data siswa sudah benar",
"question",
"Batal",
"Ya, simpan",
"../../controller/php/user_controller.php?aksi=simpanDataSiswa",
"pendaftaran/siswa_register.html",
"#mainContentUser"
)