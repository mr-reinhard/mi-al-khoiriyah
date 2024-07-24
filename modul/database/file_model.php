<?php 


function UploadFile($nama_file,$customNamaFile){

    $uploadDirectory = "../../../asset/upload/";

    if (!file_exists($uploadDirectory)) {
        # code...
        mkdir($uploadDirectory, 0777, true);
    }

    else{

        $namaFile = $_FILES[$nama_file];
        $fileName = $namaFile["name"];
        $fileTmp = $namaFile["tmp_name"];
        $fileSize = $namaFile["size"];
        $fileError = $namaFile["error"];

        $ekstensiGambar = pathinfo($fileName, PATHINFO_EXTENSION);
        $newGambarName = $customNamaFile . "." . $ekstensiGambar;

        $finalDestionation = $uploadDirectory.$newGambarName;

        move_uploaded_file($fileTmp, $finalDestionation);
    }

}

function getExtensionFile($nama_file,$customNameInput){

    $namaFile = $_FILES[$nama_file];
    $fileName = $namaFile["name"];

    $ekstensiGambar = pathinfo($fileName, PATHINFO_EXTENSION);

    $namaGambarBaru = $customNameInput . "." . $ekstensiGambar;

    return $namaGambarBaru;

}


?>