<?php 


function cekLogin($DB_Name,$namaTable,$userName,$password,$valUserName,$valPassword){

    $sql = "SELECT * FROM $namaTable WHERE $userName LIKE '%".$valUserName."%' AND $password LIKE '%".$valPassword."%'";

    $run = mysqli_query($DB_Name,$sql);

    if (mysqli_num_rows($run) > 0) {
        # code...
        $dataInArray = mysqli_fetch_all($run,MYSQLI_ASSOC);
        $_SESSION['idLogin'] = $dataInArray['id_login'];
        $_SESSION['uName'] = $dataInArray['username'];
        echo json_encode(array("Message"=>"Login berhasil"));
    }
    else{
        echo json_encode(array("Message"=>"Login gagal"));
    }
}

function cekBelumLoginAdmin($sessionId){

    if ($sessionId == "") {
        # code...
        echo json_encode(array("Judul"=>"Login Gagal","Message"=>"Kamu Belum Login","Logo"=>"error"));
    }
    else{
        echo json_encode(array("RedirectPage"=>"../../admin.html"));
    }
}

function cekBelumLoginUser($sessionId){

    if ($sessionId == "") {
        # code...
        echo json_encode(array("Judul"=>"Login Gagal","Message"=>"Kamu Belum Login","Logo"=>"error"));
    }
    else{
        echo json_encode(array("RedirectPage"=>"../../user.html"));
    }
}

function registerUser($DB_Name,$namaTable,$idLogin,$userName,$password,$createdAt,$createdBy,$updatedAt,$updatedBy,$valIdLogin,$valUserName,$valPassword,$valCreatedAt,$valCreatedBy,$valUpdatedAt,$valUpdatedBy){

    $sql = "SELECT * FROM $namaTable WHERE $userName LIKE '%".$valPassword."%' AND $password LIKE '%".$valUserName."%'";

    $execCek = mysqli_query($DB_Name,$sql);

    if (mysqli_num_rows($execCek) > 0) {
        # code...
        echo json_encode(array("Message" => $valUserName . "\nsudah digunakan"));
    }
    else{
        $sqlInsery = "INSERT INTO $namaTable($idLogin,$userName,$password,$createdAt,$createdBy,$updatedAt,$updatedBy)VALUES('$valIdLogin','$valUserName','$valPassword','$valCreatedAt','$valCreatedBy','$valUpdatedAt','$valUpdatedBy')";

        mysqli_query($DB_Name,$sqlInsery);

        echo json_encode(array("Logo"=>"success","Message"=>"Berhasil didaftarkan"));
    }
}

// ============================================

// simpan ke table login


// ada 18 parameter
function login_akun_insert($DB_koneksi,
$namaTable,
$kolom1,
$kolom2,
$kolom3,
$kolom4,
$kolom5,
$kolom6,
$kolom7,
$kolom8,
$val1,
$val2,
$val3,
$val4,
$val5,
$val6,
$val7,
$val8){

    $sql = "INSERT INTO $namaTable($kolom1,
    $kolom2,
    $kolom3,
    $kolom4,
    $kolom5,
    $kolom6,
    $kolom7,
    $kolom8)VALUES('$val1',
    '$val2',
    '$val3',
    '$val4',
    '$val5',
    '$val6',
    '$val7',
    '$val8')";

    mysqli_query($DB_koneksi,$sql);
    
}

// simpan ke table login_status
function login_status_insert($DB_koneksi,$namaTable,$kolom1,$kolom2,$kolom3,$val1,$val2,$val3){

    $sql = "INSERT INTO $namaTable($kolom1,$kolom2,$kolom3)VALUES('$val1','$val2','$val3')";

    mysqli_query($DB_koneksi,$sql);
    
}

function resetPassword($DB_koneksi,$namaTable,$kolom1,$kolom2,$val1,$val2){

    $sql = "UPDATE $namaTable SET $kolom1 = '$val1' WHERE $kolom2 = '$val2'";

    mysqli_query($DB_koneksi,$sql);
}

?>