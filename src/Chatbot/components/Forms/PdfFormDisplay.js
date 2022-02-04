import React, { useState } from "react";
import styled from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import ControlPanel from "./ControlPanel";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const FormContainer = styled.div`
  border: 1px solid black;
  color: black;
  text-align: left;
`;

const PdfFormDisplay = ({ pdf }) => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdffile] = useState(pdf);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {pdffile && (
        <>
          <section
            id="pdf-section"
            className="d-flex flex-column align-items-center w-100"
          >
            <ControlPanel
              scale={scale}
              setScale={setScale}
              numPages={numPages}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              file={pdf}
            />
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} scale={scale} />
            </Document>
          </section>
        </>
      )}
    </div>
  );
};

export default PdfFormDisplay;
