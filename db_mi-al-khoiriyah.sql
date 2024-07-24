/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.4.24-MariaDB : Database - db_mi-al-khoiriyah
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_mi-al-khoiriyah` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `db_mi-al-khoiriyah`;

/*Table structure for table `approval_pembayaran` */

DROP TABLE IF EXISTS `approval_pembayaran`;

CREATE TABLE `approval_pembayaran` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_approval` varchar(16) NOT NULL,
  `approval_name` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id_approval`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `approval_pembayaran` */

insert  into `approval_pembayaran`(`id`,`id_approval`,`approval_name`) values 
(1,'APM1','Lunas'),
(2,'APM2','Menunggu'),
(3,'APM3','Outstanding'),
(4,'APM4','Dibatalkan');

/*Table structure for table `approval_tipe` */

DROP TABLE IF EXISTS `approval_tipe`;

CREATE TABLE `approval_tipe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_approval` varchar(16) NOT NULL,
  `approval_name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_approval`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `approval_tipe` */

insert  into `approval_tipe`(`id`,`id_approval`,`approval_name`) values 
(1,'APP1','Diterima'),
(2,'APP2','Menunggu'),
(3,'APP3','Ditolak');

/*Table structure for table `attachment_tipe` */

DROP TABLE IF EXISTS `attachment_tipe`;

CREATE TABLE `attachment_tipe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_attachment` varchar(16) NOT NULL,
  `type_attachment` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_attachment`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `attachment_tipe` */

insert  into `attachment_tipe`(`id`,`id_attachment`,`type_attachment`) values 
(1,'SA1','Bukti Transfer'),
(2,'SA2','Kwitansi'),
(3,'SA3','Lainnya...');

/*Table structure for table `bank_daftar` */

DROP TABLE IF EXISTS `bank_daftar`;

CREATE TABLE `bank_daftar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_bank` varchar(16) NOT NULL,
  `kode_bank` varchar(3) DEFAULT NULL,
  `nama_bank` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_bank`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

/*Data for the table `bank_daftar` */

insert  into `bank_daftar`(`id`,`id_bank`,`kode_bank`,`nama_bank`) values 
(5,'IB1','008','Mandiri'),
(6,'IB2','002','BRI'),
(7,'IB3','009','BNI'),
(8,'IB4','200','BTN'),
(9,'IB5','014','BCA');

/*Table structure for table `gender` */

DROP TABLE IF EXISTS `gender`;

CREATE TABLE `gender` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_gender` varchar(16) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_gender`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `gender` */

insert  into `gender`(`id`,`id_gender`,`gender`) values 
(1,'GEN1','Laki-Laki'),
(2,'GEN2','Perempuan');

/*Table structure for table `keluarga_anggota` */

DROP TABLE IF EXISTS `keluarga_anggota`;

CREATE TABLE `keluarga_anggota` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_anggota` varchar(16) NOT NULL,
  `nama_anggota` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_anggota`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `keluarga_anggota` */

insert  into `keluarga_anggota`(`id`,`id_anggota`,`nama_anggota`) values 
(1,'AK1','Ayah'),
(2,'AK2','Ibu'),
(3,'AK3','Kakak'),
(4,'AK4','Adik'),
(5,'AK5','Om'),
(6,'AK6','Tante'),
(7,'AK7','Sepupu'),
(8,'AK8','Lainnya...');

/*Table structure for table `keluarga_detail` */

DROP TABLE IF EXISTS `keluarga_detail`;

CREATE TABLE `keluarga_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_detail` varchar(16) NOT NULL,
  `nik` varchar(16) DEFAULT NULL,
  `nama` varchar(50) DEFAULT NULL,
  `telfon` varchar(14) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(16) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id_detail`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `keluarga_detail` */

/*Table structure for table `login` */

DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_login` varchar(16) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `telfon` varchar(13) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(16) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id_login`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `login` */

insert  into `login`(`id`,`id_login`,`username`,`password`,`telfon`,`created_at`,`created_by`,`updated_at`,`updated_by`) values 
(1,'TE54UV0IBP62CM1Q','ongen','ongen','082121890758','2024-07-24 16:34:35','USER001','2024-07-24 16:34:35','USER001');

/*Table structure for table `login_status` */

DROP TABLE IF EXISTS `login_status`;

CREATE TABLE `login_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_login` varchar(16) DEFAULT NULL,
  `id_status_login` varchar(16) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `login_status` */

/*Table structure for table `pembayaran` */

DROP TABLE IF EXISTS `pembayaran`;

CREATE TABLE `pembayaran` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pembayaran` varchar(16) NOT NULL,
  `id_register` varchar(16) DEFAULT NULL,
  `id_skema` varchar(16) DEFAULT NULL,
  `id_tipe_bayar` varchar(16) DEFAULT NULL,
  `id_bank` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id_pembayaran`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `pembayaran` */

/*Table structure for table `pembayaran_approval` */

DROP TABLE IF EXISTS `pembayaran_approval`;

CREATE TABLE `pembayaran_approval` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_register` varchar(16) DEFAULT NULL,
  `id_approval` varchar(16) DEFAULT NULL,
  `id_login` varchar(16) DEFAULT NULL COMMENT 'user yang approve',
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(16) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(16) DEFAULT NULL,
  `catatan` text DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `pembayaran_approval` */

/*Table structure for table `pembayaran_skema` */

DROP TABLE IF EXISTS `pembayaran_skema`;

CREATE TABLE `pembayaran_skema` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_skema` varchar(16) NOT NULL,
  `nama_skema` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_skema`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `pembayaran_skema` */

insert  into `pembayaran_skema`(`id`,`id_skema`,`nama_skema`) values 
(1,'SKM1','Skema-01'),
(2,'SKM2','Skema-02');

/*Table structure for table `pembayaran_tipe` */

DROP TABLE IF EXISTS `pembayaran_tipe`;

CREATE TABLE `pembayaran_tipe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipe_bayar` varchar(16) NOT NULL,
  `tipe_bayar` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_tipe_bayar`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `pembayaran_tipe` */

insert  into `pembayaran_tipe`(`id`,`id_tipe_bayar`,`tipe_bayar`) values 
(1,'TB1','Tunai'),
(2,'TB2','Non Tunai');

/*Table structure for table `register_approval` */

DROP TABLE IF EXISTS `register_approval`;

CREATE TABLE `register_approval` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_register` varchar(16) DEFAULT NULL,
  `id_approval` varchar(16) DEFAULT NULL,
  `id_login` varchar(16) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(16) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(16) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `register_approval` */

/*Table structure for table `siswa` */

DROP TABLE IF EXISTS `siswa`;

CREATE TABLE `siswa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_siswa` varchar(16) NOT NULL,
  `id_gender` varchar(16) DEFAULT NULL,
  `nama_siswa` varchar(50) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(16) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id_siswa`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `siswa` */

/*Table structure for table `siswa_attachment` */

DROP TABLE IF EXISTS `siswa_attachment`;

CREATE TABLE `siswa_attachment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_attachment` varchar(16) NOT NULL,
  `id_siswa` varchar(16) DEFAULT NULL,
  `doc_name` varchar(150) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(16) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id_attachment`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `siswa_attachment` */

/*Table structure for table `siswa_keluarga` */

DROP TABLE IF EXISTS `siswa_keluarga`;

CREATE TABLE `siswa_keluarga` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_anggota` varchar(16) DEFAULT NULL,
  `id_detail` varchar(16) DEFAULT NULL,
  `id_siswa` varchar(16) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `siswa_keluarga` */

/*Table structure for table `siswa_register` */

DROP TABLE IF EXISTS `siswa_register`;

CREATE TABLE `siswa_register` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_register` varchar(16) NOT NULL,
  `id_siswa` varchar(16) DEFAULT NULL,
  `id_login` varchar(16) DEFAULT NULL,
  `catatan` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_register`),
  KEY `id` (`id`),
  KEY `id_siswa` (`id_siswa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `siswa_register` */

/*Table structure for table `skema_detail` */

DROP TABLE IF EXISTS `skema_detail`;

CREATE TABLE `skema_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_detai_skema` varchar(16) NOT NULL,
  `id_skema` varchar(50) DEFAULT NULL,
  `detail_skema` varchar(50) DEFAULT NULL,
  `harga` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_detai_skema`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `skema_detail` */

insert  into `skema_detail`(`id`,`id_detai_skema`,`id_skema`,`detail_skema`,`harga`) values 
(2,'SKMD1','SKM1','Uang Pendaftaran',150000),
(3,'SKMD2','SKM1','Seragam',250000),
(4,'SKMD3','SKM1','Uang Gedung',400000),
(5,'SKMD4','SKM1','LKS',180000),
(6,'SKMD5','SKM1','SPP/Infaq',70000);

/*Table structure for table `status_login` */

DROP TABLE IF EXISTS `status_login`;

CREATE TABLE `status_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_status_login` varchar(16) NOT NULL,
  `nama_status` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id_status_login`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `status_login` */

insert  into `status_login`(`id`,`id_status_login`,`nama_status`) values 
(1,'US1','Active'),
(2,'US2','Warning'),
(3,'US3','Takedown');

/*Table structure for table `vw_siswa_orangtua` */

DROP TABLE IF EXISTS `vw_siswa_orangtua`;

/*!50001 DROP VIEW IF EXISTS `vw_siswa_orangtua` */;
/*!50001 DROP TABLE IF EXISTS `vw_siswa_orangtua` */;

/*!50001 CREATE TABLE  `vw_siswa_orangtua`(
 `id_anggota` varchar(16) ,
 `id_detail` varchar(16) ,
 `id_siswa` varchar(16) ,
 `nama_siswa` varchar(50) ,
 `nama_anggota` varchar(10) ,
 `nik` varchar(16) ,
 `nama` varchar(50) ,
 `telfon` varchar(14) ,
 `alamat` text 
)*/;

/*View structure for view vw_siswa_orangtua */

/*!50001 DROP TABLE IF EXISTS `vw_siswa_orangtua` */;
/*!50001 DROP VIEW IF EXISTS `vw_siswa_orangtua` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_siswa_orangtua` AS select `tbsiswakeluarga`.`id_anggota` AS `id_anggota`,`tbsiswakeluarga`.`id_detail` AS `id_detail`,`tbsiswakeluarga`.`id_siswa` AS `id_siswa`,`tbsiswa`.`nama_siswa` AS `nama_siswa`,`tbkeluargaanggota`.`nama_anggota` AS `nama_anggota`,`tbkeluargadetail`.`nik` AS `nik`,`tbkeluargadetail`.`nama` AS `nama`,`tbkeluargadetail`.`telfon` AS `telfon`,`tbkeluargadetail`.`alamat` AS `alamat` from (((`siswa_keluarga` `tbsiswakeluarga` join `siswa` `tbsiswa` on(`tbsiswa`.`id_siswa` = `tbsiswakeluarga`.`id_siswa`)) join `keluarga_anggota` `tbkeluargaanggota` on(`tbkeluargaanggota`.`id_anggota` = `tbsiswakeluarga`.`id_anggota`)) join `keluarga_detail` `tbkeluargadetail` on(`tbkeluargadetail`.`id_detail` = `tbsiswakeluarga`.`id_detail`)) */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
