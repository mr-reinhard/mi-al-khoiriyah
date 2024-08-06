<?php 

// get all data
function getAllData($DB_koneksi,$tableName){

    $sql = "SELECT * FROM $tableName";

    $runSQl = mysqli_query($DB_koneksi,$sql);

    $data = mysqli_fetch_all($runSQl,MYSQLI_ASSOC);

    echo json_encode($data);

    mysqli_close($DB_koneksi);
    

}

// get data by id
function getByid($DB_koneksi,$tableName,$column,$value){

    $sql = "SELECT * FROM $tableName WHERE $column = '$value'";

    $runSQl = mysqli_query($DB_koneksi,$sql);

    $data = mysqli_fetch_all($runSQl,MYSQLI_ASSOC);

    echo json_encode($data);

    mysqli_close($DB_koneksi);
}

// get data by name
function getByName($DB_koneksi,$tableName,$column,$value){

    $sql = "SELECT * FROM $tableName WHERE $column LIKE '%".$value."%'";

    $runSQl = mysqli_query($DB_koneksi,$sql);

    $data = mysqli_fetch_all($DB_koneksi,MYSQLI_ASSOC);

    echo json_encode($data);

    mysqli_close($DB_koneksi);
}

// delete data by id
function deleteById($DB_koneksi,$tableName,$column,$value){

    $sql = "DELETE FROM $tableName WHERE $column LIKE '%".$value."%'";

    $mysqi_query($DB_koneksi,$sql);

    mysqli_close($DB_koneksi);
}

// truncate table
function truncateTable($DB_koneksi,$tableName){

    $sqlQuery = "TRUNCATE TABLE $tableName";

    mysqli_query($DB_koneksi,$sqlQuery);

    mysqli_close($DB_koneksi);
}

// fungsi insert semua data
function insertData($DB_koneksi,$tableName,$columnName,$values){

    // untuk nilai dari input placeholder
    $placeHolder = implode(', ',array_fill(0, count($values), '?'));

    // query untuk prepare statement SQL
    $sql = "INSERT INTO $tableName($columnName)VALUES($placeHolder)";

    // Persiapkan statement
    $statement = mysqli_prepare($DB_koneksi,$sql);

    if ($statement) {
        # code...

        // Bind/tautkan parameter
        mysqli_stmt_bind_param($statement, str_repeat('s', count($values)), ...$values);

        // Eksekusi statement
        mysqli_stmt_execute($statement);

        // tutup statement
        mysqli_stmt_close($statement);
        
    }
    else{
        // handle jika statement gagal
        echo json_encode(array("Message"=>"Statement Gagal !"));
    }

    mysqli_close($DB_koneksi);
}

// update pada kondisi tunggal
function updateData($DB_koneksi,$tableName,$columnName,$values,$condition){

    $setClause = [];

    foreach ($columnName as $column) {
        # code...
        $setClause[] = "$column = ?";
    }
    
    $setClause = implode(', ', $setClause);

    $sql = "UPDATE $tableName SET $setClause WHERE $condition";

    $statement = mysqli_prepare($DB_koneksi,$sql);

    if ($statement) {
        # code...

        // Bind Parameter
        mysqli_stmt_bind_param($statement, str_repeat('s', count($values)), ...$values);

        // Eksekusi statement
        mysqli_stmt_execute($statement);

        // close statement
        mysqli_stmt_close($statement);

    }
    else{

        echo json_encode(array("Message" => "Terjadi kesalahan pada statement"));
    }

    mysqli_close($DB_koneksi);


}

?>