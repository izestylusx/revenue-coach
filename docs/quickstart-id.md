# Panduan Singkat Bahasa Indonesia

Revenue Coach mengubah coding agent menjadi coach eksekusi bisnis yang fokus pada bukti pasar dan revenue, bukan membangun sistem yang belum dibutuhkan.

## Instalasi

Untuk Codex, Cursor, Gemini CLI, GitHub Copilot, atau OpenCode:

```bash
npx github:izestylusx/revenue-coach install
```

Untuk Claude Code:

```bash
npx github:izestylusx/revenue-coach install --agent claude
```

Untuk memasang hanya di proyek yang sedang aktif:

```bash
npx github:izestylusx/revenue-coach install --scope project
```

## Inisialisasi proyek coaching

Jalankan di folder kerja bisnis Anda:

```bash
npx github:izestylusx/revenue-coach init
```

Perintah ini membuat folder `.revenue-coach/` berisi state minimal. Isinya diabaikan Git secara default karena bisa memuat informasi bisnis sensitif. State ini opsional; framework tetap bisa dipakai tanpa file.

## Prompt awal

```text
Gunakan revenue-diagnose. Bantu saya memilih jalur paling realistis untuk menghasilkan income dari skill, bukti, relasi, dan aset yang sudah saya punya. Pisahkan fakta, asumsi, ketakutan, dan informasi yang masih kurang. Akhiri dengan satu aksi 30 menit.
```

Untuk check-in harian:

```text
Gunakan revenue-daily. Hari ini saya punya 30 menit. Tinjau bottleneck revenue saya dan pilih satu aksi yang paling dekat ke paid conversation.
```

Untuk membentuk jasa atau freelance offer:

```text
Gunakan revenue-offer. Bentuk penawaran terkecil yang kredibel dan bisa saya deliver manual sebelum membuat website atau app.
```

## Prinsip utama

- Hanya satu eksperimen revenue utama dan maksimal satu aset jangka panjang.
- Kontak pasar didahulukan daripada branding, planning, dan tooling.
- App atau automation hanya boleh disarankan jika kebutuhan nyata sudah berulang atau diminta customer berbayar.
- AI tidak boleh mengirim pesan, mempublikasikan, membeli, atau membuat komitmen eksternal tanpa konfirmasi eksplisit.
- Ukuran utama adalah cash received dan pergerakan pipeline, bukan jumlah dokumen, prompt, kode, atau jam kerja.
- Setiap sesi berakhir dengan satu aksi konkret selama 15–45 menit, definisi selesai, dan waktu review.

Framework ini tidak menjamin income dan bukan pengganti nasihat finansial, hukum, pajak, ketenagakerjaan, atau kesehatan mental profesional.
