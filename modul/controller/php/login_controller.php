<?php 

header('Content-Type: application/json');

include '../../koneksi/db.php';
include '../../helper/function.php';
include '../../database/login_model.php';

switch ($_GET['aksi_login']) {

    // Judul
    // Pesan
    // Logo
    // directHalaman

    case 'loginMasuk':
        # code...
        $sectionLogin = $_POST['name_pilihTipeLogin_formLogin'];
        $userName = $_POST['name_inputUsername_formLogin'];
        $userPassword = $_POST['name_inputPassword_formLogin'];

        if ($sectionLogin == "SEC1") {
            # code...
            $sqlCek = "SELECT * FROM vw_login WHERE id_section = '$sectionLogin' AND user_name = '$userName' AND user_password = '$userPassword'";

            $runCek = mysqli_query($koneksi,$sqlCek);
    
            if (mysqli_num_rows($runCek) > 0) {
                # code...
                echo json_encode(array("Pesan"=>"Login Berhasil","directHalaman"=>"modul/view/admin/"));
                return true;
            }
            else{
                echo json_encode(array("Judul"=>"Login gagal","Pesan"=>"Username atau Password salah.","Logo"=>"error"));
                return false;
            }   
        }

        else{
            $sqlCek2 = "SELECT * FROM vw_login WHERE id_section = '$sectionLogin' AND user_name = '$userName' AND user_password = '$userPassword'";

            $runCek2 = mysqli_query($koneksi,$sqlCek2);
    
            if (mysqli_num_rows($runCek2) > 0) {
                # code...
                echo json_encode(array("Pesan"=>"Login Berhasil","directHalaman"=>"modul/view/user/"));
                return true;
            }
            else{
                echo json_encode(array("Judul"=>"Login gagal","Pesan"=>"Username atau Password salah.","Logo"=>"error"));
                return false;
            }
        }
        
        break;

    case 'daftarAkunBaru':
        # code...
        # SEC1 = ADMIN
        # SEC2 = USER

        # US1 = Active
        # US2 = Warning
        # US3 = Takedown

        $idLogin = randomString(16);

        $userName = $_POST['name_inputUsername_userFormRegisterUser'];
        $userPassword = $_POST['name_inputPassword_userFormRegisterUser'];
        $userTelfon = $_POST['name_inputTelfon_userFormRegisterUser'];

        $createdDate = date('Y-m-d H:i:s');

        $cek = "SELECT * FROM login_akun WHERE user_name LIKE BINARY '%$userName%' OR telfon LIKE BINARY '%$userTelfon%'";

        $runCek = mysqli_query($koneksi,$cek);

        if (mysqli_num_rows($runCek) > 0) {
            # code...
            echo json_encode(array("Judul"=>"Error","Pesan"=>"Username atau telfon sudah digunakan","Logo"=>"error","directHalaman"=>"modul/view/login/daftar_baru.html"));

            mysqli_close($koneksi);

            return false;
        }
        else{

            login_akun_insert($koneksi,"login_akun",
            "id_login",
            "user_name",
            "user_password",
            "telfon",
            "created_at",
            "created_by",
            "updated_at",
            "updated_by",
            $idLogin,
            $userName,
            $userPassword,
            $userTelfon,
            $createdDate,
            $idLogin,
            $createdDate,
            $idLogin);

            login_status_insert($koneksi,"login_status","id_login","id_status_login","id_section",$idLogin,"US1","SEC2");

            echo json_encode(array("Judul"=>"Berhasil","Pesan"=>$userName . "\nBerhasil didaftarkan","Logo"=>"success","directHalaman"=>"modul/view/login/login_user.html"));

            mysqli_close($koneksi);

            return true;
            
        }

        break;

    case 'resetPassword':
        # code...
        $nomorTelfon = $_POST['name_inputNomorTelfon_formResetPassword'];
        $userPassword = $_POST['name_inputPasswordBaru_formResetPassword'];

        $sqlCekTelfon = "SELECT * FROM vw_login WHERE telfon = '$nomorTelfon'";

        $runSqlCekTelfon = mysqli_query($koneksi,$sqlCekTelfon);

        if (mysqli_num_rows($runSqlCekTelfon) > 0) {
            # code...
            resetPassword($koneksi,"login_akun","user_password","telfon",$userPassword,$nomorTelfon);
            echo json_encode(array("Pesan"=>"Password berhasil diganti","Logo"=>"success","directHalaman"=>"modul/view/login/login_user.html"));
        }
        else{
            echo json_encode(array("Judul"=>"Oooppss","Pesan"=>"Nomor telfon tidak terdaftar","Logo"=>"error"));
        }
        break;

        mysqli_close($koneksi);
    
    default:
        # code...
        break;
}

?>