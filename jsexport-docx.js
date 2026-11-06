class DOCXExportEngine {
    static exportToWord(elementId, fileName = 'Dokumen_Smart_Teacher') {
        const element = document.getElementById(elementId);
        if (!element) return alert('Elemen tidak ditemukan!');

        const html = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'><style>body{font-family:Arial;font-size:11pt;}table{width:100%;border-collapse:collapse;}td,th{border:1px solid #000;padding:5px;}</style></head>
            <body>${element.innerHTML}</body></html>
        `;

        const blob = new Blob(['\ufeff' + html], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}_${Date.now()}.doc`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

window.DOCXExportEngine = DOCXExportEngine;