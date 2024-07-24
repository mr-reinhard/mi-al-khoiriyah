<?php 

header('Content-type: application/json');

function tblBankDaftar_insert($DB_koneksi,$tblBank,$idBank,$kodeBank,$namaBank,$val_idBank,$val_kodeBank,$val_namaBank){

    $sql_tblBankDaftar_cek = "";

    $run_cekBankDaftar = mysqli_query($DB_koneksi,$sql_tblBankDaftar_cek);

    if (mysqli_num_rows($run_cekBankDaftar) > 0) {
        # code...
        echo json_encode(array("Message" => "Bank sudah pernah didaftarkan"));
    }
    else {
        # code...
        $sql_tblBankDaftar_insert = "";

        $runSaveBank = mysqli_query($DB_koneksi,$sql_tblBankDaftar_insert);

        echo json_encode(array("Message" => "Bank Berhasil disimpan"));
    
    }
    mysqli_close($DB_koneksi);
}

function tblDaftarBank_update($DB_koneksi,$tblBank,$idBank,$kodeBank,$namaBank,$val_idBank,$val_kodeBank,$val_namaBank){

    // belum ada validasi checking nya, nanti aja di buatin

    $sql_tblDaftarBank_update = "UPDATE $tblBank SET $kodeBank = '$val_kodeBank',$namaBank = '$val_namaBank' WHERE $idBank LIKE '%".$val_idBank."%'";

    $run_tblDaftarBank_update = mysqli_query($DB_koneksi,$sql_tblDaftarBank_update);

    mysqli_close($DB_koneksi);
    
}


function tblDaftarBank_deleteById($DB_koneksi, $tblBank, $idBank, $val_idBank){

    $sql_tblBankDaftar_delete = "DELETE FROM $tblBank WHERE $idBank LIKE '%".$val_idBank."%'";

    $run_tblBankDaftar_delete = mysqli_query($DB_koneksi,$sql_tblBankDaftar_delete);

    mysqli_close($DB_koneksi);
}


// view only
function getDaftarBank_all($DB_koneksi,$tblBank){

    $sql = "SELECT * FROM $tblBank";

    $run = mysqli_query($DB_koneksi,$sql);

    $dataInArray = mysqli_fetch_all($run,MYSQLI_ASSOC);

    echo json_encode($dataInArray);

    mysqli_close($DB_koneksi);
}

// view only
function getDaftarBank_byName($DB_koneksi,$tblBank,$colName,$value){

    $sql = "SELECT * FROM $tblBank WHERE $colName LIKE '%".$value."%'";

    $run_sql = mysqli_query($DB_koneksi,$sql);

    $dataInArray = mysqli_fetch_all($run_sql,MYSQLI_ASSOC);

    echo json_encode($dataInArray);

    mysqli_close($DB_koneksi);
}

?>