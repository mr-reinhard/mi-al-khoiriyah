

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
                sweetAlert_notifikasiPojokKananAtas(data.Logo,data.Pesan)
                callFormAuto("pembayaran/list_pendaftaran.html","#mainContentAdmin");
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


function fetchDataKeTable_konfirmasiPembayaran(tableBody,urlBackend){
    
    $.ajax({
        url:urlBackend,
        type:'POST',
        success:function(data){
            //console.log(data)

            var tbody = $(tableBody)

            tbody.empty()

            $.each(data, function(index, row){

                var tr = $('<tr></tr>');

                var tdElementNumber = $('<td></td>').text(index + 1)
                tr.append(tdElementNumber)

                var tdNamaSiswa = $('<td></td>').text(row.namaSiswa)
                tr.append(tdNamaSiswa)

                var btnKonfirmasiPembayaran = $('<button class="btn btn-success" id="id_btnBukaFormApprove_adminFormListPembayaran" name="user_btnPrintPembayaran" value="'+row.id_register+'"><i class="fas fa-check"></i></button>')
                var tbButtonKonfirmasiPembayaran = $('<td></td>').append(btnKonfirmasiPembayaran)
                tr.append(tbButtonKonfirmasiPembayaran)

                tbody.append(tr)

            })

        },
        error:function(xhr,status,error){
            console.log('Ajax Error',status,error)
            console.log('',xhr.responseText)
            console.log('Status',xhr.status)
        }
    })
}

function openFormApprove(mainForm,idButton,urlBackend1,urlBackend2){

    $(mainForm).on("click",idButton,function(){

        var nilaiTombol = $(this).attr("value")

        $.ajax({
            url:urlBackend1,
            method:'POST',
            data:{
                idReg:nilaiTombol
            },
            success:function(data){
                //console.log(data.namaSiswa)
                $.ajax({
                    url:urlBackend2,
                    method:'POST',
                    success:function(response){
                        $("#mainContentAdmin").html(response)
                        $("#id_fetchIdPembayaranSiswa_adminFormApprovePembayaran").val(data.id_register)
                        $("#id_fetchInputNamaSiswa_adminFormApprovePembayaran").val(data.namaSiswa)
                        $("#id_fetchInputgenderSiswa_adminFormApprovePembayaran").val(data.namaGender)
                    }
                })

            },
            error:function(xhr,status,error){
                console.log('AJAX Error',status,error)
                console.log('Response Text',xhr.responseText)
                console.log('Status',xhr.status)
            }
        })
    })
}

//==================================================================================

function openFormEdit(){


}

function updateDataSiswa(){

}

function getListDetailDokumen(tableBody,urlBackend){

    $.ajax({
        url:urlBackend,
        type:'POST',
        success:function(data){
            //console.log(data)

            var tbody = $(tableBody)

            tbody.empty()

            $.each(data, function(index, row){

                var tr = $('<tr></tr>');

                var tdElementNumber = $('<td></td>').text(index + 1)
                tr.append(tdElementNumber)

                var tdNamaSiswa = $('<td></td>').text(row.namaSiswa)
                tr.append(tdNamaSiswa)

                var btnLihatDetailDokumen = $('<button class="btn btn-primary me-1" id="id_btnDetailDokumen_formPendaftaranLihat" name="user_btnPrintPembayaran" value="'+row.idSiswa+'"><i class="fas fa-eye"></i></button>')
                var btnEditSiswa = $('<button class="btn btn-warning" id="" name="user_btnPrintPembayaran" value="'+row.idRegister+'"><i class="fas fa-pen"></i></button>')
                var tdAppendElement = $('<td></td>').append(btnLihatDetailDokumen,btnEditSiswa)
                tr.append(tdAppendElement)

                tbody.append(tr)

            })

        },
        error:function(xhr,status,error){
            console.log('AJAX Error',status,error)
            console.log('Response Text',xhr.responseText)
            console.log('Status',xhr.status)
        }
    })

}

function getListRiwayatPembayaran(urlBackend,tableBody){

    $.ajax({
        url:urlBackend,
        type:'POST',
        success:function(data){
            //console.log(data)

            var tbody = $(tableBody)

            tbody.empty()

            $.each(data, function(index, row){

                var tr = $('<tr></tr>');

                var tdElementNumber = $('<td></td>').text(index + 1)
                tr.append(tdElementNumber)

                var tdNamaSiswa = $('<td></td>').text(row.namaSiswa)
                tr.append(tdNamaSiswa)

                var tdStatusBayar = $('<td></td>').text(row.approval_name)
                tr.append(tdStatusBayar)

                tbody.append(tr)

            })
        },
        error:function(xhr,status,error){
            console.log('AJAX Error',status,error)
            console.log('Response Text',xhr.responseText)
            console.log('Status',xhr.status)
        }
    })
}

function getListPrintDokumen(urlBackend,tableBody){

    $.ajax({
        url:urlBackend,
        type:'POST',
        success:function(data){
            //console.log(data)

            var tbody = $(tableBody)

            tbody.empty()

            $.each(data, function(index, row){

                var tr = $('<tr></tr>');

                var tdElementNumber = $('<td></td>').text(index + 1)
                tr.append(tdElementNumber)

                var tdNamaSiswa = $('<td></td>').text(row.namaSiswa)
                tr.append(tdNamaSiswa)

                var btnPrintDokumen = $('<button class="btn btn-primary" id="" name="name_btnPrintDokumen_adminFormListPrint" value="'+row.id_register+'"><i class="fas fa-print"></i></button>')
                var tdButtonKonfirmasiPembayaran = $('<td></td>').append(btnPrintDokumen)
                tr.append(tdButtonKonfirmasiPembayaran)

                tbody.append(tr)

            })
        },
        error:function(xhr,status,error){
            console.log('AJAX Error',status,error)
            console.log('Response Text',xhr.responseText)
            console.log('Status',xhr.status)
        }
    })
}

function logoutAkun(buttonMenu,titleBefore,textBefore,iconBefore,cancelButton,confirmButton,urlBackend){

    $(buttonMenu).click(function(){

        Swal.fire({
            title:titleBefore,
            text:textBefore,
            icon:iconBefore,
            showCancelButton:true,
            cancelButtonText:cancelButton,
            confirmButtonColor:"#3085D6",
            cancelButtonColor:"#D33",
            confirmButtonText:confirmButton
        }).then((result) => {
        
            if (result.isConfirmed) {
        
                if (navigator.onLine) {
                    
                    // request ke backend
                    $.ajax({
                        url:urlBackend,
                        type:'POST',
                        success:function(data){
                            
                            // alihkan form ketika ajax sukses
                            window.location.href = "../../../index.html";
                            //console.log(data.Pesan)

                        },
                        error:function(xhr,status,error){
                            console.error('AJAX Error:', status, error);
                            console.error('Response Text:', xhr.responseText);
                            console.error('Status:', xhr.status);
                        }

                    })

                }
        
            }
        
        })

    })
}

function infoBerhasil(urlBackend,elementId){

    $.ajax({
        url:urlBackend,
        type:'POST',
        success:function(data){
            //console.log(data[0].totalBerhasil)
            $(elementId).text(data[0].totalBerhasil)
        },
        error:function(xhr,status,error){
            console.log('Ajax Error',status,error)
            console.log('Response Text',xhr.responseText)
            console.log('Status',xhr.status)
        }
    })
}

function infoMenunggu(urlBackend,elementId){
    $.ajax({
        url:urlBackend,
        type:'POST',
        success:function(data){
            //console.log(data.totalMenunggu)
            $(elementId).text(data[0].totalMenunggu)
        },
        error:function(xhr,status,error){
            console.log('Ajax Error',status,error)
            console.log('Response Text',xhr.responseText)
            console.log('Status',xhr.status)
        }
    })
}

function infoDibatalkan(urlBackend,elementId){
    $.ajax({
        url:urlBackend,
        type:'POST',
        success:function(data){
            $(elementId).text(data[0].totalDibatalkan)
        },
        error:function(xhr,status,error){
            console.log('Ajax Error',status,error)
            console.log('Response Text',xhr.responseText)
            console.log('Status',xhr.status)
        }
    })
}

function cariRiwayat(mainForm,searchElement,urlBackend,tableBody){

    $(mainForm).on("keyup",searchElement,function(){
         
        var fieldCari = $(this).val();

        $.ajax({
            url:urlBackend,
            type:'POST',
            data:{
                namaSiswa:fieldCari
            },
            success:function(data){

                var tbody = $(tableBody)

                tbody.empty()
    
                $.each(data, function(index, row){
    
                    var tr = $('<tr></tr>');
    
                    var tdElementNumber = $('<td></td>').text(index + 1)
                    tr.append(tdElementNumber)
    
                    var tdNamaSiswa = $('<td></td>').text(row.namaSiswa)
                    tr.append(tdNamaSiswa)
    
                    var tdStatusBayar = $('<td></td>').text(row.approval_name)
                    tr.append(tdStatusBayar)
    
                    tbody.append(tr)
    
                })
            },
            error:function(xhr,status,error){
                console.log('Ajax Error',status,error)
                console.log('Response Text',xhr.responseText)
                console.log('Status',xhr.status)
            }

        })
    })
}

function bukaFormDetailDokumen(mainFormId,idButton,urlBackend1,urlBackend2,tableBody){

    $(mainFormId).on("click",idButton,function(){

        var nilaiTombol = $(this).attr("value");

        $.ajax({
            url:urlBackend1,
            method:'POST',
            data:{
                idSis:nilaiTombol
            },
            success:function(data){
                console.log(data[0].id_siswa)
                $.ajax({
                    url:urlBackend2,
                    method:'POST',
                    success:function(response){
                        $("#mainContentAdmin").html(response)
                        // $("#id_idRegisterSiswa_userFormPembayaran").val(data[0].idRegister)
                        // $("#id_idSiswa_userFormPembayaran").val(data[0].idSiswa)
                        var tbody = $(tableBody)

                        tbody.empty()
            
                        $.each(data, function(index, row){
            
                            var tr = $('<tr></tr>');
            
                            var tdElementNumber = $('<td></td>').text(index + 1)
                            tr.append(tdElementNumber)
            
                            var hrefNamaUrlDokumen = $('<a href="../../../asset/upload/'+row.doc_name+'">'+row.doc_name+'</a>')
                            var tdNamaDokumen = $('<td></td>').append(hrefNamaUrlDokumen)
                            tr.append(tdNamaDokumen)
            
                            tbody.append(tr)
            
                        })
                    },
                    error:function(xhr,status,error){
                        console.log('Call Form Error',status,error)
                        console.log('Response Text',xhr.responseText)
                        console.log('Status',xhr.status)
                    }
                })
            },
            error:function(xhr,status,error){
                console.log('AJAX Error',status,error)
                console.log('Response Text',xhr.responseText)
                console.log('Status',xhr.status)
            }
        })
    })

}

bukaFormDetailDokumen("#mainContentAdmin",
    "#id_btnDetailDokumen_formPendaftaranLihat",
    "../../controller/php/pendaftaran_controller.php?aksi=fetchDokumen_ById",
    "pendaftaran/detail_siswa.html",
    "#id_tBodydetailDokumenSiswa_formPendaftaran_detailSiswa")

cariRiwayat("#mainContentAdmin","#id_searchNamaSiswa_formListRiwayatPembayaran","../../controller/php/pendaftaran_controller.php?aksi=fetchRiwayatPembayaran_byName_byStatus","#id_tableBody_modulListRiwayatPembayaran")

logoutAkun("#id_menuLogout_adminMenuLogout","Logout ?","Semua data sudah disimpan.","question","Batal","Ya, Logout","../../controller/php/pendaftaran_controller.php?aksi=logoutAkun")

saveData("#mainContentAdmin",
    "#id_formApprovePembayaran_adminFormPembayaran",
    "../../controller/php/pendaftaran_controller.php?aksi=UpdateDataPembayaran");

openFormApprove("#mainContentAdmin",
    "#id_btnBukaFormApprove_adminFormListPembayaran",
    "../../controller/php/pendaftaran_controller.php?aksi=fetchApprovalBy_Id_Name",
    "pembayaran/form_approve.html")


saveData_nonSerialize("#mainContentAdmin",
    "#id_adminFormRegisterSiswa",
    "Register siswa","Apakah data sudah benar ?","question",
    "Batal","Ya, Simpan",
    "../../controller/php/pendaftaran_controller.php?aksi=admin_simpanDataSiswa",
    "pendaftaran/siswa_register.html","#mainContentAdmin"
)

