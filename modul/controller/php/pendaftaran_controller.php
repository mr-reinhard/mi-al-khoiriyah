<?php 


include '../../koneksi/db.php';
include '../../helper/function.php';
include '../../database/regisSiswa_model.php';
include '../../database/file_model.php';
include '../../database/bank_model.php';
include '../../database/pembayaran_model.php';
include '../../database/my_model.php';
include '../../database/view_model.php';




switch ($_GET['aksi']) {

    case 'admin_simpanDataSiswa':
        # form input
        $idDetailAyah = randomString(16);
        $idDetailIbu = randomString(16);
        $idSiswa = randomString(16);
        $idRegister = randomString(16);
        $idAttachmentPhoto = randomString(16);
        $idAttachmentIjazah = randomString(16);
        $idAttachmentkk = randomString(16);
        $idAttachmentAktaKelahiran = randomString(16);
        $idAttachmentSuratPernyataan = randomString(16);
        $idAttachmentBuktiTransfer = randomString(16);
        $idPembayaran = randomString(16);

        $namaSiswa = $_POST['name_admFormRegisSiswa_inputNamaSiswa'];
        $genderSiswa = $_POST['name_admFormRegisSiswa_pilihGenderSiswa'];
        $domisiliSiswa = $_POST['name_admFormRegisSiswa_inputAlamatSiswa'];

        $nikBapak = $_POST['name_admFormRegisSiswa_inputNikBapak'];
        $namaBapak = $_POST['name_admFormRegisSiswa_inputNamaBapak'];
        $kontakBapak = $_POST['name_admFormRegisSiswa_inputKontakBapak'];
        $domisiliBapak = $_POST['name_admFormRegisSiswa_inputAlamatBapak'];

        $nikIbu = $_POST['name_admFormRegisSiswa_inputNikIbu'];
        $namaIbu = $_POST['name_admFormRegisSiswa_inputNamaIbu'];
        $kontakIbu = $_POST['name_admFormRegisSiswa_inputKontakIbu'];
        $domisiliIbu = $_POST['name_admFormRegisSiswa_inputAlamatIbu'];

        $skemaBayar = $_POST['name_admFormRegisSiswa_pilihSkemaBayar'];
        $tipeBayar = $_POST['name_admFormRegisSiswa_pilihTipePembayaran'];
        
        $catatanRegister = $_POST['name_admFormRegisSiswa_catatanPendaftaran'];
        //$docBuktiBayar = $_POST[''];

        $createdDate = date('Y-m-d H:i:s');

        $dummyIdUser = "IDUSER001";
        $dummyNameUser = "NAMEUSER001";

        // format nama dokumen
        // ======================================================

        // format yang akan di upload ke folder
        $foto = 'name_admFormRegisSiswa_uploadPassPhoto';
        $fotoName = "PassPhoto_" . gantiSpasi($namaSiswa);

        $ijazah = 'name_admFormRegisSiswa_uploadIjazah';
        $ijazahName = "Ijazah_" . gantiSpasi($namaSiswa);

        $kk = 'name_admFormRegisSiswa_uploadKk';
        $kkName = "KartuKeluarga_" . gantiSpasi($namaSiswa);

        $aktaKelahiran = 'name_admFormRegisSiswa_uploadAktaKelahiran';
        $aktaKelahiranName = "AktaKelahiran_" . gantiSpasi($namaSiswa);

        $suratPernyataan = 'name_admFormRegisSiswa_UploadSuratPernyataan';
        $suratPernyataanName = "SuratPernyataan_" . gantiSpasi($namaSiswa);

        $buktiPembayaran = 'name_admFormRegisSiswa_uploadBuktiTransfer';
        $buktiPembayaranName = "BuktiPembayaran_" . gantiSpasi($namaSiswa);


        // format nama yang akan disimpan di dalam database
        $namaFoto = getExtensionFile($foto,$fotoName);
        $namaIjazah = getExtensionFile($ijazah,$ijazahName);
        $namaKk = getExtensionFile($kk,$kkName);
        $namaAktaKelahiran = getExtensionFile($aktaKelahiran,$aktaKelahiranName);
        $namaSuratPernyataan = getExtensionFile($suratPernyataan,$suratPernyataanName);
        $namaBuktiPembayaran = getExtensionFile($buktiPembayaran,$buktiPembayaranName);

        
        

        

        if ($tipeBayar == 'TB1') {  

            # run model cash
            
            tbl_register_approval_insert($koneksi,"register_approval","id_register","id_approval","id_login","created_at","created_by","updated_at","updated_by",$idRegister,"APP2","USER001",$createdDate,"USER001",$createdDate,"USER001");

            tbl_siswa_insert($koneksi,"siswa","id_siswa","id_gender","nama_siswa","alamat","created_at","created_by","updated_at","updated_by",$idSiswa,$genderSiswa,$namaSiswa,$domisiliSiswa,$createdDate,"USER001",$createdDate,"USER001");

            tbl_keluarga_detail_insert($koneksi,"keluarga_detail","id_detail","nik","nama","telfon","alamat","created_at","created_by","updated_at","updated_by",$idDetailAyah,$nikBapak,$namaBapak,$kontakBapak,$domisiliBapak,$createdDate,"USER001",$createdDate,"USER001");
            tbl_keluarga_detail_insert($koneksi,"keluarga_detail","id_detail","nik","nama","telfon","alamat","created_at","created_by","updated_at","updated_by",$idDetailIbu,$nikIbu,$namaIbu,$kontakIbu,$domisiliIbu,$createdDate,"USER001",$createdDate,"USER001");

            tbl_siswa_keluarga_insert($koneksi,"siswa_keluarga","id_anggota","id_detail","id_siswa","AK1",$idDetailAyah,$idSiswa);
            tbl_siswa_keluarga_insert($koneksi,"siswa_keluarga","id_anggota","id_detail","id_siswa","AK2",$idDetailIbu,$idSiswa);

            tbl_siswa_register_insert($koneksi,"siswa_register","id_register","id_siswa","id_login","catatan","created_at","created_by",$idRegister,$idSiswa,"USER001",$catatanRegister,$createdDate,"USER001");

            tbl_pembayaran_insert($koneksi,"pembayaran","id_pembayaran","id_register","id_skema","id_tipe_bayar","id_bank",$idPembayaran,$idRegister,$skemaBayar,$tipeBayar,"-");

            tbl_pembayaran_approval_insert($koneksi,"pembayaran_approval","id_register","id_approval","id_login","created_at","created_by","updated_at","updated_by","catatan",$idRegister,"APM2","USER001",$createdDate,"USER001",$createdDate,"USER001","-");

            tbl_siswa_attachment_insert($koneksi,"siswa_attachment","id_attachment","id_siswa","doc_name","created_at","created_by","updated_at","updated_by",$idAttachmentPhoto,$idSiswa,$namaFoto,$createdDate,"USER001",$createdDate,"USER001");
            tbl_siswa_attachment_insert($koneksi,"siswa_attachment","id_attachment","id_siswa","doc_name","created_at","created_by","updated_at","updated_by",$idAttachmentIjazah,$idSiswa,$namaIjazah,$createdDate,"USER001",$createdDate,"USER001");
            tbl_siswa_attachment_insert($koneksi,"siswa_attachment","id_attachment","id_siswa","doc_name","created_at","created_by","updated_at","updated_by",$idAttachmentkk,$idSiswa,$namaKk,$createdDate,"USER001",$createdDate,"USER001");
            tbl_siswa_attachment_insert($koneksi,"siswa_attachment","id_attachment","id_siswa","doc_name","created_at","created_by","updated_at","updated_by",$idAttachmentAktaKelahiran,$idSiswa,$namaAktaKelahiran,$createdDate,"USER001",$createdDate,"USER001");
            tbl_siswa_attachment_insert($koneksi,"siswa_attachment","id_attachment","id_siswa","doc_name","created_at","created_by","updated_at","updated_by",$idAttachmentSuratPernyataan,$idSiswa,$namaSuratPernyataan,$createdDate,"USER001",$createdDate,"USER001");

            UploadFile($foto, $fotoName);
            UploadFile($ijazah, $ijazahName);
            UploadFile($kk, $kkName);
            UploadFile($aktaKelahiran, $aktaKelahiranName);
            UploadFile($suratPernyataan, $suratPernyataanName);

            echo json_encode(array("Logo"=>"success","Message" => explodeString($namaSiswa) . "\nBerhasil didaftarkan"));

            mysqli_close($koneksi);

            return true;
        }
        
        else{

            # run model non cash
            $namaBank = $_POST['name_admFormRegisSiswa_pilihNamaBank'];
            
            tbl_register_approval_insert($koneksi,"register_approval","id_register","id_approval","id_login","created_at","created_by","updated_at","updated_by",$idRegister,"APP2","USER001",$createdDate,"USER001",$createdDate,"USER001");

            tbl_siswa_insert($koneksi,"siswa","id_siswa","id_gender","nama_siswa","alamat","created_at","created_by","updated_at","updated_by",$idSiswa,$genderSiswa,$namaSiswa,$domisiliSiswa,$createdDate,"USER001",$createdDate,"USER001");

            tbl_keluarga_detail_insert($koneksi,"keluarga_detail","id_detail","nik","nama","telfon","alamat","created_at","created_by","updated_at","updated_by",$idDetailAyah,$nikBapak,$namaBapak,$kontakBapak,$domisiliBapak,$createdDate,"USER001",$createdDate,"USER001");
            tbl_keluarga_detail_insert($koneksi,"keluarga_detail","id_detail","nik","nama","telfon","alamat","created_at","created_by","updated_at","updated_by",$idDetailIbu,$nikIbu,$namaIbu,$kontakIbu,$domisiliIbu,$createdDate,"USER001",$createdDate,"USER001");

            tbl_siswa_keluarga_insert($koneksi,"siswa_keluarga","id_anggota","id_detail","id_siswa","AK1",$idDetailAyah,$idSiswa);
            tbl_siswa_keluarga_insert($koneksi,"siswa_keluarga","id_anggota","id_detail","id_siswa","AK2",$idDetailIbu,$idSiswa);

            tbl_siswa_register_insert($koneksi,"siswa_register","id_register","id_siswa","id_login","catatan","created_at","created_by",$idRegister,$idSiswa,"USER001",$catatanRegister,$createdDate,"USER001");

            tbl_pembayaran_insert($koneksi,"pembayaran","id_pembayaran","id_register","id_skema","id_tipe_bayar","id_bank",$idPembayaran,$idRegister,$skemaBayar,$tipeBayar,$namaBank);

            tbl_pembayaran_approval_insert($koneksi,"pembayaran_approval","id_register","id_approval","id_login","created_at","created_by","updated_at","updated_by","catatan",$idRegister,"APM2","USER001",$createdDate,"USER001",$createdDate,"USER001","-");

            tbl_siswa_attachment_insert($koneksi,"siswa_attachment","id_attachment","id_siswa","doc_name","created_at","created_by","updated_at","updated_by",$idAttachmentPhoto,$idSiswa,$namaFoto,$createdDate,"USER001",$createdDate,"USER001");
            tbl_siswa_attachment_insert($koneksi,"siswa_attachment","id_attachment","id_siswa","doc_name","created_at","created_by","updated_at","updated_by",$idAttachmentIjazah,$idSiswa,$namaIjazah,$createdDate,"USER001",$createdDate,"USER001");
            tbl_siswa_attachment_insert($koneksi,"siswa_attachment","id_attachment","id_siswa","doc_name","created_at","created_by","updated_at","updated_by",$idAttachmentkk,$idSiswa,$namaKk,$createdDate,"USER001",$createdDate,"USER001");
            tbl_siswa_attachment_insert($koneksi,"siswa_attachment","id_attachment","id_siswa","doc_name","created_at","created_by","updated_at","updated_by",$idAttachmentAktaKelahiran,$idSiswa,$namaAktaKelahiran,$createdDate,"USER001",$createdDate,"USER001");
            tbl_siswa_attachment_insert($koneksi,"siswa_attachment","id_attachment","id_siswa","doc_name","created_at","created_by","updated_at","updated_by",$idAttachmentSuratPernyataan,$idSiswa,$namaSuratPernyataan,$createdDate,"USER001",$createdDate,"USER001");
            tbl_siswa_attachment_insert($koneksi,"siswa_attachment","id_attachment","id_siswa","doc_name","created_at","created_by","updated_at","updated_by",$idAttachmentBuktiTransfer,$idSiswa,$namaBuktiPembayaran,$createdDate,"USER001",$createdDate,"USER001");
            
            UploadFile($foto, $fotoName);
            UploadFile($ijazah, $ijazahName);
            UploadFile($kk, $kkName);
            UploadFile($aktaKelahiran, $aktaKelahiranName);
            UploadFile($suratPernyataan, $suratPernyataanName);
            UploadFile($buktiPembayaran, $buktiPembayaranName);

            echo json_encode(array("Logo"=>"success","Message" => explodeString($namaSiswa) . "\nBerhasil didaftarkan"));

            mysqli_close($koneksi);

            return false;

        }
        break;

        case 'fetchNamaBank':
            # code...
            //getDaftarBank_all($koneksi,"bank_daftar");
            getAllData($koneksi,"bank_daftar");
            break;

        case 'fetchTipePembayaran':
            # code...
            tbPembayaranTipe_getAll($koneksi,"pembayaran_tipe");
            break;

        case 'fetchPembayaranApproval':
            # code...

            
            $dataInArray = get_view_by_id($koneksi,"vw_pembayaran_approval","id_approval","APM2");

            echo json_encode($dataInArray);


            break;

        case 'fetchApprovalBy_Id_Name':
            # code...
            $idRegis = $_POST['idReg'];

            $dataInArray = get_view_by_id_name($koneksi,"vw_pembayaran_approval","id_register","id_approval",$idRegis,"APM2");

            echo json_encode($dataInArray);
            break;

        case 'UpdateDataPembayaran':
            # code...

            $idRegis = $_POST['name_fetchIdPembayaranSiswa_adminFormApprovePembayaran'];
            $idApprove = $_POST['name_pilihAksiApprove_adminFormApprovePembayaran'];
            $createdDate = date('Y-m-d H:i:s');

            tbl_pembayaran_approval_update($koneksi,"pembayaran_approval","id_approval","id_register",$idApprove,$idRegis);

            echo json_encode(array("Logo"=>"info","Pesan"=>"Pembayaran diupdate","directHalaman"=>"pembayaran/list_pendaftaran.html"));

            break;
    
    default:
        
        break;
        
}




?>