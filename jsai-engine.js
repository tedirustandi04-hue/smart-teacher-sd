// ==========================================
    // LOGIKA GENERATOR KELOMPOK D
    // ==========================================

    static generateFollowUp(params) {
        const { topic, subject, classLevel, passRate } = params;
        
        return {
            remedial: {
                materiRemedial: `Peningkatan Pemahaman Konsep Inti: ${topic}`,
                metodeRemedial: "Bimbingan Perorangan / Kelompok Kecil dan Penjelasan Ulang Menggunakan Media Konkret",
                bentukKegiatan: [
                    `Menjelaskan kembali bagian-bagian sulit pada materi ${topic} dengan contoh kontekstual.`,
                    `Mengerjakan ulang 3-5 soal asesmen yang tergolong indikator daya pembeda rendah.`
                ],
                targetPeserta: `Siswa dengan nilai di bawah Kriteria Ketercapaian Tujuan Pembelajaran (KKTP).`
            },
            pengayaan: {
                materiPengayaan: `Penerapan HOTS dan Studi Kasus Terapan: ${topic}`,
                metodePengayaan: "Penugasan Proyek Mandiri & Tutoring Sebaya (Peer Tutoring)",
                bentukKegiatan: [
                    `Menjadi tutor sebaya untuk membantu teman dalam kelompok remedial.`,
                    `Membuat poster digital / bagan alur sederhana tentang aplikasi ${topic} dalam kehidupan sehari-hari.`
                ],
                targetPeserta: `Siswa yang telah mencapai atau melampaui KKTP.`
            },
            refleksiGuru: {
                keberhasilan: `Sebagian besar siswa (${passRate}%) mampu memahami konsep dasar ${topic} dengan baik melalui aktivitas diskusi kelompok.`,
                kendala: `Beberapa siswa masih mengalami kesulitan pada indikator soal yang membutuhkan penalaran kritis (C4-C6).`,
                rencanaPerbaikan: `Pada pertemuan berikutnya, perbanyak simulasi visual/media peraga konkret dan berikan scaffolding yang lebih bertahap.`
            }
        };
    }