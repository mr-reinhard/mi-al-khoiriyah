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

?>