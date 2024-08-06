



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

// cek session di dalam dashboard user
function getUserSession(elementName,urlBackEnd){

    $.ajax({
        url:urlBackEnd,
        type:'GET',
        success:function(data){
            $(elementName).text(data.usernameSession)
        },
        error:function(xhr,status,error){
            console.error('AJAX Error:', status, error);
            console.error('Response Text:', xhr.responseText);
            console.error('Status:', xhr.status);
        }
    })

}


// Serialize -> update data siswa
function saveData_serialize(mainFormId,childFormId,titleBefore,textBefore,iconBefore,cancelButton,confirmButton,urlBackend){

    $(mainFormId).on("submit",childFormId,function(e){

        e.preventDefault()

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
                        data:$(childFormId).serialize(),
                        success:function(data){
                            
                            // alihkan form ketika ajax sukses
                            callFormAuto(data.directHalaman,"#mainContentUser");
                            sweetAlert_notifikasiPojokKananAtas(data.Logo,data.Pesan)

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

function saveData_nonSerialize(mainFormId,childFormId,titleBefore,textBefore,iconBefore,cancelButton,confirmButton,urlBackend){

    $(mainFormId).on("submit",childFormId,function(e){

        e.preventDefault()

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

                    var formData = new FormData(this)
                    
                    // request ke backend
                    $.ajax({
                        url:urlBackend,
                        type:'POST',
                        data:formData,
                        contentType:false,
                        processData:false,
                        success:function(data){

                            

                            callFormAuto(data.directHalaman,"#mainContentUser");

                            sweetAlert_notifikasiPojokKananAtas(data.Logo,data.Pesan)

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



function logOut(mainFormId,childMenu,titleBefore,textBefore,iconBefore,cancelButton,confirmButton,urlBackend){

    $(mainFormId).on("click",childMenu,function(){

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
                            window.location.href = data.directHalaman;

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

function switchTipeBayar(mainForm,elementTrigger,elementResponse,namaBank,buktiTransfer){

    $(mainForm).on("change",elementTrigger,function(){

        var changeElement = $(elementTrigger).val()

        if (changeElement === "TB1") {
            // handling otw
            $(elementResponse).hide()
            $(namaBank).prop('required',false)
            $(buktiTransfer).prop('required',false)

        }
        else{
            // handling otw
            $(elementResponse).show()
            $(namaBank).prop('required',true)
            $(buktiTransfer).prop('required',true)
        }

    })
    
}

function pilihSkema(mainForm,elementTrigger,urlBackend,tableBody){//elementResponse

    $(mainForm).on("change",elementTrigger,function(){

        var changeElement = $(elementTrigger).val()

        $.ajax({
            url:urlBackend,
            type:'POST',
            data:{
                idSkema:changeElement
            },
            success:function(data){
                //console.log(data)

                var tbody = $(tableBody)

                tbody.empty()
    
                $.each(data, function(index, row){
    
                    var tr = $('<tr></tr>');
    
                    var tdElementNumber = $('<td></td>').text(index + 1)
                    tr.append(tdElementNumber)
    
                    var tdDetailSkema = $('<td></td>').text(row.detail_skema)
                    tr.append(tdDetailSkema)

                    var tdHargaSkema = $('<td></td>').text(row.harga)
                    tr.append(tdHargaSkema)
    
                    tbody.append(tr)
    
                })

            },
            error:function(xhr,status,error){
                console.error('AJAX Error:', status, error);
                console.error('Response Text:', xhr.responseText);
                console.error('Status:', xhr.status);
            }
        })

        // if (changeElement === "SKM1") {
        //     // handling otw
        //     $(elementResponse).show()
        // }
        // else{
        //     // handling otw
        //     $(elementResponse).hide()
        // }

    })

}


function fetchDropDown(idSelectOption,selectOptionVal,selectOptionList,namaSebelum,urlBackEnd){

    $.ajax({
        url:urlBackEnd,
        type:'GET',
        success:function(data){
            //console.log(data)
            $(idSelectOption).empty()
            $(idSelectOption).append('<option disabled selected>'+namaSebelum+'</option>')

            $.each(data, function(index,item){

                var option = '<option value = "'+item[selectOptionVal]+'">'+item[selectOptionList]+'</option>'

                $(idSelectOption).append(option);
            })
        },
        error:function(xhr,status,error){
            console.error('AJAX Error:', status, error);
            console.error('Response Text:', xhr.responseText);
            console.error('Status:', xhr.status);
        }
    })

}

// digunain di modul edit/list_pendaftar.html
function fetchDataKeTable(tableBody,urlBackEnd){

    $.ajax({
        url:urlBackEnd,
        type:'GET',
        success:function(data){

            //console.log(data)
            
            var teble_body = $(tableBody)

            $(teble_body).empty();

            $.each(data, function(index, row){

                var tr = $('<tr></tr>');

                // no urut
                var tdElementNumber = $('<td></td>').text(index + 1)
                tr.append(tdElementNumber)

                // nama siswa
                var tdNamaSiswa = $('<td></td>').text(row.namaSiswa)
                tr.append(tdNamaSiswa)

                // tombol aksi
                var btnEditSiswa = $('<button type="button" class="btn btn-warning me-1" id="id_btnEditSiswa_formListPendaftar" value="'+row.idSiswa+'"><i class="fas fa-pen-to-square"></i></button>')
                var btnHapusSiswa = $('<button type="button" class="btn btn-danger" id="id_btnHapusSiswa_formListPendaftar" value="'+row.idSiswa+'"><i class="fas fa-user-xmark"></i></button>');
                var tdButtonEditSiswa = $('<td></td>').append(btnEditSiswa,btnHapusSiswa)
                tr.append(tdButtonEditSiswa)

                teble_body.append(tr)

            })

        },
        error:function(xhr,status,error){
            console.log('AJAX Error',status,error)
            console.log('Response Text',xhr.responseText)
            console.log('Status',xhr.status)
        }
    })

}

// Tampilkan data ke dalam table di modul upload/list_pendaftar.html
function fetchDataKeTable_uploadDoc(tableBody,urlBackend){

    $.ajax({
        url:urlBackend,
        type:'POST',
        success:function(data){

            var tBody = $(tableBody)

            tBody.empty()

            $.each(data, function(index, row){

                var tr = $('<tr></tr>');

                // no urut
                var tdElementNumber = $('<td></td>').text(index + 1)
                tr.append(tdElementNumber)

                // nama siswa
                var tdNamaSiswa = $('<td></td>').text(row.namaSiswa)
                tr.append(tdNamaSiswa)

                // tombol aksi
                var btnUploadSiswa = $('<button type="button" class="btn btn-primary" id="id_btnUploadDoc_userFormListPendaftar_mdUpload" value="'+row.idSiswa+'"><i class="fas fa-upload"></i></button>')
                var tdButtonEditSiswa = $('<td></td>').append(btnUploadSiswa)
                tr.append(tdButtonEditSiswa)

                tBody.append(tr)

            })
        },
        error:function(xhr,status,error){
            console.log('AJAX Error',status,error)
            console.log('Response Text',xhr.responseText)
            console.log('Status',xhr.status)
        }
    })
}

// Tampilkan data ke dalam table di modul /pembayaran/list_pendaftar.html
function fetchDataKeTable_pembayaran(tableBody,urlBackend){

    $.ajax({
        url:urlBackend,
        type:'POST',
        success:function(data){
            var tBody = $(tableBody)

            tBody.empty()

            $.each(data, function(index, row){
                var tr = $('<tr></tr>');

                // no urut
                var tdElementNumber = $('<td></td>').text(index + 1)
                tr.append(tdElementNumber)

                // nama siswa
                var tdNamaSiswa = $('<td></td>').text(row.namaSiswa)
                tr.append(tdNamaSiswa)

                // tombol aksi
                var btnUploadSiswa = $('<button type="button" class="btn btn-primary" id="id_btnPembayaranSiswa_userFormListPendaftar_mdPembayaran" value="'+row.idSiswa+'"><i class="fas fa-file-invoice-dollar"></i></button>')
                var tdButtonEditSiswa = $('<td></td>').append(btnUploadSiswa)
                tr.append(tdButtonEditSiswa)

                tBody.append(tr)
            })
        },
        error:function(xhr,status,error){
            console.log('AJAX Error',status,error)
            console.log('Response Text',xhr.responseText)
            console.log('Status',xhr.status)
        }
    })
}

// fungsi ini untuk membuka form /edit/form_edit.html
function editData(mainFormId,idButton,urlBackend1,urlBanckend2){

    $(mainFormId).on("click",idButton,function(){

        var id_siswa = $(this).attr("value")

        $.ajax({
            url:urlBackend1,
            method:'POST',
            data:{
                idSis:id_siswa
            },
            success:function(data){
                console.log(data[0].idSiswa)

                $.ajax({
                    url:urlBanckend2,
                    method:'POST',
                    success:function(response){
                        $("#mainContentUser").html(response)
                        $("#id_idSiswaRegister_userFormEditSiswa").val(data[0].idRegister)
                        $("#id_idSiswa_userFormEditSiswa").val(data[0].idSiswa)
                        $("#id_inputNamaSiswa_userFormEditSiswa").val(data[0].namaSiswa)
                        $("#alamatSiswa").val(data[0].alamatSiswa)
                    },
                    error:function(xhr,status,error){
                        console.log('AJAX Error', status, error)
                        console.log('Response Text', xhr.responseText)
                        console.log('Status', xhr.status)        
                    }
                })
                
            },
            error:function(xhr,status,error){
                console.log('AJAX Error', status,error)
                console.log('Response Text',xhr.responseText)
                console.log('Status',xhr.status)
            }
        })
    })


}

// BUKA FORM UPLOAD
function openFormUpload(mainFormId,idButton,urlBackend1,urlBackend2){

    $(mainFormId).on("click",idButton,function(){

        var id_Siswa = $(this).attr("value")

        $.ajax({
            url:urlBackend1,
            method:'POST',
            data:{
                idSis:id_Siswa
            },
            success:function(data){

                // Retrieve Data
                $.ajax({
                    url:urlBackend2,
                    method:'POST',
                    success:function(response){

                        $("#mainContentUser").html(response)
                        $("#id_idSiswafetch_userUploadForm").val(data[0].idSiswa);
                        
                    },
                    error:function(xhr,status,error){

                        console.log('AJAX Error', status, error)
                        console.log('Response Text', xhr.responseText)
                        console.log('Status', xhr.status)

                    }
                })

            },
            error:function(xhr,status,error){
                console.log('AJAX ERROR',status,error)
                console.log('Response Text',xhr.responseText)
                console.log('Status',xhr.status)
            }
        })
    })

}

// BUKA FORM PEMBAYARAN
function openFormPembayaran(mainFormId,idButton,urlBackend1,urlBanckend2){

    $(mainFormId).on("click",idButton,function(){

        var nilaiTombol = $(this).attr("value");

        $.ajax({
            url:urlBackend1,
            method:'POST',
            data:{
                idSis:nilaiTombol
            },
            success:function(data){
                //console.log(data[0].idSiswa)
                $.ajax({
                    url:urlBanckend2,
                    method:'POST',
                    success:function(response){
                        $("#mainContentUser").html(response)
                        $("#id_idRegisterSiswa_userFormPembayaran").val(data[0].idRegister)
                        $("#id_idSiswa_userFormPembayaran").val(data[0].idSiswa)
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

// FUNCTION HAPUS DATA
function hapusData(mainForm,idButton,titleBefore,textBefore,iconBefore,cancelButton,confirmButton,urlBackend){

    $(mainForm).on("click",idButton,function(){

        var idSis = $(this).attr("value")

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

                    $.ajax({
                        url:urlBackend,
                        type:'POST',
                        data:{
                            id_Sis:idSis,
                        },
                        success:function(data){
                            callFormAuto(data.directHalaman,"#mainContentUser");
                            sweetAlert_notifikasiPojokKananAtas(data.Logo,data.Pesan);
                        },
                        error:function(xhr,status,error){
                            console.log('Ajax Error',status,error)
                            console.log('Response Text',xhr.responseText)
                            console.log('Status',xhr.status)
                        }
                    })
                    
                }
                else{
                    alert('Koneksi Terputus. Silahkan cek koneksi internet mu')
                }
        
            }
        
        })

    })

}


function fetchRiwayatPencarian(mainForm,selectOption,urlBackend,tableBody){

    $(mainForm).on("change",selectOption,function(){

        var dataSelectOption = $(this).val()

        $.ajax({
            url:urlBackend,
            method:'POST',
            data:{
                dataSelect:dataSelectOption
            },
            success:function(data){
                //console.log(data)
                var tBody = $(tableBody)

                tBody.empty()
    
                $.each(data, function(index, row){
                    var tr = $('<tr></tr>');
    
                    // no urut
                    var tdElementNumber = $('<td></td>').text(index + 1)
                    tr.append(tdElementNumber)
    
                    // nama siswa
                    var tdNamaSiswa = $('<td></td>').text(row.namaSiswa)
                    tr.append(tdNamaSiswa)

                    // Status
                    var tdNamaSiswa = $('<td></td>').text(row.approval_name)
                    tr.append(tdNamaSiswa)
    
                    tBody.append(tr)
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

function fetchDataKeTable_printMenu(tableBody,urlBackend){

    $.ajax({
        url:urlBackend,
        type:'POST',
        success:function(data){
            var tBody = $(tableBody)

            tBody.empty()

            $.each(data, function(index, row){
                var tr = $('<tr></tr>');

                // No Urut
                var tdElementNumber = $('<td></td>').text(index + 1)
                tr.append(tdElementNumber)

                // Nama Siswa
                var tdNamaSiswa = $('<td></td>').text(row.namaSiswa)
                tr.append(tdNamaSiswa)

                // Tombol Aksi
                var btnUploadSiswa = $('<button class="btn btn-primary" id="idUnknown" name="user_btnPrintPembayaran" value="'+row.id_register+'"><i class="fas fa-print"></i></button>')
                var tdButtonEditSiswa = $('<td></td>').append(btnUploadSiswa)
                tr.append(tdButtonEditSiswa)

                tBody.append(tr)
            })
        },
        error:function(xhr,status,error){
            console.log('AJAX Error',status,error)
            console.log('Response Text',xhr.responseText)
            console.log('Status',xhr.status)
        }
    })

}

function getBiayaSkema(mainForm,elementTrigger,urlBackend,cardTitle){

    $(mainForm).on("change",elementTrigger,function(){

        var listSkema = $(elementTrigger).val()

        $.ajax({
            url:urlBackend,
            type:'POST',
            data:{
                idSkema:listSkema
            },
            success:function(data){
                //console.log(data[0].harga)
                $(cardTitle).text(data[0].harga)
            }
        })

    })
}

getBiayaSkema("#mainContentUser",
    "#id_pilihSkema_userForm_pembayaran",
    "../../controller/php/user_controller.php?aksi=fetchTotalSkema","#id_textTotalBiaya")

// FETCH RIWAYAT PENCARIAN
fetchRiwayatPencarian("#mainContentUser",
    "#id_pilihPencarianRiwayat_userFormListRiwayat",
    "../../controller/php/user_controller.php?aksi=fetchSemuaRiwayat","#id_tbodyRiwayat_userFormRiwayat")


// BUKA FORM PEMBAYARAN
openFormPembayaran("#mainContentUser",
    "#id_btnPembayaranSiswa_userFormListPendaftar_mdPembayaran",
    "../../controller/php/user_controller.php?aksi=fetchDataEditSiswa",
    "../../view/user/pembayaran/form_pembayaran.html")

// BUKA FORM UPLOAD
openFormUpload("#mainContentUser",
    "#id_btnUploadDoc_userFormListPendaftar_mdUpload",
    "../../controller/php/user_controller.php?aksi=fetchDataEditSiswa",
    "../../view/user/upload/upload_form.html")

// BUKA FORM EDIT
editData("#mainContentUser",
    "#id_btnEditSiswa_formListPendaftar",
    "../../controller/php/user_controller.php?aksi=fetchDataEditSiswa",
    "../../view/user/edit/form_edit.html")

// HAPUS DATA PENDAFTARAN
hapusData("#mainContentUser",
    "#id_btnHapusSiswa_formListPendaftar",
    "Hapus Siswa ?",
    "Data yang dipilih akan hilang permanen",
    "warning",
    "Batalkan",
    "Ya, Hapus",
    "../../controller/php/user_controller.php?aksi=hapusSiswa")

// SKEMA HIDE SHOW CONTENT SKEMA
// mainForm,
// elementTrigger,
// urlBackend
pilihSkema("#mainContentUser","#id_pilihSkema_userForm_pembayaran","../../controller/php/user_controller.php?aksi=fetchSkemaPembayaran","#id_tbodyDetailSkema_userFormPembayaran")

// FETCH PEMBAYARAN (CASH/TUNAI)
switchTipeBayar
switchTipeBayar("#mainContentUser",
    "#id_pilihTipePembayaran_userForm_pembayaran",
    "#divPembayaranNonTunai",
    "#id_pilihNamaBank_userFormPembayaran",
    "#id_uploadBuktiPembayaran_userFormPembayaran")

// LOGOUT AKUN
logOut("#mainContentUser",
    "#id_menuLogout_userFormMenuUtama",
    "Logout ?",
    "Data terakhir sudah disimpan",
    "question",
    "Batal",
    "Ya, logout","../../controller/php/user_controller.php?aksi=logout");


// UPDATE DATA SISWA
saveData_serialize("#mainContentUser",
    "#id_formEditSiswa_userFormEditRegister",
    "Update Siswa ?",
    "Perubahan akan disimpan",
    "question",
    "Batalkan",
    "Ya, Update",
    "../../controller/php/user_controller.php?aksi=updateSiswa")


// SIMPAN DATA SISWA
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



// UPLOAD DOKUMEN
saveData_nonSerialize("#mainContentUser",
    "#id_formUploadDokumen_userFormUploadDokumen",
    "Upload Dokumen ?",
    "Dokumen sudah benar ?",
    "question",
    "Batalkan",
    "Ya, Upload",
    "../../controller/php/user_controller.php?aksi=uploadDokumen")

// SIMPAN PEMBAYARAN
saveData_nonSerialize("#mainContentUser",
    "#id_formPembayaran_userFormPembayaran",
    "Simpan pembayaran ?",
    "Dokumen pembayaran sudah benar ?",
    "question",
    "Batalkan",
    "Ya, Upload","../../controller/php/user_controller.php?aksi=simpanPembayaran")