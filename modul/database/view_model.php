<?php 

// ambil hanya 2 kolom
function get_all_view($namaKoneksi,$namaTable){

$sql = "SELECT * FROM $namaTable";

$runSql = mysqli_query($namaKoneksi,$sql);

$dataInArray = mysqli_fetch_all($runSql,MYSQLI_ASSOC);

return $dataInArray;

}

function get_view_by_id($namaKoneksi,$namaTable,$whereKolom,$whereValue){

    $sql = "SELECT * FROM $namaTable WHERE $whereKolom = '$whereValue'";

    $runSql = mysqli_query($namaKoneksi,$sql);

    $dataInArray = mysqli_fetch_all($runSql,MYSQLI_ASSOC);

    return $dataInArray;
}

function get_view_by_id_name($namaKoneksi,$namaTable,$namaKolom1,$namaKolom2,$where1,$where2){

    $sql = "SELECT * FROM $namaTable WHERE $namaKolom1 = '$where1' AND $namaKolom2 = '$where2'";

    $runSQL = mysqli_query($namaKoneksi,$sql);

    $dataInArray = mysqli_fetch_array($runSQL);

    return $dataInArray;

    // format call di fungsi ini $dataInArray['namaKolom-nya'];
}


function get_view_by_userLogin_ApprovalName($namaKoneksi,$namaTable,$namaKolom1,$namaKolom2,$valKolom1,$valKolom2){

    $sql = "SELECT * FROM $namaTable WHERE $namaKolom1 = '$valKolom1' AND $namaKolom2 = '$valKolom2'";

    $runSQL = mysqli_query($namaKoneksi,$sql);

    $dataInArray = mysqli_fetch_all($runSQL,MYSQLI_ASSOC);

    return $dataInArray;

}


?>