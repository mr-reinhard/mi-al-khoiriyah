

CREATE VIEW vw_siswa_register AS SELECT
tbSiswaRegister.id_register,
tbSiswaRegister.id_siswa,
tbSiswa.nama_siswa,
tbSiswaRegister.id_user,
tbSiswaRegister.catatan,
tbSiswaRegister.created_at,
tbSiswaRegister.created_by
FROM siswa_register tbSiswaRegister
INNER JOIN siswa tbSiswa ON
tbSiswa.id_siswa = tbSiswaRegister.id_siswa

CREATE VIEW vw_siswa_orangtua AS SELECT
tbSiswaKeluarga.id_anggota,
tbSiswaKeluarga.id_detail,
tbSiswaKeluarga.id_siswa,
tbSiswa.nama_siswa,
tbKeluargaAnggota.nama_anggota,
tbKeluargaDetail.nik,
tbKeluargaDetail.nama,
tbKeluargaDetail.telfon,
tbKeluargaDetail.alamat
FROM siswa_keluarga tbSiswaKeluarga
INNER JOIN siswa tbSiswa ON
tbSiswa.id_siswa = tbSiswaKeluarga.id_siswa
INNER JOIN keluarga_anggota tbKeluargaAnggota ON
tbKeluargaAnggota.id_anggota = tbSiswaKeluarga.id_anggota
INNER JOIN keluarga_detail tbKeluargaDetail ON
tbKeluargaDetail.id_detail = tbSiswaKeluarga.id_detail

CREATE VIEW vw_siswa_attachment AS SELECT
tbSiswaAttachment.id_attachment,
tbSiswaAttachment.id_siswa,
tbSiswa.nama_siswa,
tbSiswaAttachment.doc_name,
tbSiswaAttachment.created_at
FROM siswa_attachment tbSiswaAttachment
INNER JOIN siswa tbSiswa ON
tbSiswa.id_siswa = tbSiswaAttachment.

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
