


CREATE VIEW vw_login AS SELECT
tb_login_status.id_section,
tb_login_status.id_login,
tb_login_status.id_status_login,
tb_login_section.nama_section,
tb_status_login.nama_status,
tb_login.user_name,
tb_login.user_password,
tb_login.telfon,
tb_login.created_at,
tb_login.created_by,
tb_login.updated_at,
tb_login.updated_by
FROM login_status tb_login_status
INNER JOIN login_section tb_login_section ON
tb_login_section.id_section = tb_login_status.id_section
INNER JOIN status_login tb_status_login ON
tb_status_login.id_status_login = tb_login_status.id_status_login
INNER JOIN login_akun tb_login ON
tb_login.id_login = tb_login_status.id_login

CREATE VIEW vw_siswa_keluarga AS SELECT
tb_siswa_keluarga.id_anggota,
tb_siswa_keluarga.id_detail,
tb_siswa_keluarga.id_siswa,
tb_keluarga_anggota.nama_anggota,
tb_keluarga_detail.nik,
tb_keluarga_detail.nama,
tb_keluarga_detail.telfon,
tb_keluarga_detail.alamat,
tb_keluarga_detail.created_at,
tb_keluarga_detail.created_by,
tb_keluarga_detail.updated_at,
tb_keluarga_detail.updated_by
from siswa_keluarga tb_siswa_keluarga
INNER JOIN keluarga_anggota tb_keluarga_anggota ON
tb_keluarga_anggota.id_anggota = tb_siswa_keluarga.id_anggota
INNER JOIN keluarga_detail tb_keluarga_detail ON
tb_keluarga_detail.id_detail = tb_siswa_keluarga.id_detail

-- CREATE VIEW vw_siswa_attachment AS SELECT
-- tb_siswa.id_siswa,
-- tb_siswa_attachment.id_attachment,
-- tb_siswa_attachment.doc_name
-- FROM siswa tb_siswa
-- INNER JOIN siswa_attachment tb_siswa_attachment ON
-- tb_siswa_attachment.id_siswa = tb_siswa.id_siswa


CREATE VIEW vw_siswa AS SELECT
tb_siswa.id_siswa AS idSiswa,
tb_siswa.id_gender AS idGender,
tb_siswa.nama_siswa as namaSiswa,
tb_gender.nama_gender AS namaGender,
tb_siswa.alamat AS alamatSiswa,
tb_siswa.created_at AS tglInput,
tb_login_akun.user_name AS inputBy,
tb_siswa.updated_at AS tglUpdate,
tb_login_akun.user_name AS updateBy
FROM siswa tb_siswa
INNER JOIN gender tb_gender ON
tb_gender.id_gender = tb_siswa.id_gender
INNER JOIN login_akun tb_login_akun ON
tb_login_akun.id_login = tb_siswa.created_by


-- vw_siswa_register 

CREATE VIEW vw_siswa_register AS SELECT
tb_siswa_register.id_register AS idRegister,
tb_siswa_register.id_siswa AS idSiswa,
tb_siswa_register.id_login as idLogin,
tb_siswa.nama_siswa AS namaSiswa,
vwSiswa.namaGender,
vwSiswa.alamatSiswa,
tb_login_akun.user_name AS userName,
tb_siswa_register.catatan AS catatan,
tb_siswa_register.created_at AS tglInput,
tb_login_akun.user_name AS inputBy
FROM siswa_register tb_siswa_register
INNER JOIN siswa tb_siswa ON
tb_siswa.id_siswa = tb_siswa_register.id_siswa
INNER JOIN login_akun tb_login_akun ON
tb_login_akun.id_login = tb_siswa_register.created_by
INNER JOIN vw_siswa vwSiswa ON
vwSiswa.idSiswa = tb_siswa_register.id_siswa

CREATE VIEW vw_register_approval AS SELECT
tb_register_approval.id_register,
tb_register_approval.id_approval,
tb_register_approval.id_login,
vwSiswaRegister.namaSiswa,
vwSiswaRegister.namaGender,
vwSiswaRegister.alamatSiswa,
tb_register_approval.created_at,
tb_register_approval.created_by,
tb_register_approval.updated_at,
tb_register_approval.updated_by,
tb_approval_tipe.approval_name
FROM register_approval tb_register_approval
INNER JOIN vw_siswa_register vwSiswaRegister ON
vwSiswaRegister.idLogin = tb_register_approval.id_login
INNER JOIN approval_tipe tb_approval_tipe ON
tb_approval_tipe.id_approval = tb_register_approval.id_approval

-- CREATE VIEW vw_pembayaran AS SELECT
-- tb_pembayaran.id_pembayaran,
-- tb_pembayaran.id_register,
-- tb_pembayaran_approval.id_approval,
-- tb_pembayaran_approval.created_at,
-- tb_pembayaran_approval.created_by,
-- tb_pembayaran_skema.nama_skema,
-- tb_pembayaran_tipe.tipe_bayar,
-- tb_bank_daftar.nama_bank
-- FROM pembayaran tb_pembayaran
-- INNER JOIN pembayaran_approval tb_pembayaran_approval ON
-- tb_pembayaran_approval.id_register = tb_pembayaran.id_register
-- INNER JOIN pembayaran_skema tb_pembayaran_skema ON
-- tb_pembayaran_skema.id_skema = tb_pembayaran.id_skema
-- INNER JOIN pembayaran_tipe tb_pembayaran_tipe ON
-- tb_pembayaran_tipe.id_tipe_bayar = tb_pembayaran.id_tipe_bayar
-- INNER JOIN bank_daftar tb_bank_daftar ON
-- tb_bank_daftar.id_bank = tb_pembayaran.id_bank

CREATE VIEW vw_pembayaran AS SELECT
tb_pembayaran.id_pembayaran,
tb_pembayaran.id_register,
tb_pembayaran.id_skema,
tb_pembayaran.id_tipe_bayar,
-- tb_pembayaran.id_bank,
vwSiswaRegister.namaSiswa,
vwSiswaRegister.namaGender,
tb_pembayaran_skema.nama_skema,
tb_pembayaran_tipe.tipe_bayar
-- tb_bank_daftar.nama_bank
FROM pembayaran tb_pembayaran
INNER JOIN vw_siswa_register vwSiswaRegister ON
vwSiswaRegister.idRegister = tb_pembayaran.id_register
INNER JOIN pembayaran_skema tb_pembayaran_skema ON
tb_pembayaran_skema.id_skema = tb_pembayaran.id_skema
INNER JOIN pembayaran_tipe tb_pembayaran_tipe ON
tb_pembayaran_tipe.id_tipe_bayar = tb_pembayaran.id_tipe_bayar
-- INNER JOIN bank_daftar tb_bank_daftar ON
-- tb_bank_daftar.id_bank = tb_pembayaran.id_bank

CREATE VIEW vw_pembayaran_approval AS SELECT
tbPembayaranApprove.id_register,
tbPembayaran.id_pembayaran,
tbPembayaranApprove.id_approval,
tbPembayaranApprove.id_login,
vwPembayaran.namaSiswa,
vwPembayaran.namaGender,
tbLoginAkun.user_name,
tbApprovalPembayaran.approval_name,
tbPembayaranApprove.created_at,
tbPembayaranApprove.created_by,
tbPembayaranApprove.updated_at,
tbPembayaranApprove.updated_by,
tbPembayaranApprove.catatan
FROM pembayaran_approval tbPembayaranApprove
INNER JOIN pembayaran tbPembayaran ON
tbPembayaran.id_register = tbPembayaranApprove.id_register
INNER JOIN vw_pembayaran vwPembayaran ON
vwPembayaran.id_register = tbPembayaranApprove.id_register
INNER JOIN login_akun tbLoginAkun ON
tbLoginAkun.id_login = tbPembayaranApprove.updated_by
INNER JOIN approval_pembayaran tbApprovalPembayaran ON
tbApprovalPembayaran.id_approval = tbPembayaranApprove.id_approval







-- CREATE VIEW vw_siswa_attachment AS SELECT
-- tbSiswaRegister.id_register,
-- tbSiswaRegister.id_siswa,