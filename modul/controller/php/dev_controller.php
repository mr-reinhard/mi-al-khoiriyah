<?php 

include '../../koneksi/db.php';
include '../../database/dev_model.php';
include '../../database/bank_model.php';

switch ($_GET['aksi']) {

    case 'setManualQuery':
        # code...
        break;

    case 'viewAllTable':
        # code...
        getAllTable($koneksi);
        break;

    case 'truncateTable':
        # code...
        break;
    
    default:
        # code...
        break;
}

?>