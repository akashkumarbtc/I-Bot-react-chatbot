import React from 'react';

const PDFPrinter = ({ file }) => {
  const print = () => {
    const pdfFrame = document.createElement('iframe');
    pdfFrame.style.visibility = 'hidden';
    pdfFrame.src = file;

    document.body.appendChild(pdfFrame);

    pdfFrame.contentWindow.focus();
    pdfFrame.contentWindow.print();
  };
  return (
    <i className="fas fa-print clickable fa-2x" onClick={print} title="download" />
  );
};

export default PDFPrinter;
