# Instruksi Agent — boimthinks.github.io

Project ini adalah website personal Boim (`boimthinks`) yang dibangun menggunakan Astro JS, Tailwind CSS, dan difokuskan pada portofolio web nyata, blog teknis seputar vibe coding, AI Agent (OpenCode), serta model AI (Gemini & DeepSeek).

## Sumber Pengetahuan Tunggal

- **`SUMBER-PENGETAHUAN.md`** di root adalah sumber kebenaran tunggal data profil, daftar portofolio, stack teknis, dan aturan konten.

## Tech Stack & Perintah

- **Framework**: Astro JS (v5/v7 Content Layer)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Navigasi**: Astro View Transitions (`ClientRouter`)
- **Perintah Dev**: `npm run dev`
- **Perintah Build**: `npm run build`
- **Perintah Preview**: `npm run preview`

## Konvensi Project

1. Bahasa komunikasi dan artikel blog wajib **Bahasa Indonesia**.
2. Tema visual: **Dark mode**, nuansa high-tech / neon cyan subtle, minimalis & bersih.
3. Seluruh penambahan tulisan blog dilakukan di `src/content/blog/` dan didaftarkan di `SUMBER-PENGETAHUAN.md`.
4. Setiap perubahan harus lolos verifikasi build (`npm run build`).
