import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {  Document, Page } from 'react-pdf';
import ControlPanel from "./ControlPanel";
import { pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FormContainer = styled.div`
  width:100%;
  box-shadow: 0px 0px 50px 2px rgb(212, 209, 209);
  // background-color: #c9deee;
`;

const PdfFormDisplay = ({ pdf }) => {
  const [scale, setScale] = useState(1.2);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // const [pdfFile, SetPdfFile] = useState(pdf);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll(
    '.react-pdf__Page__textContent'
  );
  textLayers.forEach((layer) => {
    const { style } = layer;
    style.top = '0';
    style.left = '0';
    style.transform = '';
  });
}

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
            <Document file={pdf}  onLoadSuccess={onDocumentLoadSuccess}>
              <Page height="600" pageNumber={pageNumber} scale={scale} onLoadSuccess={removeTextLayerOffset} />
            </Document>
          </section>
        </>
      {/* )} */}
    </FormContainer>
  );
};

export default PdfFormDisplay;
