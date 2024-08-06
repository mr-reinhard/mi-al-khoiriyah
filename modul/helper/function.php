<?php 

function escapeString(){

}

function dateIndo(){

}


function randomString($panjangKarakter){

        $unique_id = '0123456789ABCDEFGHIJKLMNOPQRSTUVWQYZ';
        $output_id = substr(str_shuffle($unique_id),0,$panjangKarakter);
        return $output_id;
        
}

// menghapus spasi dalam satu kalimat
function hapusSpasi($nilaiInput){

        $gantiString = str_replace(' ','',$nilaiInput);
        return $gantiString;

}

// mengganti spasi dengan karakter _
function gantiSpasi($nilaiInput){

        $gantiString = str_replace(' ','_',$nilaiInput);
        return $gantiString;

}

// fungsi untuk mengambil kata pertama pada kalimat
function explodeString($nilaiInput){

        $kalimat = explode(" ",$nilaiInput);
        $kataPertama = $kalimat[0];
        return $kataPertama;
}

function hashingKarakter($nilaiInput){

        $key = 'userPassword';
        $hashing_karakter = hash_hmac('sha256',$nilaiInput,$key);
        return $hashing_karakter;

}


function deleteCookieAndSession(){

        $_SESSION = array();

        if (ini_get("session.use_cookie")) {
                # code...
                $params = session_get_cookie_params();
                setcookie(session_name(), '',time() - 42000,
                $params["path"],$params["domain"],
                $params["secure"],$params["httponly"]
        );
        }
        session_destroy();
}

?>