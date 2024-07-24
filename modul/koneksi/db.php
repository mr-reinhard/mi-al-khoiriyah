<?php
 //koneksi ke database danau indah utama
 $server = "localhost";
 $user = "root";
 $pass = "";
 $dbname = "db_mi-al-khoiriyah";

 $koneksi = mysqli_connect($server,$user,$pass,$dbname);
 if(mysqli_connect_errno()){
  echo "Koneksi database gagal".mysqli_connect_error();



  function getDatabase($serverName, $userName, $userPassword, $dbName){


    $server = $serverName;
    $user = $userName;
    $password = $userPassword;
    $database = $dbName;

    $dbConnection = mysqli_connect($server, $user, $password, $database);

    if (mysqli_connect_errno($dbConnection))
    {

        $responseMessage = array("Success Message" => "Database gagal terhubung");

    }

    else
    {

        $responseMessage = array("Error Message" => "Database gagal terhubung");
        

    }

  }
 }


?>
