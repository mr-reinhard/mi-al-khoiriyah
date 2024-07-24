<?php 

include 'asset/lib/fpdf186/fpdf.php';


class PDF extends FPDF
{
    // Page header
    function Header()
    {
        // Logo
        $this->Image('asset/image/logo_mi.png', 10, 6, 30);
        $this->SetFont('Arial', 'B', 12);
        // Title
        $this->Cell(0, 10, 'MI AL-KHOIRIYAH', 0, 1, 'C');
        $this->SetFont('Arial', '', 10);
        $this->Cell(0, 10, 'Jl. Simpangan, Cikarang Timur, Jatireja, Kecamatan Cikarang Timur, Kabupaten Bekasi, Jawa Barat 17550', 0, 1, 'C');
        $this->Cell(0, 10, '0896-9445-8141 | https://www.mi-al-khoiriyah.com', 0, 1, 'C');
        // Line break
        $this->Ln(10);
    }

    // Page footer
    function Footer()
    {
        // Position at 1.5 cm from bottom
        $this->SetY(-15);
        // Arial italic 8
        $this->SetFont('Arial', 'I', 8);
        // Page number
        $this->Cell(0, 10, 'Page ' . $this->PageNo() . '/{nb}', 0, 0, 'C');
    }
}

// Instantiation of inherited class
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(0, 10, 'BUKTI PEMBAYARAN', 0, 1, 'C');
$pdf->Ln(5);

$pdf->SetFont('Arial', 'B', 10);
$pdf->Cell(0, 10, 'BUDI HERMAWAN', 0, 1, 'C');
$pdf->Ln(10);

$pdf->SetFont('Arial', 'B', 10);
$pdf->Cell(0, 10, 'DETAIL INFORMASI', 0, 1, 'L');
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, 8, 'ID Pembayaran : D45AK9965656', 0, 1, 'L');
$pdf->Cell(0, 8, 'Gender : Laki-Laki', 0, 1, 'L');
$pdf->Cell(0, 8, 'Tempat/Tgl Lahir : Jakarta, 19 Desember 1995', 0, 1, 'L');
$pdf->Cell(0, 8, 'Domisili : Jakarta', 0, 1, 'L');
$pdf->Ln(10);

$pdf->SetFont('Arial', 'B', 10);
$pdf->Cell(0, 10, 'RINCIAN PEMBAYARAN', 0, 1, 'L');
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(10, 10, 'No', 1, 0, 'C');
$pdf->Cell(110, 10, 'Rincian', 1, 0, 'C');
$pdf->Cell(40, 10, 'Biaya', 1, 1, 'C');

// Table content
$items = [
    ['Uang Pendaftaran', '150.000'],
    ['Seragam', '250.000'],
    ['Uang Gedung', '400.000'],
    ['LKS (Lembar Kerja Siswa)', '180.000'],
    ['SPP/Infaq', '70.000']
];

$i = 1;
foreach ($items as $item) {
    $pdf->Cell(10, 10, $i++, 1, 0, 'C');
    $pdf->Cell(110, 10, $item[0], 1, 0, 'L');
    $pdf->Cell(40, 10, $item[1], 1, 1, 'R');
}

// Summary
$pdf->SetFont('Arial', 'B', 10);
$pdf->Cell(120, 10, 'TOTAL', 1, 0, 'C');
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(40, 10, '1.050.000', 1, 1, 'R');
$pdf->SetFont('Arial', 'B', 10);
$pdf->Cell(120, 10, 'DISCOUNT %', 1, 0, 'C');
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(40, 10, '0', 1, 1, 'R');
$pdf->SetFont('Arial', 'B', 10);
$pdf->Cell(120, 10, 'GRAND TOTAL', 1, 0, 'C');
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(40, 10, '1.050.000', 1, 1, 'R');

$pdf->Ln(10);
$pdf->Cell(0, 10, 'TGL PEMBAYARAN : 23 July 2024', 0, 1, 'L');
$pdf->Cell(0, 10, 'STATUS : LUNAS', 0, 1, 'L');
$pdf->Ln(10);
$pdf->Cell(0, 10, 'Cikarang, 27 Juli 2024', 0, 1, 'L');
$pdf->Ln(20);
$pdf->Cell(0, 10, 'Kepala Sekolah MI Al-Khoiriyah', 0, 1, 'L');
$pdf->Ln(20);
$pdf->Cell(0, 10, '( Izaac Rehnard Latuwael )', 0, 1, 'L');

$pdf->Output();

?>