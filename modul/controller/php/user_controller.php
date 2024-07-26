<?php 

header('Content-Type: application/json');

session_start();

include '../../koneksi/db.php';
include '../../helper/function.php';
include '../../database/regisSiswa_model.php';
include '../../database/user_model.php';


switch ($_GET['aksi']) {

    case 'callUserSession':
        # code...
        echo json_encode(array("UsernameSession"=>$_SESSION['nama_user']));
        break;

    case 'simpanDataSiswa':
        # code...

        /*
        AK1 = Ayah
        AK2 = Ibu
        =====
        APP1 = Diterima
        APP2 = Menunggu
        APP3 = Ditolak
        =====
        APM1 = Lunas
        APM2 = Menunggu
        APM3 = Outstanding
        APM4 = Dibatalkan
        */

        # siswa
        # siswa_register
        # register_approval
        # pembayaran_approval
        # pembayaran
        # keluarga_detail
        # siswa Keluarga

        $idSiswa = randomString(16);
        $idRegister = randomString(16);
        
        $createdDate = date('Y-m-d H:i:s');

        $namaSiswa = $_POST['name_inputNamaSiswa_userFormSiswaRegister'];
        $genderSiswa = $_POST['name_pilihGenderSiswa_userFormSiswaRegister'];
        $alamatSiswa = $_POST['name_alamatSiswa_userFormSiswaRegister'];

        $nikBapak = $_POST['name_nikBapak_userFormSiswaRegister'];
        $namaBapak = $_POST['name_namaBapak_userFormSiswaRegister'];
        $telfonBapak = $_POST['name_telfonBapak_userFormSiswaRegister'];
        $alamatBapak = $_POST['name_alamatBapak_userFormSiswaRegister'];

        $nikIbu = $_POST['name_nikIbu_userFormSiswaRegister'];
        $namaIbu = $_POST['name_namaIbu_userFormSiswaRegister'];
        $telfonIbu = $_POST['name_telfonIbu_userFormSiswaRegister'];
        $alamatIbu = $_POST['name_alamatIbu_userFormSiswaRegister'];

        $catatanRegister = $_POST['name_catatanLogin_userFormSiswaRegister'];


        tbl_siswa_insert($koneksi,
        "siswa",
        "id_siswa",
        "id_gender",
        "nama_siswa",
        "alamat",
        "created_at",
        "created_by",
        "updated_at",
        "updated_by",
        $idSiswa,
        $genderSiswa,
        $namaSiswa,
        $alamatSiswa,
        $createdDate,
        "USER001",
        $createdDate,
        "USER001");

        tbl_siswa_register_insert($koneksi,"siswa_register","id_register","id_siswa","id_login","catatan","created_at","created_at",$idRegister,$idSiswa,"USER001",$catatanRegister,$createdDate,"USER001");

        echo json_encode(array("Logo"=>"success","Message"=>explodeString($namaSiswa) . "\nBerhasil didaftarkan"));

        mysqli_close($koneksi);
        
        break;

    case 'simpanUploadDokumen':
        # code...
        break;

    case 'simpanDataPembayaran':
        # code...
        break;

    case 'hapusRegistrasiSiswa':
        # code...
        break;

    case 'simpanRegistrasi':
        # code...
        $idLogin = randomString(16);

        $userName = $_POST['registerUserName'];
        $userPassword = $_POST['passwordRegister'];
        $userTelfon = $_POST['registerTelfon'];

        $createdDate = date('Y-m-d H:i:s');

        insert_tbLogin($koneksi,"login",
        "id_login",
        "username",
        "password",
        "telfon",
        "created_at",
        "created_by",
        "updated_at",
        "updated_by",
        $idLogin,$userName,
        $userPassword,
        $userTelfon,
        $createdDate,
        "USER001",$createdDate,"USER001");

        echo json_encode(array("Message"=>"Username berhasil dibuat"));

        mysqli_close($koneksi);
        
        break;
    
    default:
        # code...
        break;
}



?>