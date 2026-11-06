class PDFExportEngine {
    static exportToPDF(elementId, fileName = 'Dokumen_Smart_Teacher') {
        const element = document.getElementById(elementId);
        if (!element) return alert('Elemen dokumen tidak ditemukan!');

        const opt = {
            margin: [10, 15, 15, 15],
            filename: `${fileName}_${Date.now()}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    }
}

window.PDFExportEngine = PDFExportEngine;