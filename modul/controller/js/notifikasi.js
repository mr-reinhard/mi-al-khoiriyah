

// Sweet Alert JS
// notifikasi di tengah yang di klik hanya OK aja
function sweetAlert_notifikasiDiTengah(judul,text,ikon) {
  Swal.fire({
    title: judul,
    text: text,
    icon: ikon
  });
}

// notifikasi di tengah tanpa klik tombol
function sweetAlert_notifikasiDiTengah_withTimer(judul, text, ikon) {
  Swal.fire({
    title: judul,
    text: text,
    icon: ikon,
    showConfirmButton:false,
    timer:2000
  });
}

// notifikasi pojok kanan atas
function sweetAlert_notifikasiPojokKananAtas(logo, judul) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: logo,
    title: judul
  });
}

// notifikasi yes or no
function sweetAlert_yesOrNo(titleBefore, textBefore, iconBefore, confirmBtn, cancelBtn, logoAfter, judulAfter) {
  Swal.fire({
    title: titleBefore,
    text: textBefore,
    icon: iconBefore,
    showCancelButton: true,
    cancelButtonText: cancelBtn,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmBtn
  }).then((result) => {
    if (result.isConfirmed) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: logoAfter,
        title: judulAfter
      });
    }
  });
}

// function sweet alert with image
function sweetAlert_withImage(title, text, urlImage, altImage){

  Swal.fire({

    title: title,
    text: text,
    imageUrl: urlImage,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: altImage

  });

}

//titleBefore, textBefore, iconBefore, confirmBtn, cancelBtn, logoAfter, judulAfter



