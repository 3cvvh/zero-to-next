# Section 1: Getting Started with React

## 💡 Core Concepts: Declarative vs Imperative UI

Tujuan utama belajar section ini adalah memahami perpindahan pola pikir dari Vanilla JS ke React.

### 1. Imperative UI (Vanilla JS)
* **Prinsip:** *Define the steps, not the goal* (Dikte langkahnya satu demi satu).
* **Cara Kerja:** Kita wajib pakai **Selector** (`querySelector`, `getElementById`) untuk mengambil elemen HTML, lalu memanipulasinya secara manual.
* **Kekurangan:** Sulit dirawat kalau aplikasi sudah skala besar karena kodingan jadi ruwet dan rentan eror.

### 2. Declarative UI (React)
* **Prinsip:** *Define the goal, not the steps* (Tentukan hasil akhirnya berdasarkan data).
* **Cara Kerja:** Kita tidak butuh selector lagi. Cukup buat aturan berdasarkan kondisi data (*State*), lalu biarkan React yang memperbarui HTML di browser secara otomatis.

---

## 🔤 Vocabulary List

Berikut kumpulan kosakata bahasa Inggris teknis yang muncul di Section 1:

* **Declarative** (Menyatakan / Langsung ke tujuan)
  > Gaya penulisan UI di React yang fokus pada hasil akhir tanpa mendikte langkah manual browser.
  
* **Imperative** (Bersifat memerintah / Instruksi)
  > Gaya penulisan UI di Vanilla JS yang mendikte langkah manual menggunakan selector.
  
* **State** (Kondisi / Data saat ini)
  > Variabel data internal di React yang jika nilainya berubah, akan memicu perubahan tampilan UI secara otomatis.
  
* **Dependencies** (Ketergantungan / Library luar)
  > Modul atau library pihak ketiga yang terdaftar di `package.json` yang dibutuhkan agar proyek bisa berjalan.
  
* **Refresher** (Penyegaran / Mengingat kembali)
  > Materi pengulangan untuk mengingat kembali dasar-dasar JavaScript sebelum masuk ke materi inti React.