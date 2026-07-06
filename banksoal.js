const bankSoal = [
  {
    pertanyaan: "1. Apa komponen utama yang digunakan pada praktikum elektronika terintegrasi?",
    gambar: "",
    pilihan: [
      "Trafo",
      "IC",
      "Resistor",
      "Kapasitor",
      "Dioda"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "2. Ada berapa topik/modul pada praktikum elektronika terintegrasi?",
    gambar: "",
    pilihan: [
      2,
      4,
      6,
      8,
      10
    ],
    jawaban: 2
  },
  {
    pertanyaan: "3. Pada modul 3 percobaan 2, nilai apa yang diubah-ubah pada tabel?",
    gambar: "",
    pilihan: [
      "Resistor",
      "Kapasitor",
      "Vin 1",
      "Vin 2",
      "Vout"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "4. Pada modul 1 percobaan 2, data apa yang didapat dari praktikum?",
    gambar: "",
    pilihan: [
      "Vout",
      "Vin",
      "Frekuensi",
      "Resistansi",
      "Kapasitansi"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "5. Pada rangkaian osilator, ada berapa jumlah resistor yang digunakan?",
    gambar: "",
    pilihan: [
      1,
      2,
      3,
      4,
      5
    ],
    jawaban: 2
  },
  {
    pertanyaan: "6. Pada modul 4 percobaan 2, berapa kali perubahan nilai resistor dan kapasitor?",
    gambar: "",
    pilihan: [
      1,
      2,
      3,
      4,
      5
    ],
    jawaban: 2
  },
  {
    pertanyaan: "7. Pada modul 2 percobaan 2 berapa nilai Rin yang digunakan?",
    gambar: "",
    pilihan: [
      "10 Ohm",
      "100 Ohm",
      "220 Ohm",
      "330 Ohm",
      "470 Ohm"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "8. Pada modul 5 percobaan 1, berapa frekuensi yang digunakan?",
    gambar: "",
    pilihan: [
      "1 Khz",
      "2 KHz",
      "3 KHz",
      "4 KHz",
      "5 KHz"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "9. Apa itu IC Op-Amp?",
    gambar: "",
    pilihan: [
      "Komponen untuk menurunkan arus listrik",
      "Komponen untuk menyearahkan arus listrik",
      "Komponen untuk menguatkan sinyal listrik",
      "Komponen untuk menyimpan arus listrik",
      "Komponen untuk kontrol sinyal listrik"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "10. Dibawah ini salah satu IC Op-Amp jenis single op-amp adalah?",
    gambar: "",
    pilihan: [
      "74LS32",
      "LM324",
      "LM358",
      "UA741",
      "74LS08"
    ],
    jawaban: 3
  },
  {
    pertanyaan: "11. Pada topik penguat non inverting, data apa yang diambil?",
    gambar: "",
    pilihan: [
      "Konsistensitas penguatan setiap Vin",
      "Pengaruh C terhadap penguatan",
      "Linieritas penguatan",
      "Pengaruh RC terhadap input",
      "Selisih penguatan setiap IC"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "12. Berdasarkan praktikum yang telah dilakukan, apa perbedaan penguat non inverting dengan inverting?",
    gambar: "",
    pilihan: [
      "Polaritas sinyal output",
      "Polaritas sinyal input",
      "Jenis IC yang digunakan",
      "Komponen yang digunakan",
      "Gain penguatan"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "13. Pada praktikum elektronika terintegrasi, alat apa yang digunakan untuk melihat dan mengukur gelombang listrik??",
    gambar: "",
    pilihan: [
      "AVO meter",
      "Multimeter",
      "Osiloskop",
      "Function Generator",
      "Tensi meter"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "14. Berdasarkan praktikum yang telah dilalukan pada topik praktikum rangkaian integrator, bagaimana pengaruh nilai RC ?",
    gambar: "",
    pilihan: [
      "Tidak berpengaruh sama sekali",
      "Semakin besar nilai RC, semakin kecil penguatan",
      "Semakin besar nilai RC, semakin besar penguatan",
      "Semakin besar nilai RC semakin tinggi frekuensi yang dihasilkan",
      "Semakin besar nilai RC semakin rendah frekuensi yang dihasilkan"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "15. Berdasarkan praktikum yang telah dilakukan, apa perbedaan rangkaian integrator dengan rangkaian diferensiator",
    gambar: "",
    pilihan: [
      "Tidak ada bedanya",
      "Pada rangkaian integrator semakin tinggi frekuensi, semakin besar penguatan sedangkan pada rangkaian diferensiator semakin tinggi frekuensi, semakin kecil penguatan",
      "Pada rangkaian integrator semakin tinggi frekuensi, semakin kecil penguatan sedangkan pada rangkaian diferensiator semakin tinggi frekuensi, semakin besar penguatan",
      "Pada rangkaian integrator menguatkan arus AC sedangkan pada rangkaian diferensiator menguatkan arus DC",
      "Pada rangkaian integrator menguatkan arus DC sedangkan pada rangkaian diferensiator menguatkan arus AC"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "16. Berdasarkan praktikum yang telah dilalukan pada topik praktikum rangkaian osilator, bagaimana pengaruh nilai RC ?",
    gambar: "",
    pilihan: [
      "Tidak berpengaruh sama sekali",
      "Semakin besar nilai RC semakin tinggi frekuensi yang dihasilkan",
      "Semakin besar nilai RC semakin rendah frekuensi yang dihasilkan",
      "Semakin besar nilai RC, semakin besar penguatan",
      "Semakin besar nilai RC, semakin kecil penguatan"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "17. Pada IC berikut, input inverting berada di pin kaki nomor berapa?",
    gambar: "OPAMP.JPG",
    pilihan: [
      1,
      2,
      3,
      4,
      5
    ],
    jawaban: 1
  },
  {
    pertanyaan: "18. Pada IC Op-Amp tipe 741, catudaya positif (tegangan +) dihubung dengan pin kaki nomor berapa?",
    gambar: "",
    pilihan: [
      1,
      4,
      7,
      10,
      12
    ],
    jawaban: 2
  },
  {
    pertanyaan: "19.  Pada IC Op-Amp tipe 741, catudaya negatif (tegangan -) dihubung dengan pin kaki nomor berapa?",
    gambar: "",
    pilihan: [
      1,
      4,
      7,
      10,
      11
    ],
    jawaban: 1
  },
  {
    pertanyaan: "20. Pada pelaksanaan praktikum elektronika terintegrasi berapa tegangan catu daya (power supplay) yang digunakan?",
    gambar: "",
    pilihan: [
      "(+2 dan -2 Volt)",
      "(+5 dan -5 Volt)",
      "(+7 dan -7 Volt)",
      "(+9 dan -9 Volt)",
      "(+12 dan -12 Volt)"
    ],
    jawaban: 4
  }
];