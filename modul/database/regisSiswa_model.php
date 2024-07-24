
<?php 

header('Content-type: application/json');

function tbSiswa_onlyinsert(){

}

function tblSiswa_insert($DB_koneksi, $tblSiswa, $idSiswa, $namaSiswa, $createdAt, $createdBy, $updatedAt, $updatedBy, $val_idSiswa, $val_namaSiswa, $val_createdAt, $val_createdBy, $val_updatedAt, $val_updatedBy){

    $sql_cekTblSiswa = "SELECT * FROM $tblSiswa WHERE $idSiswa LIKE '%".$val_idSiswa."%'";

    $run_cekTblSiswa = mysqli_query($DB_koneksi, $sql_cekTblSiswa);

    if (mysqli_num_rows($run_cekTblSiswa) > 0) {
        # code...

        //$dataInArray = mysqli_fetch_all($run_cekTblSiswa,MYSQLI_ASSOC);
        
        echo json_encode(array("Message"=>"Data sudah pernah input"));
    }
    else{

        $sql_insertTblSiswa = "INSERT INTO $tb_siswa($idSiswa,$namaSiswa,$createdAt,$createdBy,$updatedAt,$updatedBy)VALUES('$val_idSiswa','$val_namaSiswa','$val_createdAt','$val_createdby','$val_updatedAt','$val_updatedBy')";
        
        $run_insertTblSiswa = mysqli_query($DB_koneksi, $sql_insertTblSiswa);

        echo json_encode(array("Message" => "Data siswa berhasil ditambahkan"));
        
    }
    mysqli_close($DB_koneksi);

}

function tblSiswa_update($DB_koneksi, $tblSiswa, $idSiswa, $namaSiswa, $createdAt, $createdBy, $updatedAt, $updatedBy, $val_idSiswa, $val_namaSiswa, $val_createdAt, $val_createdBy, $val_updatedAt, $val_updatedBy){

    $sql_cekTblSiswa = "SELECT * FROM $tableName WHERE $kolom2 LIKE '%".$nilai2."%'";

    $run_cekTblSiswa = mysqli_query($DB_koneksi, $sql_cekTblSiswa);

    if (mysqli_num_rows($run_cekTblSiswa) > 0) {

        # code...
        echo json_encode(array("Message" => "Data siswa telah ada"));

    }
    else{

        $sql_updateTblSiswa = "UPDATE $tblSiswa SET $namaSiswa = '$val_namaSiswa', $updatedAt = '$val_updatedAt', $updatedBy = '$val_updatedBy'";

        $run_updatetblSiswa = mysqli_query($DB_koneksi, $sql_updateTblSiswa);

    }
    mysqli_close($DB_koneksi);
}

function tblSiswa_deleteById($DB_koneksi, $tblSiswa, $idSiswa, $val_idSiswa){

    $sql_delSiswa = "DELETE FROM $tblSiswa WHERE $idSiswa LIKE '%".$val_idSiswa."%'";

    $run_delSiswa = mysqli_query($DB_koneksi, $sql_delSiswa);

    mysqli_close($DB_koneksi);

}

// TRUNCATE tbl siswa
function tblSiswa_truncate($DB_koneksi, $tblSiswa){

    $sql_truncateTblSiswa = "TRUNCATE TABLE $tblSiswa";

    $run_truncateTblSiswa = mysqli_query($DB_koneksi, $sql_truncateTblSiswa);

    mysqli_close($DB_koneksi);
}


// tbl siswa_register
function tblSiswaRegister_insert($DB_koneksi, $tblSiswaRegister, $idRegister, $idSiswa,$idUser,$createdAt,$createdBy,$val_idRegister,$val_idSiswa,$val_idUser,$val_createdAt,$val_createdBy){

    $sql_insertTblSiswaRegister = "INSERT INTO $tblSiswaRegister($idRegister,$idSiswa,$idUser,$createdAt,$createdBy)VALUES('$val_idRegister','$val_idSiswa','$val_idUser','$val_createdAt','$val_createdBy')";

    $run_insertTblSiswaRegister = mysqli_query($DB_koneksi, $sql_insertTblSiswaRegister);

    mysqli_close($DB_koneksi);

}

// tbl keluarga_detail
function tblKeluargaDetail_insert($DB_koneksi,$tblKeluargaDetail,$idDetail,$idAnggota,$idSiswa,$nik,$nama,$telfon,$alamat,$createdAt,$createdBy,$updatedAt,$updatedBy,$val_idDetail,$val_idAnggota,$val_idSiswa,$val_nik,$val_nama,$val_telfon,$val_alamat,$val_createdAt,$val_createdBy,$val_updatedAt,$val_updatedBy){

    $sql_insertTblKeluargaDetail = "INSERT INTO $tableName($idDetail,$idAnggota,$idSiswa,$nik,$nama,$telfon,$alamat,$createdAt,$createdBy,$updatedAt,$updatedBy)VALUES('$val_idDetail','$val_idAnggota','$val_idSiswa','$val_nik','$val_nama','$val_telfon','$val_alamat','$val_createdAt','$val_createdBy','$val_updatedAt','$val_updatedBy')";

    $run_insertTblKeluargaDetail = mysqli_query($DB_koneksi, $sql_isertTblKeluargaDetail);

    mysqli_close($DB_koneksi);
}

function tbKeluargaDetail_update($DB_koneksi,$tblKeluargaDetail,$idDetail,$nik,$nama,$telfon,$alamat,$val_nik,$val_nama,$val_telfon,$val_alamat){

    $sql_updateTblKeluargaDetail = "UPDATE $tblKeluargaDetail SET $nik = '$val_nik', $nama = '$val_nama', $telfon = '$val_telfon', $alamat = '$val_alamat'";

    $run_updateTblKeluargaDetail = mysqli_query($DB_koneksi,$sql_updateTblKeluargaDetail);

    mysqli_close($DB_koneksi);

}

function tblKeluargaDetail_deleteById($DB_koneksi,$tblKeluargaDetail,$idDetail,$val_idDetail){

    $sql_delTblKeluargaDetailById = "DELETE FROM $tblKeluargaDetail WHERE $idDetail LIKE '%".$val_idDetail."%'";

    $run_delTblKeluargaDetailById = mysqli_query($DB_koneksi,$sql_delTblKeluargaDetailById);

    mysqli_close($DB_koneksi);

}

function tblKeluargaDetail_truncate($connDB, $tableName){

    $setSqlTruncate = "TRUNCATE TABLE $tableName";

    $runTruncate = mysqli_query($connDB, $setSqlTruncate);

    mysqli_close($DB_koneksi);
}

// tembak ke view jangan ke table nya langsung
function getSiswa_all($DB_koneksi, $viewSiswa){

    $setGetallSiswa = "";

    $runGetSiswa = mysqli_query($connDB,$setGetallSiswa);


    if (mysqli_num_rows($runGetSiswa) > 0) {
        # code...
        $dataInArray = mysqli_fetch_all($runGetSiswa,MYSQLI_ASSOC);
        
        echo json_encode($dataInArray);
    }
    else{
        echo json_encode(array("Message" => "Data siswa masih kosong"));
    }
    mysqli_close($DB_koneksi);
}

// tembak ke view jangan ke table nya langsung
function getNamaSiswa_byId($DB_koneksi, $tableName, $idSiswa, $value){

    $setSqlGetSiswa_byId = "SELECT * FROM $tableName WHERE $idSiswa LIKE '%".$value."%'";

    $runGetSiswaById = mysqli_query($DB_koneksi, $setSqlGetSiswa_byId);

    if (mysqli_num_rows($runGetSiswaById) > 0) {
        # code...
        $dataInArray = mysqli_fetch_all($runGetSiswaById,MYSQLI_ASSOC);

        echo json_encode($dumpToArray);
    }
    else{
        echo json_encode(array("Message" => "Data siswa tidak ditemukan"));
    }

    mysqli_close($DB_koneksi);

}

// tembak ke view jangan ke table nya langsung
function getSiswa_byName($DB_koneksi,$tableName,$colName,$namaSiswa){

    $getByName = "SELECT * FROM $tableName WHERE $colName LIKE '%".$namaSiswa."%'";

    $runGetByName = mysqli_query($DB_koneksi,$getByName);

    if (mysqli_num_rows($runGetByName) > 0) {
        # code...

        $dataInArray = mysqli_fetch_all($runGetByName,MYSQLI_ASSOC);
        
        echo json_encode($dataInArray);
    }
    else{
        echo json_encode(array("Message" => "Data siswa tidak ditemukan"));
    }
    
    mysqli_close($DB_koneksi);
}



//- register_approval
        //- siswa
        //- siswa_attachment
        //- siswa_keluarga
        //- siswa_register
        //- pembayaran
        //- pembayaran_approval
        //- keluarga_detail


// fungsi dibawah ini tanpa validasi semua, jadi langsung insert        
function tbl_register_approval_insert($DB_koneksi,$namaTable,$kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7,$value1,$value2,$value3,$value4,$value5,$value6,$value7){


    $sql = "INSERT INTO $namaTable($kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7)VALUES('$value1','$value2','$value3','$value4','$value5','$value6','$value7')";

    $run = mysqli_query($DB_koneksi,$sql);

    //echo json_encode($run);

    //mysqli_close($DB_koneksi);

}

function tbl_siswa_insert($DB_koneksi,$namaTable,$kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7,$kolom8,$value1,$value2,$value3,$value4,$value5,$value6,$value7,$value8){


    $sql = "INSERT INTO $namaTable($kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7,$kolom8)VALUES('$value1','$value2','$value3','$value4','$value5','$value6','$value7','$value8')";

    $run = mysqli_query($DB_koneksi,$sql);

    //echo json_encode(array("Message"=>"Input Berhasil"));

    //mysqli_close($DB_koneksi);

}

function tbl_siswa_attachment_insert($DB_koneksi,$namaTable,$kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7,$value1,$value2,$value3,$value4,$value5,$value6,$value7){

    $sql = "INSERT INTO $namaTable($kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7)VALUES('$value1','$value2','$value3','$value4','$value5','$value6','$value7')";

    $run = mysqli_query($DB_koneksi,$sql);

    //echo json_encode($run);

    //mysqli_close($DB_koneksi);

}

function tbl_siswa_keluarga_insert($DB_koneksi,$namaTable,$kolom1,$kolom2,$kolom3,$value1,$value2,$value3){

    $sql = "INSERT INTO $namaTable($kolom1,$kolom2,$kolom3)VALUES('$value1','$value2','$value3')";

    $run = mysqli_query($DB_koneksi,$sql);

    //echo json_encode($run);

    //mysqli_close($DB_koneksi);

}

function tbl_siswa_register_insert($DB_koneksi,$namaTable,$kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$value1,$value2,$value3,$value4,$value5,$value6){

    $sql = "INSERT INTO $namaTable($kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6)VALUES('$value1','$value2','$value3','$value4','$value5','$value6')";

    $run = mysqli_query($DB_koneksi,$sql);

    //echo json_encode($run);

    //mysqli_close($DB_koneksi);

}

function tbl_pembayaran_insert($DB_koneksi,$namaTable,$kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$value1,$value2,$value3,$value4,$value5){

    $sql = "INSERT INTO $namaTable($kolom1,$kolom2,$kolom3,$kolom4,$kolom5)VALUES('$value1','$value2','$value3','$value4','$value5')";

    $run = mysqli_query($DB_koneksi,$sql);

    //echo json_encode($run);

    //mysqli_close($DB_koneksi);

}

function tbl_pembayaran_approval_insert($DB_koneksi,$namaTable,$kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7,$kolom8,$value1,$value2,$value3,$value4,$value5,$value6,$value7,$value8){

    $sql = "INSERT INTO $namaTable($kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7,$kolom8)VALUES('$value1','$value2','$value3','$value4','$value5','$value6','$value7','$value8')";

    $run = mysqli_query($DB_koneksi,$sql);

    //echo json_encode($run);

    //mysqli_close($DB_koneksi);

}

function tbl_keluarga_detail_insert($DB_koneksi,$namaTable,$kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7,$kolom8,$kolom9,$value1,$value2,$value3,$value4,$value5,$value6,$value7,$value8,$value9){

    $sql = "INSERT INTO $namaTable($kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7,$kolom8,$kolom9)VALUES('$value1','$value2','$value3','$value4','$value5','$value6','$value7','$value8','$value9')";

    $run = mysqli_query($DB_koneksi,$sql);

    //echo json_encode($run);

    //mysqli_close($DB_koneksi);

}




?>