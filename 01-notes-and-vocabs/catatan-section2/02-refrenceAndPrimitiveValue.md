# Rekap Video: Nilai Primitif vs Nilai Referensi dalam JavaScript

## Nilai Primitif
- Tipe data dasar seperti string, angka, dan Boolean.
- Ketika variabel string di-reassign, dibuat string baru, bukan memodifikasi yang asli.
- Operasi pada nilai primitif menghasilkan nilai baru.

## Nilai Referensi
- Objek dan array merupakan nilai referensi.
- Metode seperti `push` dapat memodifikasi array asli.
- Variabel menyimpan alamat dari array, bukan array itu sendiri.

## Konstanta (const)
- `const` mencegah penugasan ulang variabel.
- Tidak membatasi perubahan pada isi objek atau array.
- Perubahan pada objek atau array tetap diperbolehkan selama alamat tidak berubah.

## Kesimpulan
- Mengetahui perbedaan antara nilai primitif dan referensi penting untuk memahami perilaku data dalam JavaScript.
- Pemahaman ini krusial dalam pengembangan aplikasi menggunakan React.