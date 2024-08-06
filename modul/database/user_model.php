<?php 



header('Content-type: application/json');

function insert_tbLogin($DB_koneksi,$namaTable,$kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7,$kolom8,$val1,$val2,$val3,$val4,$val5,$val6,$val7,$val8){


    $sql = "INSERT INTO $namaTable($kolom1,$kolom2,$kolom3,$kolom4,$kolom5,$kolom6,$kolom7,$kolom8)VALUES('$val1','$val2','$val3','$val4','$val5','$val6','$val7','$val8')";

    mysqli_query($DB_koneksi,$sql);

}

// tabel user
function tblUser_Insert($DB_koneksi,$tblUser,$idUser,$idLogin,$idStatus,$namaUser,$createdAt,$createdBy,$updatedAt,$updatedBy,$val_idUser,$val_idLogin,$val_idStatus,$val_namaUser,$val_createdAt,$val_createdBy,$val_updatedAt,$val_updatedBy){

    $sql_cekUser = "SELECT * FROM $tblUser WHERE $namaUser LIKE '%".$val_namaUser."%'";

    $run_cekUser = mysqli_query($connDB, $setQueryChecking);

    if (mysqli_num_rows($runQueryChecking) > 0) {
        # code...

        echo json_encode(array("Message" => "Username sudah digunakan"));

    }

    else{

        $sql_tblUser_insert = "INSERT INTO $tblUser($idUser,$idLogin,$idStatus,$namaUser,$createdAt,$createdBy,$updatedAt,$updatedBy)VALUES('$val_idUser','$val_idLogin','val_$idStatus','$val_namaUser','$val_createdAt','$val_createdBy','$val_updatedAt','$val_updatedBy')";

        $run_tblUser_insert = mysqli_query($DB_koneksi,$sql_tblUser_insert);

        echo json_encode(array("Message" => "Data berhasil ditambahkan"));
    }

    mysqli_close($DB_koneksi);

}

function tblUser_update($DB_koneksi,$tblUser,$idUser,$namaUser,$val_namaUser){
    
    $sql_tblUser_cek = "SELECT * FROM $tblUser WHERE $namaUser LIKE '%".$val_namaUser."%'";

    $run_tblUser_cek = mysqli_query($DB_koneksi,$sql_tblUser_cek);

    if (mysqli_num_rows() > 0) {
        # code...
        echo json_encode(array("Message" => "Username sudah digunakan"));
    }
    else{

        $sql_tblUser_update = "UPDATE $tblUser SET $namaUser = '$val_namaUser' WHERE $idUser LIKE '%".$val_namaUser."%'";

        $run_tblUser_update = mysqli_query($DB_koneksi,$sql_tblUser_update);
    }
    mysqli_close($DB_koneksi);
}

// tembak ke view jangan ke table nya langsung
function tblUser_getById($connDB, $tableName, $col1, $val1){

    $setQueryGetById = "SELECT * FROM $tableName WHERE BINARY $col1 LIKE '%".$val1."%'";

    $runQueryGetById = mysqli_query($connDB, $setQueryGetById);

    if (mysqli_num_rows($runQueryGetById) > 0) {
        # code...
        $dumpToArray = array();

        while ($data = mysqli_fetch_array($dumpToArray)) {
            # code...
            $dumpToArray[] = $data;
            echo json_encode($dumpToArray);
        }
    }

    else{
        echo json_encode(array());
    }

}

// tembak ke view jangan ke table nya langsung
function tbUser_getByName(){

}

// tembak ke view jangan ke table nya langsung
function tbUser_getNameOrId(){

    
}

function tbl_siswa_update($koneksiDatabase,$namaTable,$namaSiswa,$idGender,$alamat,$updatedAt,$updatedBy,$idSiswa,$valNamaSiswa,$valIdGender,$valAlamat,$valUpdatedAt,$valUpdatedBy,$valIdSiswa){

    $sql = "UPDATE $namaTable SET $namaSiswa = '$valNamaSiswa',$idGender = '$valIdGender',$alamat = '$valAlamat',$updatedAt = '$valUpdatedAt',$updatedBy = '$valUpdatedBy' WHERE $idSiswa = '$valIdSiswa'";

    mysqli_query($koneksiDatabase,$sql);
}

// DELETE MODE
function tbl_siswa_delete($koneksiDatabase,$namaTable,$kolomIdSiswa,$valueIdSiswa){

    $sql = "DELETE FROM $namaTable WHERE $kolomIdSiswa = '$valueIdSiswa'";

    mysqli_query($koneksiDatabase,$sql);
    
}

function tbl_siswa_register_delete($koneksiDatabase,$namaTable,$kolomIdSiswa,$valueIdSiswa){

    $sql = "DELETE FROM $namaTable WHERE $kolomIdSiswa = '$valueIdSiswa'";

    mysqli_query($koneksiDatabase,$sql);

}

function tbl_siswa_keluarga_delete($koneksiDatabase,$namaTable,$kolomIdSiswa,$valueIdSiswa){

    $sql = "DELETE FROM $namaTable WHERE $kolomIdSiswa = '$valueIdSiswa'";

    mysqli_query($koneksiDatabase,$sql);

}

function tbl_siswa_attachment_delete($koneksiDatabase,$namaTable,$kolomIdSiswa,$valueIdSiswa){
    // pasang unlink ke file upload
    $sql = "DELETE * FROM $namaTable WHERE $kolomIdSiswa = '$valueIdSiswa'";

    mysqli_query($koneksiDatabase,$sql);
    
}

function tbl_register_approval_delete($koneksiDatabase,$namaTable,$kolomIdSiswa,$valueIdSiswa){

    $sql = "DELETE FROM $namaTable WHERE $kolomIdSiswa = '$valueIdSiswa'";

    mysqli_query($koneksiDatabase,$sql);

}

function tbl_keluarga_detail_delete($koneksiDatabase,$namaTable,$kolomIdSiswa,$valueIdSiswa){

    $sql = "DELETE FROM $namaTable WHERE $kolomIdSiswa = '$valueIdSiswa'";

    mysqli_query($koneksiDatabase,$sql);
}
// END DELETE MODE


?>