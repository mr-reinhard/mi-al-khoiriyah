<?php 

// pake metode loop
function tbPembayaranTipe_getAll($DB_koneksi,$tbPembayaranTipe){

    $sql_tbPembayaranTipe_getAll = "SELECT * FROM $tbPembayaranTipe";

    $run_tbPembayaranTipe_getAll = mysqli_query($DB_koneksi,$sql_tbPembayaranTipe_getAll);

    $dataInArray = mysqli_fetch_all($run_tbPembayaranTipe_getAll,MYSQLI_ASSOC);

    echo json_encode($dataInArray);

    mysqli_close($DB_koneksi);
        

}

function tbPembayaranTipe_insert($DB_koneksi,$tbPembayaranTipe,$idTipeBayar,$tipeBayar,$val_idTipeBayar,$val_tipeBayar){

    $sql_tbPembayaranTipe_insert = "INSERT INTO $tbPembayaranTipe($idTipeBayar,$tipeBayar)VALUES('$val_idTipeBayar','$val_tipeBayar')";

    mysqli_query($DB_koneksi,$sql_tbPembayaranTipe_insert);

    mysqli_close($DB_koneksi);

}

function tbPmebayaranTipe_deleteById($DB_koneksi,$tbPembayaranTipe,$idTipeBayar,$val_idTipeBayar){

    $sql_tbPembayaranTipe_deleteById = "DELETE FROM $tbPembayaranTipe WHERE $idTipeBayar LIKE '%".$val_idTipeBayar."%'";

    $run_tbPembayaranTipe_deleteById = mysqli_query($DB_koneksi,$sql_tbPembayaranTipe_deleteById);

    mysqli_close($DB_koneksi);
}

function tbPembayaranTipe_deleteAll($DB_koneksi,$tbPembayaranTipe){

    $sql_tbPembayaranTipe_deleteAll = "TRUNCATE TABLE $tbPembayaranTipe";

    $run_tbPembayaranTipe_deleteAll = mysqli_query($DB_koneksi,$sql_tbPembayaranTipe_deleteAll);

    mysqli_close($DB_koneksi);

}

?>