import React, { useState } from "react";
import styled from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import ControlPanel from "./ControlPanel";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const FormContainer = styled.div`
  width:100%;
`;

const PdfFormDisplay = ({ pdf }) => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // const [pdfFile, SetPdfFile] = useState(pdf);


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
// const form = () =>{
//   if(id===1){
//     console.log("check");
//     return {ISR1Vanilla}
//   }
// }

  return (
    <FormContainer>
      {/* {pdf && ( */}
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
              pdffile = {pdf}
            />
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} scale={scale} />
            </Document>
          </section>
        </>
      {/* )} */}
    </FormContainer>
  );
};

export default PdfFormDisplay;
