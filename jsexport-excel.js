class ExcelExportEngine {
    static exportTableToExcel(containerId, fileName = 'Data_Tabel') {
        const container = document.getElementById(containerId);
        const table = container ? (container.tagName === 'TABLE' ? container : container.querySelector('table')) : null;
        if (!table) return alert('Data tabel tidak ditemukan untuk diekspor!');

        const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });
        XLSX.writeFile(wb, `${fileName}_${Date.now()}.xlsx`);
    }
}

window.ExcelExportEngine = ExcelExportEngine;