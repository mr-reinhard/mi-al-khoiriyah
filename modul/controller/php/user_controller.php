<?php 

header('Content-Type: application/json');

session_start();

include '../../koneksi/db.php';
include '../../helper/function.php';
include '../../database/regisSiswa_model.php';
include '../../database/user_model.php';
include '../../database/my_model.php';
include '../../database/view_model.php';
include '../../database/file_model.php';


switch ($_GET['aksi']) {

    case 'callUserSession':
        # code...
        echo json_encode(array("usernameSession"=>$_SESSION['namaUser'],"kodeLogin"=>$_SESSION['idLogin']));
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
        $idDetailAyah = randomString(16);
        $idDetailIbu = randomString(16);
        
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
        $_SESSION['idLogin'],
        $createdDate,
        $_SESSION['idLogin']);

        
        tbl_siswa_register_insert($koneksi,
        "siswa_register",
        "id_register",
        "id_siswa",
        "id_login",
        "catatan",
        "created_at",
        "created_by",
        $idRegister,
        $idSiswa,
        $_SESSION['idLogin'],
        $catatanRegister,
        $createdDate,
        $_SESSION['idLogin']);

        // Ayah -> tbl keluarga_detail
        tbl_keluarga_detail_insert($koneksi,"keluarga_detail",
        "id_detail",
        "nik",
        "nama",
        "telfon",
        "alamat",
        "created_at",
        "created_by",
        "updated_at",
        "updated_by",
        $idDetailAyah,
        $nikBapak,
        $namaBapak,
        $telfonBapak,
        $alamatBapak,
        $createdDate,
        $_SESSION['idLogin'],
        $createdDate,
        $_SESSION['idLogin']);

        // Ibu -> tbl keluarga_detail
        tbl_keluarga_detail_insert($koneksi,"keluarga_detail",
        "id_detail",
        "nik",
        "nama",
        "telfon",
        "alamat",
        "created_at",
        "created_by",
        "updated_at",
        "updated_by",
        $idDetailIbu,
        $nikIbu,
        $namaIbu,
        $telfonIbu,
        $alamatIbu,
        $createdDate,
        $_SESSION['idLogin'],
        $createdDate,
        $_SESSION['idLogin']);

        // Ayah
        tbl_siswa_keluarga_insert($koneksi,
        "siswa_keluarga",
        "id_anggota",
        "id_detail",
        "id_siswa",
        "AK1",
        $idDetailAyah,$idSiswa);

        // Ibu
        tbl_siswa_keluarga_insert($koneksi,
        "siswa_keluarga",
        "id_anggota",
        "id_detail",
        "id_siswa",
        "AK2",
        $idDetailIbu,$idSiswa);

        // tbl register_approval
        tbl_register_approval_insert($koneksi,"register_approval",
        "id_register",
        "id_approval",
        "id_login",
        "created_at",
        "created_by",
        "updated_at",
        "updated_by",
        $idRegister,
        "APP2",
        $_SESSION['idLogin'],
        $createdDate,
        $_SESSION['idLogin'],
        $createdDate,
        $_SESSION['idLogin']);


        echo json_encode(array("Logo"=>"success","Message"=>explodeString($namaSiswa) . "\nBerhasil didaftarkan"));

        mysqli_close($koneksi);
        
        break;

    case 'simpanUploadDokumen':
        # code...
        break;

    case 'simpanDataPembayaran':
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

    case 'logout':
        # code...

        deleteCookieAndSession();

        echo json_encode(array("directHalaman"=>"../../../index.html"));

        break;

    case 'fetchSkema':
        # code...
        break;

    case 'fetchNamaBank':
        # code...
        getAllData($koneksi,"bank_daftar");

        break;

    case 'fetchTipePembayaran':
        # code...
        getAllData($koneksi,"pembayaran_tipe");

        break;

    case 'fetch_vw_siswaRegister':
        # code...
        $hasil = get_all_view($koneksi,"vw_siswa_register");

        echo json_encode($hasil);

        break;

    case 'fetchDataEditSiswa':
        # code...
        $idSiswa = $_POST['idSis'];

        $hasil = get_view_by_id($koneksi,"vw_siswa_register","idSiswa",$idSiswa);

        echo json_encode($hasil);

        break;

    case 'hapusSiswa':
        # code...

        $idSiswa = $_POST['id_Sis'];

        $sql1 = "SELECT * FROM vw_siswa_register WHERE idSiswa = '$idSiswa'";

        $runSQL1 = mysqli_query($koneksi,$sql1);

        $dataInArray1 = mysqli_fetch_array($runSQL1);

        tbl_siswa_delete($koneksi,"siswa","id_siswa",$idSiswa);
        tbl_siswa_register_delete($koneksi,"siswa_register","id_siswa",$idSiswa);
        tbl_siswa_keluarga_delete($koneksi,"siswa_keluarga","id_siswa",$idSiswa);
        tbl_siswa_attachment_delete($koneksi,"siswa_attachment","id_siswa",$idSiswa);
        tbl_register_approval_delete($koneksi,"register_approval","id_register",$dataInArray1['idRegister']);  //<-- gaada id siswa pake id register aja
        //tbl_keluarga_detail_delete($koneksi,"siswa","id_siswa",$idSiswa);

        echo json_encode(array("Logo"=>"info","Pesan"=>"Data berhasil dihapus","directHalaman"=>"edit/list_pendaftar.html"));

        mysqli_close($koneksi);

        break;

    case 'updateSiswa':
        # code...
        $idSiswa = $_POST['name_idSiswa_userFormEditSiswa'];
        $namaSiswa = $_POST['name_inputNamaSiswa_userFormEditSiswa'];
        $genderSiswa = $_POST['name_inputGenderSiswa_userFormEditSiswa'];
        $alamatSiswa = $_POST['name_inputAlamatSiswa_userFormEditSiswa'];
        $createdDate = date('Y-m-d H:i:s');

        // $koneksiDatabase,
        // $namaTable,
        // $namaSiswa,
        // $idGender,
        // $alamat,
        // $updatedAt,
        // $updatedBy,
        // $idSiswa,
        // $valNamaSiswa,
        // $valIdGender,
        // $valAlamat,
        // $valUpdatedAt,
        // $valUpdatedBy,
        // $valIdSiswa

        tbl_siswa_update($koneksi,"siswa","nama_siswa","id_gender","alamat","updated_at","updated_by","id_siswa",$namaSiswa,$genderSiswa,$alamatSiswa,$createdDate,$_SESSION['idLogin'],$idSiswa);

        echo json_encode(array("Logo"=>"info","Pesan"=>"Update Data berhasil","directHalaman"=>"edit/list_pendaftar.html"));

        mysqli_close($koneksi);
        break;

    case 'uploadDokumen':
        # code...
        $idSiswa = $_POST['name_idSiswa_userFormUploadDokumen'];

        $idPassPhoto = randomString(16);
        $idIjazah = randomString(16);
        $idKartuKeluarga = randomString(16);
        $idAktaKelahiran = randomString(16);
        $idSuratPernyataan = randomString(16);

        $createdDate = date('Y-m-d H:i:s');

        $sql = "SELECT * FROM vw_siswa WHERE idSiswa = '$idSiswa'";

        $runSQL = mysqli_query($koneksi,$sql);

        $dataInArray = mysqli_fetch_array($runSQL);


        $foto = 'name_uploadPassPhoto_userFormUploadDokumen';
        $fotoName = "PassPhoto_" . gantiSpasi($dataInArray['namaSiswa']);

        $ijazah = 'name_uploadIjazah_userFormUploadDokumen';
        $ijazahName = "Ijazah_" . gantiSpasi($dataInArray['namaSiswa']);

        $kartuKeluarga = 'name_kartuKeluarga_userFormUploadDokumen';
        $kartuKeluargaName = "KartuKeluarga_" . gantiSpasi($dataInArray['namaSiswa']);

        $aktaKelahiran = 'name_uploadAktaKelahiran_userFormUploadDokumen';
        $aktaKelahiranName = "AktaKelahiran_" . gantiSpasi($dataInArray['namaSiswa']);

        $suratPernyataan = 'name_uploadSuratPernyataan_userFormUploadDokumen';
        $suratPernyataanName = "SuratPernyataan_" . gantiSpasi($dataInArray['namaSiswa']);


        $namaFoto = getExtensionFile($foto, $fotoName);
        $namaIjazah = getExtensionFile($ijazah, $ijazahName);
        $namaKartuKeluarga = getExtensionFile($kartuKeluarga, $kartuKeluargaName);
        $namaAktaKelahiran = getExtensionFile($aktaKelahiran, $aktaKelahiranName);
        $namaSuratPernyataan = getExtensionFile($suratPernyataan, $suratPernyataanName);


        tbl_siswa_attachment_insert($koneksi,"siswa_attachment",
        "id_attachment",
        "id_siswa",
        "doc_name",
        "created_at",
        "created_by",
        "updated_at",
        "updated_by",$idPassPhoto,$idSiswa,$namaFoto,$createdDate,$_SESSION['idLogin'],$createdDate,$_SESSION['idLogin']);

        tbl_siswa_attachment_insert($koneksi,"siswa_attachment",
        "id_attachment",
        "id_siswa",
        "doc_name",
        "created_at",
        "created_by",
        "updated_at",
        "updated_by",$idIjazah,$idSiswa,$namaIjazah,$createdDate,$_SESSION['idLogin'],$createdDate,$_SESSION['idLogin']);

        tbl_siswa_attachment_insert($koneksi,"siswa_attachment",
        "id_attachment",
        "id_siswa",
        "doc_name",
        "created_at",
        "created_by",
        "updated_at",
        "updated_by",$idKartuKeluarga,$idSiswa,$namaKartuKeluarga,$createdDate,$_SESSION['idLogin'],$createdDate,$_SESSION['idLogin']);

        tbl_siswa_attachment_insert($koneksi,"siswa_attachment",
        "id_attachment",
        "id_siswa",
        "doc_name",
        "created_at",
        "created_by",
        "updated_at",
        "updated_by",$idAktaKelahiran,$idSiswa,$namaAktaKelahiran,$createdDate,$_SESSION['idLogin'],$createdDate,$_SESSION['idLogin']);

        tbl_siswa_attachment_insert($koneksi,"siswa_attachment",
        "id_attachment",
        "id_siswa",
        "doc_name",
        "created_at",
        "created_by",
        "updated_at",
        "updated_by",$idSuratPernyataan,$idSiswa,$namaSuratPernyataan,$createdDate,$_SESSION['idLogin'],$createdDate,$_SESSION['idLogin']);

        UploadFile($foto, $fotoName);
        UploadFile($ijazah, $ijazahName);
        UploadFile($kartuKeluarga, $kartuKeluargaName);
        UploadFile($aktaKelahiran, $aktaKelahiranName);
        UploadFile($suratPernyataan, $suratPernyataanName);

        echo json_encode(array("Logo"=>"success","Pesan"=>"Data berhasil diupload","directHalaman"=>"upload/list_pendaftar.html"));

        //echo json_encode(array("Message"=>$dataInArray['namaSiswa']));

        mysqli_close($koneksi);

        break;

    case 'simpanPembayaran':
        # code...
        $idPembayaran = randomString(16);

        $idRegister = $_POST['name_idRegisterSiswa_userFormPembayaran'];
        $idSiswa = $_POST['name_idSiswa_userFormPembayaran'];
        $idSkema = $_POST['name_pilihSkemaPembayaran_userFormPembayaran'];
        $tipePembayaran = $_POST['name_pilihTipePembayaran_userFormPembayaran'];
        
        $catatanPembayaran = $_POST['name_catatanPembayaran_userFormPembayaran'];
        $createdDate = date('Y-m-d H:i:s');

        $sql = "SELECT * FROM vw_siswa_register WHERE idRegister = '$idRegister'";
        $runSQL = mysqli_query($koneksi,$sql);
        $dataInArray = mysqli_fetch_array($runSQL);


        if ($tipePembayaran == 'TB1') {
            # Model Cash
            tbl_pembayaran_insert($koneksi,
            "pembayaran",
            "id_pembayaran",
            "id_register",
            "id_skema",
            "id_tipe_bayar",
            "id_bank",$idPembayaran,$idRegister,$idSkema,$tipePembayaran,"-"); // <-- kolom 5

            tbl_pembayaran_approval_insert($koneksi,
            "pembayaran_approval",
            "id_register",
            "id_approval",
            "id_login",
            "created_at",
            "created_by",
            "updated_at",
            "updated_by",
            "catatan",
            $idRegister,
            "APM2",
            $_SESSION['idLogin'],
            $createdDate,
            $_SESSION['idLogin'],
            $createdDate,
            $_SESSION['idLogin'],
            $catatanPembayaran); // <-- kolom 8

            echo json_encode(array("Logo"=>"info","Pesan"=>"Pembayaran berhasil disimpan","directHalaman"=>"pembayaran/list_pendaftar.html"));

            mysqli_close($koneksi);

            exit;
        }
        else{
            # Model non-Tunai
            $namaBank = $_POST['name_pilihNamaBank_userFormPembayaran'];

            tbl_pembayaran_insert($koneksi,
            "pembayaran",
            "id_pembayaran",
            "id_register",
            "id_skema",
            "id_tipe_bayar",
            "id_bank",$idPembayaran,$idRegister,$idSkema,$tipePembayaran,$namaBank); // <-- kolom 5

            tbl_pembayaran_approval_insert($koneksi,
            "pembayaran_approval",
            "id_register",
            "id_approval",
            "id_login",
            "created_at",
            "created_by",
            "updated_at",
            "updated_by",
            "catatan",
            $idRegister,
            "APM2",
            $_SESSION['idLogin'],
            $createdDate,
            $_SESSION['idLogin'],
            $createdDate,
            $_SESSION['idLogin'],
            $catatanPembayaran); // <-- kolom 8


            $buktiPembayaran = 'name_uploadBuktiPembayaran_userFormPembayaran';
            $buktiPembayaranName = "BuktiPembayaran_" . gantiSpasi($dataInArray['namaSiswa']);

            $namaBuktiPembayaran = getExtensionFile($buktiPembayaran, $buktiPembayaranName);

            UploadFile($buktiPembayaran, $buktiPembayaranName);

            echo json_encode(array("Logo"=>"info","Pesan"=>"Pembayaran berhasil disimpan","directHalaman"=>"pembayaran/list_pendaftar.html"));

            mysqli_close($koneksi);

            exit;
        }

        break;

    case 'fetchSemuaRiwayat':
        # code...

        $tipePencarian = $_POST['dataSelect'];

        if ($tipePencarian == 'SC0') {
            # code...
            $hasil = get_view_by_id($koneksi,"vw_pembayaran_approval","id_login",$_SESSION['idLogin']);

            echo json_encode($hasil);

            mysqli_close($koneksi);

            exit;
        }
        else{

            $hasil = get_view_by_userLogin_ApprovalName($koneksi,"vw_pembayaran_approval","id_login","id_approval",$_SESSION['idLogin'],$tipePencarian);

            echo json_encode($hasil);

            mysqli_close($koneksi);

            exit;
        }

    break;

    case 'fetchDataForPrint':
        # code...

        $hasil = get_view_by_id($koneksi,"vw_pembayaran_approval","id_login",$_SESSION['idLogin']);

        echo json_encode($hasil);

        mysqli_close($koneksi);
        break;

    case 'fetchSkemaPembayaran':
        # code...
        $idSkema = $_POST['idSkema'];

        $sql = "SELECT * FROM skema_detail WHERE id_skema = '$idSkema'";

        $runSQL = mysqli_query($koneksi,$sql);

        $dataInArray = mysqli_fetch_all($runSQL,MYSQLI_ASSOC);

        echo json_encode($dataInArray);
        break;

    case 'fetchTotalSkema':
        # code...
        $idSkema = $_POST['idSkema'];

        $sql = "SELECT SUM(harga) AS harga FROM skema_detail WHERE id_skema = '$idSkema'";

        $runSQL = mysqli_query($koneksi,$sql);
        
        $dataInArray = mysqli_fetch_all($runSQL,MYSQLI_ASSOC);

        echo json_encode($dataInArray);


        break;
    
    default:
        # code...
        break;
}



?>