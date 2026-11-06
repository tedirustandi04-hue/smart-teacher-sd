class AIEngine {
    static generateTP(cpContent, count = 3) {
        return [
            `Menganalisis dan menjelaskan konsep utama dari: "${cpContent.substring(0, 40)}..." secara kontekstual.`,
            `Mengidentifikasi dan menerapkan prinsip dasar pembelajaran melalui diskusi kelompok.`,
            `Merefleksikan dan menyajikan hasil pemahaman dalam bentuk karya sederhana.`
        ].slice(0, count);
    }
}

window.AIEngine = AIEngine;