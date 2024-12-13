const PDFDocument = require('pdfkit');
const fs = require('fs');

function createPDF(content, outputPath) {
    const doc = new PDFDocument();

    doc.pipe(fs.createWriteStream(outputPath));

    doc.fontSize(12).text(content, {
        align: 'left',
    });

    doc.end();
}

module.exports = createPDF;