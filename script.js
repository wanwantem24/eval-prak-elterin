async function cekJadwal(){

    document.getElementById("loading").style.display = "flex";
    let data = {
        aksi:"jadwal"
    };

    let response = await fetch("https://script.google.com/macros/s/AKfycbz249Vam_qD-Sm0BkEhMgwIQtTF5Si3mKFloJkTWXcOGXGVkU-pnK57v7TIDDY8ybOn/exec",{
        method:"POST",
        body:JSON.stringify(data)
    });

    let hasil = await response.text();

    if(hasil=="BELUM"){

        window.location.replace("belum.html");
        return;

    }

    if(hasil=="SELESAI"){

        window.location.replace("selesai.html");
        return;

    }
    document.getElementById("loading").style.display = "none";

}
cekJadwal();

function stt(){
    if(localStorage.getItem("statusUjian") === "aktif"){
        alert("Jawaban anda sudah dikirim");
        let durasi = 0 * 60 * 1000;
        let waktuSelesai = Date.now() + durasi;
        localStorage.setItem("waktuSelesai", waktuSelesai);
        window.location.href = "soal.html";
    }
}

window.addEventListener("load", stt);
window.addEventListener("pageshow", stt);

function kembali(){
    document.getElementById("nim_sama").style.display = "none";
}

async function mulaiUjian(){
    localStorage.clear();
    localStorage.setItem("statusUjian", "aktif");

    let nama = document.getElementById("nama").value.trim();
    let nim = document.getElementById("nim").value.trim();

    if(nama==""){
        alert("Nama belum diisi");
        return;
    }

    if(nim==""){
        alert("NIM belum diisi");
        return;
    }

    document.getElementById("loading_mulai").style.display = "flex";

    // Cek apakah NIM sudah pernah ujian pada MK yang sama
    let hasil = await periksa(nama, nim);

    document.getElementById("loading_mulai").style.display = "none";

    if(hasil.trim() == "SUDAH"){
        //alert("Anda sudah pernah mengikuti ujian mata kuliah ini.");
        document.getElementById("nim_sama").style.display = "flex";
        return;
    }

    // Simpan ke localStorage jika belum pernah ujian
    localStorage.setItem("nama", nama);
    localStorage.setItem("nim", nim);
    let durasi = 20 * 60 * 1000;
    let waktuSelesai = Date.now() + durasi;
    localStorage.setItem("waktuSelesai", waktuSelesai);
    let kontri = document.getElementById("kontribusi").value.trim();
    let kontri_anggota = document.getElementById("kontri_anggota").value.trim();
    let nokontri_anggota = document.getElementById("nokontri_anggota").value.trim();
    localStorage.setItem("kontri", kontri);
    localStorage.setItem("kontri_anggota", kontri_anggota);
    localStorage.setItem("nokontri_anggota", nokontri_anggota);

    window.location.href = "soal.html";
}

async function periksa(nama, nim){

    let data = {
        aksi:"cek",
        nama: nama,
        nim: nim,
    };

    let response = await fetch("https://script.google.com/macros/s/AKfycbz249Vam_qD-Sm0BkEhMgwIQtTF5Si3mKFloJkTWXcOGXGVkU-pnK57v7TIDDY8ybOn/exec",{
        method: "POST",
        body: JSON.stringify(data)
    });

    let hasil = await response.text();

    return hasil;

}