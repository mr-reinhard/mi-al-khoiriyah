<?php 

function getAllTable($DB_koneksi){

    $sql_gelAllTable = "SHOW TABLES";

    $run_gelAllTable = mysqli_query($DB_koneksi,$sql_gelAllTable);

    $arrayAllTable = array();

    while ($dataAllTable = mysqli_fetch_array($run_gelAllTable)) {
        # code...
        $arrayAllTable[] = $dataAllTable;
    }
    echo json_encode($arrayAllTable);
}

function manualQuery($DB_koneksi,$queryInput){

    mysqli_query($DB_koneksi,$queryInput);

    mysqli_close($DB_koneksi);
}

function getKeluarga($DB_koneksi,$namaTabel){

    $sql = "SELECT * FROM $namaTabel";

    $run = mysqli_query($DB_koneksi,$sql);

    $dataKeluarga = array();
    while ($data = mysqli_fetch_array($run)) {
        # code...
        $dataKeluarga[] = $data;
    }
    echo json_encode($dataKeluarga);
}

?>